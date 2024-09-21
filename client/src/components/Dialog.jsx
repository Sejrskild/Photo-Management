import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "./theme-provider";

export default function SettingsDialog({ open, onOpenChange }) {
  const { theme, setTheme } = useTheme();

  const handleDarkModeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary">Settings</DialogTitle>
          <DialogDescription>
            Manage your application settings here.
          </DialogDescription>
        </DialogHeader>
        <div className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dark-mode" className="text-primary">
                Dark Mode
              </Label>
              <span className="text-sm text-muted-foreground">
                Toggle between light and dark themes
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch id="dark-mode" onCheckedChange={handleDarkModeToggle} />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
