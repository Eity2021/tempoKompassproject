import React  from "react";

import PerListCard from "./PerListCard";
export default function ListCard({eventList}) {
  // console.log(eventList);

  return (
    <div>
    <div>
    <div className="flex gap-6 mt-[40px]">
        <p className="font-poppins text-[20px] text-[#076F74] font-bold underline">
          This Month Events
        </p>
        <p className="font-poppins text-[20px] text-[#848199] font-bold">
          Upcoming Events
        </p>
      </div>
    </div>
      {
        eventList?.map((eventPerList) => (
          <PerListCard key={eventPerList.idxe} eventPerList={eventPerList}></PerListCard>
         ) )
      }
     
    </div>
  );
}
