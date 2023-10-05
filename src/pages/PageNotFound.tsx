import { Button } from "@/components/ui/button";
import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="flex items-center justify-center max-h-full flex-col mt-56">
        <div>PageNotFound</div>
        <NavLink to={"/"}>
          <Button variant={"outline"}>Go back</Button>
        </NavLink>
      </div>
    </>
  );
}
