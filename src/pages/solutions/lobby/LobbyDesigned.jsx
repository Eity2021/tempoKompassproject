import React from "react";
import lobbyDesigned from "../../../assets/Nimages/Lobby/lobbyDesigned.png";
// import lobbyDsignedRound from "../../../assets/Nimages/Lobby/lobbyDsignedRound.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function LobbyDesigned() {
  return (
    <div>
      <div className=" lg:pt-24 pt-0  px-6 ">
        <div className="">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex-1  md:flex hidden  lg:justify-center justify-start md:pb-[20px] pb-[0px]">
              <LazyLoadImage src={lobbyDesigned} alt="" effect="blur"/>
            </div>

            <div className="flex h-100 items-center justify-start  bg-[#F8F8F8] rounded-l-[10px] flex-1 ">
              <div className="relative">
                <div className="p-[20px] ">
                  <h1
                    className="font-bold lg:text-[48px] md:text-[35px] text-[28px]   text-[#242424] lg:leading-[55px] leading-[35px] pb-4 lg:w-[650px]  w-full"
                    style={{ fontFamily: "Noe Display" }}
                  >
                    Kompass Lobby{" "}
                    <span className="text-[#11989F]">Management</span> is{" "}
                    <span className="text-[#11989F]">Designed</span> for You.
                  </h1>

                  <p className="text-[18px] font-regular  text-[#767676] lg:w-[520px] w-full">
                    See exactly who’s visiting, when, and why with a visitor
                    management system that lets you set your own entry criteria.
                    Promote a healthy workplace with a touchless sign- in and
                    document verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
