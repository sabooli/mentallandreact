import React, {useRef} from "react";
import "./design.css";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import slide1 from "../icons/Rectangle 24.svg";
import slide2 from "../icons/Rectangle 242.svg";
import slide3 from "../icons/Rectangle 243.svg";
import profile from "../icons/profile.svg";
import calendar from "../icons/calendar.svg";
import clock from "../icons/clock.svg";
import arrowRight from "../icons/arrow-right.svg";
import { Link } from "react-router-dom";
import rvector from "../icons/RVector.svg";
import lvector from "../icons/LVector.svg";

SwiperCore.use([Navigation, Pagination]);

export default function Upcoming({heading, color}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null); 
  return (
    <div className="separate" style={{ backgroundColor: color }}>
      <div className="sepa">
        <h1 className="pubsem">{heading}</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
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
                  Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla
                  eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
                </p>
                <div className="properties">
                  <div className="colu pb-3">
                    <img src={profile} alt="public seminar" className="" />{" "}
                    Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <img src={calendar} alt="public seminar" className="" />{" "}
                    Sunday,January 20,2023{" "}
                  </div>
                  <div>
                    <img src={clock} alt="public seminar" className="" /> 3:00
                    PM{" "}
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
                  Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla
                  eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
                </p>
                <div className="properties">
                  <div className="colu pb-3">
                    <img src={profile} alt="public seminar" className="" />{" "}
                    Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <img src={calendar} alt="public seminar" className="" />{" "}
                    Sunday,January 20,2023{" "}
                  </div>
                  <div>
                    <img src={clock} alt="public seminar" className="" /> 3:00
                    PM{" "}
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
                  Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla
                  eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
                </p>
                <div className="properties">
                  <div className="colu pb-3">
                    <img src={profile} alt="public seminar" className="" />{" "}
                    Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <img src={calendar} alt="public seminar" className="" />{" "}
                    Sunday,January 20,2023{" "}
                  </div>
                  <div>
                    <img src={clock} alt="public seminar" className="" /> 3:00
                    PM{" "}
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
                  Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla
                  eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
                </p>
                <div className="properties">
                  <div className="colu pb-3">
                    <img src={profile} alt="public seminar" className="" />{" "}
                    Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <img src={calendar} alt="public seminar" className="" />{" "}
                    Sunday,January 20,2023{" "}
                  </div>
                  <div>
                    <img src={clock} alt="public seminar" className="" /> 3:00
                    PM{" "}
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
                  Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla
                  eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
                </p>
                <div className="properties">
                  <div className="colu pb-3">
                    <img src={profile} alt="public seminar" className="" />{" "}
                    Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <img src={calendar} alt="public seminar" className="" />{" "}
                    Sunday,January 20,2023{" "}
                  </div>
                  <div>
                    <img src={clock} alt="public seminar" className="" /> 3:00
                    PM{" "}
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
                  Lorem ipsum dolor sit amet consectetur. Fringilla nisi nulla
                  eu quisque. Ac vitae tellus tincidunt nibh non accumsan urna.
                </p>
                <div className="properties">
                  <div className="colu pb-3">
                    <img src={profile} alt="public seminar" className="" />{" "}
                    Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <img src={calendar} alt="public seminar" className="" />{" "}
                    Sunday,January 20,2023{" "}
                  </div>
                  <div>
                    <img src={clock} alt="public seminar" className="" /> 3:00
                    PM{" "}
                  </div>
                </div>
              </div>
              <Link to="/" className="click text-center">
                <img src={arrowRight} alt="public seminar" className="arrow" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>{" "}
        <div ref={prevRef} className="swiper-navigation__prev">
          <img src={lvector} alt="left vector" />
        </div>
        <div ref={nextRef} className="swiper-navigation__next">
          <img src={rvector} alt="right vector" />
        </div>
        <Link to="/" className="seeAll">
          <span className="see">see all</span>
        </Link>
      </div>
    </div>
  );
}

