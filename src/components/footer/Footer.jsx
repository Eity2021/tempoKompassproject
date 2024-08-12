import React from "react";
import { Link } from "react-router-dom";
import FaceBook from "../svg/socialIcon/Facebook";
import Twitter from "../svg/socialIcon/Twitter";
import roundLogo from "../../assets/Nimages/Footer/roundLogo.png";
import ssl from "../../assets/Nimages/Footer/ssl.png";
import qrcode from "../../assets/Nimages/Footer/qrcode.png";
import Calendar from "../svg/store/Calendar";
import FooterSlider from "./FooterSlider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Linkedin from "../svg/socialIcon/Linkedin";
const footer = {
  footers: "font-mukta font-regular text-[#404040] md:text-[16px] text-[14px] ",
};

export default function Footer() {
  return (
    <div className="bg-[#F8F8F8]  rounded-tr-[100px] ">
      <div className=" container px-[20px] py-[40px]">
        <div>
          <div className="border-primary  mb-6 w-36">
            <LazyLoadImage src={roundLogo} alt="" />
          </div>
        </div>
        <div className="grid  lg:grid-cols-4  md:grid-cols-2   grid-cols-1 gap-6  ">
          <div className="">
            <div className="">
              <h1 className="font-mukta font-medium text-[#202020] md:text-[16px] text-[14px]  pb-[15px]">
                Scan For Details :
              </h1>

              <div className="">
                <LazyLoadImage
                  src={qrcode}
                  alt=""
                  className="w-[120px] h-[120px]"
                />
              </div>
            </div>
          </div>
          <div className="">
            <ul className="list-none">
              <li className="">
                <div className="">
                  <h1 className="font-mukta font-medium text-[#202020] md:text-[16px] text-[14px] pb-[15px]">
                    Call Us
                  </h1>
                  <p className="font-mukta font-regular text-[#404040] md:text-[16px] text-[14px]  ">
                    +88 02 48811450
                  </p>
                </div>
              </li>
              <li>
                <div className="mt-[25px]">
                  <h1 className="font-mukta font-medium text-[#202020] md:text-[16px] text-[14px]  pb-[15px]">
                    Email
                  </h1>
                  <p className="font-mukta font-regular text-[#404040] md:text-[16px] text-[14px] ">
                    hello@hellokompass.com
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="">
            <div className="">
              <h1 className="font-mukta font-medium text-[#202020] md:text-[16px] text-[14px]  pb-[15px]">
                Commercial Address
              </h1>

              <p className="font-mukta font-regular text-[#404040] md:text-[14px] text-[13px]  leading-7">
                {" "}
                <p> Suite 6B,Holding No 10,Road No 1,Block B, Niketan</p>
                <p>Gulshan, Dhaka-1212,Bangladesh</p>
              </p>
            </div>
          </div>

          <div>
            <Link className={footer.footers} to="/contact">
              Contact Us
            </Link>
            <div className="flex  justify-start items-center pt-[10px]">
              <div className="w-[304px] h-[96px] border border-solid border-rgba(228, 228, 228, .6) rounded-[8px] bg-[#F3F3F3]">
                <div className=" flex justify-center items-center h-[96px] w-full">
                  <h1 className="font-mukta font-medium text-[#202020] md:text-[16px] text-[12px]">
                    Schedule A Meeting
                  </h1>
                  <div className="px-[8px]">
                    <Calendar></Calendar>
                  </div>
                  <div>
                    <Link
                      className="font-mukta font-regular text-[#076F74] text-[16px] underline"
                      to="/contact"
                    >
                      Kompass
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-mukta font-medium text-[#202020] text-[16px] text-center pt-[50px]">
            We Accept Payment Gateway
          </h1>
          <div className="flex justify-center pt-[5px]">
            {/* <LazyLoadImage src={paymentGateway} alt="Gateway" /> */}
            <FooterSlider></FooterSlider>
            <div></div>
          </div>
          <div className="flex justify-center mt-[10px]">
            <LazyLoadImage
              src={ssl}
              alt="ssl"
              className="w-[100px]"
            ></LazyLoadImage>
          </div>
          <div className="border border-dashed	mt-[30px]"> </div>
          <div className="md:flex md:justify-between  mt-[20px]">
            <div>
              <div className="flex h-100 items-center">
                <p className="md:text-[16px]  text-[12px] font-poppins font-medium text-[#404040]">
                  {" "}
                  © 2024 hellokompass. All rights reserved.
                </p>
              </div>
            </div>
            <div>
              <ul className="md:flex  pr-[10px]">
                <li className="pr-4">
                  <Link className={footer.footers} to="/privacy">
                    Privacy Policy
                  </Link>
                </li>

                <li className="pr-4">
                  <Link className={footer.footers} to="/termsOfPayment">
                    Payment & Refund Policy
                  </Link>
                </li>
                <li className="pr-4">
                  <Link className={footer.footers} to="/terms">
                    Terms and Condition
                  </Link>
                </li>
                <li className="pr-4 mb-[20px]">
                  <Link className={footer.footers} to="/reports">
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className=" md:flex flex-none justify-between">
                <div className="flex pr-8 gap-4  ">
                  <FaceBook className="drop-shadow-md "></FaceBook>
                  <a
                    href="https://twitter.com/KompassConnect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="drop-shadow-md"></Twitter>
                  </a>

                  {/* <Instagram className="drop-shadow-md"></Instagram> */}
                  <a
                    href="https://bd.linkedin.com/company/kompass-technologies-limited?trk=public_profile_topcard-current-company"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <Linkedin className="drop-shadow-md"></Linkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
