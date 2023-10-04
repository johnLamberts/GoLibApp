import { Button } from "@/components/ui/button";
import { useTheme } from "@/themes/themes-provider";
import { LucideIcon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  title?: string;
}

export default function SidebarItem({
  icon: Icon,
  label,
  path,
}: SidebarItemProps) {
  const location = useLocation();

  const isActive =
    location.pathname === "/" ||
    location.pathname === path ||
    location.pathname.startsWith(`/${path}`);

  return (
    <>
      {/* <NavLink
        to={path}
        className={cn(
          "flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
          isActive
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={32}
            className={cn(
              "text-slate-500 ",
              isActive && "text-destructive-foreground"
            )}
          />
          {label}
        </div>
        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-current h-full transition-all ",
            isActive && "opacity-100"
          )}
        />
      </NavLink> */}
      <NavLink to={path}>
        <Button
          variant={isActive ? "secondary" : "ghost"}
          className="w-full justify-start m-1"
        >
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </NavLink>{" "}
    </>
  );
}

{
  /* <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Dashboard
                </h2>
                <div className="space-y-1">
                  <Button variant="secondary" className="w-full justify-start">
                 
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <NavLink to="/">Dashboard</NavLink>
                  </Button>

                </div>
              </div>
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Core
                </h2>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M21 15V6" />
                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                    </svg>
                    Student Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <circle cx="8" cy="18" r="4" />
                      <path d="M12 18V2l7 4" />
                    </svg>
                    Books Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M21 15V6" />
                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                    </svg>
                    Circulation
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Users Management
                  </Button>
        
                </div>
              </div>
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  General Settings
                </h2>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    User Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Maintenance
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Content Settings
                  </Button>
                </div>
              </div>
            </div> */
}
