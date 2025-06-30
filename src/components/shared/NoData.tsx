import { cn } from "@/lib/utils";

interface NoDataProps {
  className?: string;
  message: string;
}

const NoData = ({ className, message }: NoDataProps) => {
  return (
    <div
      className={cn(
        "p-7 w-full text-center bg-uclv-light-blue font-medium shadow text-uclv-blue",
        className
      )}
    >
        <i className="size-6 text-lg mr-2 fas fa-info-circle"></i>
      {message}
    </div>
  );
};

export default NoData;
