import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import BgOrganizer from "../../../assets/Nimages/Appointment/BgOrganizer.png";
import { Link } from "react-router-dom";
export default function Organize() {
  return (
    <div className="">
      <div className="py-[100px]">
        <div
          className="w-full h-[531px]"
          style={{
            backgroundImage: `url(${BgOrganizer})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="flex h-[531px] items-center flex-1">
              <div className="container">
                <div className="lg:px-[30px">
                  <h1
                    className="font-bold lg:text-[48px] md:text-[40px] text-[28px] lg:w-[700px]  w-full text-[#fff] md:leading-[55px] leading-[36px]  pb-4 lg:px-[30px] md:px-28 px-[20px]"
                    style={{ fontFamily: "Noe Display" }}
                  >
                    Appointment solution is designed for organizations like
                    Small to BIG
                  </h1>
                  <p className="text-[18px] font-[350] lg:w-[40rem] w-full  text-[#fff]  lg:pl-18 lg:px-[30px] md:px-28 px-[20px]">
                    No matter how big or small your business is? Kompass Connect
                    appointment system will increase the efficiency at your
                    workplace. Because every minute matters in business and its
                    growth.
                  </p>

                <div className="lg:px-[30px] md:px-28 px-[20px]">
                <Link to="/pricing">
                    <button className=" btn bg-[#11989F] rounded-[24px] text-[11.42px] font-poppins font-bold h-[24px]  w-[160px] text-white  right-[69px] hover:bg-[#159ea5] mt-5 ">
                      Get Started
                    </button>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// style={{ backgroundImage: `url(${organizeBig})`,backgroundRepeat: "no-repeat", }}
