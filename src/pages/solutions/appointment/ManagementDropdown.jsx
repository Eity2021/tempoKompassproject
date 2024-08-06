import React from "react";
import management from "../../../assets/Nimages/Appointment/management.png";
import ManagementQuestions from "./ManagementQuestions";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function ManagementDropdown() {
  return (
    <div className="grid  xl:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-4 lg:pt-[80px] pt-[60px]">
      <div>
        <ManagementQuestions></ManagementQuestions>
      </div>

      <div className="md:flex hidden justify-center items-center h-full">
        <div>
          <div>
            <h2
              className="font-bold text-[24.49px] text-[#000] uppercase text-center"
              style={{ fontFamily: "Noe Display" }}
            >
              Visitor <br></br>
              <span className="text-[#076F74]">Management system</span>
            </h2>
          </div>
          <div className="flex  justify-center ">
            <LazyLoadImage src={management} alt="management" />
          </div>
        </div>
      </div>
    </div>
  );
}
