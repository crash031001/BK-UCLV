import NoData from "@/components/shared/NoData";
import { PageTitle } from "@/components/shared/PageTitle";
import VisibleComplaintsList from "@/components/VisibleComplaints/VisibleComplaintsList";
import type { ComplaintType } from "@/types/ComplaintType";
import { getVisibleComplaints } from "@/utils/services/ComplaintsServices";
import { useEffect, useState } from "react";

const VisibleComplaintsPage = () => {
  const [complaints, setComplaints] = useState<ComplaintType[]>([]);
  const loadData = async () => {
    const response = await getVisibleComplaints();
    if (response) {
      console.log(response.data);
      setComplaints(response.data);
      console.log(complaints);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <main className="px-6 pt-8">
      <div className="flex justify-between items-center mb-6">
        <PageTitle text="Quejas Visibles">
          <i className="fas fa-eye text-uclv-blue mr-2"></i>
        </PageTitle>
      </div>
      {complaints?.length > 0 ? (
        <VisibleComplaintsList complaints={complaints} />
      ) : (
        <NoData message="No hay quejas visibles" />
      )}
    </main>
  );
};

export default VisibleComplaintsPage;
