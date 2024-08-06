import React from "react";
import shape from "../../../assets/Nimages/Payroll/shape.png";
import shape1 from "../../../assets/Nimages/Payroll/shape1.png";
import payrollLogo from "../../../assets/Nimages/Payroll/payrollLogo.png";
export default function TextPoster() {
  return (
   
    <div className="container">
      <div className="h-[229px] bg-[#0C1E21] px-2 lg:px-0 relative rounded-[10px]">
        <div
          className="w-[251px] h-[251px] 2xl:flex hidden absolute top-0 rounded-[10px]"
          style={{
            backgroundImage: `url(${shape})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>


        <div
          className="w-[251px] h-[251px] 2xl:flex hidden  absolute right-[-7.2rem] bottom-[-110px] rounded-[10px]"
          style={{
            backgroundImage: `url(${shape1})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>


        <div
          className="w-[225px] h-[229px] absolute   left-[41.8rem] bottom-[0px] rounded-[10px] 2xl:flex hidden "
          style={{
            backgroundImage: `url(${payrollLogo})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-center flex justify-center items-center h-[229px] ">
          <h1 className="lg:text-[20px] text-[16px] font-poppins font-medium  text-white lg:leading-[30px] uppercase xl:w-[53rem] w-full">
          AS A BUSINESS OWNER, THERE ARE A LOT OF THINGS THAT STRESS ME OUT, BUT WITH KOMPASS, 
          RUNNING PAYROLL ISN’T ONE OF THEM. I KNOW MY EMPLOYEES WILL BE PAID ON TIME AND ALL REPORTS WILL BE FILED ACCURATELY.
          </h1>
        </div>
      </div>
    </div>
  );
}
