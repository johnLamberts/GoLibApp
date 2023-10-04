import {
  Activity,
  ArchiveRestore,
  Blinds,
  BookOpenCheck,
  GitPullRequestClosed,
  GraduationCap,
  Layout,
  LayoutDashboard,
  UserCog,
  Users2,
} from "lucide-react";
import SidebarItem from "./sidebar-item";

const dashboardRoutes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "dashboard",
  },
];

const coreRoutes = [
  {
    icon: GraduationCap,
    label: "Student Management",
    path: "student-member",
  },
  {
    icon: BookOpenCheck,
    label: "Books Management",
    path: "books",
  },
  {
    icon: Users2,
    label: "Users Management",
    path: "users",
  },
  {
    icon: GitPullRequestClosed,
    label: "Circulation",
    path: "circulation",
  },
  {
    icon: Activity,
    label: "Activity Log",
    path: "activity-log",
  },
  {
    icon: ArchiveRestore,
    label: "Archive",
    path: "activity-log",
  },
];

const generalSettings = [
  {
    icon: UserCog,
    label: "User Settings",
    path: "user-settings",
  },
  {
    icon: Blinds,
    label: "Maintenance",
    path: "maintenance-settings",
  },
  {
    icon: Layout,
    label: "Content Settings",
    path: "content-settings",
  },
];

export default function SidebarRoutes() {
  return (
    <>
      {/* <div className="flex flex-col w-full"> */}

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-md font-light tracking-tight">
            {"Dashboard"}
          </h2>
          <div className="space-y-1">
            {dashboardRoutes.map((route) => (
              <SidebarItem
                key={route.path}
                icon={route.icon}
                label={route.label}
                path={route.path}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-md font-light tracking-tight">
            {"Main"}
          </h2>
          <div className="space-y-1">
            {coreRoutes.map((route) => (
              <SidebarItem
                key={route.path}
                icon={route.icon}
                label={route.label}
                path={route.path}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-md font-light tracking-tight">
            {"General Settings"}
          </h2>
          <div className="space-y-1">
            {generalSettings.map((route) => (
              <SidebarItem
                key={route.path}
                icon={route.icon}
                label={route.label}
                path={route.path}
              />
            ))}
          </div>
        </div>
      </div>
      {/*
       */}
      {/* </div> */}
    </>
  );
}
