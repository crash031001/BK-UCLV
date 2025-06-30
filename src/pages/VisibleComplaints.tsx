import { PageTitle } from "@/components/shared/PageTitle";
import VisibleComplaintsList from "@/components/VisibleComplaints/VisibleComplaintsList";

const VisibleComplaintsPage = () => {
  return (
    <main className="px-6 pt-8">
      <div className="flex justify-between items-center mb-6">
      <PageTitle text="Quejas Visibles">
            <i className="fas fa-eye text-uclv-blue mr-2"></i>
      </PageTitle>
        </div>
      <VisibleComplaintsList />
    </main>
  );
};

export default VisibleComplaintsPage;