import React from "react";
import clientDemo from "../../assets/Nimages/Home/clientDemo.png";
import clientImage2 from "../../assets/Nimages/Home/clientImage2.png";
import clientImage3 from "../../assets/Nimages/Home/clientImage3.png";
// import roundLogo from "../../assets/Nimages/Home/roundLogo.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarFull from "../../common/components/svg/store/StarFull";
import StarNone from "../../common/components/svg/store/StarNone";
import "./styles.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Customer() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    swipeToSlide: true,

    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,

    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    // },
  };
  return (
    <div className="">
      <div className="py-[48px] ">
        <div>
          <div className="container px-[30px] ">
            <div className="flex justify-center text-center ">
              <h1
                className="md:text-[40px] text-[33px] font-semibold text-[#373733] leading-[45px] md:w-[400px] w-full"
                style={{ fontFamily: "Noe Display" }}
              >
                What Our Client Have To Say
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 ">
              <div className="flex lg:justify-start justify-center ">
                <div className="xl:w-[600px] lg:w-[450px] md:w-[520px] w-[95%] box-shadow relative p-[10px]">
                  <div className="bg-[#EFF0F4] h-[16px] w-[66px] rounded-r-lg absolute top-[120px] right-[90px]"></div>
                  <div className="bg-[#EFF0F4] h-[16px] w-[66px] rounded-r-lg absolute bottom-[100px] right-[90px]"></div>
                  <div className="bg-[#EFF0F4] h-[16px] w-[124px] rounded-r-lg absolute bottom-[180px] right-[110px]"></div>
                  <div className="bg-[#EFF0F4] h-[8px] w-[66px] rounded-r-lg absolute bottom-[160px] right-[165px]"></div>
                  <Slider {...settings}>
                    <div className="relative">
                      <h3>
                        <div className="flex bg-[#fff] w-[260px] p-[8px] custom-box-shadow z-20">
                          <div>
                            <LazyLoadImage
                              src={clientImage3}
                              alt="client"
                              className="h-[48] w-[48px]"
                            ></LazyLoadImage>
                          </div>
                          <div className="pl-[13px]">
                            <h4 className="text-left font-poppins font-medium text-[16px]  text-[#202020]">
                              Engr. Md. Tareque Adnan
                            </h4>
                            <p className="text-left font-poppins font-regular text-[14px] text-[#5A5A5A]">
                              Managing Director
                            </p>
                          </div>
                        </div>

                        <div className="absolute top-[60px] p-[8px] z-[-10] w-[330px] h-[130px]  box-shadow2">
                          <p className="text-left font-poppins font-regular text-[14px] text-[#5A5A5A]">
                            Kompass Connect revolutionizes business contacts,
                            streamlining communication, enhancing relationships,
                            and empowering market research with intuitive tools.
                          </p>
                          <div>
                            <ul className="flex pt-[12px] pb-[3px]">
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarNone></StarNone>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </h3>
                    </div>

                    <div className="relative">
                      <h3>
                        <div className="flex bg-[#fff] w-[260px] p-[8px] custom-box-shadow z-20">
                          <div>
                            <LazyLoadImage
                              src={clientImage2}
                              alt="client"
                              className="h-[48] w-[48px]"
                            ></LazyLoadImage>
                          </div>
                          <div className="pl-[13px]">
                            <h4 className="text-left font-poppins font-medium text-[16px]  text-[#202020]">
                              Rezaul Karim
                            </h4>
                            <p className="text-left font-poppins font-regular text-[14px] text-[#5A5A5A]">
                              Group Director
                            </p>
                          </div>
                        </div>

                        <div className="bg-[#fff] absolute top-[60px] p-[8px] z-[-10] w-[330px] h-[130px] box-shadow2">
                          <p className="text-left font-poppins font-regular text-[14px] text-[#5A5A5A]">
                            Kompass's suite - Connect, Lobby, Payroll -
                            revolutionizes operations: better client
                            communication, visitor experience, simplified
                            payroll. Highly recommend for organizations.
                          </p>
                          <div>
                            <ul className="flex pt-[12px] pb-[3px]">
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarFull></StarFull>{" "}
                              </li>
                              <li>
                                {" "}
                                <StarNone></StarNone>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </h3>
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="flex  justify-center   lg:pt-[0px] pt-[48px]">
                <div>
                  <div>
                    <h2 className="font-poppins text-justify font-medium text-[20px] text-[#5A5A5A] md:w-[420px]">
                      I am delighted to see the user growth of KompassConnect
                      and share the positive feedback, comments, and performance
                      of our valuable clients who are empowering their staff and
                      organization. I love to see the happy faces of our users
                      and their satisfaction and retention is one of the key
                      goals.
                    </h2>
                    <h2 className="md:w-[420px] font-poppins  font-medium  italic text-[16px] text-[#5A5A5A] pt-[30px]">
                      <sup
                        className="text-[36px] text-[#5A5A5A]"
                        style={{ top: ["13px"] }}
                      >
                        “
                      </sup>{" "}
                      Kompass team always listens to their customer and tries to
                      provide a solution to ease their daily activities. The
                      responsiveness of our support team is very high and they
                      are helpful to our clients. Our client's positive comments
                      and ideas help us to enhance the solution and take it to
                      the next leve
                      <sub
                        className="text-[36px] text-[#5A5A5A]"
                        style={{ bottom: ["-16px"] }}
                      >
                        “
                      </sub>
                    </h2>
                  </div>
                  <div className="flex mt-[30px]">
                    <div>
                      <LazyLoadImage src={clientDemo} alt="demo"></LazyLoadImage>
                    </div>

                    <div className="ml-[20px] flex justify-center items-center h-auto">
                      <div>
                        <h1 className="font-poppins font-medium  text-[16px] md:text-[20px] text-[#202020]">
                          AKM Ahsanul Hoque
                        </h1>
                        <p className="font-poppins font-regular text-[14px] text-[#5A5A5A]">
                          Co-founder, Kompass
                        </p>
                      </div>
                    </div>
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

// style={{ background: `url(${blobs})` }}
