import React from "react";
import brainstorming from "../../../assets/Nimages/Appointment/brainstorming.png";
import counselling from "../../../assets/Nimages/Appointment/counselling.png";
import businessMeeting from "../../../assets/Nimages/Appointment/businessMeeting.png";
import planingMeeting from "../../../assets/Nimages/Appointment/planingMeeting.png";
import departmental from "../../../assets/Nimages/Appointment/departmental.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function AppointSlider() {
  return (
    <div className="md:px-[80px] px-[30px]">
      <div className="grid xl:grid-cols-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30 flex justify-center">
          <LazyLoadImage src={counselling} alt="counselling" />
          <div className="absolute bottom-[2rem] ">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Counselling
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30 flex justify-center">
          <LazyLoadImage src={brainstorming} alt="brainstorming" />
          <div className="absolute bottom-[2rem] ">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Brainstorming
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30 flex justify-center">
          <LazyLoadImage src={businessMeeting} alt="businessMeeting" />
          <div className="absolute bottom-[2rem] ">
            <h2
              className="text-[24px] text-regular text-[#fff] block w-[100px] leading-[25px]"
              style={{ fontFamily: "Noe Display" }}
            >
              Business Meeting
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30 flex justify-center">
          <LazyLoadImage src={planingMeeting} alt="planingMeeting" />
          <div className="absolute bottom-[2rem] ">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Planing Meeting
            </h2>
          </div>
        </div>
        <div className="relative hover:scale-125 transition-transform duration-500 ease-in-out hover:z-30 flex justify-center">
          <LazyLoadImage src={departmental} alt="departmental" />
          <div className="absolute bottom-[2rem] ">
            <h2
              className="text-[24px] text-regular text-[#fff] block"
              style={{ fontFamily: "Noe Display" }}
            >
              Departmental
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
