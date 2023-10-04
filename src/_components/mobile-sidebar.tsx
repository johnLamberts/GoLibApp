import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Sidebar from "./sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="my-2">
        <ScrollArea className=" h-full w-full">
          <Sidebar />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
