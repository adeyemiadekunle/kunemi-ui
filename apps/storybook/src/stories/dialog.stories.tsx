import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
  Input,
  Label,
} from "@kunemi-ui/ui";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

export const Default = () => (
  <div className="p-6">
    <Dialog>
      <DialogTrigger render={<Button>Open Dialog</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile settings. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="Adekunle Adeyemi" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="adekunle@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  </div>
);
