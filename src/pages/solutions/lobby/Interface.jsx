import React from "react";
import organize from "../../../assets/Nimages/Lobby/organize.png";
import schedule from "../../../assets/Nimages/Lobby/schedule.png";
import plan from "../../../assets/Nimages/Lobby/plan.png";
import analyze from "../../../assets/Nimages/Lobby/analyze.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Interface() {
  return (
    <div className="py-24 ">
      <div className="container">
        <div className="mb-12 ">
          <h1
            className="font-bold text-center text-[#242424] lg:text-[48px] text-[35px] leading-[55px] pb-4"
            style={{ fontFamily: "Noe Display" }}
          >
            Everything you <span className="text-[#11989F]">need</span>.
          </h1>
          <p className="text-center font-poppins font-regular text-[#767676]">
            Have Kompass App and DO Check in Complete your Checkin Process
            During Journey TIme.
          </p>
        </div>
        <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 xl:px-[100px] lg:px-[30px] px-[20px] lg:gap-0 gap-4">
          <div className="bg-[#0C1E21] py-[30px] rounded-l-lg origin-bottom  hover:bg-[#11A8B0]   hover:rounded-t-[15px]    hover:scale-y-110 transition-transform duration-500 ease-in-out hover:z-30">
            <div className="flex justify-center">
              <div className="rounded-full  flex justify-center items-center ">
                <LazyLoadImage effect="blur" src={organize} alt="" />
              </div>
            </div>
            <h5
              className="text-center text-[24px] font-regular text-[#fff]"
              style={{ fontFamily: "Noe Display" }}
            >
              Organize
            </h5>
            <p className="text-center text-[16px] font-normal font-poppins  text-[#F6F6F6] px-[40px]">
              House keeping will organize all the required facilities, prior
              time.
            </p>
          </div>

          <div className="bg-[#0C1E21] py-[30px] origin-bottom  hover:bg-[#11A8B0]   hover:rounded-t-[15px]    hover:scale-y-110 transition-transform duration-500 ease-in-out hover:z-30">
            <div className="flex justify-center">
              <div className="rounded-full flex justify-center items-center ">
                <LazyLoadImage effect="blur" src={schedule} alt="" />
              </div>
            </div>

            <h5
              className="text-center text-[24px] font-regular text-[#fff]"
              style={{ fontFamily: "Noe Display" }}
            >
              Schedule
            </h5>
            <p className="text-center text-[16px] font-normal font-poppins  text-[#F6F6F6] px-[40px]">
              You can set the re-Schedule meeting request by using Kompass
            </p>
          </div>

          <div className="bg-[#0C1E21] py-[30px] origin-bottom  hover:bg-[#11A8B0]   hover:rounded-t-[15px]    hover:scale-y-110 transition-transform duration-500 ease-in-out hover:z-30">
            <div className="flex justify-center">
              <div className=" flex justify-center items-center ">
                <LazyLoadImage effect="blur" src={plan} alt="" />
              </div>
            </div>
            <h5
              className="text-center text-[24px] font-regular text-[#fff]"
              style={{ fontFamily: "Noe Display" }}
            >
              Plan
            </h5>
            <p className="text-center text-[16px] font-normal font-poppins  text-[#F6F6F6] px-[40px]">
              You can set the meeting request by using Kompass
            </p>
          </div>

          <div className="bg-[#0C1E21] py-[30px] rounded-r-lg  origin-bottom  hover:bg-[#11A8B0]   hover:rounded-t-[15px]    hover:scale-y-110 transition-transform duration-500 ease-in-out hover:z-30">
            <div className="flex justify-center">
              <div className=" flex justify-center items-center ">
                <LazyLoadImage effect="blur" src={analyze} alt="" />
              </div>
            </div>
            <h5
              className="text-center text-[24px] font-regular text-[#fff]"
              style={{ fontFamily: "Noe Display" }}
            >
              Analyze
            </h5>
            <p className="text-center text-[16px] font-normal font-poppins  text-[#F6F6F6] px-[40px]">
              Front office can easily analyze the services and client
              satisfactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
