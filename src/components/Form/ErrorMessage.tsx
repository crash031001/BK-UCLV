import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  className?: string;
  message: string | undefined;
}

const ErrorMessage = ({ className, message }: ErrorMessageProps) => {
  return <span className={cn("text-red-700 text-xs font-medium line-clamp-0",className)}>{message}</span>;
};

export default ErrorMessage;
