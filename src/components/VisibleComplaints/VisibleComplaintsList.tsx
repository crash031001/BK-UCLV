interface VisibleComplaintsListProps {
    className?: string
}

const VisibleComplaintsList = ({className}:VisibleComplaintsListProps) => {
  return (
    <div className={className}>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">

            <div id="visible-response-1" className="hidden bg-blue-50 p-4 border-t border-blue-100">
              <div className="font-medium text-gray-900 mb-2">Respuesta de la Administración:</div>
              <div className="text-sm text-gray-700 bg-white p-3 rounded border border-blue-200">
                <p>Hemos identificado el problema en el sistema de calentamiento de agua. Las piezas de repuesto llegarán el lunes 23/10 y se solucionará el problema ese mismo día. Disculpen las molestias.</p>
                <div className="mt-2 text-xs text-gray-500">Respondido el: 10/18/2023 por: Administración Residencias</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">Problema con registro de visitas</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <span className="mr-3">Ana Martínez</span>
                    <span className="mr-3">Edificio 900</span>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Administrativa
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">10/10/2023</div>
              </div>
              <p className="mt-2 text-sm text-gray-700">El sistema de registro de visitas no está funcionando correctamente desde ayer. No permite registrar visitas después de las 8pm.</p>
              
              <div className="mt-3 flex justify-end space-x-2">
                <button className="text-uclv-blue hover:text-blue-700 text-sm font-medium view-response-btn" data-response="visible-response-2">
                  <i className="fas fa-comment-alt mr-1"></i>Ver Respuesta
                </button>
              </div>
            </div>

            <div id="visible-response-2" className="hidden bg-blue-50 p-4 border-t border-blue-100">
              <div className="font-medium text-gray-900 mb-2">Respuesta de la Administración:</div>
              <div className="text-sm text-gray-700 bg-white p-3 rounded border border-blue-200">
                <p>Estimada Ana, hemos actualizado el sistema de registro de visitas y el problema ha sido resuelto. Gracias por reportarlo.</p>
                <div className="mt-2 text-xs text-gray-500">Respondido el: 10/14/2023 por: Departamento Administrativo</div>
              </div>
            </div>
          </div>
      </div>
      </div>
  );
};

export default VisibleComplaintsList;