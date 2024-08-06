import React from 'react'
import kompass from "../../assets/image/Kompass_info.jpg";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function AllInfo() {
  return (
   <div className="">
     <div className='w-full'>
        <LazyLoadImage   src={kompass} alt="" className="w-full"/>
    </div>
   </div>
  )
}
