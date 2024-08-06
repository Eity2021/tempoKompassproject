import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import newsletterBg from "../../assets/Nimages/Home/newsletterBg.png";
const newsletter = {
  button:
    "btn bg-[#0c1e21]  md:w-40 w-full text-[#fff] h-12 drop-shadow-[0_3px_3px_rgba(18,169,178,0.30)]   md:ml-[10px] ml-[0px] rounded-[5px]  md:mt-[0px] mt-[20px]",
};
export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const controller = new AbortController();
  const { signal } = controller;

  const onSubmit = (data) => {
    axios
      .post("https://api.hellokompass.com/web/emailsubs", data, { signal })
      .then((res) => {
        if (res.data.code === 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          toast.error("Request canceled");
        } else {
          toast.error("An error occurred: " + error.message);
        }
      });
    
    // To cancel the request, you can call controller.abort()
    // For example, you can set a timeout to cancel the request after 5 seconds
    setTimeout(() => {
      controller.abort();
    }, 3000);
  };

  return (
    <div className="flex justify-center ">
      <div
        className=" md:w-[50rem]  w-[30rem]"
        style={{ background: `url(${newsletterBg}) no-repeat center` }}
      >
      
            <div className=" ">
              <div className="text-center">
                <div className="md:py-[110px] py-[28px] px-[20px]">
                  <div className="flex justify-center">
                    <div>
                      <h1
                        className="text-[36px] font-regular text-[#343434] "
                        style={{ fontFamily: "Noe Display" }}
                      >
                        Newsletter
                      </h1>
                      <p className="py-4 text-[#999999] font-poppins text-[16px] font-regular text-center lg:w-[550px]  w-full">
                        Subscribe Kompass newsletter and get updated
                        information, enhancement, new developments of functions
                        and features.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                   <div >
                   <div className=" md:flex inline mx-[20px] ">
                      <div className="w-full">
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="  input input-bordered rounded-[5px]  w-full h-12 placeholder:italic"
                        />

                        {errors.email && (
                          <span className="text-[#FF0000] pt-2 flex justify-start">
                            This field is required
                          </span>
                        )}
                      </div>

                      <div>
                        <button className={newsletter.button} type="submit">
                          SUBSCRIBE
                        </button>
                      </div>
                    </div>
                   </div>
                  </form>
                </div>
              </div>
            </div>
          
      </div>
    </div>
  );
}
