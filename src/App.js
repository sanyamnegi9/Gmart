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
          <Route path="contact" element={<Contact />} />
          <Route path="compare-products" element={<CompareProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
