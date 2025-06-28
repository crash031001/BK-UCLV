import { cn } from "@/lib/utils";
import type { StudentType } from "@/types/StudentType";
import { useEffect, useState } from "react";

interface StudentTableProps {
  className?: string;
}

const StudentTable = ({ className }: StudentTableProps) => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const list: StudentType[] = [
    {
      nombre: "Juan",
      apellidos: "Pérez",
      ci: "04010112345",
      facultad: "FMFC",
      carrera: "Ing. Informática",
      anho: "3ro",
      edificio: "Edificio C5",
      cuarto: "502",
      sexo: "Masculino",
      provincia: "Villa Clara",
      municipio: "Santa Clara",
      direccion: "Calle 12 #345",
      telefonoPersonal: "55512345",
      telefonoFamiliar: "58741659",
      enfermedades: "Asma",
      medicamentos: "Ketotifeno",
      aprovechamiento: "Alto",
      cadeteFAR: "No",
      cadeteMININT: "No",
      militante: "No",
      proceso: "Ninguno",
    },
    {
      nombre: "María",
      apellidos: "García",
      ci: "02020254321",
      facultad: "FEC",
      carrera: "Ing. Civil",
      anho: "2do",
      edificio: "Edificio A3",
      cuarto: "301",
      sexo: "Femenino",
      provincia: "La Habana",
      municipio: "Playa",
      direccion: "Avenida 7 #1208",
      telefonoPersonal: "52897634",
      telefonoFamiliar: "78345621",
      enfermedades: "Ninguna",
      medicamentos: "Ninguno",
      aprovechamiento: "Medio",
      cadeteFAR: "No",
      cadeteMININT: "No",
      militante: "No",
      proceso: "Ninguno",
    },
    {
      nombre: "Carlos",
      apellidos: "Rodríguez",
      ci: "03030398765",
      facultad: "FEC",
      carrera: "Arquitectura",
      anho: "4to",
      edificio: "Edificio B2",
      cuarto: "204",
      sexo: "Masculino",
      provincia: "Matanzas",
      municipio: "Varadero",
      direccion: "Calle 34 #56",
      telefonoPersonal: "54321098",
      telefonoFamiliar: "54321099",
      enfermedades: "Alergias estacionales",
      medicamentos: "Antihistamínicos",
      aprovechamiento: "Alto",
      cadeteFAR: "Sí",
      cadeteMININT: "No",
      militante: "No",
      proceso: "Ninguno",
    },
    {
      nombre: "Laura",
      apellidos: "Fernández",
      ci: "05050545678",
      facultad: "FMFC",
      carrera: "Medicina",
      anho: "1ro",
      edificio: "Edificio D1",
      cuarto: "105",
      sexo: "Femenino",
      provincia: "Cienfuegos",
      municipio: "Cienfuegos",
      direccion: "Calle 8 #23",
      telefonoPersonal: "56781234",
      telefonoFamiliar: "56781235",
      enfermedades: "Ninguna",
      medicamentos: "Ninguno",
      aprovechamiento: "Bajo",
      cadeteFAR: "No",
      cadeteMININT: "No",
      militante: "No",
      proceso: "Ninguno",
    },
    {
      nombre: "José",
      apellidos: "Martínez",
      ci: "06060678901",
      facultad: "FEC",
      carrera: "Ing. Eléctrica",
      anho: "5to",
      edificio: "Edificio A1",
      cuarto: "401",
      sexo: "Masculino",
      provincia: "Camagüey",
      municipio: "Camagüey",
      direccion: "Calle 45 #67",
      telefonoPersonal: "59876543",
      telefonoFamiliar: "59876544",
      enfermedades: "Hipertensión",
      medicamentos: "Enalapril",
      aprovechamiento: "Medio",
      cadeteFAR: "No",
      cadeteMININT: "Sí",
      militante: "Sí",
      proceso: "Ninguno",
    },
    {
      nombre: "Ana",
      apellidos: "López",
      ci: "07070723456",
      facultad: "FMFC",
      carrera: "Bioquímica",
      anho: "3ro",
      edificio: "Edificio C3",
      cuarto: "302",
      sexo: "Femenino",
      provincia: "Santiago de Cuba",
      municipio: "Santiago de Cuba",
      direccion: "Calle 9 #12",
      telefonoPersonal: "51234567",
      telefonoFamiliar: "51234568",
      enfermedades: "Ninguna",
      medicamentos: "Ninguno",
      aprovechamiento: "Alto",
      cadeteFAR: "No",
      cadeteMININT: "No",
      militante: "No",
      proceso: "Ninguno",
    },
  ];
  const loadData = () => {
    setStudents(list);
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
            {students.map((stud) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-uclv-light-blue flex items-center justify-center text-uclv-blue font-bold">
                      {stud.nombre[0].concat(stud.apellidos[0])}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {stud.nombre}{" "}{stud.apellidos}
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
                    <button className="text-blue-600 hover:text-blue-900 edit-student-btn">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 delete-student-btn"
                      data-student-id="1"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <button
                      className="text-purple-600 hover:text-purple-900 view-details-btn"
                      data-details="details-1"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* <!-- Detalles de Estudiante 1 (oculta inicialmente) --> */}
            <tr id="details-1" className="hidden bg-blue-50">
              <td className="px-6 py-4">
                <div className="font-medium text-gray-900 mb-2">
                  Detalles del estudiante:
                </div>
                <div className="text-sm text-gray-700 bg-white p-3 rounded border border-blue-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p>
                        <strong>Sexo:</strong> Masculino
                      </p>
                      <p>
                        <strong>Provincia:</strong> Villa Clara
                      </p>
                      <p>
                        <strong>Municipio:</strong> Santa Clara
                      </p>
                      <p>
                        <strong>Dirección:</strong> Calle 12 #345
                      </p>
                      <p>
                        <strong>Teléfono personal:</strong> 55512345
                      </p>
                      <p>
                        <strong>Teléfono de algún familiar:</strong> 58741659
                      </p>
                      <p>
                        <strong>Enfermedades que padece:</strong> Asma
                      </p>
                      <p>
                        <strong>Medicamentos que consume:</strong> Ketotifeno
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Aprovechamiento docente:</strong> Alto
                      </p>
                      <p>
                        <strong>Cadete de las FAR:</strong> No
                      </p>
                      <p>
                        <strong>Cadete del MININT:</strong> No
                      </p>
                      <p>
                        <strong>Militante de la UJC:</strong> No
                      </p>
                      <p>
                        <strong>Proceso disciplinario</strong> Ninguno
                      </p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
