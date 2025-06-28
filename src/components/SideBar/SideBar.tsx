import { Outlet } from "react-router";
import SideBarLink from "./SideBarLink";
import UserProfileSection from "./UserProfile/UserProfileSection";

const SideBar = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-uclv-blue text-white flex flex-col py-8 px-4 h-screen">
        <a className="text-2xl font-bold mb-8 text-center">Residencias UCLV</a>

        <div className="mb-6">
          <SideBarLink text="Informaciones" to="/">
            <i className="fas fa-info-circle mr-2"></i>
          </SideBarLink>

          <SideBarLink text="Cuartos" to="/">
            <i className="fas fa-home mr-2"></i>
          </SideBarLink>

          <SideBarLink text="Edificios" to="/">
            <i className="fas fa-building mr-2"></i>
          </SideBarLink>

          <SideBarLink text="Sedes" to="/">
            <i className="fas fa-institution mr-2"></i>
          </SideBarLink>

          <SideBarLink text="Estudiantes" to="/students">
            <i className="fas fa-users mr-2"></i>
          </SideBarLink>

          <SideBarLink text="Quejas" to="/">
            <i className="fas fa-exclamation-triangle mr-2"></i>
          </SideBarLink>

          <SideBarLink text="Reportes" to="/">
            <i className="fas fa-file-alt mr-2"></i>
          </SideBarLink>
        </div>
        <UserProfileSection />
      </aside>
      <div className="flex-1">
      <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
