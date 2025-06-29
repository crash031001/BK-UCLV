"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { StudentType } from "@/types/StudentType";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface StudentDetailsDialogProps {
  student: StudentType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StudentDetailDialog({
  student,
  open,
  onOpenChange,
}: StudentDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] rounded-lg border-0 shadow-xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold text-uclv-blue flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-uclv-light-blue text-uclv-blue text-lg font-semibold">
                {student.nombre[0]}
                {student.apellidos[0]}
              </AvatarFallback>
            </Avatar>
            <DialogDescription className="flex flex-col">
                {student.nombre} {student.apellidos}
              <span className="text-sm font-normal text-gray-500">
                CI: {student.ci}
              </span>
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          {/* Columna izquierda */}
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">
                Información Académica
              </h3>
              <div className="space-y-3">
                <InfoRow label="Facultad" value={student.facultad} />
                <InfoRow label="Carrera" value={student.carrera} />
                <InfoRow label="Año" value={student.anho} />
                <div className="flex justify-between gap-2">
                  <span className="text-gray-600 font-medium">
                    Aprovechamiento:
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-uclv-light-blue text-uclv-blue"
                  >
                    {student.aprovechamiento}
                  </Badge>
                  {student.militante === "Sí" && (
                    <Badge
                      variant="outline"
                      className="border-green-500 text-green-600"
                    >
                      Militante
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">
                Alojamiento
              </h3>
              <div className="space-y-3">
                <InfoRow label="Edificio" value={student.edificio} />
                <InfoRow label="Habitación" value={student.cuarto} />
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">
                Datos Personales
              </h3>
              <div className="space-y-3">
                <InfoRow label="Sexo" value={student.sexo} />
                <InfoRow label="Provincia" value={student.provincia} />
                <InfoRow label="Municipio" value={student.municipio} />
                <InfoRow label="Dirección" value={student.direccion} />
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-3 border-b pb-2">
                Contacto y Salud
              </h3>
              <div className="space-y-3">
                <InfoRow
                  label="Teléfono Personal"
                  value={student.telefonoPersonal}
                />
                <InfoRow
                  label="Teléfono Familiar"
                  value={student.telefonoFamiliar}
                />
                <InfoRow
                  label="Enfermedades"
                  value={
                    student.enfermedades !== "Ninguna"
                      ? student.enfermedades
                      : "-"
                  }
                  highlight={student.enfermedades !== "Ninguna"}
                />
                <InfoRow
                  label="Medicamentos"
                  value={
                    student.medicamentos !== "Ninguno"
                      ? student.medicamentos
                      : "-"
                  }
                  highlight={student.medicamentos !== "Ninguno"}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600 font-medium">{label}:</span>
      <span
        className={`${
          highlight ? "text-red-800 font-normal" : "text-gray-800 font-semibold"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
