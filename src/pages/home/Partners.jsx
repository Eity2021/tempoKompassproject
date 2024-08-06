import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./partners.css";
import partners1 from "../../assets/Nimages/Home/yaqeen.png";
import partners2 from "../../assets/Nimages/Home/dana.png";
import partners3 from "../../assets/Nimages/Home/softcell.png";
import partners4 from "../../assets/Nimages/Home/macDry.png";
import partners5 from "../../assets/Nimages/Home/james-Group.png";
import partners6 from "../../assets/Nimages/Home/safety.png";
import partners7 from "../../assets/Nimages/Home/building.png";

export default function Partners() {
  const images = [
    partners1,
    partners2,
    partners3,
    partners4,
    partners5,
    partners6,
    partners7,
    partners1,
    partners2,
    partners3,
    partners4,
    partners5,
    partners6,
    partners7,
  ];

  return (
    <div className="pb-[50px]">
      <div className="flex justify-center pt-[20px]">
        <h1
          className="font-bold lg:text-[48px] md:text-[40px] text-[28px] text-[#071635] lg:leading-[60px] leading-[35px] pb-4 lg:w-[500px] w-full lg:px-[20px] md:px-[70px] px-[30px] text-center"
          style={{ fontFamily: "Noe Display" }}
        >
          Trusted by Hello Kompass
        </h1>
      </div>
      <div className="flex justify-center pb-[60px]">
        <p className="text-[#767676] text-[18px] font-poppins font-normal lg:w-[500px] w-full lg:px-[20px] md:px-[70px] px-[30px] text-center">
          Trusted by Hello Kompass, this page proudly displays our client logos.
        </p>
      </div>
      <div className="h-auto  container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="partnersSwiper"
          scrollbar={{ hide: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-16">
                <LazyLoadImage
                  effect="blur"
                  src={image}
                  alt={`pic-${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
