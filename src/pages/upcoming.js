import React from "react";
import "./design.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";
import slide1 from "../icons/Rectangle 24.svg";
import slide2 from "../icons/Rectangle 242.svg";
import slide3 from "../icons/Rectangle 243.svg";
import profile from "../icons/profile.svg";
import calendar from "../icons/calendar.svg";
import clock from "../icons/clock.svg";
import arrowRight from "../icons/arrow-right.svg";
import { Link } from "react-router-dom";


export default function Upcoming() {
  return (
    <div className="separate">
      <h1 className="pubsem">Upcoming Public Seminars & Events</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{
          "--swiper-navigation-size": "20px",
        }}
      >
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={slide1} alt="public seminar" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu
                quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
              </p>
              <div className="properties">
                <div className="colu pb-3">
                  <img src={profile} alt="public seminar" className="" /> Lorem
                  Ipsum Dolor
                </div>
                <div>Lorem Ipsum Dolor</div>
                <div>
                  <img src={calendar} alt="public seminar" className="" />{" "}
                  Sunday,January 20,2023{" "}
                </div>
                <div>
                  <img src={clock} alt="public seminar" className="" /> 3:00 PM{" "}
                </div>
              </div>
            </div>
            <Link to="/" className="click text-center">
              <img src={arrowRight} alt="public seminar" className="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={slide2} alt="public seminar" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu
                quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
              </p>
              <div className="properties">
                <div className="colu pb-3">
                  <img src={profile} alt="public seminar" className="" /> Lorem
                  Ipsum Dolor
                </div>
                <div>Lorem Ipsum Dolor</div>
                <div>
                  <img src={calendar} alt="public seminar" className="" />{" "}
                  Sunday,January 20,2023{" "}
                </div>
                <div>
                  <img src={clock} alt="public seminar" className="" /> 3:00 PM{" "}
                </div>
              </div>
            </div>
            <Link to="/" className="click text-center">
              <img src={arrowRight} alt="public seminar" className="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={slide3} alt="public seminar" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu
                quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
              </p>
              <div className="properties">
                <div className="colu pb-3">
                  <img src={profile} alt="public seminar" className="" /> Lorem
                  Ipsum Dolor
                </div>
                <div>Lorem Ipsum Dolor</div>
                <div>
                  <img src={calendar} alt="public seminar" className="" />{" "}
                  Sunday,January 20,2023{" "}
                </div>
                <div>
                  <img src={clock} alt="public seminar" className="" /> 3:00 PM{" "}
                </div>
              </div>
            </div>
            <Link to="/" className="click text-center">
              <img src={arrowRight} alt="public seminar" className="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={slide2} alt="public seminar" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu
                quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
              </p>
              <div className="properties">
                <div className="colu pb-3">
                  <img src={profile} alt="public seminar" className="" /> Lorem
                  Ipsum Dolor
                </div>
                <div>Lorem Ipsum Dolor</div>
                <div>
                  <img src={calendar} alt="public seminar" className="" />{" "}
                  Sunday,January 20,2023{" "}
                </div>
                <div>
                  <img src={clock} alt="public seminar" className="" /> 3:00 PM{" "}
                </div>
              </div>
            </div>
            <Link to="/" className="click text-center">
              <img src={arrowRight} alt="public seminar" className="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={slide2} alt="public seminar" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu
                quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
              </p>
              <div className="properties">
                <div className="colu pb-3">
                  <img src={profile} alt="public seminar" className="" /> Lorem
                  Ipsum Dolor
                </div>
                <div>Lorem Ipsum Dolor</div>
                <div>
                  <img src={calendar} alt="public seminar" className="" />{" "}
                  Sunday,January 20,2023{" "}
                </div>
                <div>
                  <img src={clock} alt="public seminar" className="" /> 3:00 PM{" "}
                </div>
              </div>
            </div>
            <Link to="/" className="click text-center">
              <img src={arrowRight} alt="public seminar" className="arrow" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={slide2} alt="public seminar" className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla eu
                quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
              </p>
              <div className="properties">
                <div className="colu pb-3">
                  <img src={profile} alt="public seminar" className="" /> Lorem
                  Ipsum Dolor
                </div>
                <div>Lorem Ipsum Dolor</div>
                <div>
                  <img src={calendar} alt="public seminar" className="" />{" "}
                  Sunday,January 20,2023{" "}
                </div>
                <div>
                  <img src={clock} alt="public seminar" className="" /> 3:00 PM{" "}
                </div>
              </div>
            </div>
            <Link to="/" className="click text-center">
              <img src={arrowRight} alt="public seminar" className="arrow" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
      <Link to="/" className="seeAll">
        <span className="see">see all</span>
      </Link>
    </div>
  );
}

