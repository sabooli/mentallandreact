import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function App() {
  return (
    <div className="App">
      <Header />
     <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
