import React, { useEffect, useState } from "react";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import parse from "html-react-parser";
import BookingModal from "../BookNow/BookingModal";
export default function DetailsViewPage() {
  const { eventView, setEventView, selectedView, bookModal, setBookModal } = useContextProvider();

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
  } = eventView;
  const fees = evntfeests?.toUpperCase();
  console.log(eventView);

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
          // console.log("request cancelled");
        }
      });
    return () => controller.abort();
  }, [selectedView, setEventView]);

  return(
    <div className="mt-[90px]">
    <div>
      <img src={evntbanner} alt="" className="h-[600px] w-[100%]" />
    </div>
    <div className="container">
      <div className=" mt-[30px]  mb-[30px]">
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
          <label
            htmlFor="my-modal"
            className="font-poppins text-[16px] text-[#fff] font-medium text-center bg-[#21383E] py-[12px] w-72 flex justify-center"
          >
            <span className="text-[16px] font-medium font-poppins flex  items-center">
              Book Now
            </span>
          </label>
        </div>
      </div>
    </div>

    {
      <div>
        {bookModal ? <BookingModal setBookModal={setBookModal} /> : null}
      </div>
    }
  </div>
  )
}
