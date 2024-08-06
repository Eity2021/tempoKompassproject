import React from "react";
import mobileScreen from "../../../assets/Nimages/Lobby/mobileScreen.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function LobbyBooking() {
  return (
    <div className="pb-[68px]">
      <div className="container">
        <div>
          <div className=" lg:flex px-[30px] block">
            <div className="lg:border-r-2 border-l-none lg:my-[60px] my-[10px]">
              <h1
                className="lg:text-[46px] md:text-[35px] text-[27px] text-[#191919] font-semibold lg:leading-[55px] leading-[35px] my-2 mt-8 lg:w-[26rem] w-full"
                style={{ fontFamily: "Noe Display" }}
              >
                <span className="text-[#076F74]">Kompass</span> Lobby is
                Designed
                <span className="text-[#076F74]"> For</span> You
              </h1>
            </div>
            <div className="flex justify-center items-center h-100 lg:px-[80px] px-[0px]">
              <p className=" text-lg text-paragraph-base text-justify pr-6  font-[350] mt-2 ">
                No more scrambling to find their guests arrive, handwriting name
                badges, and tracking down signed agreements. Cloud-based
                solutions will make your life easy . On traveling Check-In
                system will reduce the Lobby Q. Guest information will help you
                to manage the service quality. AI-based solution will help the
                guests to fill-up the information
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <LazyLoadImage src={mobileScreen} alt="mobileScreen" effect="blur"/>
          </div>
        </div>
      </div>
    </div>
  );
}
