import React from "react";

export default function AboutText() {
  return (
    <div className="lg:px-[10px] px-[20px]">
      <div>
        <h1
          className="text-[40px] text-[#2B6462] font-medium  leading-[54px] text-center"
          style={{ fontFamily: "Noe Display" }}
        >
          ABOUT US
        </h1>
      </div>
      <div className="pt-[28px] flex justify-center">
        <h1
          className="lg:text-[72px] md:text-[45px] text-[30px] text-[#181E27] font-regular font md:leading-[70px]  leading-[40px] text-center  lg:w-[800px]"
          style={{ fontFamily: "Noe Display" }}
        >
          Our vision is to make work inspiring and fulfilling
        </h1>
      </div>
      <div className="pt-[24px] flex justify-center">
        <p className="md:text-[22px] text-[17px] text-[#3C465F] font-poppins font-medium lg:leading-[36px] leading-[26px]  text-center lg:w-[700px] md:w-full">
          Kompass Connect, Lobby, and Payroll: Powerful software for streamlined
          operations and enhanced productivity.
        </p>
      </div>
    </div>
  );
}
