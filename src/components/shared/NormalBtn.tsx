import { cn } from "@/lib/utils";
import type React from "react";

interface NormalBtnProps {
  onClick?:()=>void
  text?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  type?:"button" | "submit" | "reset"
}

const NormalBtn = ({ text, children, id, className,type = "button",onClick }: NormalBtnProps) => {
  return (
    <div className="flex items-end">
      <button
        onClick={onClick}
        type={type}
        id={id}
        className={cn(
          "w-full cursor-pointer bg-uclv-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200",
          className
        )}
      >
        {children}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default NormalBtn;
