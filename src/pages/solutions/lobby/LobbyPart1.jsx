import React from "react";
import lobbyHotel from "../../../assets/image/lobbyHotel.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function LobbyPart1() {
  return (
   
      <div className='bg-[#f8f8f8]'>
        <div className=" py-24 px-6 ">
       <div className="container">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1  flex  justify-center">
            <LazyLoadImage
              src={lobbyHotel}
              effect="blur"
              alt=""
              className="h-full w-fit-content"
            />
          </div>

          <div className="flex h-100 items-center justify-center flex-1">
            <div className="lg:ml-14 ml-0 lg:mt-0 mt-10">
              <h1 className="font-medium lg:text-left text-center lg:text-xl text-heading-md  text-custom-base-head leading-[42px] lg:leading-[55px] pb-4">
              Kompass Lobby Management is Designed for You.
              </h1>
              <p className="lg:text-left text-center   text-lg font-[350]  text-paragraph-base  lg:pl-18 lg:px-0 md:px-28 px-0">
              Kompass lobby management is designed for smart hotel, who would like to ensure client satisfaction from the beginning to end. The 
              Check in process will reduce the smooth entry at the hotel and checkout system will ease their working procedures. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}
