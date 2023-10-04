import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerContent = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-zinc-950/60" />

    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t-[10px] bg-background",
        className
      )}
      {...props}
    >
      <div className="absolute left-1/2 top-3 h-2 rounded-full bg-muted w-[100px] translate-x-[-50%]" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>
));

DrawerContent.displayName = "DrawerContent";

export { DrawerTrigger, DrawerContent };
