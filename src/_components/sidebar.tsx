import Logo from "./logo";
import { cn } from "@/lib/utils";
import SidebarRoutes from "./sidebar-routes";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Sidebar() {
  return (
    <>
      <ScrollArea>
        <div className="h-full border-r flex flex-col shadow sm ">
          <div className="p-6">
            <Logo />
          </div>
          <div className="flex flex-col w-full">
            <div className={cn("pb-12")}>
              <SidebarRoutes />
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
