import type React from "react";

interface PageTitleProps {
  text: string;
  children: React.ReactNode;
}

export const PageTitle = ({ text, children }: PageTitleProps) => {
  return (
    <h1 className="text-2xl font-bold text-uclv-dark">
      {children}
      <span>{text}</span>
    </h1>
  );
};
