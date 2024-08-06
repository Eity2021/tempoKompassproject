import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { toast } from "react-toastify";
import Map from "./Map";
import { useContextProvider } from "../../components/contextProvider/PricingProvider";
export default function ContactForm() {
  const [error, setError] = useState([]);
  const [contact, setContact] = useState([]);
  const { userData, setUserData, pCode } = useContextProvider();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    axios
      .post("https://api.hellokompass.com/contactemail", data)
      .then((res) => {
        if (res.data.code === 200) {
          setContact(res.data);
          toast.success(res.data.message);
          reset();
        } else {
          toast.error(res.data.message);
        }
      });
  };

  return (
    <div className=" container px-[30px] pt-[120px]">
      <div className="">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-4">
          <div className="">
            <h1
              className="md:text-[64px] text-[40px] text-[#0C1E21] font-bold pt-[3px]"
              style={{ fontFamily: "Noe Display" }}
            >
              Let's talk
            </h1>
            <p className="md:text-[20px] text-[15px] text-[#000000] font-regular pt-[13px] pb-[56px]  font-poppins md:w-[500px] w-full">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help
            </p>
            <div className="pb-[56px]">
              <p
                className="text-[32px] text-[#000000] font-bold pt-[3px] "
                style={{ fontFamily: "Noe Display" }}
              >
                {" "}
                Email US
              </p>
              <p className="text-[16px] text-[#0C1E21] font-regular pt-[15px] font-poppins ">
                +88 02 48811450
              </p>
              <p className="text-[16px] text-[#0C1E21] font-regular  pt-[0px] font-poppins ">
                +8801713363703
              </p>
            </div>

            <div>
              <p
                className="text-[32px] text-[#000000] font-bold"
                style={{ fontFamily: "Noe Display" }}
              >
                {" "}
                Socials
              </p>
              <p className="text-[16px] text-[#0C1E21] font-regular pt-[15px] font-poppins underline">
                <a href=""> Linkedin </a>
              </p>
              <p className="text-[16px] text-[#0C1E21] font-regular  pt-[10px] font-poppins underline">
                <a href="">Twitter</a>{" "}
              </p>
              <p className="text-[16px] text-[#0C1E21] font-regular  pt-[10px] font-poppins underline">
                <a href=""> Facebook </a>
              </p>
            </div>
          </div>

          <div className="lg:pb-[0px] pb-[60px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 ">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Email*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input border-none  bg-[#F7F7F7]  w-full rounded-none "
                    {...register("email", { required: true })}
                  />
                </div>
              </div>

              <div>
                <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mt-1">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Number</span>
                    </label>
                    <div className="flex gap-2">
                      <div>
                        <select
                          name="country"
                          value={userData["pcode"]}
                          {...register("country", {
                            required: true,
                            onChange: () => setUserData({ ...userData }),
                          })}
                          className="input border-none  bg-[#F7F7F7]   w-full rounded-none"
                        >
                          {pCode.map((code) => (
                            <option
                              selected={code.pcode === "88"}
                              value={code.pcode}
                              key={code.id}
                            >
                              {code.name}( {code.pcode})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-control w-full">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="phone"
                          className="input border-none  bg-[#F7F7F7]   w-full rounded-none"
                          {...register("phone", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mt-1">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="input border-none  bg-[#F7F7F7]  w-full rounded-none"
                    {...register("subject", { required: true })}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mt-1">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Write a comment..."
                    className="textarea border-none  bg-[#F7F7F7]  rounded-none"
                    name="message"
                    rows={7}
                    {...register("message", { required: true })}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <input
                  className="btn w-full bg-[#000] text-[#fff] font-semibold rounded-none "
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
