import EventClose from "../../../components/svg/store/EventClose";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";

export default function EventPayModal() {
  const { isEventModalOpen, setIsEventModalOpen, location, setIsModalOpen } =
    useContextProvider();

  const [eventOrder, setEventOrder] = useState("");

  useEffect(() => {
    console.log("setEventOrder function:", setEventOrder);
    const storedOrder =
      JSON.parse(localStorage.getItem("eventOrderInfo")) || {};
    console.log(storedOrder);
    setEventOrder(storedOrder.data);
  }, [setEventOrder]);

  console.log(eventOrder);

  const closeModal = () => {
    setIsEventModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://epay.hellokompass.com/quicksend-paymentinfo", data)
      .then((res) => {
        if (
          res.data.status === "SUCCESS" ||
          res.data.status === "success" ||
          res.data.status === "Success"
        ) {
          setIsModalOpen(false);
          setIsEventModalOpen(false);
          window.open(res.data.data, "_self");
        } else if (res.data.code === 400) {
          swal(res.data.message);
        }
      });
  };

  return (
    <div isOpen={isEventModalOpen}>
      <div className="fixed inset-0 flex items-center justify-center z-[100]	 ">
        <div className=" w-1/4	 max-w-2xl bg-[#fff] rounded-none py-[35px] px-[80px]  shadow-lg  md:w-1/2  g:w-1/3 p-6 relative ">
          <div className="flex justify-end">
            <label className="btn-none mb-[10px]" onClick={closeModal}>
              {" "}
              <EventClose></EventClose>
            </label>
          </div>
          <div className=" text-center mb-4">
            <h1 className="text-[22px] font-medium font-mixed text-[#0c1e21] font-poppins">
              Kindly ensure that your registration payment is completed.
            </h1>
            {/* <p className="text-[20px] font-normal font-poppins text-[#0c1e21]">
              Fill out your details to get a live demo of Campaign Monitor:
            </p> */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              {eventOrder.order_id && (
                <div className="hidden">
                  <input
                    type="number"
                    placeholder="order id"
                    name="order_id"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={eventOrder.order_id}
                    {...register("order_id", { required: true })}
                  />
                </div>
              )}
              {eventOrder.order_type && (
                <div className="hidden">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="transaction id"
                      name="order_type"
                      className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                      value={eventOrder.order_type}
                      {...register("order_type", { required: true })}
                    />
                  </div>
                </div>
              )}

              {eventOrder.collect_amount && (
                <div className="hidden">
                  <div className="w-full">
                    <input
                      type="number"
                      name="collect_amount"
                      className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                      value={eventOrder.collect_amount}
                      {...register("collect_amount", { required: true })}
                    />
                  </div>
                </div>
              )}

              {location.uconunty === "Bangladesh" ? (
                <>
                  <div className="hidden">
                    {eventOrder.amount_type && (
                      <div className="w-full">
                        <input
                          type="text"
                          name="amount_type"
                          className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                          value={eventOrder.amount_type}
                          {...register("amount_type", { required: true })}
                        />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div>
                    {eventOrder.amount_type && (
                      <div className="hidden">
                        <div className="w-full">
                          <input
                            type="text"
                            name="amount_type"
                            className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                            value={eventOrder.amount_type}
                            {...register("amount_type", { required: true })}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              <div>
                {eventOrder.response_url && (
                  <div className="hidden">
                    <div className="w-full">
                      <input
                        type="text"
                        name="response_url"
                        className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                        value={eventOrder.response_url}
                        {...register("response_url", { required: true })}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className=" bg-[#0C1E21]  w-48 mt-4 h-12 rounded-[10px] font-poppins text-white font-regular text-[16px] "
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
