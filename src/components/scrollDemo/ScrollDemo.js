import React, { useState } from "react";
import { useEffect } from "react";
import UpArrow from "../svg/store/UpArrow";
export default function ScrollDemo() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {top && (
        <button className="fixed bottom-24 right-8 shadow-lg lg:h-14 lg:w-14  h-10 w-10 rounded-[50%] bg-white flex justify-center items-center" onClick={scrollTop}>
          {/* <LazyLoadImage src={scroll} alt="" className="lg:h-10 lg:w-10 h-8 w-8 "/> */}
          <UpArrow></UpArrow>
        </button>
      )}
    </div>
  );
}
