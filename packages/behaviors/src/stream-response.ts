import * as React from "react";

export type StreamStatus = "idle" | "queued" | "streaming" | "done" | "error" | "cancelled";

export interface UseStreamResponseOptions {
  onChunk?: (chunk: string) => void;
  onFinish?: (fullText: string) => void;
  onError?: (error: Error) => void;
  throttleLiveIntervalMs?: number;
}

export function useStreamResponse(options: UseStreamResponseOptions = {}) {
  const { onChunk, onFinish, onError, throttleLiveIntervalMs = 400 } = options;

  const [status, setStatus] = React.useState<StreamStatus>("idle");
  const [content, setContent] = React.useState("");
  const [liveAnnouncement, setLiveAnnouncement] = React.useState("");
  const [errorState, setErrorState] = React.useState<Error | null>(null);

  const lastLiveUpdateRef = React.useRef(0);
  const pendingBufferRef = React.useRef("");
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const flushLiveBuffer = React.useCallback(() => {
    const toFlush = pendingBufferRef.current;
    if (toFlush) {
      pendingBufferRef.current = "";
      lastLiveUpdateRef.current = Date.now();
      setLiveAnnouncement((prev) => prev + toFlush);
    }
  }, []);

  const appendChunk = React.useCallback(
    (chunk: string) => {
      setStatus("streaming");
      setContent((prev) => prev + chunk);
      pendingBufferRef.current += chunk;
      onChunk?.(chunk);

      const hasSentenceBoundary = /[.!?\n]/.test(chunk);
      const now = Date.now();

      if (lastLiveUpdateRef.current === 0) {
        lastLiveUpdateRef.current = now;
      }

      const elapsed = now - lastLiveUpdateRef.current;

      if (hasSentenceBoundary || elapsed >= throttleLiveIntervalMs) {
        if (timerRef.current) clearTimeout(timerRef.current);
        flushLiveBuffer();
      } else if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          timerRef.current = null;
          flushLiveBuffer();
        }, throttleLiveIntervalMs - elapsed);
      }
    },
    [onChunk, throttleLiveIntervalMs, flushLiveBuffer]
  );

  const finish = React.useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    flushLiveBuffer();
    setStatus("done");
    setContent((current) => {
      onFinish?.(current);
      return current;
    });
  }, [flushLiveBuffer, onFinish]);

  const cancel = React.useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    flushLiveBuffer();
    setStatus("cancelled");
  }, [flushLiveBuffer]);

  const fail = React.useCallback(
    (err: Error | string) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      flushLiveBuffer();
      const errorObj = typeof err === "string" ? new Error(err) : err;
      setErrorState(errorObj);
      setStatus("error");
      onError?.(errorObj);
    },
    [flushLiveBuffer, onError]
  );

  const reset = React.useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    pendingBufferRef.current = "";
    lastLiveUpdateRef.current = 0;
    setStatus("idle");
    setContent("");
    setLiveAnnouncement("");
    setErrorState(null);
  }, []);

  const getLiveRegionProps = React.useCallback(
    () => ({
      role: "status" as const,
      "aria-live": "polite" as const,
      "aria-atomic": false,
      "aria-busy": status === "streaming" || status === "queued",
    }),
    [status]
  );

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return {
    status,
    content,
    liveAnnouncement,
    error: errorState,
    appendChunk,
    finish,
    cancel,
    fail,
    reset,
    getLiveRegionProps,
  };
}
