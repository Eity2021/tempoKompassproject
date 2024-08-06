import React from "react";
import freeTrail from "../../../assets/Nimages/Appointment/freeTrail.png";
import "react-lazy-load-image-component/src/effects/blur.css";
const AppointFreeTrail = () => {
  return (
    <div className="flex justify-center">
      <div
        className=" w-full "
        style={{ background: `url(${freeTrail}) no-repeat center` }}
      >
        <div className="py-24">
          <div className="">
            <div className="px-[10px]">
              <div className="text-center">
                <div className="">
                  <div className="flex justify-center">
                    <div>
                      <h1
                        className="lg:text-[46px] text-[30px] font-semibold text-[#343434] "
                        style={{ fontFamily: "Noe Display" }}
                      >
                        Interested for a{" "}
                        <span className="text-[#076F74]">free</span> trail?
                      </h1>
                      <div>
                        <div className="flex justify-center">
                          <p className="py-4 text-[#999999] font-poppins text-[16px] font-regular text-center lg:w-[350px] md:-[300px] w-full">
                            See exactly who’s visiting, when, and why with a
                            visitor management system
                          </p>
                        </div>
                      </div>
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
};

export default AppointFreeTrail;
