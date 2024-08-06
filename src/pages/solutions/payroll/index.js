import React from "react";
import HowItWorks from "./HowItWorks";
import PayrollBg from "./PayrollBg";
import QuickPay from "./QuickPay";
import GetInto from "./GetInto";
import Accuracy from "./Accuracy";
import TextPoster from "./TextPoster";

export default function Payroll() {
  return (
    <div>
      <PayrollBg></PayrollBg>
      <QuickPay></QuickPay>
      <HowItWorks></HowItWorks>
      <Accuracy></Accuracy>
      <TextPoster></TextPoster>
      <GetInto></GetInto>
    </div>
  );
}
