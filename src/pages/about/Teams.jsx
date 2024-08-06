import React from "react";
import Facebook from "../../components/svg/socialIcon/Facebook";
import Linkedin from "../../components/svg/socialIcon/Linkedin";
import Twitter from "../../components/svg/socialIcon/Twitter";
import backgroundOne from "../../assets/Nimages/About/lbg-1.png";
import backgroundTwo from "../../assets/Nimages/About/lbg-2.png";
import backgroundThree from "../../assets/Nimages/About/lbg-3.png";
import leaderBg from "../../assets/Nimages/About/leaderBg.png";

const teams = {
  teamHeading: "text-[20px] text-[#0C1E21] font-medium pt-[12px]  font-poppins",
  coHeading: "text-[16px] text-[#6b7280] font-medium font-poppins",
  title: "text-[16px]  text-[#6b7280] font-poppins  font-regular pt-[8px]",

  paddingBox: "p-[16px] text-center",

  // images: "flex justify-center",
  box: "flex justify-center",
};

const teamMembersData = [
  {
    name: "AKM Ahsanul Hoque",
    role: "Co-founder & COO",
    backgroundImage: backgroundOne,
    bgImages: " xl:w-[338px] xl:h-[236px]  w-[280px] h-[180px]  ",
  },
  {
    name: "Nousheen Tahsina Hassan",
    role: "Co-founder & CEO",
    backgroundImage: backgroundTwo,
    bgImages: " xl:w-[310px] xl:h-[240px] w-[230px] h-[180px]",
  },
  {
    name: "Partha Saha",
    role: "Co-founder & CTO",
    backgroundImage: backgroundThree,
    bgImages: " xl:w-[338px] xl:h-[228px]  w-[260px] h-[180px]",
  },
];

export default function Teams() {
  return (
    <div className="">
      <div className="relative">
        <div
          className="absolute right-0 w-[280px] h-[535px]"
          style={{ background: `url(${leaderBg}) no-repeat center/cover` }}
        ></div>
        <div className="container ">
          <div className="lg:pt-[100px] pt-[60px]">
            <div>
              <h1
                className="text-[36px] text-[#076F74] font-bold text-center"
                style={{ fontFamily: "Noe Display" }}
              >
                Leadership
              </h1>
            </div>

            <div className="flex justify-center px-[20px]">
              <p className="md:text-[20px] text-[15px] md:text-left  text-center  text-[#3C465F] font-poppins font-regular md:leading-[28px] leading-[21px] pt-[16px] ">
                As co-founders, our dream is not just to build a successful
                company, but to create a meaningful legacy that positively
                impacts the world. We envision a future where our innovations
                empower people, solve pressing challenges, and inspire others to
                dream big and make a difference.
              </p>
            </div>

            <div className="pt-[64px] xl:px-[120px] lg:px-[20px] px-[0px] container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembersData.map((member, index) => (
                  <div key={index}>
                    <div className={teams.box}>
                      <div
                        className={member.bgImages}
                        style={{
                          background: `url(${member.backgroundImage}) no-repeat center/cover`,
                        }}
                      >
                        {/* <div className={teams.images}></div> */}
                      </div>
                    </div>

                    <div className={teams.paddingBox}>
                      <h4 className={teams.teamHeading}>{member.name}</h4>
                      <p className={teams.coHeading}>{member.role}</p>

                      <div className="flex justify-center">
                        <div className="flex pt-[7px]">
                          <Facebook></Facebook>
                          <Twitter></Twitter>
                          <Linkedin></Linkedin>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
