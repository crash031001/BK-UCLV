import NormalBtn from "@/components/shared/NormalBtn";
import StudentFilterField from "./StudentFilterField";

const StudentSearchFilters = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4 mb-6">
      <form id="search-form">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StudentFilterField
            labelText="Nombre(s)"
            id="student-name-filter"
            placeholder="Ej. Manuel Alejandro"
          />
          <StudentFilterField
            labelText="Apellidos"
            id="student-lastname-filter"
            placeholder="Ej. Borges Guerra"
          />
          <StudentFilterField
            labelText="Carnet de Identidad"
            id="student-ci-filter"
            placeholder="Ej. 01102076651"
          />
          <NormalBtn text="Buscar">
            <i className="fas fa-search mr-1"></i>
          </NormalBtn>
        </div>
      </form>
    </div>
  );
};

export default StudentSearchFilters;
