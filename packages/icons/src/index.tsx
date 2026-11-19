import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  title?: string;
}

export function createIcon(
  displayName: string,
  pathElements: React.ReactNode,
  defaultViewBox = "0 0 24 24"
) {
  const Component = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = 16, className = "", title, ...props }, ref) => {
      const hasAccessibleLabel = Boolean(title || props["aria-label"]);

      return (
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox={defaultViewBox}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role={hasAccessibleLabel ? "img" : "presentation"}
          aria-hidden={hasAccessibleLabel ? undefined : true}
          className={className}
          {...props}
        >
          {title && <title>{title}</title>}
          {pathElements}
        </svg>
      );
    }
  );

  Component.displayName = displayName;
  return Component;
}

export const CheckIcon = createIcon(
  "CheckIcon",
  <polyline points="20 6 9 17 4 12" />
);

export const ChevronDownIcon = createIcon(
  "ChevronDownIcon",
  <polyline points="6 9 12 15 18 9" />
);

export const ChevronUpIcon = createIcon(
  "ChevronUpIcon",
  <polyline points="18 15 12 9 6 15" />
);

export const ChevronRightIcon = createIcon(
  "ChevronRightIcon",
  <polyline points="9 18 15 12 9 6" />
);

export const ChevronLeftIcon = createIcon(
  "ChevronLeftIcon",
  <polyline points="15 18 9 12 15 6" />
);

export const XIcon = createIcon(
  "XIcon",
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
);

export const SunIcon = createIcon(
  "SunIcon",
  <>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </>
);

export const MoonIcon = createIcon(
  "MoonIcon",
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
);

export const AlertTriangleIcon = createIcon(
  "AlertTriangleIcon",
  <>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
);

export const InfoIcon = createIcon(
  "InfoIcon",
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </>
);

export const CheckCircleIcon = createIcon(
  "CheckCircleIcon",
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </>
);

export const XCircleIcon = createIcon(
  "XCircleIcon",
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </>
);

export const LoaderIcon = createIcon(
  "LoaderIcon",
  <>
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </>
);

export const SendIcon = createIcon(
  "SendIcon",
  <>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </>
);

export const BotIcon = createIcon(
  "BotIcon",
  <>
    <rect width="18" height="12" x="3" y="6" rx="2" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M12 2v4" />
    <path d="M2 12h1" />
    <path d="M21 12h1" />
  </>
);

export const SparklesIcon = createIcon(
  "SparklesIcon",
  <>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </>
);

export const CopyIcon = createIcon(
  "CopyIcon",
  <>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </>
);

export const SearchIcon = createIcon(
  "SearchIcon",
  <>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </>
);

export const ExternalLinkIcon = createIcon(
  "ExternalLinkIcon",
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
);

export const MenuIcon = createIcon(
  "MenuIcon",
  <>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </>
);

export const TrashIcon = createIcon(
  "TrashIcon",
  <>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </>
);
