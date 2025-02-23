import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partners1 from "../../assets/Nimages/Home/yaqeen.png";
import partners2 from "../../assets/Nimages/Home/dana.png";
import partners4 from "../../assets/Nimages/Home/macDry.png";
import partners5 from "../../assets/Nimages/Home/james-Group.png";
import partners6 from "../../assets/Nimages/Home/safety.png";
import partners7 from "../../assets/Nimages/Home/building.png";
import partners8 from "../../assets/Nimages/Home/rotary.jpg";
import partners9 from "../../assets/Nimages/Home/mariton.jpg";
import partners10 from "../../assets/Nimages/Home/24k.jpg";

export default function Partners() {
  const logos = [
    partners1,
    partners2,
    partners4,
    partners5,
    partners6,
    partners7,
    partners1,
    partners2,
    partners10,
    partners4,
    partners5,
    partners6,
    partners7,
    partners8,
    partners9,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
      <div className="p-4 container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 ">
              <LazyLoadImage
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="max-h-24 max-w-full object-contain mx-auto flex items-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
