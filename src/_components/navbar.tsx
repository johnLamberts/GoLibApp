import React from "react";
import MobileSidebar from "./mobile-sidebar";
import NavbarItems from "./navbar-items";
import useConfig from "@/hooks/useConfig";

export default function Navbar() {
  const [config] = useConfig();

  console.log(config);
  return (
    <>
      <div className={`p-4 h-full flex items-center shadow-sm relative`}>
        <MobileSidebar />
        <NavbarItems />
      </div>
    </>
  );
}
