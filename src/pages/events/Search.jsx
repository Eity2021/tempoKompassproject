import React from "react";
import EventSearch from "../../components/svg/store/EventSearch";

export default function Search() {
  return (
    <div>
      <label className="input  input-bordered rounded-b-sm  flex items-center gap-2 border-[#060606]">
        <input
          type="text"
          className="grow focus:outline-none"
          placeholder="Search on Event"
        />
        <EventSearch></EventSearch>
      </label>
    </div>
  );
}

// input-bordered
