import { cn } from "@/lib/utils";
import type { ComplaintType } from "@/types/ComplaintType";
import InformationalTooltip from "../shared/InformationalTooltip";
import { useState } from "react";
import { ComplaintDeleteDialog } from "../Dialogs/Complaint/ComplaintDeleteDialog";
interface MyComplaintsTableProps {
  className?: string;
  loadData: () => void;
  complaints: ComplaintType[];
  setComplaints: React.Dispatch<React.SetStateAction<ComplaintType[]>>;
}

const MyComplaintsTable = ({
  className,
  loadData,
  complaints,
  setComplaints,
}: MyComplaintsTableProps) => {
  const [selectedComplaint, setSelectedComplaint] = useState<ComplaintType | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = (complaint: ComplaintType) => {
    setSelectedComplaint(complaint);
    setDeleteDialogOpen(true);
  };
  return (
    <div
      className={cn("bg-white rounded-lg shadow-sm overflow-hidden", className)}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-uclv-light-blue">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Tipo de Queja
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Estado de la queja
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uclv-dark uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {complaints?.map((c) => (
              <tr key={c.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10/20/2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {c.tipo}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {c.descripcion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        c.estado === "pendiente" &&
                        "bg-yellow-100 text-yellow-800"
                      } 
                      ${
                        c.estado === "solucionado" &&
                        "bg-green-100 text-green-800"
                      }
                      ${
                        c.estado === "procesando" && "bg-cyan-100 text-cyan-800"
                      }
                      ${c.estado === "nts" && "bg-gray-200 text-gray-800"}
                      ${c.estado === "rechazada" && "bg-red-100 text-red-800"}
                      `}
                  >
                    {c.estado === "pendiente" && "Pendiente"}
                    {c.estado === "solucionado" && "Solucionado"}
                    {c.estado === "procesando" && "En Proceso"}
                    {c.estado === "nts" && "No tiene Solución"}
                    {c.estado === "rechazada" && "Rechazada"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-4">
                    <InformationalTooltip message="Editar queja">
                      <i className="fas fa-edit text-lg size-4 text-green-600 hover:text-green-400 edit-complaint-btn cursor-pointer"></i>
                    </InformationalTooltip>

                    <InformationalTooltip message="Eliminar queja" onClick={()=>handleDelete(c)}>
                      <i className="fas fa-trash-alt text-lg size-4 text-red-600 hover:text-red-400 delete-complaint-btn cursor-pointer"></i>
                    </InformationalTooltip>

                    <InformationalTooltip message="Ver respuesta">
                      <i className="fas fa-comment-alt text-lg size-4 text-purple-600 hover:text-purple-400 view-response-btn cursor-pointer"></i>
                    </InformationalTooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedComplaint && (
        <>
          <ComplaintDeleteDialog
            updateList={setComplaints}
            complaint={selectedComplaint}
            complaintsList={complaints}
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
          />
        </>
      )}
    </div>
  );
};

export default MyComplaintsTable;
