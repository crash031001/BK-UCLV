import { Outlet, useLocation } from "react-router";
import SideBarLink from "./SideBarLink";
import UserProfileSection from "./UserProfile/UserProfileSection";
import { useState } from "react";
import SideBarList from "./SideBarList";
const SideBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);
  return (
    <div className="flex">
      <aside className="min-w-64 bg-uclv-blue text-white flex flex-col py-8 px-4 h-screen">
        <a className="text-2xl font-bold mb-8 text-center">Residencias UCLV</a>

        <div className="mb-6">
          {/* <SideBarLink
            text="Informaciones"
            to="/"
            isActive={activeLink === "/"}
            onClick={() => setActiveLink("/")}
          >
            <i className="fas fa-info-circle mr-2"></i>
          </SideBarLink> */}

          {/* <SideBarLink
            text="Cuartos"
            to="/rooms"
            isActive={activeLink === "/rooms"}
            onClick={() => setActiveLink("/rooms")}
          >
            <i className="fas fa-home mr-2"></i>
          </SideBarLink> */}

          {/* <SideBarLink
            text="Edificios"
            to="/buildings"
            isActive={activeLink === "/buildings"}
            onClick={() => setActiveLink("/buildings")}
          >
            <i className="fas fa-building mr-2"></i>
          </SideBarLink> */}

          {/* <SideBarLink
            text="Sedes"
            to="/campuses"
            isActive={activeLink === "/campuses"}
            onClick={() => setActiveLink("/campuses")}
          >
            <i className="fas fa-institution mr-2"></i>
          </SideBarLink> */}

          <SideBarLink
            text="Estudiantes"
            to="/students"
            isActive={activeLink === "/students"}
            onClick={() => setActiveLink("/students")}
          >
            <i className="fas fa-users mr-2"></i>
          </SideBarLink>

          <SideBarList icon="fa-comment-dots" title="Quejas" isAnyChildActive={activeLink === "/complaints" || activeLink === "/my-complaints"}>
            <li>
            <SideBarLink
                text="Quejas Visibles"
                to="/complaints"
                isActive={activeLink === "/complaints"}
                onClick={() => setActiveLink("/complaints")}
              >
                <i className="fas fa-eye mr-2"></i>
              </SideBarLink>
            </li>
            <li>
              <SideBarLink
                text="Mis Quejas"
                to="/my-complaints"
                isActive={activeLink === "/my-complaints"}
                onClick={() => setActiveLink("/my-complaints")}
              >
                <i className="fas fa-list mr-2"></i>
              </SideBarLink>
            </li>
          </SideBarList>

          {/* <SideBarLink
            text="Reportes"
            to="/reports"
            isActive={activeLink === "/reports"}
            onClick={() => setActiveLink("/reports")}
          >
            <i className="fas fa-file-alt mr-2"></i>
          </SideBarLink> */}
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
