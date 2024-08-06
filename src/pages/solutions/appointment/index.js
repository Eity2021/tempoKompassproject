import React from "react";
import AppointBg from "./AppointBg";
import AppointBusiness from "./AppointBusiness";
import Organize from "./Organize";
import SmartWorkplace from "./SmartWorkplace";
import AppointmentEncourages from "./AppointmentEncourages";
import AppointVisitor from "./AppointVisitor";
import AppointFreeTrail from "./AppointFreeTrail";
import HowItWork from "./HowItWork";

export default function Appointment() {
  return (
    <div>
      <AppointBg></AppointBg>
      <AppointBusiness></AppointBusiness>
      <Organize></Organize>
      <HowItWork></HowItWork>
      <AppointmentEncourages></AppointmentEncourages>
      <SmartWorkplace></SmartWorkplace>
      <AppointVisitor></AppointVisitor>
      <AppointFreeTrail></AppointFreeTrail>
    </div>
  );
}
