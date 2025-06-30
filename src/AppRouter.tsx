import { BrowserRouter as Router, Routes, Route } from "react-router";
import SideBar from "@/components/SideBar/SideBar";
import StudentsPage from "@/pages/StudentsPage";
import InformationPage from "@/pages/InformationPage";
import MyComplaintsPage from "./pages/MyComplaintsPage";
import VisibleComplaintsPage from "./pages/VisibleComplaints";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<InformationPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="complaints">
            <Route path="my-complaints" element={<MyComplaintsPage />} />
            <Route path="visible" element={<VisibleComplaintsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
