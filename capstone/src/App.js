import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NotFound from "./Components/NotFound";
import AddProducts from "./Components/AddProducts";
import Cart from "./Components/Cart";
import MyProducts from "./Components/MyProducts";
// import PrivateRoute from "./Components/PrivateRoute";
// import { AuthProvider } from "./Components/AuthContext";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

export const App = () => {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-products"
          element={
            // <PrivateRoute>
            <AddProducts />
            // </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};

export default App;
