import React from "react";
import accuracy from "../../../assets/Nimages/Payroll/accuracy.png";
import signature from "../../../assets/Nimages/Payroll/signature.png";
import tax from "../../../assets/Nimages/Payroll/tax.png";
import calculation from "../../../assets/Nimages/Payroll/calculation.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Accuracy() {
  return (
    <div className="hero  pb-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex h-100 items-center lg:justify-center justify-start flex-1">
            <div className="">
              <h1
                className="font-semibold xl:text-[65px]  lg:text-[48px] md:text-[34px] text-[38px] text-[#191825]  pb-4 xl:leading-[75px] lg:leading-[55px] leading-[35px] px-[20px]"
                style={{ fontFamily: "Noe Display" }}
              >
                Compliance, Accuracy,And Peace Of Mind.
              </h1>
             




              <div > 
              <div className="flex lg:mt-[60px] mt-[20px] hover:border lg:w-[32rem] w-full px-[15px] py-[20px] rounded-[32px] ">
                  <div className="md:flex hidden"> 
                    <LazyLoadImage src={signature} alt="signature" effect="blur"/>
                  </div>
                  <div className="mb-4 flex items-center h-100 pl-[20px]">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#191825] ">
                        No forgotten forms or signatures.
                      </h3>
                      <p className=" text-[16px] font-poppins font-[350]  text-[#4F6169] lg:w-[23rem] w-full">
                        All process and application are online.Employee can
                        enjoy full freedom in completing his/her HR activities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-[30px] border lg:w-[32rem] w-full  px-[15px] py-[20px]  rounded-[32px]">
                  <div className="md:flex hidden"> 
                    <LazyLoadImage src={tax} alt="tax" effect="blur"/>
                  </div>
                  <div className="flex items-center h-100 pl-[20px] ">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#191825] ">
                        State tax Customize tax Configuration.
                      </h3>
                      <p className="text-[16px] font-poppins font-[350]  text-[#4F6169] lg:w-[23rem] w-full">
                        We handle the registration process in all the states
                        your employees live and work.
                      </p>
                    </div>
                  </div>
                </div>

               
                <div  className="flex mt-[30px] hover:border lg:w-[32rem] w-full  px-[15px] py-[20px]  rounded-[32px]">
                  <div className="md:flex hidden">
                    <LazyLoadImage src={calculation} alt="calculation" effect="blur" />
                  </div>
                  <div className=" flex items-center pl-[20px]">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#191825] ">
                        Auto-calculations for fewer mistakes.
                      </h3>
                      <p className="text-[16px] font-poppins font-[350]  text-[#4F6169] lg:w-[23rem] w-full">
                        We keep track of changing tax laws and do the
                        calculations for you.
                      </p>
                    </div>
                  </div>
                </div>
              
              </div>
        
            </div>
          </div>

          <div className="flex-1  lg:flex hidden justify-center">
            <LazyLoadImage src={accuracy} effect="opacity" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
