import React, { useState } from "react";
import BookingModal from "./BookNow/BookingModal";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../../components/contextProvider/PricingProvider";
import DynamicButton from "../button/DynamicButton";

export default function PerListCard({ eventPerList }) {
  const navigate = useNavigate();
  const {
    setSelectedView,
    setSelectedIdxe,
    selectedIdxe,
    isModalOpen,
    setIsModalOpen,
  } = useContextProvider();

  const {
    evntfeests,
    evntname,
    details,
    date,
    starttime,
    endtime,
    evntcode,
    idxe,
  } = eventPerList;
console.log(idxe)
  const handleViewEvent = () => {
    setSelectedView(evntcode);
    navigate("/events-view");
  };

  const [monthDay] = date.split(", ");
  const [abbreviatedMonth, day] = monthDay.split(" ");

  const monthMapping = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
  const month = monthMapping[abbreviatedMonth];

  const handleBookNow = () => {
    setSelectedIdxe(idxe);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="mt-[30px]">
        <div className=" py-[22px] px-[20px] border-l-[#E63789] border-4">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="font-poppins text-[20px] text-[#263238] font-bold mb-[10px] ">
                {evntname}
              </p>

              <div className="flex gap-6">
                <li className="font-poppins text-[12px] text-[#E63789] font-bold">
                  Workshop
                </li>
                <li className="font-poppins text-[12px] text-[#5243C2] font-bold">
                  {evntfeests}
                </li>
              </div>

              <p className="line-clamp-2 font-poppins text-[18px] text-[#767676] font-medium mt-[12px]">
                {parse(details)}
              </p>
              <div className="mt-[16px]">
                <small
                  className="font-poppins text-[12px] text-[#E63789] font-bold cursor-pointer"
                  onClick={handleViewEvent}
                >
                  Read More
                </small>
              </div>
            </div>

            <div className="flex justify-end ">
              <div>
                <p className="font-poppins text-[20px] text-[#E63789] font-bold text-center">
                  {day},
                </p>
                <p className="font-poppins text-[20px] text-[#E63789] font-bold text-center">
                  {month}
                </p>
                <p className="font-poppins text-[12px] text-[#21383E] font-medium text-center">
                  {starttime} - {endtime}
                </p>

                {evntfeests === "Paid" ||
                evntfeests === "paid" ||
                evntfeests === "PAID" ? (
                  <div className="flex justify-center mt-[30px]">
                    <DynamicButton
                      label="Book now"
                      onClick={handleBookNow}
                      className="w-[220px]"
                    ></DynamicButton>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        <div>
          {isModalOpen ? (
            <BookingModal
              setIsModalOpen={setIsModalOpen}
              selectedIdxe={selectedIdxe}
            />
          ) : null}
        </div>
      }
    </div>
  );
}
