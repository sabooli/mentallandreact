import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import About from "./pages/aboutus";
import Contact from "./pages/contactus";
import Services from "./pages/depressionadults";
import Home from "./pages/Home";
import Counsel from "./pages/consultantadults";
import Psychology from "./pages/psychology";
import Seminar from "./pages/seminar";
import Psyadults from "./pages/psychologyAdults";
import Psychildren from "./pages/psychologyChildren";
import Seminars from "./pages/seminars";
import Upcoming from "./pages/upcoming";
import Patientcomments from "./pages/patientcomments";
import Consultants from "./pages/consultants";

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
          <Route path="psychology" element={<Psychology />} />
          <Route path="seminar" element={<Seminar />} />
          <Route path="psychologyAdults" element={<Psyadults />} />
          <Route path="psychologyChildren" element={<Psychildren />} />
          <Route path="seminars" element={<Seminars />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="patientcomments" element={<Patientcomments />} />
          <Route path="consultants" element={<Consultants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
