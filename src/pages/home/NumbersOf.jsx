import React, { Fragment, useEffect, useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import bg from "../../assets/Nimages/Home/numbersbg.png";
import "react-lazy-load-image-component/src/effects/blur.css";
const numbersOf = {
  box: " flex justify-center text-center items-center px-2 h-[229px]",
  LazyLoadImage: "h-16 w-16 mt-6 rounded-[50%]",
};
export default function NumbersOf({ ...rest }) {
  const [counterUp, setCounterUp] = useState(false);
  const [counterNumber, setCounterNumber] = useState("");

  useEffect(() => {

    const controller = new AbortController();
    const { signal } = controller;
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.hellokompass.com/webcount/list", { signal });
        const data = await response.json();
        setCounterNumber(data.data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request cancelled");
        } else {
          console.error("Fetch error:", error);
        }
      }
    };
  
    fetchData();
  

    return () => {
      controller.abort();
    };
  }, []);  
  

  return (
    <div className=" md:px-[68px]  py-[48px] px-[20px] ">
      <div className="relative overflow-hidden rounded-[40px] ">
        <div className="bg-[#0c1e21] md:h-[229px] h-full">
          <div className="absolute top-[-111px] left-[-105px] rounded-[40px]">
            <div
              className="w-[250px]:h-[250px]"
              style={{
                background: `url(${bg}) no-repeat center/cover`,
              }}
            ></div>
          </div>

          <div className="absolute right-[-101px] bottom-[-105px] ">
            <div
              className="  w-[250px] h-[250px] "
              style={{
                background: `url(${bg}) no-repeat center/cover`,
              }}
            ></div>
          </div>

          <div className=" grid lg:grid-cols-3  grid-cols-1 gap-4">


            {/*  A div with a class name of numbersOf.box. */}
            <Fragment>
              <div className={numbersOf.box}>
                <div className="flex h-full items-center">
                  <div className="">
                    <strong
                      className="text-[64px] font-bold text-center text-[#fff]"
                      style={{ fontFamily: "Noe Display" }}
                      data-number={counterNumber.TotalCompany}
                    >
                      <CountUp
                        {...rest}
                        start={counterUp ? null : 0}
                        end={counterNumber.TotalCompany}
                      >
                        {({ countUpRef }) => {
                          return (
                            <VisibilitySensor
                              active={!counterUp}
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  setCounterUp(true);
                                }
                              }}
                              delayedCall
                            >
                              <span ref={countUpRef}></span>
                            </VisibilitySensor>
                          );
                        }}
                      </CountUp>
                      +
                    </strong>

                    <p className="ml-6 font-medium text-[#fff] text-[20px] my-1 font-poppins uppercase">
                      Numbers of Companies{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>
            {/*  A div with a class name of numbersOf.box. */}
            <Fragment>
              <div className={numbersOf.box}>
                <div className="flex h-full items-center py-4">
                  <div className="">
                    <strong
                      className="text-[64px] font-bold text-center text-[#fff]"
                      style={{ fontFamily: "Noe Display" }}
                      data-number={counterNumber.TotalUser}
                    >
                      <CountUp
                        {...rest}
                        start={counterUp ? null : 0}
                        end={counterNumber.TotalUser}
                      >
                        {({ countUpRef }) => {
                          return (
                            <VisibilitySensor
                              active={!counterUp}
                              onChange={(isVisible) => {
                                if (isVisible) {
                                  setCounterUp(true);
                                }
                              }}
                              delayedCall
                            >
                              <span ref={countUpRef}></span>
                            </VisibilitySensor>
                          );
                        }}
                      </CountUp>
                      +
                    </strong>

                    <p className="ml-6 font-medium text-[#fff] text-[20px] my-1 font-poppins uppercase">
                      Numbers of Users{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>

            {/* A React fragment. */}
            <Fragment>
              <div className={numbersOf.box}>
                <div className="flex h-full items-center">
                  <div className="">
                    <strong
                      className="text-[64px] font-bold text-center text-[#fff]"
                      style={{ fontFamily: "Noe Display" }}
                      data-number={counterNumber.TotalHotel}
                    >
                      {counterNumber.TotalHotel > 0 ? (
                        <CountUp
                          {...rest}
                          start={counterUp ? null : 0}
                          end={counterNumber.TotalHotel}
                        >
                          {({ countUpRef }) => {
                            return (
                              <VisibilitySensor
                                active={!counterUp}
                                onChange={(isVisible) => {
                                  if (isVisible) {
                                    setCounterUp(true);
                                  }
                                }}
                                delayedCall
                              >
                                <span ref={countUpRef}></span>
                              </VisibilitySensor>
                            );
                          }}
                        </CountUp>
                      ) : (
                        <CountUp {...rest} start={counterUp ? null : 0} end="3">
                          {({ countUpRef }) => {
                            return (
                              <VisibilitySensor
                                active={!counterUp}
                                onChange={(isVisible) => {
                                  if (isVisible) {
                                    setCounterUp(true);
                                  }
                                }}
                                delayedCall
                              >
                                <span ref={countUpRef}></span>
                              </VisibilitySensor>
                            );
                          }}
                        </CountUp>
                      )}
                      +
                    </strong>

                    <p className="ml-6 font-medium text-[#fff] text-[20px] my-1 font-poppins uppercase">
                      Number of Hotels & Resorts{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>


          </div>
        </div>
      </div>
    </div>
  );
}
 