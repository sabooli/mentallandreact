import React, { useEffect, useState } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Filter from "./filter";
import Doctors from "./Doctors";
import { useTranslation } from "react-i18next";
import { CgSortAz } from "react-icons/cg";

export default function Services() {
  const { t } = useTranslation();
  const [drInfo, setDrInfo] = useState([]);
   const [query, setQuery] = useState("");
    
useEffect(() => {
   const url = "https://mentalland.com/api/V1/homepage/consts_list_homepage";

   fetch(url, {
     headers: {
       "Content-Type": "application/json",
     },
   })
     .then((response) => response.json())
     .then((data) => {
        const doctorsData = data.data.map((item,index) => {
           return {
             id: +index + 1,
             name: item.Fname,
             lname: item.Lname,
             star: item.stars,
             madrak: item.type_madrak,
             expertisez: JSON.parse(item.Specialties)[0],
             expertiseo: JSON.parse(item.Specialties)[1],
             expertiset: JSON.parse(item.Specialties)[2],
             image:
               `https://mentalland.com/image/users/cons/degree/${item.avatar}`,
           };
        })
        setDrInfo(doctorsData)
      })
     .catch((error) => console.error(error));
  }, []);
  
function searchDoctors(query) {
  fetch("https://mentalland.com/api/V1/homepage/consts_list_homepage")
    .then((response) => response.json())
    .then((doctors) => {
      const results = doctors.filter((doctor) => {
        const name = doctor.Fname + " " + doctor.Lname;
        return (
          name.toLowerCase().includes(query.toLowerCase()) ||
          doctor.university.toLowerCase().includes(query.toLowerCase())
        );
      });
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleSearch() {
  searchDoctors(query);
}
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
                  <button className="top">
                    <div className="Trated">
                      <CgSortAz className="Trated" />
                      Top rated
                    </div>
                  </button>

                  <div className="flexContainer hope">
                    <input
                      placeholder="Name..."
                      className="phname"
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={handleSearch}
                      className="find"
                    >
                      <span className="fitext">Search</span>
                    </button>
                  </div>
                  <div className="number hope">740 Psychologists</div>
                </div>{" "}
              </div>
              {drInfo.map((item) => {
                return (
                  <div key={item.id}>
                    <Doctors info={item} />
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
