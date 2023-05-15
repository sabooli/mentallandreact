import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


export default function Home() {
  return (
   <div>
    <Header />
    <Navbar />
    <div>Home</div>
    <Footer />
    </div>
  );
}
