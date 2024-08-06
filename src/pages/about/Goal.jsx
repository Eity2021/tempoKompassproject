import React from "react";
import mission from "../../assets/image/About/mission.png";
import vision from "../../assets/image/About/vision.png";
import Mission from "../../common/components/svg/store/Mission";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Goal() {
  return (
    <div className="">
      <div className="container py-24">
        <h1 className="text-center  pb-12 text-[35px] font-medium tracking-tight text-custom-base-head leading-[45px] mb-2">
          Stand Out From The Rest
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-6 xl:px-36 md:px-20  px-6">
          <div className="bg-white">
            <div className=" flex justify-center shadow-lg rounded-md ">
              <LazyLoadImage
             effect="blur"
                src={mission}
                alt="mission"
                className="h-72 w-72"
              />
            </div>

            <div className=" p-10 mt-6 shadow-lg text-center rounded-md ">
              <div className="flex justify-center py-4 ">
                <Mission></Mission>
              </div>
              <h1 className="text-[1.6rem] font-semibold text-custom-base-head pb-2">
                Our Mission
              </h1>
              <p className="text-paragraph-base lg:text-lg text-tiny">
                our mission is to develop and deliver exceptional enterprise
                software solutions that address the evolving needs and
                challenges of modern businesses. 
              </p>
            </div>
          </div>
          <div className="shadow-lg  rounded-md  p-10 bg-white">
            <div className="my-4 flex justify-center ">
              <Mission></Mission>
            </div>
            <h1 className="text-[1.6rem] text-center font-semibold text-custom-base-head pb-2">
              Our Core Values
            </h1>
            <p className="text-center text-paragraph-base lg:text-lg text-tiny">
              Equal blame belongs to those who fail in their duty through
              weakness of will which the same as saying.
            </p>
            <div className="mt-6  text-paragraph-base ">
              <p className="pt-3">
                <span>1</span>. Integrity
              </p>
              <p className="pt-3">
                {" "}
                <span>2</span>. Innovation
              </p>
              <p className="pt-3">
                <span>3</span>. Collaboration
              </p>
              <p className="pt-3">
                <span>4</span>. Respect
              </p>
              <p className="pt-3">
                <span>5</span>. and so on
              </p>

         
              <button className="mt-4 btn btn-primary rounded-[122px]  text-sm  2xl:w-40 w-32 text-[#fff] h-10 2xl:h-14 drop-shadow-[0_3px_3px_rgba(18,169,178,0.30)]  right-[69px] ">
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white">
            <div className="p-10 shadow-lg rounded-md text-center">
              <div className="flex justify-center my-4">
                <Mission></Mission>
              </div>
              <h1 className="text-[1.6rem] font-semibold text-custom-base-head pb-2">
                Our Vision
              </h1>
              <p className="text-paragraph-base lg:text-lg text-tiny">
                Our vision at Kompass is to empower organizations worldwide by
                providing innovative software solutions that drive growth,
                efficiency, and success.
              </p>
            </div>
            <div className=" shadow-lg flex rounded-md  justify-center mt-6">
              <LazyLoadImage
                 effect="blur"
                src={vision}
                alt=""
                className="h-72 w-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
