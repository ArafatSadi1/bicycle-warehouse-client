import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/shared/Header/Header";
import Blogs from "./pages/Blogs/Blogs";
import Login from "./pages/shared/Login/Login";
import Signup from "./pages/shared/Signup/Signup";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import RequiredAuth from "./pages/RequiredAuth/RequiredAuth";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import AddProduct from "./pages/AddProduct/AddProduct";
import MyProducts from "./pages/MyProducts/MyProducts";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/update/:id"
          element={
            <RequiredAuth>
              <UpdateProduct></UpdateProduct>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequiredAuth>
              <ManageInventories></ManageInventories>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <RequiredAuth>
              <AddProduct></AddProduct>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/myProducts/:email"
          element={
            <RequiredAuth>
              <MyProducts></MyProducts>
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
