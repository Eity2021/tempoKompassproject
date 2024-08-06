import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import aboutFounderImg from "../../assets/Nimages/About/founder.png";
export default function AboutUs() {
  return (
    <div className="lg:pt-[126px] pt-[80px] px-[20px]">
      <div className="flex flex-col lg:flex-row-reverse ">
        <div className="flex-1 flex justify-center ">
        
            <LazyLoadImage
              src={aboutFounderImg}
            effect="blur"
              alt=""
              className=" "
            />
          
        </div>

        <div className=" flex-1">
          <div className="flex justify-center items-center lg:pt-[0px] pt-[20px] xl:[0px] lg:pr-[15px] md:pr-[0px]">
          <div >
          
          <div>
         
            <p className="md:text-[18px] text-[16px] text-[#3C465F] font-poppins md:leading-[28px] leading-[22px]   font-regular md:w-[510px] w-full">
            "One Team, Many Talents" embodies Kompass Technologies'
             core principle of collaboration and the diversity of expertise 
             within our team. Success stems from collective efforts, not
              individual endeavors. We cherish the unique strengths each
               member brings, fostering inclusivity, idea-sharing, and
                empowerment. In our supportive environment, diverse talents
                 unite to produce innovative solutions and exceptional outcomes.
            </p>
          </div>


          <div>
            <p className="md:text-[18px] text-[16px] text-[#3C465F] font-poppins font-regular md:leading-[28px] leading-[22px]  w-full md:w-[510px] pt-[24px]">
            "Team Unity, Diverse Strengths" embodies Kompass Technologies'
             principle of collaboration, valuing each member's unique expertise. 
             In our supportive environment, diverse talents unite for innovative 
             solutions and exceptional outcomes.

            </p>
          </div>
          <div className="pt-[30px]">
            <Link to="/contact">
              <button className="mt-4 btn bg-[#076F74] font-poppins font-regular text-[14px]   text-[#fff] rounded-none py-[8px] px-[24px] hover:bg-[#12a9b2]">
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>
          </div>


      </div>
    </div>
  );
}
