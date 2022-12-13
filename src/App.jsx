import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <main className="font-body ">
      <TopBar></TopBar>
      <div className="flex ">
        <div className="flex-1 ">
          <SideBar></SideBar>
        </div>

        <div className="flex-[4_4_0%] ">other content</div>
      </div>
    </main>
  );
};

export default App;
