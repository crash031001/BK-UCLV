"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { StudentType } from "@/types/StudentType";
import { notifyError, notifySuccess } from "@/utils/Notify";
import { deleteEstudiante } from "@/utils/services/StudentServices";

interface StudentDeleteDialogProps {
  student: StudentType;
  studentsList: StudentType[]
  open: boolean;
  updateList:React.Dispatch<React.SetStateAction<StudentType[]>>
  onOpenChange: (open: boolean) => void;
}

export function StudentDeleteDialog({
  studentsList,
  updateList,
  student,
  open,
  onOpenChange,
}: StudentDeleteDialogProps) {
  const handleDelete = async () => {
    const response = await deleteEstudiante(student.id)
    if (response?.status == 200) {
      updateList(studentsList.filter(e=> e.id != student.id))
      notifySuccess("Se ha eliminado correctamente")
    }else{
      notifyError("Ha ocurrido un error, inténtelo de nuevo")
    }
    console.log(response)
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-0" showCloseButton={false}>
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <DialogTitle className="text-lg font-medium text-gray-900 mb-2">
            ¿Eliminar estudiante?
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 mb-4">
            Esta acción no se puede deshacer. ¿Estás seguro de que deseas
            eliminar este estudiante?
          </DialogDescription>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onOpenChange(false)}
              className="cursor-pointer cancel-delete-btn px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Cancelar
            </button>
            <button
              onClick={handleDelete}
              className="cursor-pointer confirm-delete-btn px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-uclv-red hover:bg-red-700 transition duration-200"
            >
              Eliminar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
