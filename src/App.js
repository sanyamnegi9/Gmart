import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<Singleblog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compare-products" element={<CompareProducts />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<Resetpassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
