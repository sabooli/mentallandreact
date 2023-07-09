import React, { useEffect, useState } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Filter from "./filter";
import Doctors from "./Doctors";
import { useTranslation } from "react-i18next";
import { CgSortAz } from "react-icons/cg";

export default function Servicesforchildren() {
  const { t } = useTranslation();
  const [drInfo, setDrInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);

    
useEffect(() => {
  fetchTopRatedDoctors();
}, []);

const fetchTopRatedDoctors = () => {
  const url = "https://mentalland.com/api/V1/homepage/top_rated_const";

  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const doctorsData = data.data.map((item, index) => {
        return {
          id: +index + 1,
          name: item.Fname,
          lname: item.Lname,
          star: item.stars,
          madrak: item.type_madrak,
          expertise: JSON.parse(item.Specialties).map((specialty, index) => (
            <>
              {index > 0 ? " " : ""}
              <span className="field">{specialty}</span>
            </>
          )),
          image: `https://mentalland.com/image/users/cons/degree/${item.avatar}`,
        };
      });
      setDrInfo(doctorsData);
    })
    .catch((error) => console.error(error));
};

 
useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    const url = "https://mentalland.com/api/V1/homepage/consts_list_homepage";   

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const doctorsData = data.data.map((item, index) => {
          return {
            id: +index + 1,
            name: item.Fname,
            lname: item.Lname,
            star: item.stars,
            madrak: item.type_madrak,
            expertisez: JSON.parse(item.Specialties)[0],
            expertiseo: JSON.parse(item.Specialties)[1],
            expertiset: JSON.parse(item.Specialties)[2],
            image: `https://mentalland.com/image/users/cons/degree/${item.avatar}`,
          };
        });
        setDrInfo(doctorsData);
      })
      .catch((error) => console.error(error));
  };

 const handleCheckboxChange = (event) => {
   const value = event.target.value;
   const isChecked = event.target.checked;

   if (isChecked) {
     setCheckedValues([...checkedValues, value]);
   } else {
     setCheckedValues(checkedValues.filter((v) => v !== value));
   }
 };

  useEffect(() => {
    const newDrInfo = drInfo.filter(
      (value) =>
        value.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
        value.madrak.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDrInfo(newDrInfo);
  }, [searchValue]);

  return (
    <div className="full listofchpsy">
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
              <Filter
                checkedValues={checkedValues}
                handleCheckboxChange={handleCheckboxChange}
              />
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

                  <div className="flexContainer hope">
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
                  <div className="number hope" onClick={fetchDoctors}>
                    740 Psychologists
                  </div>
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
