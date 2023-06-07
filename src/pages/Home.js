import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import homepsychology from "../icons/Rectangle 11home.svg";
import { Link } from "react-router-dom";
import telescope from "../icons/Group 768.svg";
import mission from "../icons/Group 768m.svg";
import value from "../icons/Group 768v.svg";
import goal from "../icons/Group 768g.svg";
import mentalonphone from "../icons/Group 779.svg";
import Customercomments from "./customercomments";
import Peace from "../icons/Rectangle 44-min.png";
import latearticle from "../icons/Rectangle 31a.svg";
import HMfaq from "./homemfaq";
import group731 from "../icons/Group 731.svg";

export default function Home() {
  const [activeButton, setActiveButton] = useState(0);
  const [faqData, setFaqData] = useState([]);


  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  
 
useEffect(() => {
  fetch("http://www.mentalland.com/api/V1/homepage/faqs_english")
    .then((response) => response.json())
    .then((data) => setFaqData(data.data[index]));
}, []);

  const index = 0;

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${Peace}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
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
          <div>
            <Link to="/" className="learnMore">
              <span className="more">Learn more</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
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
              <div className="setup">
                <div className="homepsy">
                  <div className="words">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat.
                  </div>
                  <Link to="/" className="learnMore">
                    <span className="more">Learn more</span>
                  </Link>
                </div>
                <div>
                  <img
                    src={homepsychology}
                    className="homepsychology"
                    alt="psychology"
                  />
                </div>
              </div>
            </div>
            <div className="partII">
              <h2 className="introduction">Who We are</h2>
              <div className="introwords">
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                mollis sit tortor proin proin sagittis. Id nec suspendisse lacus
                erat. Vivamus orci bibendum at purus elit. Vel vehicula donec
                amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat
                nulla enim. Nisl phasellus viverra quisque egestas in nec luctus
                ornare amet. In pellentesque volutpat urna ultrices vitae. Sed
                magna vitae placerat eu leo potenti semper id. Sed elementum
                eget adipiscing nisl in vestibulum. Volutpat.
              </div>
              <div className="circles">
                <figure>
                  <div className="circle">
                    <span className="establishyear">2019</span>
                  </div>
                  <figcaption className="circlecaption">
                    Created with Love
                  </figcaption>
                </figure>
                <figure>
                  <div className="circle">
                    <span className="establishyear">2020</span>
                  </div>
                  <figcaption className="circlecaption">
                    Art Academy Added
                  </figcaption>
                </figure>{" "}
                <figure>
                  {" "}
                  <div className="circle">
                    <span className="establishyear">2021</span>
                  </div>
                  <figcaption className="circlecaption">
                    BEing the first mental website in Iran
                  </figcaption>
                </figure>{" "}
                <figure>
                  {" "}
                  <div className="circle">
                    <span className="establishyear">2023</span>
                  </div>
                  <figcaption className="circlecaption">
                    redesigned, improved and expanded{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="text-center">
                <Link to="/" className="learnMore">
                  <span className="more">Learn more</span>
                </Link>
              </div>
            </div>
            <div className="partIII">
              <h3 className="vision">Our vision & Mission</h3>
              <div className="visionwords">
                Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                mollis sit tortor proin proin sagittis. Id nec suspendisse lacus
                erat. Vivamus orci bibendum at purus elit. Vel vehicula donec
                amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat
                nulla enim. Nisl phasellus viverra quisque egestas in nec luctus
                ornare amet. In pellentesque volutpat urna ultrices vitae.
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
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus
                    cvolutpat urna ultrices vitae.
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
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus
                    cvolutpat urna ultrices vitae.
                  </span>
                </figure>
                <figure className="VM text-center">
                  <img src={value} className="VMimage" alt="value MentalLand" />
                  <h4 className="VMheading">Value</h4>
                  <span className="VMtext">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus
                    cvolutpat urna ultrices vitae.
                  </span>
                </figure>
                <figure className="VM text-center">
                  <img src={goal} className="VMimage" alt="goal MentalLand" />
                  <h4 className="VMheading">Goal</h4>
                  <span className="VMtext">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus
                    cvolutpat urna ultrices vitae.
                  </span>
                </figure>
              </div>
            </div>
            <div className="partIV">
              <div>
                <div className="mentallandonphone">
                  <div>
                    <img
                      src={mentalonphone}
                      className="MoPhimage img-fluid"
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
                      Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus
                      viverra quisque egestas in nec luctus ornare amet.
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Pretium rutrum{" "}
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                          nisi
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur </li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur. Pretium rutrum
                          nisi{" "}
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
                <div className="latest">
                  <div>
                    <img
                      src={latearticle}
                      className="latearticleimage"
                      alt="latest articles MentalLand"
                    />
                  </div>
                  <div className="articlewords text-start">
                    <h5>Lorem ipsum dolor sit amet consectetur. Magna.</h5>
                    <span>
                      Lorem ipsum dolor sit amet consectetur. Etiam aliquet
                      tristique turpis ultrices ac augue eu adipiscing turpis.
                      Ultricies rhoncus semper in id nec faucibus non vulputate
                      vestibulum. Pharetra a elementum in.
                    </span>
                  </div>
                  <div className="readarticle">
                    <Link to="/" className="Readlatest">
                      <span className="Readlatestword">Read</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="partVII">
              <h2 className="hfrequent">Most Frequently Asked Questions</h2>
              <div className="hfreq">
                <div>
                  <HMfaq
                    index={index}
                    question={faqData.title_faqs}
                    answer={faqData.content_faqs}
                  />
                  <HMfaq
                    index={1}
                    question="Lorem ipsum dolor sit amet consectetur. Donec at ut diam sit vitae gravida nisi ?"
                    answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                  />
                  <HMfaq
                    index={2}
                    question="Lorem ipsum dolor sit amet consectetur. Nibh nisi nec velit arcu tristique. Justo nulla?"
                    answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                  />
                  <HMfaq
                    index={3}
                    question="Lorem ipsum dolor sit amet consectetur. Ut neque pellentesque felis orci.?"
                    answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                  />
                  <HMfaq
                    index={4}
                    question="Lorem ipsum dolor sit amet consectetur. Amet mi viverra praesent imperdiet proin ne?"
                    answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                  />
                </div>
                <img src={group731} alt="faq" className="group731" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
