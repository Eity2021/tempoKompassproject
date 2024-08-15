import React, {useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
// import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


import ShowOrderList from "./ShowOrderList";
import {
  getBdtDiscountedPrice,
  getUsdDiscountedPrice,
} from "../../../components/utils/discountLogics";

import "react-lazy-load-image-component/src/effects/blur.css";
import ProductCalculation from "./ProductCalculation";
import ChevronRight from "../../../components/svg/store/ChevronRight";
export default function ConfirmPayment({ onButtonClick }) {
  const [selected] = useState(new Date());
  const {
    userData,
    setUserData,
    order,
    cart,
    setPage,
    location,
    promoCode,
    pCode,

  } = useContextProvider();

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
  let subTotalMainBdt = 0;
  let bdtTax = 0;
  let totalBdt = 0;
  let netBdt = 0;

  for (const product of cart) {
    if (product.isYearly) {
      subTotalBdt += getBdtDiscountedPrice(product.dxinfo);
      subTotalMainBdt = subTotalBdt.toFixed(2);

      netBdt = parseFloat(
        subTotalMainBdt - parseFloat(promoCode.promo_amount || 0)
      );
      bdtTax = parseFloat(netBdt) * parseFloat(vatValue).toFixed(2);
      totalBdt = parseFloat(netBdt + parseFloat(bdtTax));
    } else subTotalBdt += parseFloat(product.dxinfo.vubdt);
    subTotalMainBdt = subTotalBdt.toFixed(2);

    netBdt = parseFloat(
      subTotalMainBdt - parseFloat(promoCode.promo_amount || 0)
    );
    bdtTax = parseFloat(netBdt * vatValue).toFixed(2);
    totalBdt = parseFloat(netBdt + parseFloat(bdtTax));
  }

  let subTotalUsd = 0;
  let subTotalMainUsd = 0;
  let usdTax = 0;
  let totalUsd = 0;
  let netUsd = 0;
  for (const product of cart) {
    if (product.isYearly) {
      subTotalUsd += getUsdDiscountedPrice(product.dxinfo);
      subTotalMainUsd = subTotalUsd.toFixed(2);
      netUsd = parseFloat(
        subTotalMainUsd - parseFloat(promoCode.promo_amount || 0)
      );
      usdTax = parseFloat(netUsd * vatValue).toFixed(2);
      totalUsd = parseFloat(netUsd + parseFloat(usdTax));
    } else subTotalUsd += parseFloat(product.dxinfo.vusd);
    netUsd = parseFloat(subTotalUsd - parseFloat(promoCode.promo_amount || 0));
    usdTax = parseFloat(netUsd * vatValue).toFixed(2);
    totalUsd = parseFloat(netUsd + parseFloat(usdTax));
  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    setUserData({ ...userData, ...data });
    axios
    .post("https://epay.hellokompass.com/quicksend-paymentinfo", data)
    .then((res) => {
      if (res.data.status === "SUCCESS" || res.data.status === "success" || res.data.status === "Success" ) {
        window.open(res.data.data, "_self");
      } else if (res.data.code === 400) {
        swal(res.data.message);
        navigate(setPage("checkout"));
      }
    });
  
}











  return (
    <div className="container pb-[60px]">
      <div className=" px-6  ">
        <div className=" w-full text-primary  mb-12 mt-2 "></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hidden">
            <div>
              <input
                type="number"
                placeholder="order id"
                name="order_id"
                className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                value={order.data.order_id}
                {...register("order_id", {
                  onChange: (e) =>
                    setUserData({
                      ...userData,
                      order_id: e.target.value,
                    }),
                })}
              />
            </div>
            {/* Creating a grid with two columns and a gap of 4px.  */}
            <div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="transaction id"
                  name="order_type"
                  className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                  value="websubs"
                  {...register("order_type", {
                    onChange: (e) =>
                      setUserData({
                        ...userData,
                        transection_id: e.target.value,
                      }),
                  })}
                />
              </div>
            </div>
            <div>
              <div className="w-full">
                <input
                  type="number"
                  name="collect_amount"
                  className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                  value={totalBdt.toFixed(2)}
                  {...register("collect_amount", {})}
                />
              </div>
            </div>

            {location.uconunty === "Bangladesh" ? (
              <>
                <div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="amount_type"
                      className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                      value="BDT"
                      {...register("amount_type", {})}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="amount_type"
                      className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                      value="USD"
                      {...register("amount_type", {})}
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <div className="w-full">
                <input
                  type="text"
                  name="response_url"
                  className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                  value="https://www.hellokompass.com/services-payments"
                  {...register("response_url", {})}
                />
              </div>
            </div>
          </div>
         
          <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
            <div className="orderId col-span-2">
            <div className="flex justify-end pb-[30px]">
              <div>
                <ChevronRight></ChevronRight>
              </div>
              <button
                className="text-[#0C1E21] font-regular  font-poppins text-[16px] underline"
                onClick={() => onButtonClick("checkout")}
              >
                Back
              </button>
            </div>
              <h1 className="text-[16px] font-bold text-[#0C1E21] mb-2">
                Order ID : {order.data.order_id}
              </h1>
              <div className="flex  pb-4">
                <p className=" text-[16px] font-bold text-[#0C1E21] font-poppins">
                  Date :
                </p>
                <span className="text-[16px] font-bold  text-[#0C1E21] ml-1 text-right font-poppins">
                  {format(selected, "PP")}
                </span>
              </div>
              <div className="mt-6 ">
                <div className="">
                  <div>
                    {cart.map((pricing, index) => (
                      <ShowOrderList
                        pricing={pricing}
                        key={index}
                      ></ShowOrderList>
                    ))}
                  </div>
                </div>

                <div>
                  <div>
                    {location.uconunty ==="Bangladesh" ? (
                      <div className="ml-[30px]">
                        <div className="flex justify-between mb-6  pt-3">
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins ">
                            SubTotal
                          </p>
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            ৳ {subTotalMainBdt}
                          </p>
                        </div>
                        {promoCode.promo_amount > 0 ? (
                          <div className="flex justify-between  mb-6">
                            <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                              Discount
                            </p>
                            <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                              ৳{promoCode.promo_amount}
                            </p>
                          </div>
                        ) : null}
                        <div className="flex justify-between mb-6">
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            vat({mainVat})%
                          </p>
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            ৳ {bdtTax}
                          </p>
                        </div>

                        <div className="flex justify-between border-t-2 pt-3 mt-3 text-[1.3rem]">
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            Total{" "}
                          </p>
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            ৳{totalBdt.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="ml-[30px]">
                        <div className="flex justify-between mb-6 border-t-2  pt-3">
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            SubTotal
                          </p>
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            ${subTotalMainUsd}
                          </p>
                        </div>
                        {promoCode.promo_amount > 0 ? (
                          <div className="flex justify-between  mb-6">
                            <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                              Discount
                            </p>
                            <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                              ${promoCode.promo_amount}
                            </p>
                          </div>
                        ) : null}
                        <div className="flex justify-between mb-6">
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            vat({mainVat})%
                          </p>
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            ${usdTax}
                          </p>
                        </div>

                        <div className="flex justify-between border-t-2 pt-3 mt-3 text-[1.3rem]">
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            Total{" "}
                          </p>
                          <p className="text-[16px] font-bold  text-[#0C1E21] font-poppins">
                            ${totalUsd.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ProductCalculation></ProductCalculation>
            </div>
          </div>

          <div className="flex justify-end mt-20">
            {/* <button
              className=" bg-primary border w-28 mt-6 h-12 rounded-[10px] text-white font-semibold text-[.9rem] "
              onClick={() => onButtonClick("bankInfo")}
            >
              PREVIOUS
            </button> */}
            <button
              type="submit"
              className=" bg-[#0C1E21]  w-28 mt-6 h-10 rounded-[32px] font-poppins text-white font-regular text-[14px] "
            >
              Pay Now
            </button>
          </div>
       
        </form>
      </div>
    </div>
  );
}
