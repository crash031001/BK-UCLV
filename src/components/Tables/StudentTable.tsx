import { cn } from "@/lib/utils";
import type { StudentType } from "@/types/StudentType";
import Pagination from "../shared/Pagination";
import { StudentDetailDialog } from "../Dialogs/Student/StudentDetailsDialog";
import { StudentDeleteDialog } from "../Dialogs/Student/StudentDeleteDialog";
import StudentEditDialog from "../Dialogs/Student/StudentEditDialog";
import { useState } from "react";
import InformationalTooltip from "../shared/InformationalTooltip";
interface StudentTableProps {
  loadData: () => void;
  className?: string;
  students?: StudentType[];
  setStudents: React.Dispatch<React.SetStateAction<StudentType[]>>;
}

const StudentTable = ({
  className,
  students = [],
  setStudents,
  loadData,
}: StudentTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const totalPages = Math.ceil(students.length / studentsPerPage);
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentType | null>(
    null
  );

  const handleView = (student: StudentType) => {
    setSelectedStudent(student);
    setViewDialogOpen(true);
  };

  const handleEdit = (student: StudentType) => {
    setSelectedStudent(student);
    setEditDialogOpen(true);
  };

  const handleDelete = (student: StudentType) => {
    setSelectedStudent(student);
    setDeleteDialogOpen(true);
  };
  return (
    <section>
      <div
      className={cn("bg-white rounded-lg shadow-sm overflow-hidden", className)}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-uclv-light-blue w-full">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Nombre(s) y apellidos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Carnet de indentidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Facultad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Carrera
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Año
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Edificio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Habitación
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody
            className="bg-white divide-y divide-gray-200"
            id="students-table-body"
          >
            {currentStudents.map((stud) => (
              <tr key={stud.ci} className="hover:bg-uclv-light-blue hover:shadow-md duration-100 transition-all">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-uclv-light-blue flex items-center justify-center text-uclv-blue font-bold">
                      {stud.nombre[0].concat(stud.apellidos[0])}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {stud.nombre} {stud.apellidos}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stud.ci}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stud.facultad}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stud.carrera}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stud.anho}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stud.edificio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stud.cuarto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-4">
                    <InformationalTooltip
                      message="Editar estudiante"
                      onClick={() => handleEdit(stud)}
                    >
                      <i className="fas fa-edit size-4 text-blue-600 text-lg hover:text-blue-400 edit-student-btn cursor-pointer"></i>
                    </InformationalTooltip>

                    <InformationalTooltip
                      message="Eliminar estudiante"
                      onClick={() => handleDelete(stud)}
                    >
                      <i className="fas fa-trash-alt size-4 text-red-600 text-lg hover:text-red-400 delete-student-btn cursor-pointer"></i>
                    </InformationalTooltip>

                    <InformationalTooltip
                      message="Ver estudiante"
                      onClick={() => handleView(stud)}
                    >
                      <i className="fas fa-eye size-4 text-purple-600 text-lg hover:text-purple-400 view-details-btn cursor-pointer"></i>
                    </InformationalTooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {selectedStudent && (
            <>
              <StudentDetailDialog
                student={selectedStudent}
                open={viewDialogOpen}
                onOpenChange={setViewDialogOpen}
              />
              <StudentDeleteDialog
                updateList={setStudents}
                studentsList={students}
                student={selectedStudent}
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
              />
              <StudentEditDialog
                updateList={loadData}
                student={selectedStudent}
                open={editDialogOpen}
                onOpenChange={setEditDialogOpen}
              />
            </>
          )}
        </table>
      </div>
    </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </section>
  );
};

export default StudentTable;
