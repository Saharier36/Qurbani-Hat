"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();
  
  const isActive = href === pathname
  return (
    <Link
      href={href}
      className={`${isActive ? "w-30 bg-orange-600 text-white rounded-full px-4 py-1 text-center font-medium shadow-md" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
