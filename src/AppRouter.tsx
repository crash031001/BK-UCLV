import { BrowserRouter as Router, Routes, Route } from "react-router";
import SideBar from "./components/SideBar/SideBar";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />}>
        
        </Route>
        </Routes>
    </Router>
  );
};

export default AppRouter;
