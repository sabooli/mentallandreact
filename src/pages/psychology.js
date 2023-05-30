import React, { useEffect } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import exp from "../icons/Group 1022.svg";
import help from "../icons/Group 1023.svg";
import prof from "../icons/Group 1024.svg";
import imp from "../icons/Group 1025.svg";
import cadult from "../icons/Rectangle 70.svg";
import cchild from "../icons/Rectangle 70ch.svg";
import csem from "../icons/Rectangle 70se.svg";
import csp from "../icons/Rectangle 70sp.svg";
import adps from "../icons/Rectangle 67.svg";
import chps from "../icons/Rectangle 67ch.svg";
import semps from "../icons/Group 811.svg";
import Upcoming from "./upcoming";
import bgImage from "../icons/Group 1246.png";
import spzsem from "../icons/Group 1027.svg";
import question from "../icons/Group 817.svg";
import Mfaq from "./mfaq";


export default function Psychology() {
  useEffect(() => {
  fetch("https://mentalland.com/api/V1/homepage/category_const_list")
    .then((response) => response.json())
    .then((data) => console.log(data));
}, []); 
return (
    <div>
    
      <div
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header />
        <Navbar />
        <div className="strategy">
          <h1 className="mainTopic">
            Heal Your <br />
            Mind & Soul
          </h1>
          <div className="subTopic">
            Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet mi
            leo aliquet in vestibulum consectetur. Lectus magna eleifend{" "}
          </div>
        </div>
      </div>
      <div className="fullcontent">
        <div className="psycho">
          <div className="choose">
            <div className="selecting">
              <Form.Select aria-label="wid">
                <option>Select the Field...</option>
                <option value="1">Depression</option>
                <option value="2">Anxiety</option>
                <option value="3">Unhealthy Eating</option>
                <option value="4">
                  Life Transitions, Relationship Difficulties
                </option>
                <option value="5">Adjustment Issues</option>
              </Form.Select>
            </div>
            <div className="selecting">
              <Form.Select aria-label="wid">
                <option>Select the Psychologist...</option>
                <option value="1">Dr. Mary Green</option>
                <option value="2">Dr. Tom Brown</option>
                <option value="3">Dr. Elizabeth Smith</option>
                <option value="4">Dr. Mary Green</option>
                <option value="5">Dr. Tom Brown</option>
                <option value="6">Dr. Hue Smith</option>
              </Form.Select>
            </div>
            <div className="request">
              <Link to="#" className="appoint">
                Request Appointment
              </Link>
            </div>
          </div>
          <div className="flow text-center">
            <div className="">
              <img src={exp} className="img-fluid fl" alt="experience" />
              <span className="statics">+10</span>
              <span className="stat text-center">Years of Experience</span>
            </div>
            <div className="">
              <img src={help} className="img-fluid fl" alt="patients" />
              <span className="statics">+1300</span>
              <span className="statb text-center">
                Patients Received Help
                <br /> This Year
              </span>
            </div>
            <div className="">
              <img
                src={prof}
                className="img-fluid fl"
                alt="professinal treatment"
              />
              <span className="statics">+100</span>
              <span className="stat text-center">
                Professional Psychologists
              </span>
            </div>
            <div className="">
              <img src={imp} className="img-fluid fl" alt="result" />
              <span className="statics">98%</span>
              <span className="statl text-center">
                Clients improved
                <br />
                their condition
              </span>
            </div>
          </div>
          <div className="department">
            <h2 className="forYou text-center">
              <span>What can we do for you</span>
              <br />
              in psychology department
            </h2>
            <div className="figures">
              <figure className="">
                <img
                  src={cadult}
                  className="img-fluid"
                  alt="psychology services"
                />
                <figcaption className="caption text-center">
                  Adults Psychology
                </figcaption>
              </figure>
              <figure className="">
                <img
                  src={cchild}
                  className="img-fluid"
                  alt="psychology services"
                />
                <figcaption className="caption text-center">
                  Children / Teenagers Psychology
                </figcaption>
              </figure>
              <figure className="">
                <img
                  src={csem}
                  className="img-fluid"
                  alt="psychology services"
                />
                <figcaption className="caption text-center">
                  Public Seminars
                </figcaption>
              </figure>
              <figure className="">
                <img
                  src={csp}
                  className="img-fluid"
                  alt="psychology services"
                />
                <figcaption className="caption text-center">
                  Specialized Seminars
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="detail">
            <div className="adps">
              <img
                src={adps}
                className="ximg img-fluid"
                alt="psychology services"
              />
              <div className="adpsy">
                <h3 className="subtitle">Adults Psychology</h3>
                <div className="summary">
                  Lorem ipsum dolor sit amet consectetur. Mi pellentesque quis
                  eu vestibulum lectus. Porttitor integer consectetur mattis
                  elementum malesuada. Egestas ac dignissim amet pretium
                  ultricies. Molestie integer ornare nisl et nunc quisque non
                  sollicitudin. Aliquam fringilla rutrum morbi pellentesque id
                  orci commodo libero phasellus. Duis urna vel amet cras non sem
                  vitae sapien. Maecenas eget consequat euismod fusce vehicula
                  purus sed lorem. Adipiscing nulla amet morbi ipsum nec
                  lobortis egestas nec.
                </div>
                <Link to="/" className="learnMore">
                  <span className="more">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="chps">
            <div className="chpsy">
              <h3 className="subtitle">Children / Teenagers Psychology</h3>
              <div className="summary">
                Lorem ipsum dolor sit amet consectetur. Mi pellentesque quis eu
                vestibulum lectus. Porttitor integer consectetur mattis
                elementum malesuada. Egestas ac dignissim amet pretium
                ultricies. Molestie integer ornare nisl et nunc quisque non
                sollicitudin. Aliquam fringilla rutrum morbi pellentesque id
                orci commodo libero phasellus. Duis urna vel amet cras non sem
                vitae sapien. Maecenas eget consequat euismod fusce vehicula
                purus sed lorem. Adipiscing nulla amet morbi ipsum nec lobortis
                egestas nec.
              </div>
              <Link to="/" className="learnMore">
                <span className="more">Learn more</span>
              </Link>
            </div>
            <img
              src={chps}
              className="ximg img-fluid"
              alt="children psychology"
            />
          </div>
          <div className="sems">
            <div className="pusem">
              <img
                src={semps}
                className="public img-fluid"
                alt="psychology services"
              />
              <div className="sempsy">
                <h3 className="subtitle">Adults Psychology</h3>
                <div className="summary">
                  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                  mollis sit tortor proin proin sagittis. Id nec suspendisse
                  lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula
                  donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi
                  feugiat nulla enim. Nisl phasellus viverra quisque egestas in
                  nec luctus ornare amet. In pellentesque volutpat urna ultrices
                  vitae. Sed magna vitae placerat eu leo potenti semper id. Sed
                  elementum eget adipiscing nisl in vestibulum. Volutpat.
                  <br />
                  <br />
                  In pellentesque volutpat urna ultrices vitae. Sed magna vitae
                  placerat eu leo potenti semper id. Sed elementum eget
                  adipiscing nisl in vestibulum. Volutpat.
                </div>
              </div>
            </div>
          </div>
          <Upcoming heading="Upcoming Public Seminars & Events" />
          <div className="spzsems">
            <div className="spzsem">
              <div className="spzpsy">
                <h3 className="subtitle">Adults Psychology</h3>
                <div className="summary">
                  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                  mollis sit tortor proin proin sagittis. Id nec suspendisse
                  lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula
                  donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi
                  feugiat nulla enim. Nisl phasellus viverra quisque egestas in
                  nec luctus ornare amet. In pellentesque volutpat urna ultrices
                  vitae. Sed magna vitae placerat eu leo potenti semper id. Sed
                  elementum eget adipiscing nisl in vestibulum. Volutpat.
                  <br />
                  <br />
                  In pellentesque volutpat urna ultrices vitae. Sed magna vitae
                  placerat eu leo potenti semper id. Sed elementum eget
                  adipiscing nisl in vestibulum. Volutpat.
                </div>
              </div>
              <img
                src={spzsem}
                className="specialized img-fluid"
                alt="psychology services"
              />
            </div>
          </div>
          <Upcoming
            heading="Upcoming Specialized Seminars & Events"
            color="#FBEAD1"
          />
          <div className="faq">
            <h2 className="frequent">Most Frequently Asked Questions</h2>
            <div className="freq">
              <div>
                <Mfaq
                  index={0}
                  question="Lorem ipsum dolor sit amet consectetur. Est ut vulputate scelerisque nibh?"
                  answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                />
                <Mfaq
                  index={1}
                  question="Lorem ipsum dolor sit amet consectetur. Donec at ut diam sit vitae gravida nisi ?"
                  answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                />
                <Mfaq
                  index={2}
                  question="Lorem ipsum dolor sit amet consectetur. Nibh nisi nec velit arcu tristique. Justo nulla?"
                  answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                />
                <Mfaq
                  index={3}
                  question="Lorem ipsum dolor sit amet consectetur. Ut neque pellentesque felis orci.?"
                  answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                />
                <Mfaq
                  index={4}
                  question="Lorem ipsum dolor sit amet consectetur. Amet mi viverra praesent imperdiet proin ne?"
                  answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
                />
              </div>
              <img src={question} alt="faq" className="question" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
