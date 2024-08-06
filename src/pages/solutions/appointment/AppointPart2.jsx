import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import appointVisit from "../../../assets/image/VisitorPart-002.png";

export default function AppointPart2() {
  return (
    <div className="hero bg-[#f8f8f8] py-24 px-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1 flex justify-center">
            <LazyLoadImage
              src={appointVisit}
              effect="opacity"
              alt=""
            />
          </div>

          <div className="flex h-100 items-center justify-center flex-1">
            <div className="lg:ml-14 ml-0 lg:mt-0 mt-10">
              <h1 className="font-medium lg:text-left text-center lg:text-xl text-heading-md  text-custom-base-head leading-[42px] lg:leading-[55px] pb-4">
                Appointment solution is designed for organizations like Small to
                BIG
              </h1>
              <p className="lg:text-left text-center   text-lg font-[350]  text-paragraph-base  lg:pl-18 lg:px-0 md:px-28 px-0">
                No matter how big or small your business is? Kompass Connect appointment
                system will increase the efficiency at your workplace. Because
                every minute matters in business and its growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
