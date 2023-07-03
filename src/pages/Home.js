import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import { useTranslation } from "react-i18next";
import homepsychology from "../icons/Rectangle 11home.png";
import { Link } from "react-router-dom";
import telescope from "../icons/Group 768.svg";
import mission from "../icons/Group 768m.svg";
import value from "../icons/Group 768v.svg";
import goal from "../icons/Group 768g.svg";
import mentalonphone from "../icons/Group 779.png";
import Customercomments from "./customercomments";
import Peace from "../icons/Rectangle 44.png";
import latearticle from "../icons/Rectangle 31a.svg";
import HMfaq from "./homemfaq";
import group731 from "../icons/Group 731.svg";

export default function Home() {
  const [activeButton, setActiveButton] = useState(0);
  const [faqData, setFaqData] = useState([]);
  const [articleData, setArticleData] = useState([]);
  const { t, i18n } = useTranslation();


  const handleButtonClick = (index) => {
    setActiveButton(index);
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

useEffect(() => {
  fetch("https://www.mentalland.com/api/V1/homepage/blogs_en_list")
    .then((response) => response.json())
    .then((data) => setArticleData(data.data));
}, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${Peace}")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="whatsapp" />
        <Navbar />
        <div className="homeStrategy text-start">
          <h1 className="homemainTopic">
            <span>mentalland</span> where you can learn, improve, get calm & Be
            happy
          </h1>
          <h2 className="homesubTopic">
            Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet mi
            leo aliquet in vestibulum consectetur. Lectus magna eleifend{" "}
          </h2>
          <div className="homelink">
            <Link to="/" className="learnMore">
              <span className="more">Learn more</span>
            </Link>
          </div>
        </div>
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
                <h2 className="ourServices">Our Professional Services</h2>
                <div className="summarize">
                  <span
                    className={activeButton === 0 ? "activecase" : ""}
                    onClick={() => handleButtonClick(0)}
                  >
                    <div className="boxy">
                      <h3 className="heading">Psychology</h3>
                    </div>
                  </span>
                  <span
                    className={activeButton === 1 ? "activecase" : ""}
                    onClick={() => handleButtonClick(1)}
                  >
                    <div className="boxy">
                      <h3 className="heading">Business</h3>
                    </div>
                  </span>
                  <span
                    className={activeButton === 2 ? "activecase" : ""}
                    onClick={() => handleButtonClick(2)}
                  >
                    <div className="boxy">
                      <h3 className="heading">Art</h3>
                    </div>
                  </span>
                </div>
                <div className="setup mt-5">
                  <div className="homepsy">
                    <div className="words">
                      Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                      nisi mollis sit tortor proin proin sagittis. Id nec
                      suspendisse lacus erat. Vivamus orci bibendum at purus
                      elit. Vel vehicula donec amet a dolor sollicitudin ut.
                      Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus
                      viverra quisque egestas in nec luctus ornare amet. In
                      pellentesque volutpat urna ultrices vitae. Sed magna vitae
                      placerat eu leo potenti semper id. Sed elementum eget
                      adipiscing nisl in vestibulum. Volutpat.
                    </div>
                    <Link to="/" className="learnMore">
                      <span className="more">Learn more</span>
                    </Link>
                  </div>
                  <div>
                    <div className="homepsychology">
                      <img
                        src={homepsychology}
                        className="img-fluid"
                        alt="psychology"
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
                <div className="d-flex justify-content-center">
                  <Link to="/" className="learnMore">
                    <span className="more">Learn more</span>
                  </Link>
                </div>
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
                    <img src={goal} className="VMimage" alt="goal MentalLand" />
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
                          <Link to="/" className="learnMore">
                            <span className="more">Download</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="partV">
                <Customercomments heading="What Our Patients Say" />
              </div>
              <div className="partVI">
                <div className="latestArticles">
                  <h4 className="latestheading">latest articles</h4>
                  <div className="latestWrapper">
                    {articleData.map((article, index) => (
                      <>
                        <div className="latest pb-3">
                          {" "}
                          <div>
                            <img
                              src={`https://www.mentalland.com/image/blog/${article.thumbnail_blog}`}
                              className="latearticleimage img-fluid"
                              alt="latest articles MentalLand"
                            />
                          </div>
                          <div className="articlewords text-start">
                            <h5>{article.title_blog}</h5>
                            <span>{article.content_blog}</span>
                          </div>
                          <div className="readarticle">
                            <Link to="/" className="Readlatest">
                              <span className="Readlatestword">Read</span>
                            </Link>
                          </div>
                        </div>{" "}
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
