import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/aboutus";
import Contact from "./pages/contactus";
import Services from "./pages/depressionadults";
import Home from "./pages/Home";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route exact path="/" element={<Home />} />
            <Route path="./pages/depressionsdults" element={<Services />} />
            <Route path="./pages/aboutus" element={<About />} />
            <Route path="./pages/contactus" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
