import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/home";
import Users from "./pages/usres";

const App = () => {
  return (
    <main className="font-body ">
      <TopBar></TopBar>
      <div className="flex ">
        <div className="flex-1 ">
          <SideBar></SideBar>
        </div>

        <div className="flex-[4_4_0%] ">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default App;
