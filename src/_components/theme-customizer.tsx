import useConfig from "@/hooks/useConfig";
import React, { useEffect, useState } from "react";
import { Drawer } from "vaul";
import {
  CheckIcon,
  Info,
  MoonIcon,
  Paintbrush,
  RotateCcw,
  SunIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ThemeWrapper } from "./theme-wrapper";
import { themes } from "@/registry/themes";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/themes/themes-provider";

export default function ThemeCustomizer() {
  // const [config, setConfig] = useConfig();

  // const { resolvedTheme: mode } = useTheme();

  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  return (
    <>
      <div className="flex items-center">
        <Drawer.Root>
          <DrawerTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Paintbrush className="mr-2 h-4 w-4" />
              Customize
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[85%] p-6 pt-10">
            <Customizer />
          </DrawerContent>
        </Drawer.Root>

        <div className="hidden md:flex items-center">
          {/* <div className="mr-2 hidden items-center space-x-0 5 lg:flex">
            {mounted ? (
              <>
                {["zinc", "rose", "blue", "green", "orange"].map((color) => {
                  const theme = themes.find((theme) => theme.name === color);

                  const isActive = config.theme === color;

                  if (!theme) return null;

                  return (
                    <Tooltip key={theme.name}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() =>
                            setConfig({
                              ...config,
                              theme: theme.name,
                            })
                          }
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                            isActive
                              ? "border-[--theme-primary]"
                              : "border-transparent"
                          )}
                          style={
                            {
                              "--theme-primary": `hsl(${
                                theme?.activeColor[
                                  mode === "dark" ? "dark" : "light"
                                ]
                              })`,
                            } as React.CSSProperties
                          }
                        >
                          <span
                            className={cn(
                              "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]"
                            )}
                          >
                            {" "}
                            {isActive && (
                              <CheckIcon className="h-4 w-4 text-white" />
                            )}
                          </span>

                          <span className="sr-only">{theme.label}</span>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent
                        align="center"
                        className="rounded-[0.5rem] bg-zinc-900 text-zinc-50"
                      >
                        {theme.label}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </>
            ) : (
              <div className="mr-1 flex items-center space-x-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
            )}
          </div> */}

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"ghost"}>
                <Paintbrush className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950"
            >
              <Customizer />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}

function Customizer() {
  const [config, setConfig] = useConfig();
  const [mounted, setMounted] = useState(false);
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeWrapper
      defaultTheme="zinc"
      className="flex flex-col space-y-4 md:space-y-6"
    >
      <div className="flex items-start">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            Customize
          </div>
          <div className="text-xs text-muted-foreground">
            Pick a style and color for your components.
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setConfig({
              ...config,
              theme: "zinc",
              radius: 0.5,
            });
          }}
        >
          <RotateCcw />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1 5">
          <div className="flex w-full items-center">
            <Label className="text-xs">Style</Label>
            <Popover>
              <PopoverTrigger>
                <Info className="ml-1 h-3 w-3" />
                <span className="sr-only">About styles</span>
              </PopoverTrigger>
              <PopoverContent
                className="space-y-3 rounded-[0.5rem] text-sm"
                side="right"
                align="start"
                alignOffset={-20}
              >
                <p className="font-medium">
                  What is the difference between the New York and Default style?
                </p>
                <p>
                  A style comes with its own set of components, animations,
                  icons and more.
                </p>
                <p>
                  The <span className="font-medium">Default</span> style has
                  larger inputs, uses lucide-react for icons and
                  tailwindcss-animate for animations.
                </p>
                <p>
                  The <span className="font-medium">New York</span> style ships
                  with smaller buttons and cards with shadows. It uses icons
                  from Radix Icons.
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => setConfig({ ...config, style: "default" })}
              className={cn(
                config.style === "default" && "border-2 border-primary"
              )}
            >
              Default
            </Button>
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => setConfig({ ...config, style: "new-york" })}
              className={cn(
                config.style === "new-york" && "border-2 border-primary"
              )}
            >
              New York
            </Button>
          </div>
        </div>
        <div className="space-y-1 5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = config.theme === theme.name;

              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    });
                  }}
                  className={cn(
                    "justify-start",
                    isActive && "border-2 border-primary"
                  )}
                  style={
                    {
                      "--theme-primary": `hsl(${
                        theme?.activeColor[mode === "dark" ? "dark" : "light"]
                      })`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                    )}
                  >
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name} />
              );
            })}
          </div>
        </div>
        <div className="space-y-1 5">
          <Label className="text-sx">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size={"sm"}
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                      "border-2 border-primary"
                  )}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1 5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary")}
                >
                  <SunIcon className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary")}
                >
                  <MoonIcon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}
