import React, { useState, useEffect } from "react";
import { Grid, FormControl, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
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
import adps from "../icons/Rectangle 67ps.png";
import chps from "../icons/Rectangle 67psy.png";
import semps from "../icons/Group 811.png";
import Upcoming from "./upcoming";
import bgImage from "../icons/Group 1246 (1).png";
import spzsem from "../icons/Group 1027.png";
import question from "../icons/Group 817.png";
import Mfaq from "./mfaq";

export default function Psychology() {
const { i18n } = useTranslation();
const [psychologyFaqs, setPsychologyFaqs] = useState([]);

const psyFaqsUrl =
  "https://portals.mentalland.com/api/V1/homepage/faqs_Psychology_" + i18n.language;

useEffect(() => {
  fetch(psyFaqsUrl)
    .then((response) => response.json())
    .then((data) => setPsychologyFaqs(data.data));
}, [psyFaqsUrl]);

useEffect(() => {
  setPsychologyFaqs([]);
  fetch(psyFaqsUrl)
    .then((response) => response.json())
    .then((data) => setPsychologyFaqs(data.data));
}, [i18n.language]);

  return (
    <div className="psychopages">
      <div
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          height: "calc(130vh - 50px)",
        }}
      >
        <Header className="whatsapp" />
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
      <div className="fullcontent"> <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid></Grid>
        <div className="">
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
          <div className="psycho">
            <div className="flow text-center">
              <div className="thumbnail">
                <img src={exp} className="img-fluid fl" alt="experience" />
                <span className="statics">+10</span>
                <span className="stat text-center">Years of Experience</span>
              </div>
              <div className="thumbnail">
                <img src={help} className="img-fluid fl" alt="patients" />
                <span className="statics">+1300</span>
                <span className="stat text-center">
                  Patients Received Help
                  <br /> This Year
                </span>
              </div>
              <div className="thumbnail">
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
              <div className="thumbnail">
                <img src={imp} className="img-fluid fl" alt="result" />
                <span className="statics">98%</span>
                <span className="stat text-center">
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
                <div className="ximg">
                  <img
                    src={adps}
                    className="img-fluid"
                    alt="psychology services"
                  />
                </div>
                <div className="adpsy">
                  <h3 className="subtitle">Adults Psychology</h3>
                  <div className="summary">
                    Lorem ipsum dolor sit amet consectetur. Mi pellentesque quis
                    eu vestibulum lectus. Porttitor integer consectetur mattis
                    elementum malesuada. Egestas ac dignissim amet pretium
                    ultricies. Molestie integer ornare nisl et nunc quisque non
                    sollicitudin. Aliquam fringilla rutrum morbi pellentesque id
                    orci commodo libero phasellus. Duis urna vel amet cras non
                    sem vitae sapien. Maecenas eget consequat euismod fusce
                    vehicula purus sed lorem. Adipiscing nulla amet morbi ipsum
                    nec lobortis egestas nec.
                  </div>
                  <Link to="/pages/psychologyAdults" className="learnMore mb-5">
                    <span className="more">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="chps">
                <div className="chpsy">
                  <h3 className="subtitle">Children / Teenagers Psychology</h3>
                  <div className="summary">
                    Lorem ipsum dolor sit amet consectetur. Mi pellentesque quis
                    eu vestibulum lectus. Porttitor integer consectetur mattis
                    elementum malesuada. Egestas ac dignissim amet pretium
                    ultricies. Molestie integer ornare nisl et nunc quisque non
                    sollicitudin. Aliquam fringilla rutrum morbi pellentesque id
                    orci commodo libero phasellus. Duis urna vel amet cras non
                    sem vitae sapien. Maecenas eget consequat euismod fusce
                    vehicula purus sed lorem. Adipiscing nulla amet morbi ipsum
                    nec lobortis egestas nec.
                  </div>
                  <Link to="/pages/psychologychildren" className="learnMore">
                    <span className="more">Learn more</span>
                  </Link>
                </div>
                <div className="ximg">
                  <img
                    src={chps}
                    className="img-fluid"
                    alt="children psychology"
                  />
                </div>
              </div>
            </div>
            <div className="sems">
              <div className="pusem">
                <div className="public">
                  <img
                    src={semps}
                    className="img-fluid"
                    alt="psychology services"
                  />
                </div>
                <div className="sempsy">
                  <h3 className="subtitle">Adults Psychology</h3>
                  <div className="summary">
                    Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi
                    mollis sit tortor proin proin sagittis. Id nec suspendisse
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat.
                    <br />
                    <br />
                    In pellentesque volutpat urna ultrices vitae. Sed magna
                    vitae placerat eu leo potenti semper id. Sed elementum eget
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
                    lacus erat. Vivamus orci bibendum at purus elit. Vel
                    vehicula donec amet a dolor sollicitudin ut. Lectus cursus
                    ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque
                    egestas in nec luctus ornare amet. In pellentesque volutpat
                    urna ultrices vitae. Sed magna vitae placerat eu leo potenti
                    semper id. Sed elementum eget adipiscing nisl in vestibulum.
                    Volutpat.
                    <br />
                    <br />
                    In pellentesque volutpat urna ultrices vitae. Sed magna
                    vitae placerat eu leo potenti semper id. Sed elementum eget
                    adipiscing nisl in vestibulum. Volutpat.
                  </div>
                </div>
                <div className="specialized">
                  <img
                    src={spzsem}
                    className="img-fluid"
                    alt="psychology services"
                  />
                </div>
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
                  {psychologyFaqs.map((psychologyFaq, index) =>
                  <Mfaq
                  key={index}
                    index={index}
                    question={psychologyFaq.title_faqs}
                    answer={psychologyFaq.content_faqs}
                  />)}
                </div>
                <div className="question">
                  <img src={question} alt="faq" className="img-fluid" />
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
