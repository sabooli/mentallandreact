import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import About from "./pages/aboutus";
import Contact from "./pages/contactus";
import Services from "./pages/depressionadults";
import Home from "./pages/Home";
import Counsel from "./pages/consultantadults";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pages" element={<Outlet />}>
          <Route path="depressionadults" element={<Services />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="consultantadults" element={<Counsel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
