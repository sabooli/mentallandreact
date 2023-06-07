import React, { useRef, useCallback } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import slide1 from "../icons/Rectangle 24.svg";
import slide2 from "../icons/Rectangle 242.svg";
import slide3 from "../icons/Rectangle 243.svg";
import arrowRight from "../icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";

SwiperCore.use([Navigation, Pagination]);

export default function Upcoming({ heading, color }) {
    const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="separate pb-5" style={{ backgroundColor: color }}>
      <div className="sepa">
        <div className="yyy">
          <h1 className="pubsem">{heading}</h1>
          <div>
            <IoIosArrowDropleftCircle
              className="swiper-navigation__prev"
              onClick={handlePrev}
            />
            <IoIosArrowDroprightCircle
              className="swiper-navigation__next"
              onClick={handleNext}
            />
          </div>
        </div>
        <Swiper
          ref={sliderRef}
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
                    <CgProfile className="svg" /> Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <MdOutlineCalendarMonth className="svg" /> Sunday,January
                    20,2023{" "}
                  </div>
                  <div>
                    <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                  </div>
                </div>
              </div>
              <Link to="../seminarreg" className="click text-center">
                <HiArrowLongRight className="arrow" />
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
                    <CgProfile className="svg" /> Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <MdOutlineCalendarMonth className="svg" /> Sunday,January
                    20,2023{" "}
                  </div>
                  <div>
                    <AiOutlineClockCircle className="svg" /> 3:00 PM
                  </div>
                </div>
              </div>
              <Link to="../seminarreg" className="click text-center">
                <HiArrowLongRight className="arrow" />
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
                    <CgProfile className="svg" /> Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <MdOutlineCalendarMonth className="svg" /> Sunday,January
                    20,2023{" "}
                  </div>
                  <div>
                    <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                  </div>
                </div>
              </div>
              <Link to="../seminarreg" className="click text-center">
                <HiArrowLongRight className="arrow" />
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
                    <CgProfile className="svg" /> Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <MdOutlineCalendarMonth className="svg" /> Sunday,January
                    20,2023{" "}
                  </div>
                  <div>
                    <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                  </div>
                </div>
              </div>
              <Link to="../seminarreg" className="click text-center">
                <HiArrowLongRight className="arrow" />
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
                    <CgProfile className="svg" /> Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <MdOutlineCalendarMonth className="svg" /> Sunday,January
                    20,2023{" "}
                  </div>
                  <div>
                    <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                  </div>
                </div>
              </div>
              <Link to="../seminarreg" className="click text-center">
                <HiArrowLongRight className="arrow" />
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
                    <CgProfile className="svg" /> Lorem Ipsum Dolor
                  </div>
                  <div>Lorem Ipsum Dolor</div>
                  <div>
                    <MdOutlineCalendarMonth className="svg" /> Sunday,January
                    20,2023{" "}
                  </div>
                  <div>
                    <AiOutlineClockCircle className="svg" /> 3:00 PM{" "}
                  </div>
                </div>
              </div>
              <Link to="../seminarreg" className="click text-center">
                <HiArrowLongRight className="arrow" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>{" "}
        <Link to="/" className="seeAll mt-5">
          <span className="see">see all</span>
        </Link>
      </div>
    </div>
  );
}
