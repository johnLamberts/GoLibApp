// import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/themes/themes-provider";
// import { useTheme } from "next-themes";
// import { useTheme } from "@/themes/themes-provider";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-9 px-0">
            <SunIcon className="h-10 w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Button
        onClick={() => {
          console.log("light");
          setTheme("light");
        }}
      >
        <SunIcon className="h-10 w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        Light
      </Button>

      <Button
        onClick={() => {
          setTheme("dark");
          console.log("dark");
        }}
      >
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        Dark
      </Button> */}
    </>
  );
}
