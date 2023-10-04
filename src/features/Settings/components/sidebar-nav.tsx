import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    path: string;
    title: string;
  }[];
}

export default function SidebarNav({
  className,
  items,
  ...props
}: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            location.pathname === item.path
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
