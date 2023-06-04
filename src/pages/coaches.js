import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import R8c from "../icons/Rectangle 8c.svg";
import rvector from "../icons/RVector.svg";
import lvector from "../icons/LVector.svg";

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
    <div className="coachback" style={{ backgroundColor: color }}>
      <h1 className="coa text-start">{heading}</h1>
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
     
      <div className="swiper-navigationprev" onClick={handlePrev}>
        {" "}
        <img src={lvector} alt="left vector" />
      </div>
      <div className="swiper-navigationnext" onClick={handleNext}>
        {" "}
        <img src={rvector} alt="right vector" />
      </div>
    </div>
  );
}
