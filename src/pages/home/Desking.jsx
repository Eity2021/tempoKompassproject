import React from "react";
import hotDesking from "../../assets/Nimages/Home/deskingImage.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import deskImg from "../../assets/Nimages/Home/desking.png";
import "react-lazy-load-image-component/src/effects/blur.css";
const desking = {
  heading: "md:text-[48px] text-[35px]  text-[#fff]   pb-4  font-bold  xl:text-left  text-center",
  paragraph: "font-poppins font-[400] text-[18px] text-[#fff] xl:text-left  text-center",
  button:
    "mt-5 btn bg-[#11989F] rounded-[30px]  text-sm text-[#fff] h-[53px] w-[197px]  right-[69px] font-poppins font-bold ",
};
export default function Desking() {
  return (
  <div className="">
      <div className="mt-[48px] bg-[#0c1e21] h-[630px]">
      <div className="">
        <div
          style={{
            background: `url(${deskImg}) no-repeat center/cover`,
          }}
          className=" md:h-[630px]"
        >
          <div className="container px-[20px] ">
            <div className="grid grid-cols-1 xl:grid-cols-2 ">
            {/* <div className="absolute top-[200px]"> */}
    



            <div className=" flex  items-center h-[100%] ">
                <div className=" ml-0 xl:mt-0 md:mt-[200px] mt-[150px]">
                  <h1
                    className={desking.heading}
                    style={{ fontFamily: "Noe Display" }}
                  >
                    Hello, Desking
                  </h1>
                  <p className={desking.paragraph}>
                    Get rid of your monotonous working environment. Get Ready
                    for a hybrid work environment with Kompass desks. Kompass
                    Connect is the most flexible way to manage hybrid office
                    space and schedules smartly.
                  </p>
                  <div className="flex xl:justify-start justify-center">
                    <Link to="/pricing">
                      <button className={desking.button}>Get Started</button>
                    </Link>
                  </div>
                </div>
              </div>


       
            {/* </div> */}

             {/* <div className="absolute bottom-0 right-[60px]"> */}
             <div className="pt-[80px] xl:justify-end xl:flex  hidden">
                <LazyLoadImage  effect="blur" src={hotDesking} alt="" />
              </div>
             {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
