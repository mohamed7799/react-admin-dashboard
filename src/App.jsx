import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/home";
import Users from "./pages/usres";
import User from "./pages/user";
import NewUser from "./pages/newUser";
import Products from "./pages/products";
import Product from "./pages/product";
import NewProduct from "./pages/newProduct";

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
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default App;
