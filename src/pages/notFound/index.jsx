import React from "react";
import notFound from "../../assets/Nimages/404page.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-48">
      <div className="mt-14">
        <div className="flex justify-center items-center h-full">
          <LazyLoadImage effect="opacity" src={notFound} alt="" />
        </div>
        <div className="flex justify-center mt-16">
          <Link to="/">
            <button className="btn bg-[#0c1e21] text-white px-10 py-[4px]  rounded-md">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
