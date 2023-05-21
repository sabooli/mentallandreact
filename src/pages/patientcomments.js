import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./customize.css";
import patienta from "../icons/Ellipse 5.svg";
import patientc from "../icons/Ellipse 5c.svg";

export default function Patientcomments({heading}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null); 
  return (
    <div className="separate">
      <h1 className="pubsem">{heading}</h1>
      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={20}
        slidesPerView={3}
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
          position: "unset",
        }}
      >
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patienta}
                  alt="patient comment"
                  className="card-img"
                />
              </div>
              <div>Benjamin Smith</div>
              <div className="date">October 9</div>
              <div className="art">Music</div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla
                viverra orci tristique magna et. Sagittis enim ut gravida sed
                volutpat est arcu vitae ....
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patienta}
                  alt="patient comment"
                  className="card-img"
                />
              </div>
              <div>Benjamin Smith</div>
              <div className="date">October 9</div>
              <div className="art">Music</div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla
                viverra orci tristique magna et. Sagittis enim ut gravida sed
                volutpat est arcu vitae ....
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patienta}
                  alt="patient comment"
                  className="card-img"
                />
              </div>
              <div>Benjamin Smith</div>
              <div className="date">October 9</div>
              <div className="art">Music</div>
            </div>
            <div className="card-content">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla
                viverra orci tristique magna et. Sagittis enim ut gravida sed
                volutpat est arcu vitae ....
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}