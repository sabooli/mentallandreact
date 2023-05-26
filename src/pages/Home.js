import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        Home
        <Link to="/pages/psychology">Psychology</Link>
        <Link to="/pages/psychologyAdults">Psychology-adults</Link>
        <Link to="/pages/psychologyChildren">Psychology-children</Link>
        <Link to="/pages/seminars">Seminars</Link>
      </div>
      <Footer />
    </div>
  );
}
