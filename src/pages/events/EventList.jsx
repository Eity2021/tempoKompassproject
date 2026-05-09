import React, { useEffect, useState } from 'react'
import Search from './Search'
import ListCard from './ListCard'

export default function EventList() {
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.hellokompass.com/event/webevntlist");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (isMounted) {
          setEventList(data.data);
        }

      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);



  return (
    <div>
      <Search></Search>

      <div>
        <ListCard eventList={eventList}></ListCard>
      </div>
    </div>
  )
}
