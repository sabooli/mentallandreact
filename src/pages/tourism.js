import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import tourism from "../icons/Rectangle 47.png";
import Rhino from "../icons/Rectangle 314.png";
import general from "../icons/Rectangle 313.png";
import transplant from "../icons/Rectangle 315.png";
import IVF from "../icons/Rectangle 316.png";
import visa from "../icons/Rectangle 318.png";
import medical from "../icons/Medical.svg";
import travel from "../icons/travel.svg";
import Medicalservice from "./medicalservice";
import Wellnessservice from "./wellnessservice";
import Naturethservice from "./naturethservice";
import Center from "./center";
import Hospital from "./hospital";
import TourDoctor from "./TourDoctor";
import accomodation from "../icons/accomodation.svg";
import { HiArrowLongRight } from "react-icons/hi2";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import HMfaq from "./homemfaq";
import faq from "../icons/Group 1242.png";
import { Link } from "react-router-dom";
import { HiOutlineDownload } from "react-icons/hi";

export default function Tourism() {   
const { i18n } = useTranslation();
const [tourismFaqs, setTourismFaqs] = useState([]);
const [surgeries, setSurgeries] = useState([]);
const [naturalservices, setNaturalServices] = useState([]);
const [wellnessServices, setWellnessServices] = useState([]);
const [hotels, setHotels] = useState([]);
const [hospitals, setHospitals] = useState([]);
const [consultants, setConsultants] = useState([]);

const url =
  "https://portals.mentalland.com/api/V1/homepage/consts_list_homepage?lang=" +
  i18n.language;

useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setConsultants(data.data));
}, [url]);

useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setConsultants(data.data));
}, [i18n.language]);

 const hospitalUrl =
   "https://portals.mentalland.com/api/V1/homepage/hospital_" +
   i18n.language +
   "_list";

 useEffect(() => {
   fetch(hospitalUrl)
     .then((response) => response.json())
     .then((data) => setHospitals(data.data));
 }, [hospitalUrl]);

 useEffect(() => {
   setHospitals([]);
   fetch(hospitalUrl)
     .then((response) => response.json())
     .then((data) => setHospitals(data.data));
 }, [i18n.language]);

 const hotelUrl =
   "https://portals.mentalland.com/api/V1/homepage/hotels_" + i18n.language +"_list";

  useEffect(() => {
    fetch(hotelUrl)
      .then((response) => response.json())
      .then((data) => setHotels(data.data));
  }, [hotelUrl]);
  
useEffect(() => {
  setHotels([]);
  fetch(hotelUrl)
    .then((response) => response.json())
    .then((data) => setHotels(data.data));
}, [i18n.language]);

const wellnessUrl =
  "https://portals.mentalland.com/api/V1/homepage/wellness_services?lang=" + i18n.language;

useEffect(() => {
  fetch(wellnessUrl)
    .then((response) => response.json())
    .then((data) => setWellnessServices(data.data));
}, [wellnessUrl]);

useEffect(() => {
  setWellnessServices([]);
  fetch(wellnessUrl)
    .then((response) => response.json())
    .then((data) => setWellnessServices(data.data));
}, [i18n.language]);

const naturalUrl =
  "https://portals.mentalland.com/api/V1/homepage/natural_services?lang=" + i18n.language;

useEffect(() => {
  fetch(naturalUrl)
    .then((response) => response.json())
    .then((data) => setNaturalServices(data.data));
}, [naturalUrl]);

useEffect(() => {
  setNaturalServices([]);
  fetch(naturalUrl)
    .then((response) => response.json())
    .then((data) => setNaturalServices(data.data));
}, [i18n.language]);

const treatmentUrl =
  "https://portals.mentalland.com/api/V1/homepage/popular_treatments?lang=" + i18n.language;

useEffect(() => {
  fetch(treatmentUrl)
    .then((response) => response.json())
    .then((data) => setSurgeries(data.data));
}, [treatmentUrl]);

