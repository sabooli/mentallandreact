import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Zoom, Navigation, Pagination } from "swiper";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "./customize.css";
import patienta from "../icons/Ellipse 5.svg";
import patientb from "../icons/patientb.svg";
import patientc from "../icons/Ellipse 5c.svg";
import rvector from "../icons/RVector.svg";
import lvector from "../icons/LVector.svg";

SwiperCore.use([Zoom, Navigation, Pagination]);

export default function Patientcomments({heading}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null); 
  return (
    <div>
      <h1 className="patientSay text-center">{heading}</h1>
      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        onInit={(swiper) => {
          console.log("Swiper initialized:", swiper);
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{
          clickable: true,
        }}
        zoom={{maxRatio: 2}}
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
        style={{
          "--swiper-navigation-size": "20px",
          position: "unset",
        }}
      >
        <SwiperSlide>
         <div className="swiper-zoom-container"> 
         <div className="cardp swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patienta}
                  alt="patient comment"
                  className="card-img patient"
                />
              </div>
              <div className="patientName text-center">Benjamin Smith</div>
              <div className="date">
                <span>October 9</span>
                <span>Music</span>
              </div>
            </div>
            <div className="card-content">
              <p className="comment text-center">
                Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla
                viverra orci tristique magna et. Sagittis enim ut gravida sed
                volutpat est arcu vitae ....
              </p>
            </div>
          </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className="cardp swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patientb}
                  alt="patient comment"
                  className="card-img patient"
                />
              </div>
              <div className="patientName text-center">Benjamin Smith</div>
              <div className="date">
                <span>October 9</span>
                <span>Painting</span>
              </div>
            </div>
            <div className="card-content">
              <p className="comment text-center">
                Lorem ipsum dolor sit amet consectetur. Neque nam sed a sit cras
                laoreet sed. Non felis lacus.
              </p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className="cardp swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patientc}
                  alt="patient comment"
                  className="card-img patient"
                />
              </div>
              <div className="patientName text-center">Benjamin Smith</div>
              <div className="date">
                <span>October 9</span>
                <span>Acting</span>
              </div>
            </div>
            <div className="card-content">
              <p className="comment text-center">
                Lorem ipsum dolor sit amet consectetur. Felis in pretium ornare
                nunc facilisi tellus ornare massa. Posuere mauris cum
                pellentesque.
              </p>
            </div>
          </div></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
          <div className="cardp swiper-slide">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={patienta}
                  alt="patient comment"
                  className="card-img patient"
                />
              </div>
              <div className="patientName text-center">Benjamin Smith</div>
              <div className="date">
                <span>October 9</span>
                <span>Music</span>
              </div>
            </div>
            <div className="card-content">
              <p className="comment text-center">
                Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla
                viverra orci tristique magna et. Sagittis enim ut gravida sed
                volutpat est arcu vitae ....
              </p>
            </div>
          </div></div>
        </SwiperSlide>
      </Swiper>{" "}
      <div ref={prevRef} className="swiper-navigation___prev">
        <img src={lvector} alt="left vector" />
      </div>
      <div ref={nextRef} className="swiper-navigation___next">
         <img src={rvector} alt="right vector" />
      </div>
    </div>
  );
}