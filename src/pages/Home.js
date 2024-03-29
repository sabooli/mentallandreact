import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import { useTranslation } from "react-i18next";
import homepsychology from "../icons/Rectangle 11home.png";
import certificate from "../icons/Group 891.png";
import madults from "../icons/Rectangle 83adult.png";
import { Link } from "react-router-dom";
import { RiHeartPulseLine } from "react-icons/ri";
import { FaTheaterMasks } from "react-icons/fa";
import { SlBriefcase } from "react-icons/sl";
import telescope from "../icons/Group 768.svg";
import mission from "../icons/Group 768m.svg";
import value from "../icons/Group 768v.svg";
import goal from "../icons/Group 768g.svg";
import mentalonphone from "../icons/Group 779.png";
import Customercomments from "./customercomments";
import Peace from "../icons/Rectangle 44.png";
import HMfaq from "./homemfaq";
import group731 from "../icons/Group 731.svg";

export default function Home() {
  const [activeButton, setActiveButton] = useState(0);
  const [text, setText] = useState("TextA");
  const [image, setImage] = useState(homepsychology);
  const [faqData, setFaqData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [paComments, setPaComments] = useState([]);
  const [showMoreText, setShowMoreText] = useState(true);
  const { t, i18n } = useTranslation();

const handleClick = () => {
  setShowMoreText(false);
};
 
 const patientUrl =
   "https://portals.mentalland.com/api/V1/homepage/patient_comments_" + i18n.language;

  useEffect(() => {
    fetch(patientUrl)
      .then((response) => response.json())
      .then((data) => setPaComments(data.data));
  }, [patientUrl]);

  
useEffect(() => {
  setPaComments([]);
  fetch(patientUrl)
    .then((response) => response.json())
    .then((data) => setPaComments(data.data));
}, [i18n.language]);
  


const handleClickRead = (index) => {
  setExpandedIndex(index);
}
const handleClickBack = () => {
    setExpandedIndex(-1);
}
  const handleButtonClick = (index) => {
    setActiveButton(index);

  if (index === 0) {
    setText("TextA");
    setImage(homepsychology);
  } else if (index === 1) {
    setText("TextB");
    setImage(certificate);
  } else if (index === 2) {
    setText("TextC");
    setImage(madults);
  }
};
   
const apiUrl = t("apiUrl");

useEffect(() => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setFaqData(data.data));
}, [apiUrl]);

useEffect(() => {
  setFaqData([]);
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setFaqData(data.data));
}, [i18n.language]);

const articleUrl = t("articleUrl");

useEffect(() => {
  fetch(articleUrl)
    .then((response) => response.json())
    .then((data) => setArticleData(data.data));
}, [articleUrl]);

