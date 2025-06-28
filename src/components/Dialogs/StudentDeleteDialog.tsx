"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { StudentType } from "@/types/StudentType";

interface StudentDeleteDialogProps {
  student: StudentType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StudentDeleteDialog({
  student,
  open,
  onOpenChange,
}: StudentDeleteDialogProps) {
  const handleDelete = () => {
    // Lógica para eliminar el estudiante
    console.log("Eliminando estudiante:", student.ci);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-0" showCloseButton={false}>
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            ¿Eliminar estudiante?
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Esta acción no se puede deshacer. ¿Estás seguro de que deseas
            eliminar este estudiante?
          </p>
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
