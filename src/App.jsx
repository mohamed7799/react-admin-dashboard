import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/home";

const App = () => {
  return (
    <main className="font-body ">
      <TopBar></TopBar>
      <div className="flex ">
        <div className="flex-1 ">
          <SideBar></SideBar>
        </div>

        <div className="flex-[4_4_0%] ">
          <Home></Home>
        </div>
      </div>
    </main>
  );
};

export default App;