useEffect(() => {
  setArticleData([]);
  fetch(articleUrl)
    .then((response) => response.json())
    .then((data) => setArticleData(data.data));
}, [i18n.language]);

  return (
    <div>
      <div
        className="bg-home"
        style={{
          backgroundImage: `url("${Peace}")`,
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#333",
          height: "calc(140vh)",
          minHeight: "500px",
        }}
      >
        <Header className="whatsapp" />
        <Navbar />
        {i18n.language === "fa" ? (
          <div className="homeStrategyfa">
            <div className="textWrapper">
              <h1 className="mainname">mentalland</h1>
              <h1 className="homemainTopic">
                {" "}
                where you can learn, improve, get calm & Be happy
              </h1>
              <h2 className="homesubTopic">
                Lorem ipsum dolor sit amet consectetur. Amet velit convallis
                amet mi leo aliquet in vestibulum consectetur. Lectus magna
                eleifend{" "}
              </h2>
              <div className="homelink">
                <Link to="#PBA" className="learnMore">
                  <span className="more">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="homeStrategy">
            <h1 className="mainname">mentalland</h1>
            <h1 className="homemainTopic">
              {" "}
              where you can learn, improve, get calm & Be happy
            </h1>
            <h2 className="homesubTopic">
              Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet
              mi leo aliquet in vestibulum consectetur. Lectus magna eleifend{" "}
            </h2>
            <div className="homelink">
              <Link to="#" className="learnMore">
                <span className="more">Learn more</span>
              </Link>
            </div>
          </div>
        )}{" "}
      </div>
      <div>
        <div className="homepage">
          <div className="band">
            <div className="tab">
              <div className="count">+4000</div>
              <span className="matter">Treated Patients</span>
            </div>
            <div className="tab">
              <div className="count">+250</div>
              <span className="matter">graduated art students</span>
            </div>
            <div className="tab">
              <div className="count">+100</div>
              <span className="matter">performed seminars</span>
            </div>
            <div className="tab">
              <div className="count">+1200</div>
              <span className="matter">job opportunities</span>
            </div>
          </div>
          <div className="subsume">
            <div className="home">
              <div className="partI">
                <h2 className="ourServices" id="PBA">Our Professional Services</h2>
                <div className="summarize">
                  <span
                    className={activeButton === 0 ? "activecase" : ""}
                    onClick={() => handleButtonClick(0)}
                  >
                    <div className="boxy">
                      <div
                        className={
                          activeButton === 0 ? "smallcircleII" : "smallcircle"
                        }
                      >
                        <RiHeartPulseLine
                          className={
                            activeButton === 0 ? "heartbreak" : "heart"
                          }
                        />{" "}
                      </div>
                      <h3 className="heading">Psychology</h3>
                    </div>
                  </span>
                  <span
                    className={activeButton === 1 ? "activecase" : ""}
                    onClick={() => handleButtonClick(1)}
                  >
                    <div className="boxy">
                      <div
                        className={
                          activeButton === 1 ? "smallcircleII" : "smallcircle"
                        }
                      >
                        <SlBriefcase
                          className={
                            activeButton === 1 ? "heartbreak" : "heart"
                          }
                        />
                      </div>
                      <h3 className="heading">Business</h3>
                    </div>
                  </span>
                  <span
                    className={activeButton === 2 ? "activecase" : ""}
                    onClick={() => handleButtonClick(2)}
                  >
                    <div className="boxy">
                      <div
                        className={
                          activeButton === 2 ? "smallcircleII" : "smallcircle"
                        }
                      >
                        <FaTheaterMasks
                          className={
                            activeButton === 2 ? "heartbreak" : "heart"
                          }
                        />
                      </div>
                      <h3 className="heading">Art</h3>
                    </div>
                  </span>
                </div>
                <div className="setup mt-5">
                  <div className="homepsy">
                    <div className="words">{t(text)}</div>
                    {activeButton === 0 ? (
                      <Link to="/pages/psychology" className="learnMore">
                        <span className="more">Learn more</span>
                      </Link>
                    ) : activeButton === 1 ? (
                      <Link to="/pages/business" className="learnMore">
                        <span className="more">Learn more</span>
                      </Link>
                    ) : activeButton === 2 ? (
                      <Link to="/pages/Art" className="learnMore">
                        <span className="more">Learn more</span>
                      </Link>
                    ) : null}
                  </div>
                  <div>
                    <div className="homepsychology">
                      <img
                        src={image}
                        className="img-fluid"
                        alt={t("Active Button")}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="partII">
                <h2 className="introduction">Who We are</h2>
                <div className="introwords">
                  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                  mollis sit tortor proin proin sagittis. Id nec suspendisse
                  lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula
                  donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi
                  feugiat nulla enim. Nisl phasellus viverra quisque egestas in
                  nec luctus ornare amet. In pellentesque volutpat urna ultrices
                  vitae. Sed magna vitae placerat eu leo potenti semper id. Sed
                  elementum eget adipiscing nisl in vestibulum. Volutpat.
                </div>
                <div className="circles">
                  <figure>
                    <div className="circle circle2019">
                      <span className="establishyear">2019</span>
                    </div>
                    <figcaption className="circlecaption">
                      Created with Love
                    </figcaption>
                  </figure>
                  <figure>
                    <div className="circle c2020">
                      <span className="establishyear">2020</span>
                    </div>
                    <figcaption className="circlecaption">
                      Art Academy Added
                    </figcaption>
                  </figure>{" "}
                  <figure>
                    {" "}
                    <div className="circle c2020">
                      <span className="establishyear">2021</span>
                    </div>
                    <figcaption className="circlecaption">
                      BEing the first mental website in Iran
                    </figcaption>
                  </figure>{" "}
                  <figure>
                    {" "}
                    <div className="circle c2020">
                      <span className="establishyear">2023</span>
                    </div>
                    <figcaption className="circlecaption">
                      redesigned, improved and expanded{" "}
                    </figcaption>
                  </figure>
                </div>
                {showMoreText && (
                  <div className="d-flex justify-content-center">
                    {" "}
                    <button className="learnMore" onClick={handleClick} style={{ border: 'none' }} >
                      <span className="more">Learn more</span>
                    </button>
                  </div>
                )}
                {!showMoreText && (
                  <p className="introwords">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut.{" "}
                  </p>
                )}
              </div>
              <div className="partIII">
                <h3 className="vision">Our vision & Mission</h3>
                <div className="visionwords">
                  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                  mollis sit tortor proin proin sagittis. Id nec suspendisse
                  lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula
                  donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi
                  feugiat nulla enim. Nisl phasellus viverra quisque egestas in
                  nec luctus ornare amet. In pellentesque volutpat urna ultrices
                  vitae.
                </div>
                <div className="mission">
                  <figure className="VM text-center">
                    <img
                      src={telescope}
                      className="VMimage"
                      alt="vision of MentalLand"
                      loading="lazy"
                    />
                    <h4 className="VMheading">Vision</h4>
                    <span className="VMtext">
                      Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                      nisi mollis sit tortor proin proin sagittis. Id nec
                      suspendisse lacus erat. Vivamus orci bibendum at purus
                      elit. Vel vehicula donec amet a dolor sollicitudin ut.
                      Lectus cvolutpat urna ultrices vitae.
                    </span>
                  </figure>
                  <figure className="VM text-center">
                    <img
                      src={mission}
                      className="VMimage"
                      alt="Mission of MentalLand"
                      loading="lazy"
                    />
                    <h4 className="VMheading">Mission</h4>
                    <span className="VMtext">
                      Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                      nisi mollis sit tortor proin proin sagittis. Id nec
                      suspendisse lacus erat. Vivamus orci bibendum at purus
                      elit. Vel vehicula donec amet a dolor sollicitudin ut.
                      Lectus cvolutpat urna ultrices vitae.
                    </span>
                  </figure>
                  <figure className="VM text-center">
                    <img
                      src={value}
                      className="VMimage"
                      alt="value MentalLand"
                      loading="lazy"
                    />
                    <h4 className="VMheading">Value</h4>
                    <span className="VMtext">
                      Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                      nisi mollis sit tortor proin proin sagittis. Id nec
                      suspendisse lacus erat. Vivamus orci bibendum at purus
                      elit. Vel vehicula donec amet a dolor sollicitudin ut.
                      Lectus cvolutpat urna ultrices vitae.
                    </span>
                  </figure>
                  <figure className="VM text-center">
                    <img
                      src={goal}
                      className="VMimage"
                      alt="goal MentalLand"
                      loading="lazy"
                    />
                    <h4 className="VMheading">Goal</h4>
                    <span className="VMtext">
                      Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                      nisi mollis sit tortor proin proin sagittis. Id nec
                      suspendisse lacus erat. Vivamus orci bibendum at purus
                      elit. Vel vehicula donec amet a dolor sollicitudin ut.
                      Lectus cvolutpat urna ultrices vitae.
                    </span>
                  </figure>
                </div>
              </div>
              <div className="partIV">
                <div>
                  <div className="mentallandonphone">
                    <div className="MoPhimage">
                      <img
                        src={mentalonphone}
                        className="img-fluid"
                        alt="MentalLand on phone"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="MoPhheading">Mentalland on your phone</h3>
                      <div className="MoPhtext">
                        Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                        nisi mollis sit tortor proin proin sagittis. Id nec
                        suspendisse lacus erat. Vivamus orci bibendum at purus
                        elit. Vel vehicula donec amet a dolor sollicitudin ut.
                        Lectus cursus ipsum mi feugiat nulla enim. Nisl
                        phasellus viverra quisque egestas in nec luctus ornare
                        amet.
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet consectetur. Pretium
                            rutrum{" "}
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet consectetur. Pretium
                            rutrum nisi
                          </li>
                          <li>Lorem ipsum dolor sit amet consectetur </li>
                          <li>
                            Lorem ipsum dolor sit amet consectetur. Pretium
                            rutrum nisi{" "}
                          </li>
                        </ul>
                        <div className="Monphonedl">
                          <Link to="#" className="learnMore">
                            <span className="more">Download</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partV">
                <Customercomments
                  comments={paComments}
                  heading="What Our Patients Say"
                />
              </div>
              <div className="partVI">
                <div className="latestArticles">
                  <h4 className="latestheading">latest articles</h4>
                  <div className="latestWrapper">
                    {articleData.map((article, index) => (
                      <>
                        <div key={index}>
                          {expandedIndex === index ? (
                            <div className="articlewords bg-fafefe text-start">
                              <h5>{article.title_blog}</h5>
                              <span>{article.content_blog}</span>
                              <div className="back-link">
                                <Link
                                  className="readlessarticle"
                                  onClick={() => handleClickBack(index)}
                                >
                                  Back
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <div className="latest pb-3">
                              <div>
                                <img
                                  src={`https://www.portals.mentalland.com/image/blog/${article.thumbnail_blog}`}
                                  className="latearticleimage img-fluid"
                                  alt="latest articles MentalLand"
                                  loading="lazy"
                                />
                              </div>
                              <div className="articlewords text-start">
                                <h5>{article.title_blog}</h5>
                                <span className="truncate-text">
                                  {article.content_blog}
                                </span>
                              </div>
                              <div className="readarticle">
                                <Link
                                  onClick={() => handleClickRead(index)}
                                  className="Readlatest"
                                >
                                  <span className="Readlatestword">Read</span>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="partVII">
                <h2 className="hfrequent">Most Frequently Asked Questions</h2>
                <div className="hfreq">
                  <div>
                    {faqData.map((faq, index) => (
                      <HMfaq
                        key={index}
                        index={index}
                        question={faq.title_faqs}
                        answer={faq.content_faqs}
                      />
                    ))}
                  </div>
                  <img src={group731} alt="faq" className="group731" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
