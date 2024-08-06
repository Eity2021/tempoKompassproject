import React from "react";
// import Calender from "./Calender";
import EventList from "./EventList";

export default function Event() {
  
  return (
    <div className="mt-[120px]">
      <div className="container">
        <div className="grid grid-cols-3 gap-32">
          <div>
            <div>
              {/* <Calender></Calender> */}
            </div>
            <div className="pt-[40px]">
              <p className="font-poppins text-[20px] font-[600px] text-[#076F74] my-[10px]">
                Filters
              </p>
              <div>
                <li className="font-poppins text-[16px] font-[600px] text-[#E63789]">
                  Workshop
                </li>
                <li className="font-poppins text-[16px] font-[600px] text-[#3892D6]">
                  Conference
                </li>
                <li className="font-poppins text-[16px] font-[600px] text-[#F7941D]">
                  Meetup
                </li>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="pb-[60px]">
              <EventList></EventList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
