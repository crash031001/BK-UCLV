import AddBtn from "@/components/shared/AddBtn";
import { PageTitle } from "@/components/shared/PageTitle";
import StudentSearchFilters from "@/components/Filters/StudentSearchFilters";
import StudentTable from "@/components/Tables/StudentTable";
import { useState } from "react";
import StudentAddDialog from "@/components/Dialogs/StudentAddDialog";

const StudentsPage = () => {
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const handleAdd = () => {
    setAddDialogOpen(true);
  };
  return (
    <main className="px-6 pt-8">
      <div className="flex justify-between items-center mb-6">
        <PageTitle text="Listado de Estudiantes">
          <i className="fas fa-users text-uclv-blue mr-2"></i>
        </PageTitle>
        <AddBtn text="Añadir Estudiante" onClick={() => handleAdd()}>
          <i className="fas fa-plus mr-1"></i>
        </AddBtn>
      </div>

      <StudentSearchFilters />
      <StudentTable />
        <StudentAddDialog
          open={addDialogOpen}
          onOpenChange={setAddDialogOpen}
        />
    </main>
  );
};

export default StudentsPage;
