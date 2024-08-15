import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Close from "../../../components/svg/store/Close";
import WhiteArrow from "../../../components/svg/store/WhiteArrow";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import axios from "axios";
import { toast } from "react-toastify";
import EventPayModal from "./EventPayModal";
export default function BookingModal({selectedIdxe }) {
  const [checkNumber, setCheckNumber] = useState([]);

  const {
    isModalOpen,
    setIsModalOpen,
    PhoneHandle,
    phoneCodeHandle,
    phoneCode,
    phoneNumber,
    setIsEventModalOpen,
    isEventModalOpen
  } = useContextProvider();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePayNow = () => {
    setIsEventModalOpen(true);
  };



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // {
  //   resolver: yupResolver(),
  // }

  useEffect(() => {
    if (
      (phoneNumber.length === 10 || phoneNumber.length === 11) &&
      phoneCode &&
      selectedIdxe
    ) {
      const controller = new AbortController();
      const { signal } = controller;

      fetch(
        `https://api.hellokompass.com/event/checkreg?phncod=${phoneCode}&phnr=${phoneNumber}&evntidx=${selectedIdxe}`,
        { signal }
      )
        .then((res) => res.json())
        .then((data) => {
          setCheckNumber(data);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            <></>
          } else {
           <></>
          }
        });

      return () => controller.abort();
    }
  }, [phoneCode, phoneNumber, selectedIdxe]);

  const onSubmit = (data) => {
    if (checkNumber && checkNumber.code === 200) {
      axios
        .post("https://api.hellokompass.com/event/eventreg", data)
        .then((res) => {
          if (res.data.code === 200) {
            localStorage.setItem("eventOrderInfo", JSON.stringify(res.data));
            // toast.success(res.data.message);
            handlePayNow()
            reset();

     
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);

          toast.error("An error occurred during submission");
        });
    } else if (checkNumber && checkNumber.code === 400) {
     <></>
    } else {
   <></>
    }
  };

  return (
<>
<div className="" isOpen={isModalOpen}>
      <div className="fixed inset-0 flex items-center justify-center z-[100]	 bg-black bg-opacity-50 ">
        <div className=" w-11/12 max-w-5xl bg-[#076f74] rounded-none py-[35px] px-[80px]  shadow-lg  md:w-1/2  g:w-1/3 p-6 relative ">
          <div className="flex justify-end">
            <label className="btn-none" onClick={closeModal}>
              <Close></Close>
            </label>
          </div>
          <div className="text-center mb-12">
            <h1
              className="text-[60px] font-medium  font-mixed text-[#FFFFFF] "
              style={{ fontFamily: "Noe Display" }}
            >
              Request For a Booking
            </h1>
            <p className="text-[20px] font-normal font-poppins text-[#fff]">
              Fill out your details to get a live demo of Campaign Monitor:
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid  md:grid-cols-2  grid-cols-1 gap-4">
              <div>
                <p
                  htmlFor=""
                  className="text-[#fff] text-[18px] font-normal font-inter"
                >
                  Phone Number*
                </p>
                <div className="flex gap-2">
                  <div>
                    <input
                      name="c_code"
                      className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                      value={`Bangladesh(${phoneCode})`}
                      onChange={phoneCodeHandle}
                    >
                     
                    </input>
                  </div>

                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="Phone number"
                      name="phone"
                      className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                      {...register("phone", { required: true })}
                      onChange={PhoneHandle}
                    />

                    <small className="text-[12px] text-[#fff] mt-3">
                      {checkNumber.message}
                    </small>
                  </div>
                </div>
              </div>

              <div>
                <p
                  htmlFor=""
                  className="text-[#fff] text-[18px] font-normal font-inter"
                >
                  Full Name*
                </p>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                  {...register("name", { required: true })}
                />
                {/* <p className="label-text-alt text-[#fff] mt-3">
                  {errors.name?.message}
                </p> */}
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
              <div>
                <p
                  htmlFor=""
                  className="text-[#fff] text-[18px] font-normal font-inter"
                >
                  Email Address*
                </p>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                  {...register("email", { required: true })}
                />
                {/* <p className="label-text-alt text-[#fff] mt-3">
                  {errors.email?.message}
                </p> */}
              </div>

              <div>
                <p
                  htmlFor=""
                  className="text-[#fff] text-[18px] font-normal font-inter"
                >
                  Company Name*
                </p>
                <input
                  placeholder="Company Name"
                  name="company_name"
                  className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                  {...register("company_name", { required: true })}
                />
                {/* <p className="label-text-alt text-[#fff] mt-3">
                  {errors.companyname?.message}
                </p> */}
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
              <div>
                <p
                  htmlFor=""
                  className="text-[#fff] text-[18px] font-normal font-inter"
                >
                  Department Name*
                </p>
                <textarea
                  type="text"
                  placeholder="Department Names"
                  name="dept_name"
                  className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                  {...register("dept_name", { required: true })}
                />
                {/* <p className="label-text-alt text-[#fff] mt-3">
                  {errors.address?.message}
                </p> */}
              </div>

              <div>
                <p
                  htmlFor=""
                  className="text-[#fff] text-[18px] font-normal font-inter"
                >
                  Designation*
                </p>
                <div>
                  <select
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    name="desg_name"
                    {...register("desg_name", { required: true })}
                  >
                    <option
                      value=""
                      selected
                      disabled
                      className="text-[#9CA3AF]"
                    >
                      Select Designation
                    </option>
                    <option
                      className="text-[#686868]"
                      value="Managing-Director"
                    >
                      Managing Director
                    </option>
                    <option
                      className="text-[#686868]"
                      value="Marketing-Coordinator"
                    >
                      Marketing Coordinator
                    </option>
                    <option className="text-[#686868]" value="Designer">
                      Director
                    </option>
                    <option className="text-[#686868]" value="CEO">
                      CEO
                    </option>
                    <option className="text-[#686868]" value="COO">
                      COO
                    </option>
                    <option className="text-[#686868]" value="CTO">
                      CTO
                    </option>
                    <option className="text-[#686868]" value="Manager">
                      Manager
                    </option>
                    <option className="text-[#686868]" value="Coordinator">
                      Coordinator
                    </option>
                    <option className="text-[#686868]" value="Department-Head">
                      Department Head
                    </option>
                    <option className="text-[#686868]" value="Project-Manager">
                      Project Manager
                    </option>
                    <option className="text-[#686868]" value="Consultant">
                      Consultant
                    </option>
                    <option className="text-[#686868]" value="Professor">
                      Professor
                    </option>
                    <option className="text-[#686868]" value="Principal">
                      Principal
                    </option>
                    <option className="text-[#686868]" value="Vice-Principal">
                      Vice Principal
                    </option>
                    <option className="text-[#686868]" value="Teacher">
                      Teacher{" "}
                    </option>
                    <option className="text-[#686868]" value="Trainer">
                      Trainer{" "}
                    </option>
                    <option className="text-[#686868]" value="Others">
                      Others{" "}
                    </option>
                  </select>
                </div>
                <p className="label-text-alt text-[#fff] mt-3">
                  {errors.designation?.message}
                </p>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="event_id"
                  className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                  {...register("event_id", { required: true })}
                  value={selectedIdxe}
                />
                {/* <p className="label-text-alt text-[#fff] mt-3">
                  {errors.name?.message}
                </p> */}
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4"></div>

            <div className="flex mr-[20px] justify-end ">
              <div className="flex  justify-center  bg-[#fff] h-[130px] w-[130px]  rounded-[50%]">
                <div className="flex justify-center ">
                  <input
                    className="   text-[#002C13] font-regular  text-[20px]  cursor-pointer"
                    type="submit"
                  />
                </div>
                <div className="mt-[53px]">
                  <WhiteArrow></WhiteArrow>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
     
    </div>
    
    {
        <div>
          {isEventModalOpen ? (
            <EventPayModal
              setIsEventModalOpen={setIsEventModalOpen}
         
            />
          ) : null}
        </div>
      }
      
      </>
  );
}
