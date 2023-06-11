import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import marketing from "../icons/marketing.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";


export default function Adultcourses({ heading }) {
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
                   <div className="coachback">
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
                           slidesPerView: 1,
                         },
                         500: {
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
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">Digital Marketing</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">IT</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">MBA</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">Negotiation</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">Digital Marketing</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">IT</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-coach">
                             <p className="coursename">MBA</p>
                           </div>
                         </div>
                       </SwiperSlide>
                       <SwiperSlide>
                         <div className="card adcdes swiper-slide mt-4">
                           <div className="card-image-coach">
                             <img
                               src={marketing}
                               alt="adult courses"
                               className="IT"
                               width="100%"
                             />
                           </div>
                           <div className="card-content-course">
                             <p className="coursename">Negotiation</p>
                           </div>
                         </div>
                       </SwiperSlide>
                     </Swiper>
                   </div>
                 );
               }
