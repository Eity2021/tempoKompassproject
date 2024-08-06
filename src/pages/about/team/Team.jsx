import { Swiper, SwiperSlide } from "swiper/react";
import pic from "../../../assets/image/customer-1.png";
import { Navigation, Scrollbar } from "swiper";
import "./Team.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const team = {
  pic: "border h-32 w-32 bg-[#fff] rounded-[50%] ",
};
export default function Team() {
  return (
    <div>
      <div className="text-center pb-4 py-24">
        <h1 className="lg:text-xl text-heading-md font-bold  text-custom-base-head leading-[42px] lg:leading-[50px]">
          Our <span className="text-primary">expert team</span> <br></br>is the
          best ever.
        </h1>
        <p className="py-2 text-paragraph-base text-paragraph">
          We love what we do and we do it with passion.
        </p>
      </div>
      <div className="h-full px-14 flex ">
        <>
          <Swiper
             navigation={true}
             scrollbar={{
               hide: true,
             }}
             modules={[Navigation, Scrollbar]}
             breakpoints={{
               // when window width is >= 640px
               640: {
                 slidesPerView: 1,
                 spaceBetween: 10,
               },
               // when window width is >= 768px
               768: {
                 slidesPerView: 1,
                 spaceBetween: 20,
               },
               1100: {
                 width: 1100,
                 slidesPerView: 2,
                 spaceBetween: 20,
               },
               // when window width is >= 768px
               1550: {
                 width: 1550,
                 slidesPerView: 2,
                 spaceBetween: 30,
               },
             }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="pt-6 flex">
                <div className="rounded-[50%] flex-1  w-32 flex  items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2 border-l-4 flex-1">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base lg:text-lg text-tiny font-[390] text-left">
                  Aliquam sodales justo sit amet urna auctor scelerisquinterdum leo anet tempus enim esent egetis hendrerit vel nibh vitae ornar sem velit aliquam facilisivitae.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6 ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6 ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem] text-custom-base-head">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6 ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>

                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6 ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6 ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6 ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center  px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" pt-6  ">
                <div className="rounded-[50%] h-30 w-32 flex justify-center items-center   px-1 py-1 ">
                  <LazyLoadImage   effect="opacity" src={pic} alt="" className={team.pic} />
                </div>
                <div className="ml-2">
                  <h1 className="text-primary font-semibold ">
                    Senior Director
                  </h1>
                  <h2 className="font-semibold text-[1.2rem]  text-custom-base-head ">
                    Fred L Smith
                  </h2>
                  <p className="text-paragraph-base ">
                    Lead the team of passionate
                    <br></br> developers, designers.
                  </p>
                  <div className=" bg-gradient-to-r from-[#12a9b2] to-[#19D3AE] p-[2px] mt-4 w-16"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}


