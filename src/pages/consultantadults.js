import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import { AiFillStar } from "react-icons/ai";
import Explain from "./explain";
import { Link } from "react-router-dom";

export default function Counsel() {
const {id} = useParams();
const [item, setItem] = useState({
  Fname: "",
  Lname: "",
  avatar: "",
  university: "",
  type_madrak: "",
  Specialties: "",
  stars: "",
});

useEffect(() => {
  fetch("https://mentalland.com/api/V1/homepage/consts_list_homepage")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const selectedItem = data.data[id - 1];
      console.log(selectedItem);
      setItem(selectedItem);
    })
    .catch((error) => console.log(error));
}, []);

    return (
      <div>
        <Header />
        <Navbar />
        <div className="contain">
          <div className="connect">
            <div className="bigbar">
              <div className="part">
                <img
                  src={`https://mentalland.com/image/users/cons/degree/${item.avatar}`}
                  className="photo"
                  alt="personal"
                />
              </div>
              <div className="part container-fluid">
                <div className="sub who">
                  <h2 className="drname">
                    {item ? `${item.Fname} ${item.Lname}` : "Loading..."}
                  </h2>
                  <h3 className="dreducation">
                    {" "}
                    {item ? `${item.type_madrak}` : "Loading..."}
                  </h3>
                  <div className="level">
                    <AiFillStar className="star" />
                    <span className="rate">
                      {" "}
                      {item ? `${item.stars}` : "Loading..."}
                    </span>
                    <span className="experience">+1000 Consultations</span>
                  </div>
                </div>
                <div className="workField">
                    <span>
                      {item.Specialties &&
                        JSON.parse(item.Specialties).map((specialty, index) => (
                          <>
                            {index > 0 ? " " : ""}
                            <span className="field">{specialty}</span>
                          </>
                        ))}
                    </span>
                </div>
                <div className="hhh">
                  <Link to="/pages/consultantadults" className="counsel">
                    <div className="justnow">Start Counseling</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Explain />
        </div>
        <Footer />
      </div>
    );
}