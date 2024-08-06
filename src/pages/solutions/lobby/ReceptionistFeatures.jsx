import React from "react";
import "react-tabs/style/react-tabs.css";
import Frame from "../../../assets/Nimages/Lobby/Frame.png";
import Frame1 from "../../../assets/Nimages/Lobby/Frame1.png";
import Frame2 from "../../../assets/Nimages/Lobby/Frame2.png";
import Frame3 from "../../../assets/Nimages/Lobby/Frame3.png";
import Frame4 from "../../../assets/Nimages/Lobby/Frame4.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function ReceptionistFeatures() {
  return (
    <div className="">
      <div className="lg:px-[0px] px-[20px]">
        <h1
          className="lg:text-[48px] md:text-[33px] text-[28px] font-semibold text-[#091133] lg:pt-[0px] pt-[30px]"
          style={{ fontFamily: "Noe Display" }}
        >
          The <span className="text-[#11989F]">Receptionist</span> for iPad Key
          Features
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-[50px] gap-4 lg:px-[0px] px-[20px]">
        <div>
          <div>
            <LazyLoadImage src={Frame} alt="Frame" />
          </div>
          <div>
            <p className="font-poppins font-medium text-[16px] text-[#091133] py-[15px]">
              Automated Guest check-in
            </p>
            <p className="text-justify text-[16px] font-poppins font-regular text-[#5D6970]">
              Fill up the hotel/resort check-in information before entering the
              hotel while traveling. Automatically suggest special requirements.
            </p>
          </div>
        </div>

        <div>
          <div>
            <LazyLoadImage src={Frame1} alt="Frame" />
          </div>
          <div>
            <p className="font-poppins font-medium text-[16px] text-[#091133] py-[15px]">
              Automated Guest check-in/Check-out
            </p>
            <p className="text-justify text-[16px] font-poppins font-regular text-[#5D6970]">
              The Receptionist has the guest's information well ahead of his/her
              arrival. And suggest housekeeping for room preparation.
            </p>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage src={Frame2} alt="Frame" />
          </div>
          <div>
            <p className="font-poppins font-medium text-[16px] text-[#091133] py-[15px]">
              MIS
            </p>
            <p className="text-justify text-[16px] font-poppins font-regular text-[#5D6970]">
              MIS reports will be generated as per the requirements of the hotel
              management and other authorities.
            </p>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage src={Frame3} alt="Frame" />
          </div>
          <div>
            <p className="font-poppins font-medium text-[16px] text-[#091133] py-[15px]">
              Delivery management
            </p>
            <p className="text-justify text-[16px] font-poppins font-regular text-[#5D6970]">
              The housekeeping and others will provide the best services to its
              guests as the service requirements are known well ahead of time.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] lg:px-[0px] px-[20px]">
        <div>
          <LazyLoadImage src={Frame4} alt="Frame" />
        </div>
        <div>
          <p className="font-poppins font-medium text-[16px] text-[#091133] py-[15px]">
            Customized Guest experience
          </p>
          <p className="text-justify text-[16px] font-poppins font-regular text-[#5D6970]">
            Fill up the hotel/resort check-in information before entering the
            hotel while on the road. Paragraph locked by Prof. Ahsanul Hoque To
            uphold the guest experiences Kompass Lobby will reduce the Q and
            allow a seamless entry at the hotel room.
          </p>
        </div>
      </div>
    </div>
  );
}
