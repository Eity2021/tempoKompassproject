import React, { useState, useEffect, useContext } from "react";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import { Link } from "react-router-dom";
import Invoice from "../pricing/Invoice";
import Lottie from "lottie-react";
// import paymentSuccessful from "../../PaymentSuccessful.json";
import Failed from "../../Failed.json";
import ServicesPayments from "../services-payments/ServicesPayments";
import { useNavigate } from "react-router-dom";
import paymentSuccessful from "../../assets/Nimages/paymentSuccessful.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function EPayStatus() {
  const [ecode, setEcode] = useState(null);
  const [sts, setSts] = useState(null);
  const [msg, setMsg] = useState(null);
  const [odrx, setOdrx] = useState(null);
  const [typr, setTypr] = useState(null);
  // console.log(odrx)
  const { setCart } = useContextProvider();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // for (const [key, value] of params) {
    //   console.log(`${key}:${value}`);
    // }
    // console.log(params);

    // Retrieve the data from the query parameters
    const ecode = params.get("code");
    const sts = params.get("status");
    const msg = params.get("message");
    const odrx = params.get("odrx");
    const typr = params.get("typr");

    setEcode(ecode);
    setSts(sts);
    setMsg(msg);

    if (odrx && typr) {
      setOdrx(odrx);
      setTypr(typr);
      sessionStorage.setItem("odrx", odrx);
      sessionStorage.setItem("typr", typr);
    }
  }, []);

  function handleClick() {
    navigate(<ServicesPayments></ServicesPayments>);
  }

  useEffect(() => {
    const odrx = sessionStorage.getItem("odrx");
    const typr = sessionStorage.getItem("typr");

    if (odrx && typr) {
      const controller = new AbortController();
      const { signal } = controller;

      fetch(
        `https://api.hellokompass.com/getinvoicedetails?ordrx=${odrx}&typr=${typr}`,
        {
          // order_id
          signal,
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setOdrx(res.data);
          handleClick();
        });

      return () => controller.abort();
    }
  }, []);

  return (
    <div>
      {(() => {
        if (ecode === 200) {
          localStorage.removeItem("cart");
          setCart([]);
          return (
            <div className="container ">
              <div className="grid  md:grid-cols-1   lg:grid-cols-2">
                <div className="flex justify-center items-center h-full">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <div className="w-[15rem] ">
                        {/* <Lottie animationData={paymentSuccessful} /> */}
                        <LazyLoadImage
                          src={paymentSuccessful}
                          alt="paymentSuccessful"
                        />
                      </div>
                    </div>
                    <h2 className="text-5xl font-bold text-primary mb-2">
                      {sts} !
                    </h2>
                    <h2 className="mb-6 text-[1rem] text-[#757575]">{msg}</h2>
                    <div>
                      <Link to="/">
                        <button className="btn bg-[#0C1E21]  font-poppins text-white font-regular text-[14px]">
                          Back Home
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mx-4">
                  <Invoice odrx={odrx}></Invoice>
                </div>
              </div>
            </div>
          );
        } else if (ecode === 400) {
          localStorage.removeItem("cart");
          setCart([]);
          return (
            <div className="flex justify-center items-center h-full 2xl:mt-[255px]  2xl:mb-[185px]  md:mt-[400px] my-32">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-[15rem] ">
                    <Lottie animationData={Failed} />
                  </div>
                </div>

                <h2 className="2xl:text-5xl  text-4xl font-bold text-[#FF0000] mb-2">
                  {sts}
                </h2>
                <h2 className="mb-6 text-[1rem] text-[#757575]">{msg}</h2>
                <div>
                  <Link to="/">
                    <button className="btn bg-[#0C1E21]  font-poppins text-white font-regular text-[14px]">
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        } else if (ecode === 401) {
          localStorage.removeItem("cart");
          setCart([]);
          return (
            <div className="flex justify-center items-center h-full 2xl:mt-[255px]  2xl:mb-[185px]  md:mt-[400px] my-32">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-[15rem] ">
                    <Lottie animationData={Failed} />
                  </div>
                </div>

                <h2 className="2xl:text-5xl  text-4xl font-bold text-[#FF0000] mb-2">
                  {sts}
                </h2>
                <h2 className="mb-6 text-[1rem] text-[#757575]">{msg}</h2>
                <div>
                  <Link to="/">
                    <button className="btn bg-[#0C1E21]  font-poppins text-white font-regular text-[14px]">
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
          );
        } else {
          <></>;
        }
      })()}
    </div>
  );
}
