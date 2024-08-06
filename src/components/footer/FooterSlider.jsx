import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import american from "../../assets/Nimages/Bank/American.png";
import bk from "../../assets/Nimages/Bank/Bk.png";
import dmon from "../../assets/Nimages/Bank/Dmon.png";
import visa from "../../assets/Nimages/Bank/Visa.png";
import ab from "../../assets/Nimages/Bank/ab.png";
import asia from "../../assets/Nimages/Bank/asia.png";
import bankCard from "../../assets/Nimages/Bank/bankCard.png";
import brack from "../../assets/Nimages/Bank/brack.png";
import city from "../../assets/Nimages/Bank/city.png";
import dbl from "../../assets/Nimages/Bank/dbl.png";
import fastCash from "../../assets/Nimages/Bank/fastCash.png";
import fsib from "../../assets/Nimages/Bank/fsib.png";
import iPay from "../../assets/Nimages/Bank/iPay.png";
import islamicBank from "../../assets/Nimages/Bank/islamiBank.png";
import islamic from "../../assets/Nimages/Bank/islamic.png";
import mCash from "../../assets/Nimages/Bank/mCash.png";
import master from "../../assets/Nimages/Bank/master.png";
import modhu from "../../assets/Nimages/Bank/modhu.png";
import mtb from "../../assets/Nimages/Bank/mtb.png";
import nogod from "../../assets/Nimages/Bank/nogod.png";
import qCash from "../../assets/Nimages/Bank/qCash.png";
import roket from "../../assets/Nimages/Bank/roket.png";
import siyour from "../../assets/Nimages/Bank/siyour.png";
import southeast from "../../assets/Nimages/Bank/southeast.png";
import tap from "../../assets/Nimages/Bank/tap.png";
import tapn from "../../assets/Nimages/Bank/tapn.png";
import union from "../../assets/Nimages/Bank/union.png";
import vis from "../../assets/Nimages/Bank/vis.png";
import wallet from "../../assets/Nimages/Bank/wallet.png";
import yCash from "../../assets/Nimages/Bank/yCash.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
// import { Autoplay, Navigation } from 'swiper';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import './footerSlider.css'



export default function FooterSlider() {
    
    const images = [american,bk,dmon,visa,ab,asia,bankCard,brack,city,dbl,fastCash,fsib,iPay,islamicBank,islamic,mCash,master,modhu,mtb,nogod,qCash,roket,siyour,southeast,tap,tapn,union,vis,wallet,yCash];
  return (
    
    <section className="lg:px-[340px] px-4 container">
   <Swiper
            scrollbar={{
              hide: true,
            }}
            pagination={{
              clickable: true,
            }}
            // modules={[Navigation, Autoplay]}
            autoplay={true}
            breakpoints={{
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 5,
                spaceBetween: 10,
              },
              400: {
                width: 400,
                slidesPerView: 8,
                spaceBetween: 10,
              },
              640: {
                width: 640,
                slidesPerView: 10,
                spaceBetween: 10,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 13,
                spaceBetween: 20,
              },
              1100: {
                width: 1100,
                slidesPerView: 15,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              1650: {
                width: 1650,
                slidesPerView: 18,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
           
               {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-16">
                  <LazyLoadImage effect="opacity" src={image} alt='bank' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </section>
  );
}
