import React, {  useEffect, useState } from "react";

import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import {
  getBdtDiscountedPrice,
  getUsdDiscountedPrice,
} from  "../../../components/utils/discountLogics";
import { useForm } from "react-hook-form";
import axios from "axios";
import PromoCode from "../../../components/svg/store/PromoCode";

export default function ProductCalculation({ pricing }) {
  const [item, setItem] = useState([]);
  // const [vat, setVat] = useState("");
  const { cart, location, promoCode, setPromoCode, pCode } =
  useContextProvider();

  useEffect(() => {
    setItem(pricing);
  }, [pricing]);

  let mainVat;
  let vatValue;

  for (const vat of pCode) {
    if (vat.name === "Bangladesh") {
      mainVat = parseFloat(vat.vatpercent);
      vatValue = parseFloat(mainVat / 100);
    } else {
      <></>;
    }
  }

  let subTotalBdt = 0;
  let bdtTax = 0;
  let totalBdt = 0;
  let netBdt = 0;
  for (const product of cart) {
    if (product.isYearly) {
      subTotalBdt += getBdtDiscountedPrice(product.dxinfo);
      netBdt = parseFloat(
        subTotalBdt - parseFloat(promoCode.promo_amount || 0)
      );
      bdtTax = parseFloat(netBdt) * parseFloat(vatValue).toFixed(2);
      totalBdt = parseFloat(netBdt + parseFloat(bdtTax));
    } else subTotalBdt += parseFloat(product.dxinfo.vubdt);
    netBdt = parseFloat(subTotalBdt - parseFloat(promoCode.promo_amount || 0));
    bdtTax = parseFloat(netBdt * vatValue).toFixed(2);
    totalBdt = parseFloat(netBdt + parseFloat(bdtTax));
  }

  let subTotalUsd = 0;
  let usdTax = 0;
  let totalUsd = 0;
  let netUsd = 0;
  for (const product of cart) {
    if (product.isYearly) {
      subTotalUsd += getUsdDiscountedPrice(product.dxinfo);
      netUsd = parseFloat(
        subTotalUsd - parseFloat(promoCode.promo_amount || 0)
      );
      usdTax = parseFloat(netUsd * vatValue).toFixed(0);
      totalUsd = parseFloat(netUsd + parseFloat(usdTax));
    } else subTotalUsd += parseFloat(product.dxinfo.vusd);
    netUsd = parseFloat(subTotalUsd - parseFloat(promoCode.promo_amount || 0));
    usdTax = parseFloat(netUsd * vatValue).toFixed(2);
    totalUsd = parseFloat(netUsd + parseFloat(usdTax));
  }

  const [promoCodeUsed, setPromoCodeUsed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pcode: "88",
    },
  });

  const onSubmit = (data) => {
    axios
      .get(
        `https://api.hellokompass.com/promocheck?amount=${data.amount}&currency=${data.currency}&promo_code=${data.promo_code}`,
        data
      )
      .then((res) => {
        if (res.data.code == 200) {
          setPromoCode(res.data.data);
        } else if (res.data.code == 401) {
          setPromoCode(res.data.data);
        }
      });

    if (!promoCodeUsed) {
      setPromoCodeUsed(true);
    }
  };

  //dropdown for promoCode field
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border h-[500px]">
      <div>
        {location.uconunty == "Bangladesh" ? (
          <div className=" rounded-[1px] p-4">
            {/* <div>
              <>
                <div>
                  {item.map(({ ename, dxinfo, etype, isYearly, id }) => (
                    <div key={id}>
                      <div>
                        {(() => {
                          if (ename == "VMS") {
                            return (
                              <div className="bg-primary h-16  rounded-md mb-2">
                                <div className="border p-1 rounded-md bg-white ">
                                  <div className="flex justify-between my-3">
                                    {" "}
                                    <div className="flex gap-1">
                                      <h1 className="text-custom-base-head font-medium  text-[1rem]">
                                        Kompass Connect{" "}
                                      </h1>

                                      {isYearly ? (
                                        <p className="text-[.9rem] font-normal text-custom-base-head">
                                          ({etype}) <sub>(yearly)</sub>
                                        </p>
                                      ) : (
                                        <p className="text-[.9rem] font-normal text-custom-base-head">
                                          ({etype}){" "}
                                          <sub className="text-[#0000FF]">
                                            (monthly)
                                          </sub>
                                        </p>
                                      )}
                                    </div>
                                    <div>
                                      {isYearly ? (
                                        <div>
                                          <p className="text-custom-base-head ">
                                            <span className="text-lg font-[400]">
                                              {parseFloat(
                                                dxinfo?.vubdt * 12 -
                                                  (dxinfo?.vubdt *
                                                    12 *
                                                    dxinfo?.vanudis) /
                                                    100
                                              )}{" "}
                                              ৳
                                            </span>
                                          </p>
                                        </div>
                                      ) : (
                                        <div>
                                          <p className="text-custom-base-head ">
                                            {dxinfo.vubdt} ৳
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          } else if (ename == "LMS") {
                            return (
                              <div className="bg-primary h-16  rounded-md mb-2">
                                <div className="border p-1 rounded-md bg-white ">
                                  <div className="flex justify-between py-3">
                                    <div className="flex gap-1">
                                      <h1 className="text-custom-base-head font-medium   text-[1rem]">
                                        Kompass Lobby{" "}
                                      </h1>
                                      {isYearly ? (
                                        <p className="text-[.9rem] font-normal text-custom-base-head">
                                          ({etype}) <sub>(yearly)</sub>
                                        </p>
                                      ) : (
                                        <p className="text-[.9rem] font-normal text-custom-base-head">
                                          ({etype}){" "}
                                          <sub className="text-[#0000FF]">
                                            (monthly)
                                          </sub>
                                        </p>
                                      )}
                                    </div>

                                    {isYearly ? (
                                      <div>
                                        <p className="text-custom-base-head ">
                                          <span className="text-lg font-[400]">
                                            
                                            {parseFloat(
                                              dxinfo?.vubdt * 12 -
                                                (dxinfo?.vubdt *
                                                  12 *
                                                  dxinfo?.vanudis) /
                                                  100
                                            )}৳
                                          </span>
                                        </p>
                                      </div>
                                    ) : (
                                      <div>
                                        <p className="text-custom-base-head ">
                                          {dxinfo.vubdt}  ৳
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          if (ename == "PMS") {
                            return (
                              <div className="bg-primary h-16  rounded-md">
                                <div className="border p-1 rounded-md bg-white ">
                                  <div className="flex justify-between py-3">
                                    <div className="flex gap-1">
                                      <h1 className="text-custom-base-head font-medium text-[1rem]">
                                        Kompass Teams{" "}
                                      </h1>
                                      {isYearly ? (
                                        <p className="text-[.9rem] font-normal text-custom-base-head">
                                          ({etype}) <sub>(yearly)</sub>
                                        </p>
                                      ) : (
                                        <p className="text-[.9rem] font-normal text-custom-base-head">
                                          ({etype}){" "}
                                          <sub className="text-[#0000FF]">
                                            (monthly)
                                          </sub>
                                        </p>
                                      )}
                                    </div>
                                    {isYearly ? (
                                      <div>
                                        <div className="flex justify-center items-center">
                                          <span className="text-lg font-[400] text-custom-base-head ">
                                         
                                            {parseFloat(
                                              dxinfo?.vubdt * 12 -
                                                (dxinfo?.vubdt *
                                                  12 *
                                                  dxinfo?.vanudis) /
                                                  100
                                            )}  ৳
                                          </span>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex justify-center items-center">
                                        <p className="text-custom-base-head ">
                                        {dxinfo.vubdt}  ৳
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })()}
                      </div>
                    </div>
                  ))}
                  <div className="border-t-2 mt-4"></div>
                </div>
              </>
            </div> */}

            <div>
              <p
                className="font-medium text-[#0C1E21] text-[24px]"
                style={{ fontFamily: "Noe Display" }}
              >
                Order Summary
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <p className="font-poppins font-regular text-[#0C1E21] text-[16px] pb-[24px]">
                Price
              </p>
              <p>৳ {subTotalBdt.toFixed(2)}</p>
            </div>

            {promoCode.promo_amount > 0 ? (
              <div className="flex justify-between pb-[24px]">
                <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">Discount</p>
                <p>{promoCode.promo_amount} TK</p>
              </div>
            ) :  null}


              <div className="flex justify-between pb-[24px]">
                <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">Discount</p>
                <p>0 TK</p>
              </div>
          
            <div className="flex justify-between  pb-[24px]">
              <p className="font-poppins font-regular text-[#0C1E21] text-[16px] ">VAT({mainVat}%)</p>
              <p>৳ {bdtTax}</p>
            </div>

            <div className="flex justify-between border-t-2 pt-[30px]">
              <p className="font-poppins font-regular text-[#0C1E21] text-[16px] uppercase">Total</p>
              <p className="font-poppins font-regular text-[#0C1E21] text-[16px] ">৳{totalBdt.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className=" rounded-lg px-10">
            {/* {item.map(({ ename, dxinfo, etype, id, isYearly }) => (
              <div key={id}>
                <div>
                  {(() => {
                    if (ename == "VMS") {
                      return (
                        <div className="flex justify-between mb-4 mt-4">
                          {" "}
                          <h1 className="text-custom-base-head font-medium  text-[1rem]">
                            Kompass Connect{" "}
                            <span className="text-[.9rem] font-normal">
                              ({etype})
                            </span>
                          </h1>
                          <div className="flex gap-1">
                            <h1 className="text-custom-base-head font-medium  text-[1rem]">
                              Kompass Connect{" "}
                            </h1>

                            {isYearly ? (
                              <p className="text-[.9rem] font-normal text-custom-base-head">
                                ({etype}) <sub>(yearly)</sub>
                              </p>
                            ) : (
                              <p className="text-[.9rem] font-normal text-custom-base-head">
                                ({etype}){" "}
                                <sub className="text-[#0000FF]">(monthly)</sub>
                              </p>
                            )}
                          </div>
                          <div>
                            {isYearly ? (
                              <div>
                                <p className="text-custom-base-head ">
                                  <span className="text-lg font-[400]">
                                    $
                                    {parseFloat(
                                      dxinfo?.vusd * 12 -
                                        (dxinfo?.vusd * 12 * dxinfo?.vanudis) /
                                          100
                                    )}{" "}
                                  </span>
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-custom-base-head ">
                                  ${dxinfo.vusd}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    } else if (ename == "LMS") {
                      return (
                        <div className="flex justify-between mt-4 mb-4">
                          <h1 className="text-custom-base-head font-medium   text-[1rem]">
                            Kompass Lobby{" "}
                            <span className="text-[.9rem] font-normal  mt-4 mb-4">
                              ({etype})
                            </span>
                          </h1>
                          <div className="flex gap-1">
                            <h1 className="text-custom-base-head font-medium  text-[1rem]">
                              Kompass Connect{" "}
                            </h1>

                            {isYearly ? (
                              <p className="text-[.9rem] font-normal text-custom-base-head">
                                ({etype}) <sub>(yearly)</sub>
                              </p>
                            ) : (
                              <p className="text-[.9rem] font-normal text-custom-base-head">
                                ({etype}){" "}
                                <sub className="text-[#0000FF]">(monthly)</sub>
                              </p>
                            )}
                          </div>
                          <div>
                            {isYearly ? (
                              <div>
                                <p className="text-custom-base-head ">
                                  <span className="text-lg font-[400]">
                                    $
                                    {parseFloat(
                                      dxinfo?.vusd * 12 -
                                        (dxinfo?.vusd * 12 * dxinfo?.vanudis) /
                                          100
                                    )}{" "}
                                  </span>
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-custom-base-head ">
                                  ${dxinfo.vusd}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                    if (ename == "PMS") {
                      return (
                        <div className="flex justify-between">
                          <h1 className="text-custom-base-head font-medium   text-[1rem] ">
                            Kompass Teams{" "}
                            <span className="text-[.9rem] font-normal">
                              ({etype})
                            </span>
                          </h1>
                          <div className="flex gap-1">
                            <h1 className="text-custom-base-head font-medium  text-[1rem]">
                              Kompass Connect{" "}
                            </h1>

                            {isYearly ? (
                              <p className="text-[.9rem] font-normal text-custom-base-head">
                                ({etype}) <sub>(yearly)</sub>
                              </p>
                            ) : (
                              <p className="text-[.9rem] font-normal text-custom-base-head">
                                ({etype}){" "}
                                <sub className="text-[#0000FF]">(monthly)</sub>
                              </p>
                            )}
                          </div>
                          <div>
                            {isYearly ? (
                              <div>
                                <p className="text-custom-base-head ">
                                  <span className="text-lg font-[400]">
                                    $
                                    {parseFloat(
                                      dxinfo?.vusd * 12 -
                                        (dxinfo?.vusd * 12 * dxinfo?.vanudis) /
                                          100
                                    )}{" "}
                                  </span>
                                </p>
                              </div>
                            ) : (
                              <div>
                                <p className="text-custom-base-head ">
                                  ${dxinfo.vusd}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
            ))} */}
            
            <div className="border-t-2 mt-4"></div>
            <div className="flex justify-between pb-[24px]">
              <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">Price</p>
              <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">${subTotalUsd.toFixed(2)}</p>
            </div>
            {promoCode.promo_amount >= 0 ? (
              <div className="flex justify-between pb-3 pb-[24px]">
                <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">Discount</p>
                <p className="font-poppins font-regular text-[#0C1E21] text-[16px] ">৳{promoCode.promo_amount}</p>
              </div>
            ) : (
              <></>
            )}
            <div className="flex justify-between pb-3 pb-[24px]">
              <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">VAT({mainVat}%)</p>
              <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">${usdTax}</p>
            </div>
            <div className="flex justify-between border-t-2 pt-3 pb-[24px]]">
              <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">Total</p>
              <p  className="font-poppins font-regular text-[#0C1E21] text-[16px] ">${totalUsd.toFixed(2)}</p>
            </div>
          </div>
        )}


        
      </div>

      <div className="h-28 p-4 ">
    

       
            <ul>
              <li>
                <div className="relative mt-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative">
                  <input
                      type="text"
                      placeholder="Promo Code"
                      name="promo_code"
                      className=" input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-[46px] "
                      {...register("promo_code", { required: true })}
                    />
                    <div className="absolute top-5 right-4">
                    <PromoCode></PromoCode>
                    </div>
                  </div>
                   
                    {location.uconunty == "Bangladesh" ? (
                      <>
                       <div className="relative">
                       <input
                          type="text"
                          name="amount"
                          value={subTotalBdt}
                          className=" input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-[46px] hidden"
                          {...register("amount", { required: true })}
                        />
                          <div className="absolute top-5 right-4">
                    <PromoCode></PromoCode>
                    </div>
                       </div>
                      </>
                    ) : (
                      <>
                       <div className="relative">
                       <input
                          type="text"
                          name="amount"
                          value={subTotalUsd}
                          className=" input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none hidden"
                          {...register("amount", { required: true })}
                        />
                                  <div className="absolute top-5 right-4">
                    <PromoCode></PromoCode>
                    </div>
                       </div>
                      </>
                    )}

                    {location.uconunty == "Bangladesh" ? (
                      <>
                    <div className="relative">
                    <input
                          type="text"
                          name="currency"
                          value="BDT"
                          className=" input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-[46px]  hidden"
                          {...register("currency", { required: true })}
                        />
                        
                        <div className="absolute top-5 right-4">
                    <PromoCode></PromoCode>
                    </div>
                    </div>
                      </>
                    ) : (
                      <>
                      <div className="relative">
                      <input
                          type="text"
                          name="currency"
                          value="USD"
                          className=" input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-[46px] hidden"
                          {...register("currency", { required: true })}
                        />
                        
                        <div className="absolute top-5 right-4">
                    <PromoCode></PromoCode>
                    </div>
                      </div>
                      </>
                    )}

                    <div className="pt-[15px]">
                   
                      <button
                        type="submit"
                        disabled={promoCodeUsed}
                        className="h-12 bg-[#0C1E21] text-white w-full rounded-[30px] hover:[#0C1E21]"
                      >
                        {promoCodeUsed ? "Used promo Code" : "Apply promo Code"}
                      </button>
                  
                    </div>

                    {promoCode.promo_amount > 0 ? (
                      <small className="pl-2 text-[#008000]">
                        {promoCode.promo_msg}
                      </small>
                    ) : (
                      <small className="pl-2 text-[#FF0000]">
                        {promoCode.promo_msg}
                      </small>
                    )}

                  </form>
                </div>
              </li>
            </ul>
         
      
      </div>
    </div>
  );
}
