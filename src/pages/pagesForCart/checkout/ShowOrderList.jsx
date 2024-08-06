import React, { useContext } from "react";
import {
  getBdtDiscountedPrice,
  getUsdDiscountedPrice,
} from "../../../components/utils/discountLogics";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import RoundShape from "../../../components/svg/store/RoundShape";
export default function SHowOrderList({ pricing }) {
  const {
 
    location,
  } = useContextProvider();

  const { ename, etype, dxinfo, isYearly } = pricing;

  let bdtYearlyMainPrice = getBdtDiscountedPrice(dxinfo);
  let usdYearlyMainPrice = getUsdDiscountedPrice(dxinfo);

  return (
    <>
      <div className="mb-4">
        <div className="py-2">
          <div className="text-left">
            <div>
              {(() => {
                if (ename === "VMS") {
                  return (
                    <div className="flex">
                  <div className="flex h-100 items-center pr-2">
                    <RoundShape></RoundShape>
                  </div>
                      <h1 className="text-[#0C1E21] font-regular font-poppins text-[24px]">
                        Kompass Connect
                      </h1>
                      {/* <div className=" w-full text-primary  mb-2 my-4 "></div> */}
                    </div>
                  );
                } else if (ename === "LMS") {
                  return (
                    <div  className="flex">
                      <div className="flex h-100 items-center pr-2">
                    <RoundShape></RoundShape>
                  </div>
                      <h1 className="text-[#0C1E21] font-regular font-poppins text-[24px]">
                      Kompass Lobby 
                      </h1>
                      {/* <div className=" w-full text-primary border mb-2 mt-2 border-primary"></div> */}
                    </div>
                  );
                }
                if (ename === "PMS") {
                  return (
                    <div  className="flex">
                      <div className="flex h-100 items-center pr-2">
                    <RoundShape></RoundShape>
                  </div>
                      <h1 className="text-[#0C1E21] font-regular font-poppins text-[24px]">
                      Kompass Teams 
                      </h1>
                      {/* <div className=" w-full text-primary border mb-2 mt-2 border-primary"></div> */}
                    </div>
                  );
                }
              })()}
            </div>

            <h1 className=" text-[#0C1E21] font-regular font-poppins text-[16px] pt-[20px] ml-[30px]">
              {etype}
            </h1>

            <div>
              <div>
                {isYearly ? (
                  <div className="font-bold  text-custom-base-head pb-4">
                    {location.uconunty === "Bangladesh" ? (
                      <p className="text-[1.1rem]">
                        {+dxinfo.vanudis > 0 ? (
                          <>
                            <></>
                          </>
                        ) : (
                          <>{null}</>
                        )}
                        <div className="flex  justify-between mt-2">
                          <div>
                            <span className="text-[#0C1E21] font-regular font-poppins text-[16px] pt-[6px] ml-[30px]">
                              Price :
                            </span>
                          </div>
                          <div>
                            <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">৳</span>
                            <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                              {bdtYearlyMainPrice}.00
                            </span> 

                            <sub className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                              /year
                            </sub>
                          </div>
                        </div>
                      </p>
                    ) : (
                      <p className=" xl:text-[1.3rem] text-[1.1rem]">
                        {+dxinfo.vanudis > 0 ? <sup></sup> : <>{null}</>}
                        <span className="text-[#0C1E21] font-regular font-poppins text-[16px] pt-[6px] ml-[30px]">
                          Price :
                        </span>
                        <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">$</span>
                        <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                          {usdYearlyMainPrice}
                        </span>

                        <sub className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                          /year
                        </sub>
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="font-bold text-custom-base-head ">
                    {location.uconunty === "Bangladesh" ? (
                      <p className="xl:text-[1.3rem] text-[1.1rem]">
                        <div className="flex justify-between">
                          <div>
                            <span className="text-[#0C1E21] font-regular font-poppins text-[16px] pt-[6px] ml-[30px]">
                              Price :
                            </span>
                          </div>
                          <div>
                            <span className="text-primary">৳</span>
                            <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                              {dxinfo.vubdt}
                            </span>

                            <sub className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                              /mo
                            </sub>
                          </div>
                        </div>
                      </p>
                    ) : (
                      <p className=" xl:text-[1.3rem] text-[1.1rem] ">
                        <span className="text-[#0C1E21] font-regular font-poppins text-[16px] pt-[6px] ml-[30px]">
                          Price :
                        </span>
                        <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">$</span>
                        <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                          {dxinfo.vusd}
                        </span>
                        <span className="text-[16px] font-bold font-poppins text-[#0C1E21]">
                          /mo
                        </span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
