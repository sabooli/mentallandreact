import React from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import seminar from "../icons/seminar.svg";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function Courseinfo() {
    return (
      <div>
        <Header className="instagram" />
        <Navbar />
        <div className="master">
          <div className="regbar">
            <img src={seminar} className="seminarimg" />
            <div className="seminarexp">
              <h5 className="seminarheading">
                international conference on mental health & therapy
              </h5>
              <div className="courseinfo">
                <span>Session: 2</span> <span>Price: $30</span>{" "}
                <span>Offline videos: No</span> <span>Online Support: Yes</span>
              </div>
              <div className="coachintro">
                <span>
                  <img src={seminar} className="guestimg" alt="seminar guest" />
                  Dr. Elizabeth Smith
                </span>
              </div>
              <div className="coursewords">
                <span>
                  {" "}
                  lorem ipsum dolor sit amet consectetur. Vitae commodo
                  dignissim donec venenatis dolor ut vehicula. euismod lobortis.
                </span>
                <span>
                  <Link to="/" className="btn-addcard">
                    <span className="login">
                      <BiShoppingBag className="svg" />
                      {""}Add to Cart
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="courseInfo">
            <div className="guestIntro mb-3">Coach Introduction:</div>
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
            </div>
            <div className="guestIntro mt-5">About hiphop</div>
            <div className="guestIntrowords">
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
          </div>{" "}
          <div className="seminarheading">
            {" "}
            What Do you Think About This Coach?
          </div>
          <div className="commentbar mb-5">
            <div className="coachcomment">
              <span>
                {" "}
                <img src={seminar} className="guestimg" alt="seminar guest" />
                Dr. Elizabeth Smith
              </span>
              <span>January 21, 2023</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}