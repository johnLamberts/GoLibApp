import { Separator } from "@/components/ui/separator";
import SidebarNav from "@/features/Settings/components/sidebar-nav";
import { Outlet } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Author",
    path: "/maintenance-settings/author",
  },
  {
    title: "Genres",
    path: "/maintenance-settings/genre",
  },
  {
    title: "Grade Level",
    path: "/maintenance-settings/grade-level",
  },
  {
    title: "",
    path: "/maintenance-settings/",
  },
];
export default function Maintenance() {
  return (
    // div className="hidden space-y-6 p-10 pb-16 md:block"
    <>
      <div className="space-y-0.5">
        <h3 className="text-lg font-medium"> Maintenance Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your inputs settings and set data preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>

        <div className="flex-1 flex flex-col lg:max-w-6xl ">
          <Separator className="my-6 md:hidden" />
          <div className="mx-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
