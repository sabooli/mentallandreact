import React from "react";
import Coaches from "./coaches";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";

export default function Adultcoaches() {
return (
  <div>
    <Header className="instagram" />
    <Navbar />
    <div className="choosecoach">
      <Coaches heading="Paint Coach" major="Painting" />
      <Coaches heading="Music Coach" major="Music" />
      <Coaches heading="Dance Coach" major="Dancing" />
      <Coaches heading="Acting Coach" major="Acting" />
      <Coaches heading="Writing Coach" major="Writing" />
    </div>
    <Footer />
  </div>
);
}