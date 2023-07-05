import React from "react";
//import swiper component
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
//import required module
import { EffectFade, Autoplay } from "swiper";
//import images
import Img1 from "../assets/img/heroSilder/1.jpg";
import Img2 from "../assets/img/heroSilder/2.jpg";
import Img3 from "../assets/img/heroSilder/3.jpg";

const slides = [
  {
    title: "Your Luxury Hotel for Vacation",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel for Vacation",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel for Vacation",
    bg: Img3,
    btnText: "See our rooms  ",
  },
];
const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      Loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heloSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        //destructure slides
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            className="h-full relative flex justify-center items-center"
            key={index}
          >
            <div className="z-50 text-white text-center absolute my-60">
              <div className="text-[15px] font-primary text-center uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                Just Enjoy & relax
              </div>
              <h1 className="text-[32px] font-primary text-center uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img className="object-cover w-full h-full" src={bg} alt="" />
            </div>
            {/* overlay*/}
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default HeroSlider;
