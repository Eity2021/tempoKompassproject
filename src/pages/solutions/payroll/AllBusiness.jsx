import React from "react";
import smallBusiness from "../../../assets/Nimages/Payroll/small.png";
import mediumBusiness from "../../../assets/Nimages/Payroll/medium.png";
import largeBusiness from "../../../assets/Nimages/Payroll/large.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function AllBusiness() {
  return (
    <div className="grid  lg:grid-cols-3  grid-cols-1 gap-10 pb-[60px] pt-[30px] px-[20px]">
      <div className="border rounded-[10px]  bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)]">
        <div className="flex xl:p-[0px] p-[12px]">
          <div className="xl:flex hidden items-center h-100">
            <LazyLoadImage src={smallBusiness} alt="smallBusiness" />
          </div>
          <div className="flex items-center h-100 md:px-[0px] px-[10px] md:py-[0px] py-[10px]">
            <div>
              <p
                className="font-medium text-[24px] text-[#fff]"
                style={{ fontFamily: "Noe Display" }}
              >
                Small Business
              </p>
              <p className="font-poppins font-regular text-[14px] text-[#fff] w-[17rem]">
                Your life will be easy by using Kompass Teams & HR for your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-[10px]  bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)]">
        <div className="flex  xl:p-[0px] p-[12px]">
          <div className="lg:flex hidden items-center h-100">
            <LazyLoadImage src={mediumBusiness} alt="mediumBusiness" />
          </div>
          <div className="flex items-center h-100 md:px-[0px] px-[10px] md:py-[0px] py-[10px]">
            <div>
              <p
                className="font-medium text-[24px] text-[#fff]"
                style={{ fontFamily: "Noe Display" }}
              >
                Medium Business
              </p>
              <p className="font-poppins font-regular text-[14px] text-[#fff] w-[17rem]">
                Kompass Teams & HR will manage your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-[10px]  bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.1)]">
        <div className="flex  xl:p-[0px] p-[12px]">
          <div className="lg:flex hidden items-center h-100">
            <LazyLoadImage src={largeBusiness} alt="largeBusiness" />
          </div>
          <div className="flex items-center h-100 md:px-[0px] px-[10px] md:py-[0px] py-[10px]">
            <div>
              <p
                className="font-medium text-[24px] text-[#fff]"
                style={{ fontFamily: "Noe Display" }}
              >
                Big Business
              </p>
              <p className="font-poppins font-regular text-[14px] text-[#fff] w-[17rem]">
                Easily setup and configure your organization's Payroll and HR in
                Kompass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
