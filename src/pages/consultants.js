import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import R8a from "../icons/Rectangle 8a.svg";
import R8b from "../icons/Rectangle 8b.svg";
import R8c from "../icons/Rectangle 8c.svg";
import R8d from "../icons/Rectangle 8d.svg";
import "./customize.css";

export default function Consultants({ heading, color }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="consultants" style={{ backgroundColor: color }}>
      <h1 className="cons text-center">{heading}</h1>
      <div className="constext text-center">
        Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit
        tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci
        bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut.
      </div>
      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={20}
        slidesPerView={4}
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
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img src={R8a} alt="consultant" className="dr" />
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
        <div ref={prevRef} className="swiper-navigation_prev">
          Prev
        </div>
        <div ref={nextRef} className="swiper-navigation_next">
          Next
        </div>
      </Swiper>
      <Link to="/" className="seeAll">
        <span className="see">see all</span>
      </Link>
    </div>
  );
}
