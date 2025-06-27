const SideBar = () => {
  return (
    <nav className="w-64 bg-uclv-blue text-white flex flex-col py-8 px-4 fixed h-full">
      <a href="#" className="text-2xl font-bold mb-8 text-center">Residencias UCLV</a>
      
      <div className="mb-6">
        <div className="info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-info-circle mr-2"></i>Informaciones</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
        
        <div className="info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-home mr-2"></i>Cuartos</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
        <div className="info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-building mr-2"></i>Edificios</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
        <div className="info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-building mr-2"></i>Sedes</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
        <div className="students-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-users mr-2"></i>Estudiantes</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
        <ul className="ml-4 hidden mt-2 space-y-2">
          <li>
            <a href="#" className="view-students-btn block py-1 px-2 hover:bg-uclv-light-blue hover:text-uclv-blue rounded transition duration-200">
              <i className="fas fa-users mr-2"></i>Listado de Estudiantes
            </a>
          </li>
          
        </ul>
        <div className="info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-exclamation-triangle mr-2"></i>Quejas</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
        <div className="info-menu font-semibold mb-1 flex justify-between items-center cursor-pointer hover:bg-uclv-light-blue hover:text-uclv-blue p-2 rounded transition duration-200">
          <span><i className="fas fa-file-alt mr-2"></i>Reportes</span>
          <i className="fas fa-chevron-down transition-transform duration-200"></i>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-blue-400">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-uclv-blue font-bold mr-3">
            DM
          </div>
          <div>
            <div className="font-medium">Dra. María López</div>
            <div className="text-xs text-blue-200">Directora de Residencias</div>
          </div>
        </div>
        <div className="space-y-1">
          <a href="#" className="block py-1 px-2 text-sm hover:bg-uclv-light-blue hover:text-uclv-blue rounded transition duration-200">
            <i className="fas fa-sign-out-alt mr-2"></i>Cerrar Sesión
          </a>
        </div>
      </div>
    </nav>
  )
}

export default SideBar