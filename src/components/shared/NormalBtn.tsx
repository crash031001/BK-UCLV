import { cn } from "@/lib/utils";
import type React from "react";

interface NormalBtnProps {
  text?: string;
  children?: React.ReactNode;
  id?: string;
  classname?: string;
}

const NormalBtn = ({ text, children, id, classname }: NormalBtnProps) => {
  return (
    <div className="flex items-end">
      <button
        type="button"
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
