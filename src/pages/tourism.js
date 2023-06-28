import React from "react";
import tourism from "../icons/Rectangle 47.png";
import Rhino from "../icons/Rectangle 314.png";
import general from "../icons/Rectangle 313.png";
import transplant from "../icons/Rectangle 315.png";
import IVF from "../icons/Rectangle 316.png";
import visa from "../icons/Rectangle 318.png";
import R323 from "../icons/Rectangle 323.png";
import R324 from "../icons/Rectangle 324.png";
import R325 from "../icons/Rectangle 325.png";
import R326 from "../icons/Rectangle 326.png";
import R327 from "../icons/Rectangle 327.png";
import R328 from "../icons/Rectangle 328.png";
import R329 from "../icons/Rectangle 329.png";
import R330 from "../icons/Rectangle 330.png";
import medical from "../icons/Medical.svg";
import travel from "../icons/travel.svg";
import Medicalservice from "./medicalservice";
import Wellnessservice from "./wellnessservice";
import Naturethservice from "./naturethservice";
import Center from "./center";
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
          <Link className="tourlink">
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
            <figure className="figure">
              <img src={R323} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">Liposuction</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R324} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">Face lift</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R325} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">Rhinoplasty</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R326} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">Smile Correction</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R327} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">Herniated disc</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R328} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">
                Heart disease Treatment
              </figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R329} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">IVF</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
            <figure>
              <img src={R330} className="img-fluid" alt="liposuction Iran" />
              <figcaption class="caption-text">Hair Loss</figcaption>
              <Link href="#" class="caption-link">
                Read More
              </Link>
            </figure>
          </div>
        </div>
        <div className="medical-service">
          <h2 className="mb-5">Medical services</h2>
          <Medicalservice heading="Medical services in Iran" />
          <Wellnessservice heading="Wellness Services in Iran" />
          <Naturethservice heading="Nature therapy services in Iran" />
        </div>
        <div className="centers">
          <Center heading="medical centers" />
          <Center heading="hotels" />
          <Center heading="doctors" />
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
          <Link className="getfreeconsult">Get a free Consultation </Link>
        </div>
        <div className="tourfaq">
          <h2 className="frequent mb-4">Most Frequently Asked Questions</h2>
          <div className="tfreq">
            <div>
              <HMfaq
                index={0}
                question="Lorem ipsum dolor sit amet consectetur. Donec at ut diam sit vitae gravida nisi ?"
                answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
              />
              <HMfaq
                index={1}
                question="Lorem ipsum dolor sit amet consectetur. Nibh nisi nec velit arcu tristique. Justo nulla?"
                answer="Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada."
              />
              <HMfaq
                index={2}
                question="Lorem ipsum dolor sit amet consectetur. Ut neque pellentesque felis orci.?"
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
