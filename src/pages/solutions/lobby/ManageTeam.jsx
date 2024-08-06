import React from "react";
import shape from "../../../assets/Nimages/Lobby/shape.png";
import shape1 from "../../../assets/Nimages/Lobby/shape1.png";
import lobbyLogo from "../../../assets/Nimages/Lobby/lobbyLogo.png";
export default function ManageTeam() {
  return (
    <div className="container">
      <div className="lg:h-[349px] h-full bg-[#0C1E21] px-2 lg:px-0 relative rounded-[10px]">
        <div
          className="w-[251px] h-[251px]  2xl:flex hidden absolute top-6 rounded-[10px]"
          style={{
            backgroundImage: `url(${shape})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[251px] h-[251px] 2xl:flex hidden absolute right-[-7.2rem] bottom-[-110px] rounded-[10px]"
          style={{
            backgroundImage: `url(${shape1})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
       <div className="flex justify-center">
       <div
          className="w-[225px] h-[256px] lg:flex hidden absolute bottom-[0px] rounded-[10px] "
          style={{
            backgroundImage: `url(${lobbyLogo})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
       </div>
        <div className="text-center flex justify-center items-center h-[349px] ">
          <div>
            <h1 className="lg:text-[46px] md:text-[35px] text-[25px] font-poppins font-medium  text-white  uppercase px-[10px]">
              Manage your team with confidence — anytime, anywhere.
            </h1>
            <div className="flex justify-center pt-[30px]">
              <p className="font-poppins font-normal text-[#fff] lg:text-[20px] text-[14px] lg:w-[67rem] md:w-[35rem] w-full uppercase">
                Remote work is here to stay. If your employee moves, we’ll let
                you know when to file new state tax registration and help handle
                it for you—not to mention you can pay international contractors
                in more than 120 countries. Plus, key documents can be filled
                out remotely with e-signatures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
