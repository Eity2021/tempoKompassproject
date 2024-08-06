import React from "react";
import lobbybooking from "../../../assets/image/lobbybooking.png";
import plan from "../../../assets/image/plan.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function LobbyPart3() {
  return (
    <div className="bg-[#f8f8f8] ">
      <div className="py-24 px-6">
        <div className="container">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex-1  flex  justify-center">
              <LazyLoadImage
                src={lobbybooking}
                effect="opacity"
                alt=""
                className="h-full w-fit-content"
              />
            </div>

            <div className="flex h-100 items-center justify-center flex-1">
              <div className="2xl:ml-14 lg:ml-6 ml-0 lg:mt-0 mt-10">
                <h1 className="font-medium  lg:text-xl text-heading-md  text-custom-base-head leading-[42px] lg:leading-[55px] pb-4">
                Kompass Lobby is designed for You, who are in the hospitality industry  
                </h1>
                <p className="text-lg font-[350]  text-paragraph-base  ">
                  No more scrambling to find their guests arrive,
                  handwriting name badges, and tracking down signed agreements.
                  96% of customers say guest management system saves
                  their
                </p>
                <div>
                  <div className="flex mt-3">
                    <div>
                      <LazyLoadImage
                        effect="opacity"
                        src={plan}
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p className="pl-8 flex justify-center items-center 2xl:pr-32 pr-4 text-[1rem] font-[350]  text-paragraph-base">
                    Cloud-based solutions will make your life easy  
                    </p>
                  </div>
                  <div className="flex mt-3">
                    <div>
                      <LazyLoadImage
                        effect="opacity"
                        src={plan}
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p className="pl-8 flex justify-center items-center 2xl:pr-32 text-[1rem] font-[350]  text-paragraph-base">
                    On traveling Check-In system will reduce the Lobby Q  
                    </p>
                  </div>
                  <div className="flex mt-3">
                    <div>
                      <LazyLoadImage
                        effect="opacity"
                        src={plan}
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p className="pl-8 flex justify-center items-center 2xl:pr-32 text-[1rem] font-[350]  text-paragraph-base">
                    Guest information will help you to manage the service quality  
                    </p>
                  </div>
                  <div className="flex mt-3">
                    <div>
                      <LazyLoadImage
                        effect="opacity"
                        src={plan}
                        alt=""
                        className="h-10 w-10"
                      />
                    </div>
                    <p className="pl-8 flex justify-center items-center 2xl:pr-32 text-[1rem] font-[350]  text-paragraph-base">
                    AI-based solution will help the guests to fill-up the information   
                    </p>
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
