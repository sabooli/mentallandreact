import React from "react";
import tourism from "../icons/Rectangle 47.png";
import Rhino from "../icons/Rectangle 314.png";
import general from "../icons/Rectangle 313.png";
import transplant from "../icons/Rectangle 315.png";
import IVF from "../icons/Rectangle 316.png";
import visa from "../icons/Rectangle 318.png";
import medical from "../icons/Medical.svg";
import travel from "../icons/travel.svg";
import accomodation from "../icons/accomodation.svg";
import { HiArrowLongRight } from "react-icons/hi2";
import Header from "../header";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

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
                <img
                  src={medical}
                  height={120}
                  alt="medical services in Iran"
                />
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
                <img
                  src={accomodation}
                  height={120}
                  alt="accomodation in Iran"
                />
                <div className="packH">accomodation</div>
                <div className="packT">
                  3 to 5 Star Hotels Near Your Clinic/Hospital
                </div>
              </div>
            </div>
          </div>
          <div className="step-by-step">
            <h2>step by step with together</h2>
           
          </div>
        </div>
      </div>
    );
}