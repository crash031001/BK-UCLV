import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

interface SideBarLinkProps {
  to: string;
  children: React.ReactNode;
  text: string;
  className?: string
}

const SideBarLink = ({ to, children, text,className }: SideBarLinkProps) => {
  return (
    <Link to={to} className={cn("info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200",className)}>
      <span>
        {children}
        {text}
      </span>
    </Link>
  );
};

export default SideBarLink;
