import AddBtn from "@/components/shared/AddBtn";
import { PageTitle } from "@/components/shared/PageTitle";
import StudentSearchFilters from "@/components/SideBar/Filters/StudentSearchFilters";
import StudentTable from "@/components/Tables/StudentTable";

const StudentsPage = () => {
  return (
    <main className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <PageTitle text="Listado de Estudiantes">
          <i className="fas fa-users text-uclv-blue mr-2"></i>
        </PageTitle>
        <AddBtn text="Añadir Estudiante">
          <i className="fas fa-plus mr-1"></i>
        </AddBtn>
      </div>

      <StudentSearchFilters />

      <StudentTable />
    </main>
  );
};

export default StudentsPage;
