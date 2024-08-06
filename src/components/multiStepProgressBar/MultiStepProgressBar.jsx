import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

import "./MultiStepProgressBar.css";

export default function MultiStepProgressBar({ page }) {
  var stepPercentage = 0;
  if (page == "checkout") {
    stepPercentage = 30;
  } else if (page == "bankInfo") {
    stepPercentage = 69.5;
  }
  // else if (page == "payment") {
  //   stepPercentage = 82.5;
  // }
  else if (page == "confirmPayment") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }
  return (
    <div className="container">
      <div className="mb-16 mt-[140px]  md:px-4  px-6">
        {/* <h1 className="xl:text-5xl lg:text-4xl  text-center text-3xl font-medium text-custom-base-head leading-[42px] xl:leading-[55px] xl:pt-6">
          Checkout Page
        </h1> */}
        {/* <p className="text-lg mb-6 mt-6 text-paragraph-base text-center font-[350]">
          The checkout page is the final step where customers confirm their
          purchases and provide payment and shipping information.
        </p> */}
      </div>
    <div className="grids">
    <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              // onClick={() => onPageNumberClick("1")}
            >
              {/* {index + 1}  */}
              Cart <span className="pl-[17px]"> {'>'}</span>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              // onClick={() => onPageNumberClick("2")}
            >
              {/* {index + 1} */}
              Information <span  className="pl-[17px]"> {'>'} </span>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
              // onClick={() => onPageNumberClick("3")}
            >
              {/* {index + 1} */}
              Payment
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
    </div>
  );
}
