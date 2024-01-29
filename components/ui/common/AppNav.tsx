"use client";

import Image from "next/image";
import React from "react";
import { Input } from "../input";

const AppNav = () => {
  return (
    <nav className="flex justify-between items-center p-2 border-b">
      <div className="flex space-x-4 items-center">
        {/* <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={70}
          className="h-8 pt-2 w-12"
        /> */}
        <img src="/logo.png" alt="logo" width={30} className="h-8 pt-2 w-12" />
        <Input placeholder="Search..." className="rounded-3xl" />
      </div>
      <div>
        <p>Login</p>
      </div>
    </nav>
  );
};

export default AppNav;
