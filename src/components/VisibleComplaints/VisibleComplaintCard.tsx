import { cn } from "@/lib/utils";

interface VisibleComplaintCardProps {
    className?: string
}

const VisibleComplaintCard = ({className}:VisibleComplaintCardProps) => {
  return (
    <div className={cn("p-4",className)}>
              <div className="flex justify-between items-start">
                <div>``
                  <h3 className="font-medium text-gray-900">Falta de agua caliente en Edificio B</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <span className="mr-3">Carlos Rodríguez</span>
                    <span className="mr-3">Edificio C5</span>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Administrativa
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">10/15/2023</div>
              </div>
              <p className="mt-2 text-sm text-gray-700">Desde hace una semana no tenemos agua caliente en las duchas del tercer piso del Edificio C5. Esto afecta nuestra higiene personal.</p>
              
              <div className="mt-3 flex justify-end space-x-2">
                <button className="text-uclv-blue hover:text-blue-700 text-sm font-medium view-response-btn" data-response="visible-response-1">
                  <i className="fas fa-comment-alt mr-1"></i>Ver Respuesta
                </button>
              </div>
            </div>
  );
};

export default VisibleComplaintCard;