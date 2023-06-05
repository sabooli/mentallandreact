import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import R8c from "../icons/Rectangle 8c.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export default function Coaches({ heading, color, major }) {
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
    <div className="coachback mb-5" style={{ backgroundColor: color }}>
      <div className="yyy">
        <h1 className="coa text-start">{heading}</h1>
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
        modules={[Navigation, Pagination]}
        ref={sliderRef}
        paginationpagination={{
          clickable: true,
        }}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 4,
          },
          820: {
            slidesPerView: 5,
          },
          1056: {
            slidesPerView: 6,
          },
          1470: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">{major}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">Acting</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
