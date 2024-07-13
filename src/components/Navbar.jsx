"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export default function Navbar() {
    const [active, setActive] = useState(null);
  return (
    <div className=" fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ">
      <Menu setActive={setActive} >
        <MenuItem   setActive={setActive} active={active} item="Skills" href={"/skills"} >
        </MenuItem>

        <MenuItem  setActive={setActive} active={active} item="Experience" >
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Open source</HoveredLink>
         <HoveredLink href="/interface-design">Hackathon</HoveredLink>
         <HoveredLink href="/interface-design">Contest</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem  setActive={setActive} active={active} item=" Project" >
      <div  className="flex flex-col space-y-4 text-sm"> 
        <HoveredLink href="/web-dev">Web Development</HoveredLink>
         <HoveredLink href="/interface-design">Machine Learning</HoveredLink>
         <HoveredLink href="/interface-design">DSA</HoveredLink>
         </div>
        </MenuItem>

        <MenuItem  setActive={setActive} active={active} item="Education" >
        </MenuItem>

        <MenuItem  setActive={setActive} active={active} item="Contact" >
        </MenuItem>

        

      </Menu>
    </div>
  )
}
