import React from "react";
import getInto from "../../../assets/Nimages/Payroll/getInto.png";
import payrollRoundGet from "../../../assets/Nimages/Payroll/payrollRoundGet.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function GetInto() {
  return (
    <div>
      <div>
        <div className=" py-24">
          <div className="">
            <div className="lg:flex block ">
              <div
                className=""
                style={{ background: `url(${payrollRoundGet}) no-repeat ` }}
              >
                <div className="flex h-100 items-center justify-center flex-1 lg:pl-[130px] md:pl-[60px] pl-[10px] lg:pt-[200px] pt-[30px]">
                  <div className=" lg:mt-0 mt-10">
                    <h1
                      className="font-medium text-left xl:text-[66px] md:text-[40px]  text-[32px] text-[#242424] xl:leading-[75px] leading-[45px] pb-4 lg:w-[30rem] w-full "
                      style={{ fontFamily: "Noe Display" }}
                    >
                      Want To Get Into The <span>Details</span>?
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex-1  flex   justify-center">
                <LazyLoadImage src={getInto} effect="blur" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
