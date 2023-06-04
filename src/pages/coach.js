import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import R8c from "../icons/Rectangle 8c.svg";
import rvector from "../icons/RVector.svg";
import lvector from "../icons/LVector.svg";

export default function Coach() {
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
    <div className="coaches">
      <Swiper
        modules={[Navigation, Pagination]}
        ref={sliderRef}
        paginationpagination={{
          clickable: true,
        }}
        spaceBetween={10}
        slidesPerView="auto"
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
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="me-5">
          <div className="needinstructor">
            <h3>need an art coach</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur. Urna posuere sed at
              fermentum nibh aliquet fusce. Justo gravida pharetra quam
              tincidunt nisl tellus rhoncus viverra amet. Sollicitudin sit lacus
              in eget arcu posuere. Vitae vitae mi pulvinar in. Erat egestas
              egestas interdum.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
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
        <SwiperSlide>
          <div className="card coachsl swiper-slide mt-4">
            <div className="image-content">
              <div className="card-image-coach">
                <img src={R8c} alt="consultant" className="dr" />
              </div>
            </div>
            <div className="card-content-coach">
              <p className="coachname">Dr. Mary Green</p>
              <p className="major">Dance</p>
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
              <p className="major">Writing</p>
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
              <p className="major">Writing</p>
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
