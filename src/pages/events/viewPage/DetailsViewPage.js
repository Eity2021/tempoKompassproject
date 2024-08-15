import React, { useEffect, useState } from "react";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import parse from "html-react-parser";
import BookingModal from "../BookNow/BookingModal";
import DynamicButton from "../../button/DynamicButton";
export default function DetailsViewPage() {
  const {
    eventView,
    setEventView,
    selectedView,
    setSelectedIdxe,
    selectedIdxe,
    isModalOpen,
    setIsModalOpen,
  } = useContextProvider();

  const {
    address,
    date,
    details,
    endtime,
    evntbanner,
    evntcurrency,
    evntfeeamnt,
    evntfeests,
    evntname,
    evntpaylastday,
    evnttype,
    starttime,
    idxe,
  } = eventView;
  const fees = evntfeests?.toUpperCase();


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(`https://api.hellokompass.com/event/webevntshow/${selectedView}`, {
      signal,
    })
      .then((res) => res.json())
      .then((data) => setEventView(data.data))
      .catch((error) => {
        if (error.name === "AbortError") {
        <></>
        }
      });
    return () => controller.abort();
  }, [selectedView, setEventView]);

  const handleBookNow = () => {
    setSelectedIdxe(idxe);
    setIsModalOpen(true);
  };
  return (
    <div className="mt-[90px]">
      {
        evntbanner && (
          <div>
          <img src={evntbanner} alt="" className="h-[600px] w-[100%]" />
        </div>
        )
      }
     
      <div className="container">
        <div className=" mt-[100px]  mb-[30px] ">
          <div className="flex justify-between">
            <p className="font-poppins text-[30px] text-[#21383E] font-bold">
              {evntname}
            </p>
            <div>
              <p className="font-poppins text-[30px] text-[#F7941D] font-bold text-center">
                {fees}
              </p>
              <p className="font-poppins text-[25px] text-[#21383E] font-bold">
                {evntfeeamnt} {evntcurrency}
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-[-22px]">
            <div className="">
              <p className="font-poppins text-[16px] text-[#21383E] font-bold">
                Event : {evnttype}
              </p>
              <p className="font-poppins text-[18px] text-[#F7941D] font-medium">
                Event Date : {date}
              </p>

              <p className="font-poppins text-[14px] text-[#21383E] font-medium">
                Time : {starttime} - {endtime}
              </p>
              <p className="font-poppins text-[18px] text-[#21383E] font-bold text-start">
                Location : {address}
              </p>
            </div>

            <div className="mt-8">
              <p className="font-poppins text-[22px] text-[#21383E] font-bold text-end">
                {" "}
                Last date of pay : {evntpaylastday}
              </p>
            </div>
          </div>

          <div className="mt-2 ">
            <p className="font-poppins text-[17px] text-[#21383E] font-medium">
              {parse(String(details))}
            </p>
          </div>

          <div className="flex justify-end mt-[30px]">
            <DynamicButton
              label="Book now"
              onClick={handleBookNow}
            ></DynamicButton>
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
