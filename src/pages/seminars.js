import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Upcoming from "./upcoming";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";


export default function Seminars() {
const [eventData, setEventData] = useState([]);
const [seminarData, setSeminarData] = useState([]);
const [spseminarData, setSpSeminarData] = useState([]);
const {t, i18n} = useTranslation()

const eventUrl = t("eventUrl");
const seminarUrl = t("seminarUrl");
const spseminarUrl = t("spseminarUrl");

useEffect(() => {
  fetch(spseminarUrl)
    .then((response) => response.json())
    .then((data) => setSpSeminarData(data.data));
}, [spseminarUrl]);

useEffect(() => {
  setSpSeminarData([]);
  fetch(spseminarUrl)
    .then((response) => response.json())
    .then((data) => setSpSeminarData(data.data));
}, [i18n.language]);


useEffect(() => {
  fetch(seminarUrl)
    .then((response) => response.json())
    .then((data) => setSeminarData(data.data));
}, [seminarUrl]);

useEffect(() => {
  setSeminarData([]);
  fetch(seminarUrl)
    .then((response) => response.json())
    .then((data) => setSeminarData(data.data));
}, [i18n.language]);

useEffect (() => {
  fetch(eventUrl)
  .then((response) => response.json())
  .then((data) => setEventData(data.data));
}, [eventUrl]);

useEffect(() => {
  setEventData([]);
  fetch(eventUrl)
    .then((response) => response.json())
    .then((data) => setEventData(data.data));
}, [i18n.language]);


console.log(eventData);

    return (
      <div>
        <Header className="whatsapp" />
        <Navbar />
        <div className="seminars">
          <div className="sliders">
            <div className="spzseminars">
              <Upcoming
                eventData={spseminarData}
                heading="SpecializedSeminars"
                color="#fafefe"
              />
            </div>
            <div className="spzevents">
              <Upcoming
                eventData={eventData}
                heading="SpecializedEvents"
                color="#fafefe"
              />
            </div>
            <div className="genseminars">
              <Upcoming
                eventData={seminarData}
                heading="GeneralSeminars"
                color="#fafefe"
              />
            </div>
            <div className="genevents">
              <Upcoming
                eventData={eventData}
                heading="GeneralEvents"
                color="#fafefe"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}