/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Twitter from "../../common/components/svg/socialIcon/Twitter";
import founder2 from "../../assets/image/founder11.png";
import founder3 from "../../assets/image/founder3.jpg";
import founder1 from "../../assets/image/founder2.jpg";
import Linkedin from "./../../common/components/svg/socialIcon/Linkedin";
import vectorLazyLoadImage from "../../assets/image/vector_founder.png"
import FaceBook from "../../common/components/svg/socialIcon/Facebook";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const team = {
  member:
    "w-auto  bg-[#f8f8f8] shadow-xl my-4  py-4 grid 2xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-3 grid-cols-1 gap-4 overflow-hidden transform transition-transform hover:scale-110",
  LazyLoadImage: "rounded-[50%] shadow-xl",
  icon: " w-6 h-6 rounded-3xl border ml-2",
  flexBox: " pl-0 sm:pl-0  col-span-2 2xl:mr-8 xl::ml-8  2xl:mx-0 md:mx-6 mx-6",
  figure: "flex  mx-6 sm:mx-0 mb-2 sm:mb-0 justify-center ",
  paragraphTag: "text-paragraph-base text-lg font-normal lg:text-left text-justify"
};
export default function FoundingTeam() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="container">
    <div className="px-4 xl:px-20 lg:px-4 py-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="lg:flex   items-center flex-none ">
          <div className=" text-center">
            <h1 className="text-[2.2rem] font-medium py-2 leading-3">Start-Up</h1>
            <h1 className="text-[2.2rem] font-medium pb-2 text-primary">
              Co-Founders
            </h1>
            <p className="text-paragraph-base text-lg font-normal pr-3">
            As co-founders, our dream is not just to build a successful company, but to create a meaningful legacy that positively impacts the world. We envision a future where our innovations empower people, solve pressing challenges, and inspire others to dream big and make a difference. 
            </p>
            <div className="lg:block  hidden ml-8 mt-4 ">
            <div className="flex justify-center">
            <LazyLoadImage   effect="opacity" src={vectorLazyLoadImage} alt="" className="w-70%"/>
            </div>
          </div>
          </div>  
        </div>
        {/* A div with a background color of base-100, a shadow, a margin of 4rem, and a height of
           12rem. It is also relative.  */}
        <div className="">
          <div className={team.member}>
            <div>
              <figure className={team.figure}>
                <LazyLoadImage   effect="opacity" src={founder3} alt="name" className={`transition-transform transform hover:scale-110 ${team.LazyLoadImage}`} />
              </figure>
              <div className="pl-4">
                <h2 className="font-bold text-lg mt-2 text-center">
                  Nousheen Tahsina Hassan
                </h2>
                <p className="font-[400] py-1 text-lg text-paragraph-base text-center">
                  Co-founder & CEO
                </p>
              </div>
              <div className="flex justify-center">
                <Twitter className={team.icon}></Twitter>
                <Linkedin className={team.icon}></Linkedin>
                <FaceBook className={team.icon}></FaceBook>
              </div>
            </div>

            <div className={team.flexBox}>
              <div className="md:w-56 w-full text-primary border mb-3 border-primary"></div>
              <p className={team.paragraphTag}>
                Nousheen Tahsina Hassan, is the CEO has 14 years of experience
                in the banking sector. She has completed her master’s in
                business administration and did different professional training.
                Her entrepreneurial mindset and a keen interest in the tech
                world drive her to go with the startup concept. All her
                experiences in the MNCs and others depict the solution. She
                believes the solution will help every organization to accelerate
                its processes.
              </p>
            </div>
          </div>

          {/* A div with a background color of base-100, a shadow, a margin of 4rem, and a height of
           12rem. It is also relative.  */}
          <div className={team.member}>
            <div>
              <figure className={team.figure}>
                <LazyLoadImage   effect="opacity" src={founder2} alt="name" className={team.LazyLoadImage} />
              </figure>
              <div className="pl-4">
                <h2 className="font-bold text-lg mt-2 text-center">
                  AKM Ahsanul Hoque
                </h2>
                <p className="font-[400] py-1 text-lg text-paragraph-base text-center">
                  Co-founder & COO
                </p>
              </div>
              <div className=" flex justify-center">
                <Twitter className={team.icon}></Twitter>
                <Linkedin className={team.icon}></Linkedin>
                <FaceBook className={team.icon}></FaceBook>
              </div>
            </div>

            <div className={team.flexBox}>
              <div className="md:w-56 w-full text-primary border border- mb-3 border-primary"></div>
              <p className={team.paragraphTag}>
                AKM Ahsanul Hoque, is the COO having 23 years of experience in
                the tech world. Having experience in research, university
                teaching, and consultancy in both IT and business management. He
                has masters in both computer science & engineering and business
                administration. His entrepreneurship habit failed to stop him,
                he has great enthusiasm for business development, idea
                generation and implementation.
              </p>
            </div>
          </div>

          {/* A div with a background color of base-100, a shadow, a margin of 4rem, and a height of
           12rem. It is also relative.  */}
          <div className={team.member}>
            <div>
              <figure className={team.figure}>
                <LazyLoadImage   effect="opacity" src={founder1} alt="name" className={team.LazyLoadImage} />
              </figure>
              <div className="pl-4">
                <h2 className="font-bold text-lg mt-2 text-center">
                  Partha Saha
                </h2>
                <p className="font-[400] py-1 text-lg text-paragraph-base text-center">
                  Co-founder & CTO
                </p>
              </div>
              <div className="flex justify-center">
                <Twitter className={team.icon}></Twitter>
                <Linkedin className={team.icon}></Linkedin>
                <FaceBook className={team.icon}></FaceBook>
              </div>
            </div>

            <div className={team.flexBox}>
              <div className="md:w-56 w-full text-primary border mb-3 border-primary"></div>
              <p className={team.paragraphTag}>
                Partha Saha, is the CTO having 15 years of experience in the IT
                field. Having experience in networking administration & security
                issues, graphics, UI & UX design, business analysis & project
                management. He has completed his bachelor’s in computer science
                & engineering and done different training. He is enthusiastic
                about product development and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
