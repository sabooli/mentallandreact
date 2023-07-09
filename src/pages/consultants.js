import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import R8a from "../icons/Rectangle 8a.svg";
import R8b from "../icons/Rectangle 8b.svg";
import R8c from "../icons/Rectangle 8c.svg";
import R8d from "../icons/Rectangle 8d.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";


export default function Consultants({ heading, color }) {
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
    <div className="consultants" style={{ backgroundColor: color }}>
      <h1 className="cons text-center">{heading}</h1>
      <div className="constext text-center">
        Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit
        tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci
        bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut.
      </div>
      <div className="mb-3 fff">
        <IoIosArrowDropleftCircle
          className="swiper-navigation_prev"
          onClick={handlePrev}
        />
        <IoIosArrowDroprightCircle
          className="swiper-navigation_next"
          onClick={handleNext}
        />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        ref={sliderRef}
        paginationpagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 3,
          },
          1056: {
            slidesPerView: 4,
          },
          1470: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={R8a} alt="consultant" className="dr img-fluid" />
              </div>
            </div>
            <div className="card-content">
              <p className="surname">Dr. Mary Green</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={R8b} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content">
              <p className="surname">Dr. Tom Smith</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content">
              <p className="surname">Dr. Mary Green</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={R8d} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content">
              <p className="surname">Dr. Tom Smith</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="text-center">
      <Link to="/" className="seeAll mt-5 mb-3">
        <span className="see">see all</span>
      </Link></div>
    </div>
  );
}
