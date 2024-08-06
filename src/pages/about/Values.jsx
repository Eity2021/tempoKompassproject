import React from "react";
import values from "../../assets/Nimages/About/core_value.png";
import mission from "../../assets/Nimages/About/mission.png";
import vision from "../../assets/Nimages/About/vision.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const value = {
  valueHeading: "text-[20px] text-[#0C1E21] font-bold pt-[12px]",
  box: "bg-[#F7F7F8] p-[24px] text-center rounded-t-lg",
  para: "lg:text-[20px] md:text-[18px]  text-[#737373] font-poppins  font-regular pt-[8px]",

};

export default function Values() {
  return (
    <div className="lg:top-padding pt-[60px] md:px-[0px] px-[20px]">
      <div>
        <h1
          className="text-[36px] text-[#076F74] font-bold text-center"
          style={{ fontFamily: "Noe Display" }}
        >
          Stand Out From The Rest
        </h1>
      </div>

      <div className="flex justify-center">
        <p className="text-[20px] text-[#3C465F] font-poppins font-regular leading-[28px]   pt-[16px] text-center w-[46rem]">
          It takes great people to make a great product. Our company culture
          champions diversity and our team members embody Piperdrive’s values.
        </p>
      </div>

      <div className="xl:px-[160px] lg:px-[80px] md:px-[60px] pt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            className={value.box}
            style={{ borderRadius: "8px 24px 8px 8px" }}
          >
            <div className="flex justify-center">
              <LazyLoadImage src={values} alt="values"  effect="blur"/>
            </div>
            <div>
              <h5
                style={{ fontFamily: "Noe Display" }}
                className={value.valueHeading}
              >
                Our Core Values
              </h5>
              <p className={value.para}>
              Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.
              </p>
            </div>
          </div>

          <div
            className={value.box}
            style={{ borderRadius: "24px 24px 8px 8px" }}
          >
            <div className="flex justify-center">
              <LazyLoadImage src={mission} alt="values"  effect="blur"/>
            </div>
            <div>
              <h5
                style={{ fontFamily: "Noe Display" }}
                className={value.valueHeading}
              >
            Our Mission
              </h5>
              <p className={value.para}>
              Our mission: Develop exceptional enterprise software for modern businesses' evolving needs. 
              </p>
            </div>
          </div>

          <div
            className={value.box}
            style={{ borderRadius: "24px 8px 8px 8px" }}
          >
            <div className="flex justify-center">
              <LazyLoadImage src={vision} alt="values"  effect="blur"/>
            </div>
            <div>
              <h5
                style={{ fontFamily: "Noe Display" }}
                className={value.valueHeading}
              >
                Our Vision
              </h5>
              <p className={value.para}>
              Kompass's vision: Empower global organizations with innovative software for growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
