import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
