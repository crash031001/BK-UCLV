import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { ComplaintType } from "@/types/ComplaintType";
interface VisibleComplaintCardProps {
  complaint: ComplaintType;
  className?: string;
}

const VisibleComplaintCard = ({ complaint }: VisibleComplaintCardProps) => {
  return (
    <Accordion type="single" collapsible className="w-full bg-white shadow">
      <AccordionItem value="item-1" className="border-none">
        <div className="relative p-4 pb-12">
          <div>
            <h3 className="font-bold text-uclv-dark">
              {complaint.student.nombre.concat(
                " " + complaint.student.apellidos
              )}
              <span className="ms-3 capitalize px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200/60 text-blue-800">
                {complaint.tipo}
              </span>
            </h3>
            <p className="mt-2 text-sm text-gray-700 font-normal">
              {complaint.descripcion}
            </p>
          </div>
          <span className="text-xs text-gray-600 absolute right-3 top-2.5 p-2">{complaint.fecha}</span>
          <AccordionTrigger className="absolute right-3 bottom-2.5 p-2 hover:bg-gray-300/30 rounded text-uclv-blue cursor-pointer">
            <div className="flex items-center">
              <i className="fas fa-comment-alt mr-1"></i>
              <span>Ver Respuesta</span>
            </div>
          </AccordionTrigger>
        </div>

        <AccordionContent className="px-4 pb-4 bg-uc">
          {complaint.respuesta ? (
            <div className="mt-3 p-3 bg-uclv-light-blue rounded-md">
              <h4 className="font-medium text-sm text-uclv-blue">Respuesta:</h4>
              <p className="text-sm mt-1">
                {complaint.respuesta || "No hay respuesta aún"}
              </p>
            </div>
          ) : (
            <div className="mt-3 p-3 bg-uclv-light-blue rounded-md">
                <i className="fas fa-info-circle mr-2"></i>
              <span className="font-medium mt-1">No hay respuesta aún</span>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default VisibleComplaintCard;
