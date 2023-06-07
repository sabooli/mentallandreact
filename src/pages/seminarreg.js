import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import seminar from "../icons/seminar.svg";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Seminarreg() {
    return (
      <div className="seminardetails">
        <Header className="whatsapp" />
        <Navbar />
        <div className="master">
          <div className="regbar">
            <img src={seminar} className="seminarimg" alt="seminar" />
            <div className="seminarexp">
              <h5 className="seminarheading">
                international conference on mental health & therapy
              </h5>
              <div className="seminardateprice">
                <span>Date</span> <span>Ticket Price</span>
              </div>
              <div className="seminarwords">
                Challenges in Mental Illness & development of integrated mental
                health services
              </div>
              <div className="seminarguest">
                <span>
                  <img src={seminar} className="guestimg" alt="seminar guest" />
                  Dr. Elizabeth Smith
                </span>{" "}
                <span>
                  <img src={seminar} className="guestimg" alt="seminar guest" />
                  Dr. Tom Brown
                </span>
              </div>
              <div className="seminartags">
                <span>Education & Training</span>{" "}
                <span>Wellness, Health & Fitness</span>
              </div>
            </div>
          </div>
          <div className="seminarInfo">
            <div className="guestIntro mb-3">Guests Introduction:</div>
            <div className="guestIntrowords">
              <div>
                <img src={seminar} className="guestimg" alt="seminar guest" />
                Dr. Elizabeth Smith
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim
                donec venenatis dolor ut vehicula. Euismod lobortis vulputate
                arcu massa. Facilisis dapibus tempor id auctor lobortis
                dictumst. Turpis id commodo eget pellentesque. Porta arcu id
                malesuada eu elit sodales ultrices. Tristique ipsum orci
                scelerisque proin nec posuere ornare pellentesque. Ullamcorper
                vulputate massa neque condimentum imperdiet viverra volutpat.
                Consectetur varius enim purus sed arcu egestas. Nisl velit
                pharetra gravida felis. Tincidunt dolor duis vestibulum
                scelerisque. Turpis diam nec in leo aliquam euismod et. At
                turpis.
              </div>
              <div className="mt-5">
                <img src={seminar} className="guestimg" alt="seminar guest" />
                Dr. Elizabeth Smith
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim
                donec venenatis dolor ut vehicula. Euismod lobortis vulputate
                arcu massa. Facilisis dapibus tempor id auctor lobortis
                dictumst. Turpis id commodo eget pellentesque. Porta arcu id
                malesuada eu elit sodales ultrices. Tristique ipsum orci
                scelerisque proin nec posuere ornare pellentesque. Ullamcorper
                vulputate massa neque condimentum imperdiet viverra volutpat.
                Consectetur varius enim purus sed arcu egestas. Nisl velit
                pharetra gravida felis. Tincidunt dolor duis vestibulum
                scelerisque. Turpis diam nec in leo aliquam euismod et. At
                turpis.
              </div>
            </div>
            <div className="guestIntro mt-5">About seminar</div>
            <div className="guestIntrowords">
              <h5 className="seminarheadingw">
                international conference on mental health & therapy
              </h5>
              <div>
                Lorem ipsum dolor sit amet consectetur. Vitae commodo dignissim
                donec venenatis dolor ut vehicula. Euismod lobortis vulputate
                arcu massa. Facilisis dapibus tempor id auctor lobortis
                dictumst. Turpis id commodo eget pellentesque. Porta arcu id
                malesuada eu elit sodales ultrices. Tristique ipsum orci
                scelerisque proin nec posuere ornare pellentesque. Ullamcorper
                vulputate massa neque condimentum imperdiet viverra volutpat.
                Consectetur varius enim purus sed arcu egestas. Nisl velit
                pharetra gravida felis. Tincidunt dolor duis vestibulum
                scelerisque. Turpis diam nec in leo aliquam euismod et. At
                turpis.
              </div>
            </div>
          </div>
          <div>
            <Link to="/" className="btn-card">
              <span className="login">
                <BiShoppingBag className="svg" />
                {""}Add to Cart
              </span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
}