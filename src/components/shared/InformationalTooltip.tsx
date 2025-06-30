import type React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
interface InformationalTooltipProps {
  className?: string;
  message: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const InformationalTooltip = ({
  className,
  message,
  onClick,
  children,
}: InformationalTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger onClick={onClick}>{children}</TooltipTrigger>
      <TooltipContent className={className}>
        <p>{message}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default InformationalTooltip;
