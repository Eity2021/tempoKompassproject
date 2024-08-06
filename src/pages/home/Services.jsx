import React from "react";
import roundShape from "../../assets/Nimages/roundShape.png";
import connectLine from "../../assets/Nimages/Home/connect_line.png";
import lobbyLine from "../../assets/Nimages/Home/lobby_line.png";
import analytics from "../../assets/Nimages/Home/analytics-1.png";
import clarityConnectSolid from "../../assets/Nimages/Home/lobby.png";
import lobby from "../../assets/Nimages/Home/clarity_connect-solid.png";
import teamLine from "../../assets/Nimages/Home/team_line.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const services = {
  sectionHeading:
    " text-[30px] md:text-[35px]  lg:text-[40px] text-[#373733] font-bold  ",

  title:
    " text-[20px] text-[#373737] font-semibold font-poppins  pb-[17px] text-center",

  info: "text-[16px]  text-[#404040] font-poppins  font-regular pt-[25px]  lg:w-96 w-full	 text-center",
  imageMargin: "",
};
export default function Services() {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  return (
    <>
      <div className=" gap-4  mt-[100px] ">
        <div className="  flex  items-center justify-center ">
          <div>
            <div
              className="lg:w-[535px] lg:h-[535px] h-[200px] w-100 flex  items-center md:justify-center"
              style={{
                background: isSmallScreen
                  ? "none"
                  : `url(${roundShape}) no-repeat center`,
              }}
            >
              <div className="lg:px-[64px] px-[40px] text-center">
                <h1
                  className={services.sectionHeading}
                  style={{ fontFamily: "Noe Display" }}
                >
                  What <span className="text-primary">Services</span> Are We
                  Providing?
                </h1>

                <p className="pt-[23px] font-regular text-[16px] lg:text-[18px]  text-[#000] lg:w-[380px]  w-full">
                  Offer your business with the best assistance for growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[40px]  mb-[80px] ">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center">
                  <div className={services.imageMargin}>
                    <div className="bg-[#4D8A89] h-[80px] w-[80px] rounded-[50%] ">
                      <div
                        className="flex justify-center items-center h-[80px] rounded-[50%] "
                        style={{
                          boxShadow: "rgba(77, 138, 137, 0.4) 0px 7px 29px 0px",
                        }}
                      >
                        <LazyLoadImage
                                 effect="blur"
                          src={clarityConnectSolid}
                          alt="clarityConnectSolid"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className={services.title}>Kompass Connect</p>
                </div>
                <div className="flex justify-center">
                  <LazyLoadImage src={connectLine} alt="connectLine"          effect="blur"/>
                </div>
                <div>
                  <p className={services.info}>
                    Kompass Connect is an appointment and visitor management
                    system will bring efficiency to your workplace by sending &
                    receiving a meeting request, booking a meeting room,
                    allocating resources, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center ">
              <div className=" ">
                <div>
                  <div className="flex justify-center">
                    <div className="bg-[#6ECAC9] h-[80px] w-[80px] rounded-[50%] ">
                      <div
                        className="flex justify-center items-center h-[80px] rounded-[50%] "
                        style={{
                          boxShadow:
                            "rgba(110, 202, 201, 0.4) 0px 7px 29px 0px",
                        }}
                      >
                        <LazyLoadImage src={lobby} alt="lobby"          effect="blur"/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className={services.title}>Kompass Lobby</p>
                  </div>
                  <div className="flex justify-center">
                    <LazyLoadImage src={lobbyLine} alt="lobbyLine"          effect="blur" />
                  </div>
                  <div>
                    <p className={services.info}>
                      Kompass Connect Lobby management system will accelerate
                      your lobby's check-in and check-out process. The
                      acceleration process will give a priority feel to the
                      traveler or visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex justify-center ">
              <div className="">
                <div className="flex justify-center">
                  <div className={services.imageMargin}>
                    <div className="bg-[#00BCC8] h-[80px] w-[80px] rounded-[50%] ">
                      <div
                        className="flex justify-center items-center h-[80px] rounded-[50%] "
                        style={{
                          boxShadow: "rgba(0, 188, 200, 0.4) 0px 7px 29px 0px",
                        }}
                      >
                        <LazyLoadImage src={analytics} alt="analytics"          effect="blur"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className={services.title}>Kompass Teams</p>
                </div>
                <div className="flex justify-center">
                  <LazyLoadImage src={teamLine} alt="teamLine"          effect="blur"/>
                </div>
                <div>
                  <p className={services.info}>
                    Kompass Connect Payroll & HR will help you to eliminate your
                    spreadsheets and paperwork at the office. Kompass Teams is
                    powerful and simple to manage & use. It just needs a click
                    to run your payroll.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
