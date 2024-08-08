import React, { useEffect, useState } from "react";

import PerListCard from "./PerListCard";
import EventLoader from "../../components/eventLoader/EventLoader";
export default function ListCard({ eventList }) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
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
        <div>
          {loader ? (
            <>
              <EventLoader></EventLoader>
            </>
          ) : (
            <div>
              {eventList?.map((eventPerList) => (
                <PerListCard
                  key={eventPerList.idxe}
                  eventPerList={eventPerList}
                ></PerListCard>
              ))}
            </div>
          )}
        </div>
      }
    </div>
  );
}
