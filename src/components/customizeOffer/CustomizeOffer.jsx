import React, { useContext, useEffect } from "react";
import Close from "../../components/svg/store/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customize } from "../..//components/Validation/YupValidation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContextProvider } from "../../components/contextProvider/PricingProvider";
import WhiteArrow from "../../components/svg/store/WhiteArrow";

export default function CustomizeOffer({ setCustomizeModal }) {
  const [customizeOffer, setCustomizeOffer] = useState("");

  // const [pCode, setPCode] = useState([]);
  const { pCode } = useContextProvider();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customize),
  });

  const onSubmit = (data) => {
    axios.post("https://api.hellokompass.com/customreq", data).then((res) => {
      if (res.data.code == 200) {
        setCustomizeOffer(res.data);
        toast.success(res.data.message);
        setCustomizeModal(false);
        reset();
      } else {
        toast(res.data.message);
      }
    });
  };

  return (
    <div className="">
      <div>
        <input type="checkbox" id="customize-modal" className="modal-toggle " />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl bg-[#076f74] rounded-none py-[35px] px-[80px]  z-50">
            <div className="flex justify-end">
              <label htmlFor="customize-modal" className="btn-none">
                <Close></Close>
              </label>
            </div>
            <div className="text-center mb-12">
              <h1
                className="text-[60px] font-medium  font-mixed text-[#FFFFFF] "
                style={{ fontFamily: "Noe Display" }}
              >
                Customize Offer Request
              </h1>
              <p className="text-[20px] font-normal font-poppins text-[#fff]">
                Fill out your details to get a Customize Your Offer
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid  md:grid-cols-2  grid-cols-1 gap-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Full Name*
                  </p>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    name="person_name"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("person_name", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3 ">
                    {errors.person_name?.message}
                  </p>
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
                  <p className="label-text-alt text-[#fff] mt-3 ">
                    {errors.company_name?.message}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Phone Number*
                  </p>
                  <div className="flex gap-2">
                    <div>
                      <select
                        name="pcode"
                        {...register("pcode", { required: true })}
                        className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                        defaultValue="88"
                      >
                        {pCode.map((code) => (
                          <>
                            <option
                              className="text-[#686868]"
                              value={code.pcode}
                              key={code.id}
                            >
                              {code.name}({code.pcode})
                            </option>
                          </>
                        ))}
                      </select>
                    </div>

                    <div className="w-full">
                      <input
                        type="number"
                        placeholder="Phone number"
                        name="phone"
                        className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                        {...register("phone", { required: true })}
                      />
                      <p className="label-text-alt text-[#fff] mt-3">
                        {errors.phone?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Number of Employee*
                  </p>
                  <input
                    type="number"
                    placeholder="Number of Employee"
                    name="no_emp"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("no_emp", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.no_emp?.message}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
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
                      name="person_desg"
                      {...register("person_desg", { required: true })}
                    >
                      <option
                        value=""
                        selected
                        disabled
                        className="text-[#9CA3AF]"
                      >
                        Select Designation
                      </option>
                      <option className="text-[#686868]" value="Trainer">
                        CEO
                      </option>
                      <option className="text-[#686868]" value="Executive">
                        Managing Director
                      </option>
                      <option className="text-[#686868]" value="coo">
                        COO
                      </option>
                      <option className="text-[#686868]" value="cto">
                        CTO
                      </option>
                      <option className="text-[#686868]" value="Director">
                        Director
                      </option>
                      <option className="text-[#686868]" value="Coordinator">
                        Marketing Coordinator
                      </option>
                      <option className="text-[#686868]" value="Head">
                        Department Head
                      </option>
                      <option className="text-[#686868]" value="Project">
                        Project Manager
                      </option>
                      <option className="text-[#686868]" value="Manager">
                        Manager
                      </option>
                      <option className="text-[#686868]" value="Coordinator">
                        Coordinator
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
                      <option className="text-[#686868]" value="Vice">
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
                    {errors.person_desg?.message}
                  </p>
                </div>
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
                    name="person_email"
                    className=" input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("person_email", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.person_email?.message}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4  mt-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Billing Address*
                  </p>
                  <textarea
                    type="text"
                    placeholder="Billing Address"
                    name="billing_address"
                    className=" textarea input  hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                    {...register("billing_address", { required: true })}
                  />
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.billing_address?.message}
                  </p>
                </div>

                <div>
                  <p
                    htmlFor=""
                    className="text-[#fff] text-[18px] font-normal font-inter"
                  >
                    Industry*
                  </p>
                  <div>
                    <select
                      className=" textarea input hover:input-[#fff] rounded-none m-[0px]  w-full mt-2 border-b-[#ebebeb] border-t-transparent   border-r-transparent  border-l-transparent  bg-transparent focus:outline-none focus:ring-0 p-2 text-[#cdcdcd] text-[14px] font-[350]"
                      name="industry_typ"
                      {...register("industry_typ", { required: true })}
                    >
                      <option
                        value=""
                        selected
                        disabled
                        className="text-[#686868]"
                      >
                        Industry
                      </option>
                      <option className="text-[#686868]" value="agency">
                        Agency/Consulting
                      </option>
                      <option className="text-[#686868]" value="dev_shop">
                        Application Development Shop
                      </option>
                      <option className="text-[#686868]" value="career">
                        Career/Job Search
                      </option>
                      <option className="text-[#686868]" value="deals">
                        Daily Deals/eCoupons
                      </option>
                      <option className="text-[#686868]" value="dating">
                        Dating Sites
                      </option>
                      <option className="text-[#686868]" value="ecommerce">
                        eCommerce
                      </option>
                      <option className="text-[#686868]" value="education">
                        Education/Training/School/College/University
                      </option>
                      <option className="text-[#686868]" value="entertainment">
                        Entertainment/Events
                      </option>
                      <option className="text-[#686868]" value="finance">
                        Financial Services/Banks/NBFI
                      </option>
                      <option className="text-[#686868]" value="gaming">
                        Gaming
                      </option>
                      <option className="text-[#686868]" value="garments">
                        Garments/Textile
                      </option>
                      <option className="text-[#686868]" value="government">
                        Government
                      </option>
                      <option className="text-[#686868]" value="health">
                        Health/Fitness
                      </option>
                      <option className="text-[#686868]" value="hospital">
                        Hospital/Diagnostic Center
                      </option>

                      <option className="text-[#686868]" value="insurance">
                        Insurance
                      </option>
                      <option className="text-[#686868]" value="marketing">
                        Marketing/Advertising
                      </option>
                      <option className="text-[#686868]" value="media">
                        Media/Publishing
                      </option>
                      <option className="text-[#686868]" value="mnc">
                        MNC
                      </option>
                      <option className="text-[#686868]" value="mobile">
                        Mobile App
                      </option>
                      <option className="text-[#686868]" value="politics">
                        Politics/Advocacy
                      </option>
                      <option className="text-[#686868]" value="professional">
                        Professional Services
                      </option>
                      <option className="text-[#686868]" value="real_estate">
                        Real Estate
                      </option>
                      <option className="text-[#686868]" value="religious">
                        Religious/Spiritual
                      </option>
                      <option className="text-[#686868]" value="retail">
                        Retail
                      </option>
                      <option className="text-[#686868]" value="social_media">
                        Social Media/Networking
                      </option>
                      <option className="text-[#686868]" value="tech">
                        Technology/IT
                      </option>
                      <option className="text-[#686868]" value="telecomm">
                        Telecommunications
                      </option>
                      <option className="text-[#686868]" value="travel">
                        Travel/Hospitality
                      </option>
                      <option className="text-[#686868]" value="other">
                        Other
                      </option>
                    </select>
                  </div>
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.industry_typ?.message}
                  </p>
                </div>
              </div>

              <h2
                htmlFor=""
                className="text-[#fff] text-[18px] font-normal font-inter mt-4"
              >
                Customize For *
              </h2>
              <div className="flex mr-[20px] justify-between ">
                <div className="flex">
                  <div className="mr-[15px]">
                    <div className="form-control">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          name="vms"
                          value="VMS"
                          className="checkbox checkbox-primary"
                          {...register("req_packages", { required: true })}
                        />

                        <h2 className="text-[#fff] text-[18px] font-normal font-inter">
                          Kompass Connect
                        </h2>
                      </label>
                    </div>
                  </div>

                  <div className="mr-[15px]">
                    <div className="form-control">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary"
                          name="lms"
                          value="LMS"
                          {...register("req_packages", { required: true })}
                        />
                        <h2 className="text-[#fff] text-[18px] font-normal font-inter">
                          Kompass Lobby
                        </h2>
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="form-control">
                      <label className="flex gap-2">
                        <input
                          type="checkbox"
                          name="pms"
                          value="PMS"
                          className="checkbox checkbox-primary"
                          {...register("req_packages", { required: true })}
                        />
                        <h2 className=" text-[#fff] text-[18px] font-normal font-inter">
                          Kompass Teams
                        </h2>
                      </label>
                    </div>
                  </div>
                </div>

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
    </div>
  );
}
