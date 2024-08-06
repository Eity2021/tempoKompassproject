import React from "react";
import teamKompass from "../../../assets/Nimages/Payroll/teamKompass.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function HowItWorks() {
  return (
   <div className="">
     <div className="container">
      <div className=" px-6 py-24">


      <div>
            <div className="lg:flex block">
              <div className="md:border-r-2 border-r-none lg:my-[60px] my-[20px]">
                <h1
                  className="lg:text-[46px] md:text-[35px] text-[26px] text-[#191919] font-semibold lg:leading-[55px] leading-[35px] my-2 mt-8 lg:w-[32rem] w-full"
                  style={{ fontFamily: "Noe Display" }}
                >
                  Get Your Team   <span className="text-[#2AC8D1]"> Working</span>  With  <span className="text-[#2AC8D1]">Kompass</span>.
                 
         
                </h1>
              </div>
              <div className="flex justify-center items-center h-100 lg:px-[80px] px-[0px]">
                <p className=" text-lg text-paragraph-base text-justify md:pr-6  pr-0 font-[350] mt-2 ">
                No more scrambling to find their guests arrive, handwriting name badges, and tracking down signed
                 agreements. Cloud-based solutions will make your life easy . On traveling Check-In system will
                  reduce the Lobby Q. Guest information will help you to manage the service quality. 
                  AI-based solution will help the guests to fill-up the information
                </p>
              </div>
            </div>
          </div>
       <div className="flex justify-center  mt-[30px]">
        <LazyLoadImage  src={teamKompass} alt="teamKompass" effect="blur"/>
       </div>
      
      </div>
    </div>
   </div>
  );
}
