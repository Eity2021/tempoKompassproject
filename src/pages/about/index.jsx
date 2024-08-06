import React from "react";

import "react-lazy-load-image-component/src/effects/blur.css";

import AboutText from "./AboutText";
import AboutUs from "./AboutUs";
import Teams from "./Teams";
import Values from "./Values";
import JoinTeam from "./JoinTeam";
import FQA from "./FQA";
// import bgL from "../../assets/Nimages/leaderbg.png";
export default function About() {
  return (
    <>
      <div className="">
        <div className=" ">
          <div className="pt-[140px] ">
            <div className=" ">
              <AboutText></AboutText>
              <AboutUs></AboutUs>
              <Teams></Teams>
             <Values></Values>
              <JoinTeam></JoinTeam>
                 <FQA></FQA>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// style={{background: `url(${bgL}) no-repeat center/cover`}}
