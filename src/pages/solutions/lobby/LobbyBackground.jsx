import React from "react";
import lobbyBg from "../../../assets/Nimages/Lobby/lobbyBg.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function LobbyBackground() {
  return (
    <div className="">
      <div className="bg-[#0C1E21]">
        <div className="xl:py-[0px] py-[130px]">
          <div className=" lg:px-[0px]  px-[20px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 ">
              <div className="flex h-100 items-center justify-center ">
                <div className="ml-0 lg:mr-16 text-center lg:text-left  lg:pl-[30px] p-[0px]">
                <div
                className="border w-36	rounded-[6px] flex justify-center bg-white bg-opacity-5"
                Style="border-color: rgba(255, 255, 255, 0.12)"
              >
                <p className="font-roboto-mono font-mono text-[#ffff]">
                  FOR BUSINESSES
                </p>
              </div>
                  <h1 className="text-[#fff] xl:text-[48px] lg:text-[35px] text-[28px]  font-regular xl:w-[500px] w-full  lg;leading-[60px] leading-[60px]  pt-[30px] text-left"  style={{ fontFamily: "Noe Display" }}>
                  <span className="text-[#2AC8D1]">Lobby</span> that’s easy to use 
                  and <span className="text-[#2AC8D1]">seriously</span> smart.
                  </h1>
                  <p className="font-poppins font-normal  text-[16px] text-[#fff] pt-[20px] lg:w-[450px] w-full text-justify "  >
                   Kompass  SMART Lobby management will reduce the checkin
                   process time of their  clients. A tired client can easily complete
                   his/her checkin during the  journey time. The house keeping
                   department will be informed well ahead  of time for the 
                   arrangements.
                  </p>
                  
                 <div className="flex justify-start">
                 <Link to="/pricing">
                    <button className="  btn bg-[#11989F] rounded-[24px] text-[11.42px] font-poppins font-bold h-[24px]  w-[160px] text-white  right-[69px] hover:bg-[#159ea5] mt-5">
                      Get Started
                    </button>
                  </Link>
                 </div>
                </div>
              </div>
             <div>
             <div className="lg:flex hidden justify-end">
                <LazyLoadImage  src={lobbyBg} alt="lobbyBg" effect="blur"/>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
