import React, { useEffect, useState } from 'react'
import Search from './Search'
import ListCard from './ListCard'

export default function EventList() {
  const [eventList,setEventList] = useState([]);
useEffect(() => {
  const controller = new AbortController();
  const { signal } = controller;

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.hellokompass.com/event/webevntlist", { signal });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setEventList(data.data); // Make sure this is the correct path

    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request cancelled");
      } else {
        console.error("Fetch error:", error);
      }
    }
  };

  fetchData();

  return () => controller.abort();
}, []);



  return (
    <div>
      <Search></Search>

      <div>
        <ListCard  eventList={eventList}></ListCard>
      </div>
    </div>
  )
}
