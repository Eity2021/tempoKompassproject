import React from "react";
import { CiGrid2H } from "react-icons/ci";
import appointment from "../../../assets/image/appointment-app.png";
import side_LazyLoadImage from "../../../assets/image/visit-1.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Part() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2  grid-cols-1  lg:gap-12 gap-4 py-12  px-6">
        <div >
          <div className="flex justify-center"> 
            <LazyLoadImage effect="opacity" src={appointment} alt="" className="w-full"/>
          </div>
          <div>
            <h1 className="lg:text-xl text-heading-md font-medium  text-custom-base-head leading-[42px] lg:leading-[55px] my-2 mt-8">
            Appointment & Business Meeting  
            </h1>
            <p className=" text-lg text-paragraph-base text-justify pr-6  font-[350] mt-2">
              Kompass Connect appointment and visitor management system will bring
              efficiency to your workplace by sending & receiving a meeting
              request, booking a meeting room, allocating resources, etc. The
              brand reputation of any company starts from its reception desk,
              Kompass Connect will convert your reception to a smart reception
              desk.
            </p>
          </div>
        </div>
        <div className="">
          <div>
            <div className="border rounded-md">
              <div className="flex justify-between px-6 h-14 items-center  cursor-pointer">
                <span className="font-[450] text-[1rem] text-custom-base-head cursor-pointer">
                  Business Meeting
                </span>
                <CiGrid2H />
              </div>
            </div>
            <div className="border mt-4 rounded-md">
              <div className="flex justify-between px-6  h-14 items-center cursor-pointer">
                <span className="font-[450] text-[1rem] text-custom-base-head ">
                   Planning Meeting
                </span>
                <CiGrid2H />
              </div>
            </div>
            <div className="border mt-4 rounded-md">
              <div className="flex justify-between px-6 h-14 items-center  cursor-pointer">
                <span className="font-[450] text-[1rem] text-custom-base-head ">
                Brainstorming 
                </span>
                <CiGrid2H />
              </div>
            </div>
            <div className="border mt-4 rounded-md">
              <div className="flex justify-between px-6  h-14 items-center  cursor-pointer">
                <span className="font-[450] text-[1rem] text-custom-base-head ">
                Counselling 
                </span>
                <CiGrid2H />
              </div>
            </div>
            <div className="border mt-4 rounded-md">
              <div className="flex justify-between px-6 h-14 items-center cursor-pointer">
                <span className="font-[450] text-[1rem] text-custom-base-head  ">
                Departmental 
                </span>
                <CiGrid2H />
              </div>
            </div>
          </div>

          <div className="mt-6 shadow-lg flex justify-center py-6">
            <LazyLoadImage
              src={side_LazyLoadImage}
              effect="opacity"
              alt=""
             
            />
          </div>
        </div>
      </div>
    </div>
  );
}
