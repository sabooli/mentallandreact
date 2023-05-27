import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import "./index.css";
import Filter from "./filter";
import Doctors from "./Doctors";
import { useTranslation } from "react-i18next";
import sort from "../icons/sort.svg";

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="full">
      <Header />
      <Navbar />
      <div className="containerFluid">
        <div className="maincontent">
          <h1 className="Dep">{t("DEPRESSION")} </h1>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </div>        
        <div className="main">
          <section className="check">
            <Filter />
          </section>
          <section className="psychologist">
            <div className="threeitems">
              <div className="normal">
                <div className="hope">
                  <button className="top">
                    <div className="Trated">Top rated</div>
                  </button>
                </div>
                <div className="flexContainer hope">
                  <input
                    type="search"
                    placeholder="Name..."
                    className="phname"
                  />
                  <button type="submit" className="find">
                    <div className="fitext">Search</div>
                  </button>
                </div>
                <div className="number hope">740 Psychologists</div>
              </div>
              <Doctors />
            </div>
          </section>
        </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
