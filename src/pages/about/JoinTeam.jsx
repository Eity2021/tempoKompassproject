import React from "react";

import joinTeams from "../../assets/Nimages/About/joinTeam.png";
import joinTeam2 from "../../assets/Nimages/About/joinTeam2.png";
import "react-lazy-load-image-component/src/effects/blur.css";
const joinTeam = {
  box: " flex justify-center text-center items-center px-2 h-[383px]",
  LazyLoadImage: "h-16 w-16 mt-6 rounded-[50%]",
};
export default function JoinTeam() {
  return (
    <div className="container">
      <div className="pt-[107px] ">
        <div className="relative overflow-hidden rounded-[40px] ">
          <div className="bg-[#0c1e21]  h-[383px] ">
            <div className="absolute bottom-[-137px] left-[-103px] rounded-[40px]">
              <div
                className="w-[310px] h-[345px] md:flex hidden"
                style={{
                  background: `url(${joinTeams}) no-repeat center/cover`,
                }}
              ></div>
            </div>

            <div className="absolute right-[-103px] bottom-[-137px] ">
              <div
                className=" w-[310px] h-[345px] md:flex hidden"
                style={{
                  background: `url(${joinTeam2}) no-repeat center/cover`,
                }}
              ></div>
            </div>

            <div className="">
              <div className={joinTeam.box}>
                <div className="flex h-full items-center">
                  <div className="">
                    <h1
                      className="text-[#fff] text-[36px] font-bold"
                      style={{ fontFamily: "Noe Display" }}
                    >
                      Join Our Team
                    </h1>
                    <p className=" text-[#fff] md:text-[20px] text-[18px] font-inter font-normal md:w-[380px] w-full">
                      Join our team and be part of a journey 
                      where innovation meets opportunity.
                    </p>
                    <div className="mt-[20px]">
                      <button className="bg-[#11989F] text-[#fff] p-[12px] rounded-[30px] z-10">View Open Positions</button>
                    </div>
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
