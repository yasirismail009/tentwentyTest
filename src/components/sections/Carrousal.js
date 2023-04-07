import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from './Cards'
import {data} from './data'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

export default function Carrousal() {
//   const swiperRef = useRef(null)
// console.log(swiperRef.current.swiper.realIndex)
const [currentSlide, setCurrentSlide] = useState(0);

// const [isLeftDisabled, setIsLeftDisabled] = useState(true);
// const [isRightDisabled, setIsRightDisabled] = useState(false);

// const updateIndex = useCallback(
//   () => setCurrentSlide(swiperRef.current.swiper.realIndex),
//   []
// );

// // Add eventlisteners for swiper after initializing
// useEffect(() => {
//   const swiperInstance = swiperRef.current.swiper;

//   if (swiperInstance) {
//     swiperInstance.on("slideChange", updateIndex);
//   }

//   return () => {
//     if (swiperInstance) {
//       swiperInstance.off("slideChange", updateIndex);
//     }
//   };
// }, [updateIndex]);
useEffect(()=>{
// alert(currentSlide)
},[currentSlide])
  return (
    <div className='drag_carosal'>
        <div className='header_carosal'>
           <h1>Quality Products</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
            <div className='parent_carosal'>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween= {40}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        onRealIndexChange={(element)=>setCurrentSlide(element.activeIndex)}
        className="mySwiper"
      >
              {data?.map((val, key)=>(
                <SwiperSlide key={key}>
                <Cards cardData={val} currentSlide={currentSlide} dataKey={key} />
                </SwiperSlide>
              ))}
               </Swiper>
            </div>
        </div>
    </div>
  )
}
