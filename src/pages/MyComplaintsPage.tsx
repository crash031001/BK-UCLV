import ComplaintsAddDialog from "@/components/Dialogs/Complaint/ComplaintsAddDialog";
import AddBtn from "@/components/shared/AddBtn";
import NoData from "@/components/shared/NoData";
import { PageTitle } from "@/components/shared/PageTitle";
import MyComplaintsTable from "@/components/Tables/MyComplaintsTable";
import type { ComplaintType } from "@/types/ComplaintType";
import { getMyComplaints } from "@/utils/services/ComplaintsServices";
import { useEffect, useState } from "react";

const MyComplaintsPage = () => {
  const [complaints, setComplaints] = useState<ComplaintType[]>([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const loadData = async () => {
    const response = await getMyComplaints();
    if (response) {
      console.log(response.data);
      setComplaints(response.data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  const handleAdd = () => {
    setAddDialogOpen(true)
  };
  return (
    <main className="px-6 pt-8">
      <div className="flex justify-between items-center mb-6">
        <PageTitle text="Mis Quejas Registradas">
          <i className="fas fa-list text-uclv-blue mr-2"></i>
        </PageTitle>
        <AddBtn text="Nueva Queja" onClick={() => handleAdd()}>
          <i className="fas fa-plus mr-1"></i>
        </AddBtn>
      </div>
      <p className="text-uclv-dark mb-4">
        <i className="fas fa-info-circle mr-1"></i>Recuerda! Solo se pueden
        subir tres quejas diariamente.
      </p>
      {complaints?.length > 0 ? (
        <MyComplaintsTable
          loadData={loadData}
          complaints={complaints}
          setComplaints={setComplaints}
        />
      ) : (
        <NoData message="No tienes quejas registradas" />
      )}
      <ComplaintsAddDialog updateList={loadData} onOpenChange={setAddDialogOpen} open={addDialogOpen}/>
    </main>
  );
};

export default MyComplaintsPage;
