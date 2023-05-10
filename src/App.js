import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function App() {
  return (
    <div className="App">
      <Header />
     <Navbar />
      <Footer />
    </div>
  );
}
