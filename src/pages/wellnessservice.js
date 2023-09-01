import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import eye from "../icons/Re327.png";
import neuro from "../icons/Re328.png";
import plastic from "../icons/Re329.png";
import fertility from "../icons/Re330.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export default function Wellnessservice({ heading, services }) {
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
    <div className="coachback mb-5">
      <div className="yyy">
        <h1 className="careH text-start">{heading}</h1>
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
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          620: {
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
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div>
              <figure>
                <img
                  src={`https://portals.mentalland.com/image/treatments/${service.img}`}
                  alt={service.title}
                  className="drt"
                />
                <figcaption class="carecaption">{service.title}</figcaption>
              </figure>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div>
            <figure>
              <img src={neuro} alt="Fitness" className="drt" />
              <figcaption class="carecaption">Fitness</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={plastic} alt="Anti-Stress" className="drt" />
              <figcaption class="carecaption">Anti-Stress</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={fertility} alt="Anti-Aging" className="drt" />
              <figcaption class="carecaption">Anti-Aging</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={eye} alt="eye care" className="drt" />
              <figcaption class="carecaption">Eye care</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={eye} alt="eye care" className="drt" />
              <figcaption class="carecaption">Herniated disc</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={eye} alt="eye care" className="drt" />
              <figcaption class="carecaption">Herniated disc</figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure>
              <img src={eye} alt="eye care" className="drt" />
              <figcaption class="carecaption">Herniated disc</figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
