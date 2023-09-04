import React, { useEffect, useState } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Filters from "./Filters";
import Doctors from "./Doctors";
import { useTranslation } from "react-i18next";
import { CgSortAz } from "react-icons/cg";

export default function Services() {
  const { t, i18n } = useTranslation();
  const [drInfo, setDrInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState([]);
  const [numDoctors, setNumDoctors] = useState(6);

  const filteredDoctors = drInfo.filter((doctor) => {
  const filteredItems = doctor.expertise.filter((specialty) =>
    filters.length === 0 || filters.includes(specialty.toLowerCase())
  );
  return filteredItems.length > 0;
}).slice(0, numDoctors);

  const clickFunction = (value) => {
    const newArray = filters.includes(value)
      ? filters.filter((filter) => filter !== value)
      : [...filters, value];
    setFilters(newArray);
  };
  
useEffect(() => {
  fetchTopRatedDoctors(); 
}, []);

const fetchTopRatedDoctors = () => {
  const lang = i18n.language;
  const url = "https://portals.mentalland.com/api/V1/homepage/top_rated_const_"+ lang;

  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const doctorsData = data.data.map((item) => {
        return {
          id: item.id,
          name: item.Fname,
          lname: item.Lname,
          star: item.stars,
          madrak: item.type_madrak,
          expertise: JSON.parse(item.Specialties),
          image: `https://portals.mentalland.com/image/users/cons/degree/${item.avatar}`,
        };
      });
      setDrInfo(doctorsData);
    })
    .catch((error) => console.error(error));
};
  
useEffect(() => {
  fetchTopRatedDoctors();
}, [i18n.language]);

  const fetchDoctors = () => {
    const url = "https://portals.mentalland.com/api/V1/homepage/consts_list_homepage_" + i18n.language;   

   fetch(url, {
     headers: {
       "Content-Type": "application/json",
       "Accept-Language": i18n.language,
     },
   })
     .then((response) => response.json())
     .then((data) => {
       const doctorsData = data.data.map((item) => {
         return {
           id: item.id,
           name: item.Fname,
           lname: item.Lname,
           star: item.stars,
           madrak: item.type_madrak,
           expertise: JSON.parse(item.Specialties),
           image: `https://portals.mentalland.com/image/users/cons/degree/${item.avatar}`,
         };
       });
       setDrInfo(doctorsData);
     })
     .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchDoctors();
  }, [i18n.language]); 

 useEffect(() => {
     const newDrInfo = drInfo.filter((value) => {
    const fullName = `${value.name} ${value.lname}`;
    const searchValueLowerCase = searchValue.toLowerCase();

    return (
      fullName.toLowerCase().includes(searchValueLowerCase) ||
      value.madrak.toLowerCase().includes(searchValueLowerCase)
    );
  });

    setDrInfo(newDrInfo)
  }, [searchValue])   

  return (
    <div className="full">
      <Header className="whatsapp" />
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
              <Filters clickFunction={clickFunction} />
            </section>
            <section className="psychologist">
              <div className="threeitems">
                <div className="normal">
                  <button className="top">
                    <div className="Trated" onClick={fetchTopRatedDoctors}>
                      <CgSortAz className="Trated" />
                      Top rated
                    </div>
                  </button>

                  <div className="flexContainer">
                    <input
                      placeholder="Name..."
                      className="phname"
                      type="text"
                      onChange={(e) => setSearchValue(e.target.value)}
                      value={searchValue}
                    />
                    <button type="submit" className="find">
                      <span className="fitext">Search</span>
                    </button>
                  </div>
                  <div className="number" onClick={fetchDoctors}>
                    740 Psychologists
                  </div>
                </div>{" "}
              </div>
              {filteredDoctors.map((item) => {
                return (
                  <div key={item.id}>
                    <Doctors info={item} />
                  </div>
                );
              })}
              <button
                className="moreDocs"
                onClick={() => setNumDoctors(numDoctors + 6)}
              >
                Load more...
              </button>
            </section>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
