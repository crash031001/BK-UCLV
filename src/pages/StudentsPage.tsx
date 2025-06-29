import AddBtn from "@/components/shared/AddBtn";
import { PageTitle } from "@/components/shared/PageTitle";
import StudentSearchFilters from "@/components/Filters/StudentSearchFilters";
import StudentTable from "@/components/Tables/StudentTable";
import { useState, useEffect } from "react";
import StudentAddDialog from "@/components/Dialogs/StudentAddDialog";
import type { StudentType } from "@/types/StudentType";
import { getEstudiantes } from "@/utils/services/StudentServices";

const StudentsPage = () => {

  const [students, setStudents] = useState<StudentType[]>([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const loadData = async() => {
    const response = await getEstudiantes()
    if (response) {
  		setStudents(response.data);
    }
	};
  const handleAdd = () => {
    setAddDialogOpen(true);
  };
  useEffect(() => {
		loadData();
	}, []);

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
      <StudentTable students={students} setStudents={setStudents} loadData={loadData} />
        <StudentAddDialog
          updateList={loadData}
          open={addDialogOpen}
          onOpenChange={setAddDialogOpen}
        />
    </main>
  );
};

export default StudentsPage;
