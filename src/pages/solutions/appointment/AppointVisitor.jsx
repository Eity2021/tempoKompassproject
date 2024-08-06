import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Visitor from "./Visitor";
import visitorRound from "../../../assets/Nimages/Appointment/visitorRound.png";
import welcomeKompass from "../../../assets/Nimages/Appointment/welcomeKompass.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function AppointVisitor() {
  const [visitors, setVisitor] = useState([]);
  useEffect(() => {
    fetch("visitors.json")
      .then((res) => res.json())
      .then((data) => setVisitor(data));
  }, []);
  return (
    <div className="bg-[#FFFDF6]">
      <div className="lg:pt-[100px] pt-[0px] pb-[100px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="...">
            <div className="lg:flex items-center h-full hidden">
              <div
                className="w-[372px] h-[515px] "
                style={{ background: `url(${visitorRound}) no-repeat center` }}
              >
                <div className="w-[463px] ml-[100px]  lg:flex  hidden">
                  <LazyLoadImage src={welcomeKompass} alt="welcomeKompass" effect="blur" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 ...">
            <div className="px-4">
              <h1
                className=" lg:text-[40px] md:text-[32px] text-[28px] font-bold  text-[#071635]  "
                style={{ fontFamily: "Noe Display" }}
              >
                Everything you <span className="text-[#11989F]">need</span> to
                welcome <span className="text-[#11989F]"> visitor </span>
              </h1>
              <p className="pt-4 text-[#767676] text-[18px] font-poppins font-normal">
                See exactly who’s visiting, when, and why with a visitor
                management system
              </p>
            </div>

            <div className=" 2xl:mr-[10px] mr-[10px] pt-[60px]">
              <Visitor></Visitor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