useEffect(() => {
  setSurgeries([]);
  fetch(treatmentUrl)
    .then((response) => response.json())
    .then((data) => setSurgeries(data.data));
}, [i18n.language]);

  const tourismFaqsUrl =
    "https://portals.mentalland.com/api/V1/homepage/faqs_tourism_" +
    i18n.language;

  useEffect(() => {
    fetch(tourismFaqsUrl)
      .then((response) => response.json())
      .then((data) => setTourismFaqs(data.data));
  }, [tourismFaqsUrl]);

  useEffect(() => {
    setTourismFaqs([]);
    fetch(tourismFaqsUrl)
      .then((response) => response.json())
      .then((data) => setTourismFaqs(data.data));
  }, [i18n.language]);


  const [showExplanation, setShowExplanation] = useState({});
  const handleClick = (id) => {
    setShowExplanation((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${tourism}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="twitter" />
        <Navbar />
        <div className="tour">
          <h1>IRAN</h1>
          <h2>Best destination for your beauty and health</h2>
          <Link to="/pages/contactus" className="tourlink">
            <span>Free Consultation</span>
          </Link>
        </div>
      </div>
      <div className="tourism">
        <div className="tour-pack">
          <h2>Top tour packages in Iran</h2>
          <div className="packages">
            <div className="Rhino">
              <figure>
                <img src={Rhino} className="img-fluid" alt="Rhinoplasty" />
                <figcaption>
                  Rhinoplasty <br />
                  1800$
                  <Link className="tourbeauty">
                    <HiArrowLongRight className="text-end" />
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="Rhino">
              <figure>
                <img
                  src={general}
                  className="img-fluid"
                  alt="general surgery Iran"
                />
                <figcaption>
                  General Surgery <br />
                  1800$
                  <Link className="tourbeauty">
                    <HiArrowLongRight className="text-end" />
                  </Link>
                </figcaption>
              </figure>
            </div>{" "}
            <div className="Rhino">
              <figure>
                <img
                  src={transplant}
                  className="img-fluid"
                  alt="transplant Iran"
                />
                <figcaption>
                  Hair Transplant <br />
                  1800$
                  <Link className="tourbeauty">
                    <HiArrowLongRight className="text-end" />
                  </Link>
                </figcaption>
              </figure>{" "}
            </div>{" "}
            <div className="Rhino">
              <figure>
                <img src={IVF} className="img-fluid" alt="ivf Iran" />
                <figcaption>
                  IVF <br />
                  1800$
                  <Link className="tourbeauty">
                    <HiArrowLongRight className="text-end" />
                  </Link>
                </figcaption>
              </figure>{" "}
            </div>
          </div>
          <Link className="packagelink">See All Packages</Link>
        </div>
        <div className="tour-all-pack">
          <h2 className="mb-5">All-inclusive Packages</h2>
          <div className="all-inclusive-pack">
            <div className="inclusive-pack">
              <img src={visa} height={120} alt="visa Iran" />
              <div className="packH">VISA</div>
              <div className="packT">Treatment Visa (T-Visa)</div>
            </div>
            <div className="inclusive-pack">
              <img src={medical} height={120} alt="medical services in Iran" />
              <div className="packH">Medical Services</div>
              <div className="packT">
                Surgery, Lab tests, Medical photography, Medications, Surgeon
                visits
              </div>
            </div>{" "}
            <div className="inclusive-pack">
              <img src={travel} height={120} alt="Iran travel services" />
              <div className="packH">Travel services</div>
              <div className="packT">
                VIP Transfer (Airport/Hotel/Clinic), Medical Guide, Travel
                Insurance, Sim-card and Internet
              </div>
            </div>{" "}
            <div className="inclusive-pack">
              <img src={accomodation} height={120} alt="accomodation in Iran" />
              <div className="packH">accomodation</div>
              <div className="packT">
                3 to 5 Star Hotels Near Your Clinic/Hospital
              </div>
            </div>
          </div>
        </div>
        <div className="step-by-step">
          <h2 className="mb-5">step by step with together</h2>
          <div className="diagram">
            <div className="circled startc"></div>
            <div className="line"></div>
            <div className="circled endc"></div>
            <div className="verticalup">
              <div className="vert-line"></div>
              <div className="vert-line"></div>
              <div className="vert-line"></div>
            </div>
            <div className="vertical-lines">
              <div className="vert-line"></div>
              <div className="vert-line"></div>
              <div className="vert-line"></div>
            </div>
            <div className="textup-box">
              <div className="textup">Contact & Consult with Mentalland</div>
              <div className="textup">Our special recommendation for you</div>
              <div className="textup">Enjoy your Journey</div>
            </div>
            <div className="text-box">
              <div className="text">Necessary Analysis of your condition</div>
              <div className="text">Booking</div>
              <div className="text">Return home & follow up</div>
            </div>
          </div>
        </div>
        <div className="ptreatments">
          <h2>popular treatments</h2>
          <div className="popularT">
            {surgeries.map((surgery) => (
              <div key={surgery.id}>
                {showExplanation[surgery.id] ? (
                  <div className="capex">
                    <p
                      className="explanation"
                      onClick={() => handleClick(surgery.id)}
                    >
                      <strong>{surgery.title}</strong>
                      <br /> {surgery.des}
                    </p>
                  </div>
                ) : (
                  <figure className="figure">
                    <img
                      src={`https://portals.mentalland.com/image/treatments/${surgery.img}`}
                      className="treat-img"
                      alt={surgery.title}
                    />
                    <figcaption className="caption-text">
                      {surgery.title}
                    </figcaption>{" "}
                    <button
                      onClick={() => handleClick(surgery.id)}
                      className="caption-link"
                    >
                      Read More
                    </button>{" "}
                  </figure>
                )}
              </div>
            ))}
            ;
          </div>
        </div>
        <div className="medical-service">
          <h2 className="mb-5">Medical services</h2>
          <Medicalservice heading="Medical services in Iran" />
          <Wellnessservice
            services={wellnessServices}
            heading="Wellness Services in Iran"
          />
          <Naturethservice
            services={naturalservices}
            heading="Nature therapy services in Iran"
          />
        </div>
        <div className="centers">
          <Hospital heading="medical centers" data={hospitals} />
          <Center heading="hotels" data={hotels} />
          <TourDoctor heading="doctors" data={consultants} />
        </div>
        <div className="travelguide">
          <h2>Iran travel guide</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </div>
          <Link className="downloadcatalouge">
            <HiOutlineDownload className="svg" />
            Download Catalouge
          </Link>
        </div>
        <div className="traveltoIranexp">
          <div className="memorableexp">
            <h2>My memorable experience of traveling to Iran</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur. Tellus gravida nulla in
              erat odio lacus fermentum. Risus vel laoreet non feugiat iaculis
              eget pulvinar. Libero purus turpis viverra molestie viverra cras
              arcu. Cursus ornare pellentesque sit lorem. Tempus pulvinar neque
              leo viverra sed enim nunc. Et porttitor proin egestas urna pretium
              adipiscing. Lacus id odio porta dolor venenatis iaculis sed nam
              aliquam. Et porttitor eget et ante pellentesque ac pellentesque
              nisl. Sed gravida sed vitae aliquam lectus porttitor aenean urna.
              Malesuada faucibus ut vulputate pellentesque et ultricies. Donec
              quam erat morbi nunc felis ultricies amet. Nunc.
            </div>
          </div>
          <div></div>
        </div>
        <div className="freeconsult">
          <h2>free consultation</h2>
          <div className="memorableexp mb-5 mt-3">
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
            volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut
            vitae felis convallis. Egestas enim diam ac nisi orci id tellus
            lobortis. Lacus in etiam rhoncus.
          </div>
          <Link to="/pages/contactus" className="getfreeconsult">
            Get a free Consultation{" "}
          </Link>
        </div>
        <div className="tourfaq">
          <h2 className="frequent mb-4">Most Frequently Asked Questions</h2>
          <div className="tfreq">
            <div>
              {tourismFaqs.map((tourismFaq, index) => (
                <HMfaq
                  key={index}
                  index={index}
                  question={tourismFaq.title_faqs}
                  answer={tourismFaq.content_faqs}
                />
              ))}
            </div>
            <div className="Tfaq">
              <img src={faq} alt="faq" className="group731 img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
