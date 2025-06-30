import { BrowserRouter as Router, Routes, Route } from "react-router";
import SideBar from "@/components/SideBar/SideBar";
import StudentsPage from "@/pages/StudentsPage";
import InformationPage from "@/pages/InformationPage";
import MyComplaintsPage from "./pages/MyComplaintsPage";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<InformationPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="my-complaints" element={<MyComplaintsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
