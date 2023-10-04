import { Input } from "@/components/ui/input";
import ModeToggle from "./mode-toggle";
import UserNav from "./user-nav";
import ThemeCustomizer from "./theme-customizer";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import { TooltipContent } from "@/components/ui/tooltip";

const navItemsToolTip = [
  {
    view: <UserNav />,
    content: "User Profile",
  },
  {
    view: <ModeToggle />,
    content: "Set Mode",
  },
  {
    view: <ThemeCustomizer />,
    content: "Customize Themes",
  },
];

export default function NavbarItems() {
  return (
    <>
      <div className="hidden md:block">
        <Input placeholder="Search here..." />
      </div>

      <div className="flex gap-x-2 ml-auto">
        {navItemsToolTip.map((item) => (
          <Tooltip>
            <TooltipTrigger>{item.view}</TooltipTrigger>
            <TooltipContent>{item.content}</TooltipContent>
          </Tooltip>
        ))}
        {/* <UserNav />
        <ModeToggle />
        <ThemeCustomizer /> */}
      </div>
    </>
  );
}
