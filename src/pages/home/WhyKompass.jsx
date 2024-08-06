import React, { useState, useEffect } from "react";
import kompass from "../../assets/image/whyKompass.png";
import arrow from "../../assets/image/arrow-squared.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const why = {
  sectionHeading:
    "lg:text-xl text-heading-md font-medium  text-custom-base-head leading-[42px] lg:leading-[55px]",
};

export default function WhyKompass() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Adjust this value based on when you want the animation to trigger
      if (scrolled > 60) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero bg-[#f8f8f8]  py-24 px-6">
        <div className="container">
          <div className="flex flex-col lg:flex-row px-0 md:px-14 lg:px-0 ">
            <motion.div
              className={`flex-1 animated-element ${
                isVisible ? "visible" : ""
              }`}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              <div className="flex-1 flex justify-center w-100">
                <LazyLoadImage
                  src={kompass}
                  effect="opacity"
                  alt=""
                  // className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-xl  2xl:max-w-2xl py-10 px-4"
                />
              </div>
            </motion.div>

            <motion.div
              className={`flex-1 animated-element ${
                isVisible ? "visible" : ""
              }`}
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              <div className="flex h-100 items-center justify-center flex-1 ">
                <div className="lg:ml-14 ml-0 lg:mt-0 mt-10">
                  <h1 className={why.sectionHeading}>
                    Why Choose <span className="text-primary">Kompass?</span>
                  </h1>
                  <p className="py-4 text-paragraph-base text-lg font-[350]">
                    Kompass connect is an integrated solution, meet the daily
                    and unseen needs at the organization. Kompass connect app
                    can be used in our daily life activities to organizational
                    activities. Kompass connect app only focus on Appointment &
                    Visitor management and HR & Payroll for SMEs.
                  </p>
                  <div>
                    <div className="">
                      <span className="flex">
                        <LazyLoadImage
                          effect="opacity"
                          src={arrow}
                          alt=""
                          className="w-8 h-8"
                        />
                        <span className="ml-2 mt-1 text-paragraph-base  text-lg font-[350] ">
                          To make your daily working life easy.
                        </span>
                      </span>
                      <span className="flex">
                        <LazyLoadImage
                          effect="opacity"
                          src={arrow}
                          alt=""
                          className="w-8 h-8"
                        />
                        <span className="ml-2 mt-1 text-paragraph-base  text-lg font-[350]">
                          It is user friendly, easy to setup,
                        </span>
                      </span>
                      <span className="flex">
                        <LazyLoadImage
                          effect="opacity"
                          src={arrow}
                          alt=""
                          className="w-8 h-8"
                        />
                        <span className="ml-2 mt-1 text-paragraph-base  text-lg font-[350]">
                          Concept Implementation
                        </span>
                      </span>
                      <span className="flex">
                        <LazyLoadImage
                          effect="opacity"
                          src={arrow}
                          alt=""
                          className="w-8 h-8"
                        />
                        <span className="ml-2 mt-1 text-paragraph-base  text-lg font-[350]">
                          Easy onboarding for individual and employees
                        </span>
                      </span>
                      <span className="flex">
                        <LazyLoadImage
                          effect="opacity"
                          src={arrow}
                          alt=""
                          className="w-8 h-8"
                        />
                        <span className="ml-2 mt-1 text-paragraph-base  text-lg font-[350]">
                          To gain the competitive advantage over your
                          competitors
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
