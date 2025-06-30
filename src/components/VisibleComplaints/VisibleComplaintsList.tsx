import type { ComplaintType } from "@/types/ComplaintType";
import VisibleComplaintCard from "./VisibleComplaintCard";
import { cn } from "@/lib/utils";

interface VisibleComplaintsListProps {
  className?: string;
  complaints: ComplaintType[];
}

const VisibleComplaintsList = ({
  className,
  complaints,
}: VisibleComplaintsListProps) => {
  return (
    <div className={cn("space-y-4 overflow-y-auto max-h-150", className)}>
      {complaints?.map((c) => (
        <VisibleComplaintCard key={c.id} complaint={c} />
      ))}
    </div>
  );
};

export default VisibleComplaintsList;
