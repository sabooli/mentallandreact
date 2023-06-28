import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import eye from "../icons/Rect327.png";
import neuro from "../icons/Rect328.png";
import plastic from "../icons/Rect329.png";
import fertility from "../icons/Rect330.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Center({ heading }) {
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
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={eye} alt="eye care" className="dr img-fluid" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={neuro} alt="Neurosurgery" className="dr" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img
                src={plastic}
                alt="Plastic and Cosmetic Surgery"
                className="dr"
              />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={fertility} alt="Fertility" className="dr" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="">
              <img src={eye} alt="eye care" className="dr centerFig" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={eye} alt="eye care" className="dr" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={eye} alt="eye care" className="dr" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <figure className="centerFig">
              <img src={eye} alt="eye care" className="dr" />
              <figcaption class="captiontext">Sasan Hospital</figcaption>
              <Link href="#" class="captionlink">
                Read More
              </Link>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
