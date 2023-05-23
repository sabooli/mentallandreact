import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Navigation, Pagination, Zoom } from "swiper";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "./style.css";
import image1 from "../icons/Rectangle 9a.svg";
import image2 from "../icons/Rectangle 9.svg";
import image3 from "../icons/Rectangle 10.svg";
import image4 from "../icons/Rectangle 10a.svg";
import image5 from "../icons/Rectangle 11.svg";


SwiperCore.use([Zoom, Navigation, Pagination]);

export default function Teamslider() {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        zoom={{maxRatio: 5}}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Zoom]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image1} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image2} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image1} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image4} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image5} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image1} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image2} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image1} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image4} className="teamphoto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={image5} className="teamphoto" />
          </div>
        </SwiperSlide>{" "}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>{" "}
      </Swiper>
    </div>
  );
}
