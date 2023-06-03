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
import Teamslider from "./pages/teamslider";
import Artadults from "./pages/artadults";
import Art from "./pages/art";
import Coaches from "./pages/coaches";
import Adultcoaches from "./pages/adultcoaches";
import Header from "./header";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="Navbar" element={<Navbar />} />
        <Route path="footer" element={<Footer />} />
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
          <Route path="teamslider" element={<Teamslider />} />
          <Route path="art" element={<Art />} />
          <Route path="artadults" element={<Artadults />} />;
          <Route path="coaches" element={<Coaches />} />
          <Route path="adultcoaches" element={<Adultcoaches />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
