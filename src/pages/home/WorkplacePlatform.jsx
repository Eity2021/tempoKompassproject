import React from "react";
import bgWorkplace from "../../assets/image/bg-workplace.jpg";
import { Link } from "react-router-dom";
const workplace = {
  heading: "font-bold text-primary  text-heading-md",
  paragraph: "mb-2 font-semibold  lg:text-heading-md text-2xl text-[#fff] py-20 px-4",
  button:
    "btn btn-primary rounded-[122px]  w-40 text-[#fff] h-14 drop-shadow-[0_3px_3px_rgba(18,169,178,0.30)]  right-[69px] ",
};
export default function WorkplacePlatform() {
  return (
    <div>
      <div
        className=" hero bg-cover h-96"
        style={{ background: `url(${bgWorkplace}) no-repeat` }}
      >
        <div className="hero-overlay bg-[rgba(18, 170, 178, 0.34)] "></div>
        <div className="container">
          <div className="flex justify-center">
            <div className="text-center ">
              <div className="max-w-md">
                <p className={workplace.paragraph}>
                  How Everyone is setting up their flexible workplace with
                    kompass Conntect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero   py-24  px-6">
          <div className="container">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="max-w-md">
                  <h1 className={workplace.heading}>
                    The enterprise-grade workplace platform
                  </h1>

                  <p className="py-6 text-lg font-[350] leading-8 text-paragraph-base">
                    Solve workplace challenges faster with the platform that
                    keeps employees and visitors safe, while ensuring your
                    business stays compliant and secure.
                  </p>
                  <Link to="/pricing">
                    <button className={workplace.button}>Get Started</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
