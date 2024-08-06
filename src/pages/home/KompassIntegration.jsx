import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import integrationBg from "../../assets/Nimages/Home/integrationBg.png";
import integrationCircle from "../../assets/Nimages/Home/integrationCircle.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function KompassIntegration() {
  return (
    <div className="bg-[#0C1E21]" >
   <div className="container my-[48px] ">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="lg:w-[666px] md:h-[666px]   w-auto  h-[250px] flex  items-center " style={{background: `url(${integrationBg}) no-repeat center/cover` }}>
           <div className="flex items-center  lg:h-full px-[20px]">
           <div>
                <h1 className="md:text-[40px] text-[26px] font-bold text-[#fff]  text-center lg:text-left " style={{ fontFamily: "Noe Display" }}>KOMPASS Integration</h1>

                <p className="font-poppins font-[400] text-[18px] text-[#fff] text-center lg:text-left xl:w-full lg:w-[480px]  w-full">
                Our solution plays exceptionally well with others, seamlessly integrating with the tools you already rely on
                </p>
            </div>
           </div>
        </div>
        <div className="flex lg:justify-end justify-center items-center px-[30px]">
            <div>
                <LazyLoadImage className=" " src={integrationCircle} alt="integrationCircle" effect="blur"></LazyLoadImage>
            </div>
        </div>
      </div>
   </div>
    </div>
  );
}
