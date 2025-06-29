import { cn } from "@/lib/utils";
import type React from "react";

interface NormalBtnProps {
  text?: string;
  children?: React.ReactNode;
  id?: string;
  classname?: string;
  type?:"button" | "submit" | "reset"
}

const NormalBtn = ({ text, children, id, classname,type = "button" }: NormalBtnProps) => {
  return (
    <div className="flex items-end">
      <button
        type={type}
        id={id}
        className={cn(
          "w-full cursor-pointer bg-uclv-blue hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200",
          classname
        )}
      >
        {children}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default NormalBtn;
