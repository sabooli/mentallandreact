import React, { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useTranslation } from "react-i18next";


export default function Consultants({ heading, color, data }) {
  const [key, setKey] = useState(0);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [data]);

  if (!data) {
    return null;
  }

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
    <div className="consultants" style={{ backgroundColor: color }} key={key}>
      <h1 className="cons text-center">{heading}</h1>
      <div className="constext text-center">
        Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit
        tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci
        bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut.
      </div>
      { i18n.language === "fa" ? (
        <div className="mb-3 fff">
          <IoIosArrowDroprightCircle
            className="swiper-navigation_prev"
            onClick={handlePrev}
          />
          <IoIosArrowDropleftCircle
            className="swiper-navigation_next"
            onClick={handleNext}
          />
        </div>
      ) : (
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
      )}
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
        {data.map((consultant) => (
          <SwiperSlide key={consultant.id}>
            <div className="card swiper-slide">
              <div className="image-content">
                <div className="card-image">
                  <img
                    src={`https://portals.mentalland.com/image/users/cons/degree/${consultant.avatar}`}
                    alt="consultant"
                    className="contsimg"
                  />
                </div>
              </div>
              <div className="card-content">
                <p className="surname">
                  Dr. {consultant.Fname}
                  {consultant.Lname}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center">
        <Link to="/pages/depressionadults" className="seeAll mt-5 mb-3">
          <span className="see">see all</span>
        </Link>
      </div>
    </div>
  );
}
