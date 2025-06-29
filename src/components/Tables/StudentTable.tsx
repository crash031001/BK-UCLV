import { cn } from "@/lib/utils";
import type { StudentType } from "@/types/StudentType";
import { useEffect, useState } from "react";
import Pagination from "../shared/Pagination";
import { StudentDetailDialog } from "../Dialogs/StudentDetailsDialog";
import { StudentDeleteDialog } from "../Dialogs/StudentDeleteDialog";
import { getEstudiantes } from "@/utils/getters";
import StudentEditDialog from "../Dialogs/StudentEditDialog";

interface StudentTableProps {
	className?: string;
}

const StudentTable = ({ className }: StudentTableProps) => {
	const [students, setStudents] = useState<StudentType[]>([]);
	const list: StudentType[] = estudiantes;
	const [currentPage, setCurrentPage] = useState(1);
	const studentsPerPage = 6;
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
  const [students, setStudents] = useState<StudentType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 6;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const totalPages = Math.ceil(students.length / studentsPerPage);
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  // const [editDialogOpen, setEditDialogOpen] = useState(false);
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
	const loadData = async() => {
    const response = await getEstudiantes()
    if (response) {
      console.log(response.data)
  		setStudents(response.data);
    }
	};
	useEffect(() => {
		loadData();
	}, []);

	return (
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
							<tr key={stud.ci}>
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
									<div className="flex space-x-2">
										<button
											className="text-blue-600 hover:text-blue-900 edit-student-btn"
											onClick={() => handleEdit(stud)}
										>
											<i className="fas fa-edit"></i>
										</button>
										<button
											className="text-red-600 hover:text-red-900 delete-student-btn"
											onClick={() => handleDelete(stud)}
										>
											<i className="fas fa-trash-alt"></i>
										</button>
										<button
											className="text-purple-600 hover:text-purple-900 view-details-btn"
											onClick={() => handleView(stud)}
										>
											<i className="fas fa-eye"></i>
										</button>
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
								student={selectedStudent}
								open={deleteDialogOpen}
								onOpenChange={setDeleteDialogOpen}
							/>
							<StudentEditDialog
								student={selectedStudent}
								open={editDialogOpen}
								onOpenChange={setEditDialogOpen}
							/>
						</>
					)}
				</table>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				paginate={(pageNumber) => setCurrentPage(pageNumber)}
			/>
		</div>
	);
};

export default StudentTable;
