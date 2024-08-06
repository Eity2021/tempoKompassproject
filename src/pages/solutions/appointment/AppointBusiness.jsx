import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import AppointSlider from "./AppointSlider";
export default function AppointBusiness() {
  return (
<div className="pb-[68px]">
<div className="container">
      <div>
        <div className="lg:flex ">
          <div className="lg:border-r-2 border-r-none lg:my-[60px] my-[20px]">
            <h1
              className="xl:text-[46px] lg:text-[38px] text-[25px] text-[#191919] font-semibold md:leading-[55px] leading-[30px] my-2 mt-8 lg:w-[30rem] w-full md:pl-[80px] px-[30px]"
              style={{ fontFamily: "Noe Display" }}
            >
              Appointment <span className="text-[#076F74]">&</span> Business <span className="text-[#076F74]">Meeting</span>
            </h1>
          </div>

          <div className="flex justify-center items-center h-100 md:px-[80px] px-[30px]  lg:mb-[0px]   mb-[40px] ">
            <p className=" text-lg text-paragraph-base text-justify md:pr-6 pr-0  font-[350] ">
              Kompass Connect appointment and visitor management system will
              bring efficiency to your workplace by sending & receiving a
              meeting request, booking a meeting room, allocating resources,
              etc. The brand reputation of any company starts from its reception
              desk, Kompass Connect will convert your reception to a smart
              reception desk.
            </p>
          </div>
        </div>
      </div>

      <AppointSlider></AppointSlider>
    </div>
</div>
  );
}
