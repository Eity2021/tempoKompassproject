import React, { useEffect, useState } from "react";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";

export default function DetailsViewPage() {
  const { eventView, setEventView, selectedView } = useContextProvider();

  const {
    address,
    date,
    details,
    endtime,
    eventfeetxt,
    evntbanner,
    evntcode,
    evntcurrency,
    evntfeeamnt,
    evntfeests,
    evntname,
    evntpaylastday,
    evntstatus,
    evnttype,
    starttime,
  } = eventView;

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

  return <div className="mt-[120px]">DetailsViewPage{selectedView}:</div>;
}
