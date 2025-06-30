import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
import type { ComplaintType } from "@/types/ComplaintType";
import NormalBtn from "@/components/shared/NormalBtn";
  
  interface ComplaintAnswerProps {
    complaint: ComplaintType
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  export function ComplaintAnswer({
    complaint,
    open,
    onOpenChange
  }: ComplaintAnswerProps) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-white rounded-lg shadow-xl max-w-2xl border-0">
          <DialogHeader>
            <DialogTitle className="flex items-center text-xl font-bold text-uclv-dark">
              <i className="fas fa-file-alt text-uclv-blue mr-2"></i>
              <span>Respuesta a Queja</span>
            </DialogTitle>
            <DialogDescription>
              Detalles de la respuesta oficial
            </DialogDescription>
          </DialogHeader>
  
          <div className="">
            {/* Contenedor de la respuesta con scroll si es muy larga */}
            <div className="max-h-[60vh] overflow-y-auto">
              {complaint.respuesta ? (
                <div className="p-4 bg-gray-50 rounded-md whitespace-pre-wrap">
                  {complaint.respuesta}
                </div>
              ) : (
                <p className="text-gray-500 italic">No hay respuesta registrada</p>
              )}
            </div>
          </div>
  
          <div className="flex justify-end pt-0">
            <NormalBtn 
              onClick={() => onOpenChange(false)}
              className="bg-gray-400 hover:bg-gray-500 border border-gray-400 text-white"
            >
              Cerrar
            </NormalBtn>
          </div>
        </DialogContent>
      </Dialog>
    );
  }