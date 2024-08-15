import React, { useEffect } from "react";
import { useState } from "react";
import "./pricing.css";
import PricingShow from "./PricingShow";
import { useContextProvider } from "../../components/contextProvider/PricingProvider";
import TrailModal from "./TrailModal";
import TrailArrow from "../../components/svg/store/TrailArrow";

export default function Pricing() {
  const [toggleState, setToggleState] = useState(1);
  const [appointPrice, setAppointPrice] = useState([]);
  const [lobbyPrice, setLobbyPrice] = useState([]);
  const [payrollPrice, setPayrollPrice] = useState([]);
  const [trailModal, setTrailModal] = useState(true);

  const {
    toggleAppoint,
    setToggleAppoint,
    toggleLobby,
    setToggleLobby,
    togglePayroll,
    setTogglePayroll,
  } = useContextProvider();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch("https://services.hellokompass.com/getproductlistinfo", { signal })
      .then((res) => res.json())
      .then((data) => {
        setAppointPrice(data.allproduct.VSEARCH);
        setLobbyPrice(data.allproduct.LSEARCH);
        setPayrollPrice(data.allproduct.PSEARCH);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
        <></>
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="swiper-container py-[113px]">
      <div className="text-center px-4">
        <h1 className=" md:text-[40px] text-[34px] font-regular font-poppins  text-[#000000]  leading-[42px] pt-[10px] ">
          Choose <span className="text-[#11989F]">Corporate</span> Pricing
        </h1>
        <p className="text-tiny mb-8 mt-6 text-paragraph-base font-[350]">
          Choose your best-fit solution for your organization from different
          packages. You are welcome to ask for a trial as well.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
       <div>
       <a
            href="https://my.hellokompass.com/login/signupform"
            target="_blank"
            className="flex items-center"
            rel="noreferrer"
          >
            <div className="btn btn-primary  text-white   w-[260px] rounded-[30px] mb-3 text-lg ">
              <span className="pr-[8px] text-[14px] font-medium font-poppins ">
                Join For Free{" "}
              </span>
              <TrailArrow></TrailArrow>
            </div>
          </a>
       </div>

          <div className="flex justify-center">
            <label
              htmlFor="my-modal"
              className=" btn bg-[#000] w-[260px] text-white  rounded-[30px] mb-3 text-lg hover:bg-[#0d0d0d] "
            >
            
              <span className="pr-[8px] text-[14px] font-medium font-poppins ">
                Free Corporate Trial
              </span>
              <TrailArrow></TrailArrow>
            </label>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center">
        <div className=" flex 2xl:w-[45%] xl:w-[60%] lg:w-[90%] w-[100%]">
          <button
            className="px-[8px] py-[16px]   rounded-[30px] text-center w-1/2 cursor-pointer relative outline-none "
            onClick={() => toggleTab(1)}
          >
            <p
              className={
                toggleState == 1
                  ? "font-regular font-inter lg:text-[22px] text-[16px] text-[#414141] active-tabs"
                  : "font-regular font-poppins  lg:text-[22px] text-[16px]  text-[#414141]"
              }
            >
              Kompass Connect
            </p>
          </button>
          <button
            className="px-[8px] py-[16px]   rounded-[30px] text-center w-1/2 cursor-pointer relative outline-none "
            onClick={() => toggleTab(2)}
          >
            <p
              className={
                toggleState == 2
                  ? "font-regular font-poppins  lg:text-[22px] text-[16px]  text-[#414141] active-tabs"
                  : "font-regular font-poppins  lg:text-[22px] text-[16px]  text-[#414141]"
              }
            >
              Kompass Lobby
            </p>
          </button>
          <button
            className="px-[8px] py-[16px]   rounded-[30px] text-center w-1/2 cursor-pointer relative outline-none "
            onClick={() => toggleTab(3)}
          >
            <p
              className={
                toggleState == 3
                  ? "font-regular font-poppins  lg:text-[22px] text-[16px]  text-[#414141] active-tabs"
                  : "font-regular font-poppins  lg:text-[22px] text-[16px]  text-[#414141]"
              }
            >
              Kompass Teams
            </p>
          </button>
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState == 1 ? "content  active-content" : "content"}
        >
          <p>
            <PricingShow
              pricingData={appointPrice}
              changeToggle={toggleAppoint}
              setChangeToggle={setToggleAppoint}
            />
          </p>
        </div>

        <div
          className={toggleState == 2 ? "content  active-content" : "content"}
        >
          <p>
            <PricingShow
              pricingData={lobbyPrice}
              changeToggle={toggleLobby}
              setChangeToggle={setToggleLobby}
            />
          </p>
        </div>

        <div
          className={toggleState == 3 ? "content  active-content" : "content"}
        >
          <p>
            <PricingShow
              pricingData={payrollPrice}
              changeToggle={togglePayroll}
              setChangeToggle={setTogglePayroll}
            />
          </p>
        </div>
      </div>
      <div>
        {trailModal ? <TrailModal setTrailModal={setTrailModal} /> : null}
      </div>
    </div>
  );
}
