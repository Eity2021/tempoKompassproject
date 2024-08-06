import React, { useEffect, useState } from "react";
import workplaceLogo from "../../assets/image/workplace-logo.png";
import personal from "../../assets/image/personal.png";
import scheduling from "../../assets/image/scheduling.png";
import appoints from "../../assets/image/appoints.png";
import event from "../../assets/image/event.png";
import visitor from "../../assets/image/visitors.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const options = {
  para: "  text-lg font-normal text-paragraph-base mt-3",
  heading: " text-lg card-title pt-3 text-custom-base-head",
};
export default function WorkplaceOptions() {
  return (
    <div className="bg-[#f8f8f8]">
       <div className="container">
      <div className=" py-24 "> 
        <div className="container">
          <div className="lg:px-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <LazyLoadImage
                effect="opacity"
                src={workplaceLogo}
                alt=""
                className=" w-[23rem] md:w-82 mt-10"
              />
            </div>

            <div className="card">
              <div className="px-1 py-1">
                <div className="flex">
                  <LazyLoadImage
                    effect="opacity"
                    src={personal}
                    alt=""
                    className="w-12 h-12 mr-4"
                  />
                  <h2 className={options.heading}>Personal Assistant</h2>
                </div>

                <div>
                  <p className={options.para}>Appointment Send & receive</p>
                  {/* <span className="text-primary text-sm">
                  <a href="#" alt="">
                    Learn more
                  </a>{" "}
                  | <a href="#">watch the video</a>
                </span> */}
                </div>
              </div>
            </div>

            {/* A card component that is used to display the workplace options.  */}
            <div className="card">
              <div className="px-1 py-1 lg:mt-0 md:mt-8 mt-0">
                <div className="flex">
                  <LazyLoadImage
                    effect="opacity"
                    src={scheduling}
                    alt=""
                    className="w-12 h-12 mr-4"
                  />
                  <h2 className={options.heading}>My Schedule</h2>
                </div>
                <div>
                  <p className={options.para}>Schedule of appointments</p>
                  {/* <span className="text-primary text-sm">
                  <a href="#" alt="">
                    Learn more
                  </a>{" "}
                  | <a href="#">watch the video</a>
                </span> */}
                </div>
              </div>
            </div>

            {/* part 2 */}

            <div className="card">
              <div className="px-1 py-1  md:mt-8 mt-0">
                <div className="flex">
                  <LazyLoadImage
                    src={appoints}
                    alt=""
                    className="w-12 h-12 mr-4"
                  />
                  <h2 className={options.heading}>Appointments</h2>
                </div>
                <div>
                  <p className={options.para}>
                    Organized appointments at the preferable schedule,
                    monitoring{" "}
                  </p>
                  {/* <span className="text-primary text-sm">
                  <a href="#" alt="">
                    Learn more
                  </a>{" "}
                  | <a href="#">watch the video</a>
                </span> */}
                </div>
              </div>
            </div>

            {/* A card component that is used to display the workplace options. */}
            <div className="card">
              <div className="px-1 py-1  md:mt-8 mt-0">
                <div className="flex">
                  <LazyLoadImage
                    src={event}
                    alt=""
                    className="w-12 h-12 mr-4"
                  />
                  <h2 className={options.heading}>Events</h2>
                </div>
                <div>
                  <p className={options.para}>
                    Event declaration, invitation, monitoring and management
                  </p>
                  {/* <span className="text-primary text-sm">
                  <a href="#" alt="">
                    Learn more
                  </a>{" "}
                  | <a href="#">watch the video</a>
                </span> */}
                </div>
              </div>
            </div>

            <div className="card ">
              <div className="px-1 py-1  md:mt-8 mt-0">
                <div className="flex">
                  <LazyLoadImage
                    src={visitor}
                    alt=""
                    className="w-12 h-12 mr-4"
                  />
                  <h2 className={options.heading}>Visitors</h2>
                </div>
                <div>
                  <p className={options.para}>
                    Hassle-free entrance, efficient & secure. Self-check-in
                  </p>
                  {/* <span className="text-primary text-sm">
                  <a href="#" alt="">
                    Learn more
                  </a>{" "}
                  | <a href="#">watch the video</a>
                </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}
