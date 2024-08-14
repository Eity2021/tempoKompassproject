import EventClose from "../../../components/svg/store/EventClose";
import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import React ,{useEffect,useState}from "react";
import { useForm } from "react-hook-form";


export default function EventPayModal() {
  const { isEventModalOpen, setIsEventModalOpen,location} = useContextProvider();

  const{eventOrder,setEventOrder} = useState({});
useEffect(() => {
  console.log("setEventOrder function:", setEventOrder);
  const storedOrder = JSON.parse(localStorage.getItem("eventOrderInfo")) || {};
  console.log(storedOrder);
   setEventOrder(storedOrder);
}, [setEventOrder]); 


  console.log(eventOrder)

  const closeModal = () => {
    setIsEventModalOpen(false);
  };
 

 
  


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    console.log(data);
  }

 


  return (
    <div isOpen={isEventModalOpen}>
      <div className="fixed inset-0 flex items-center justify-center z-[100]	 ">
        <div className=" w-1/4	 max-w-2xl bg-[#fff] rounded-none py-[35px] px-[80px]  shadow-lg  md:w-1/2  g:w-1/3 p-6 relative ">
          <div className="flex justify-end">
            <label className="btn-none" onClick={closeModal}>  <EventClose></EventClose></label>
          
          </div>
          <div className="divide-y-2  mb-12">
            <h1
              className="text-[35px] font-medium  font-mixed text-[#0c1e21] "
              style={{ fontFamily: "Noe Display" }}
            >
             View Booking Information
            </h1>
            {/* <p className="text-[20px] font-normal font-poppins text-[#0c1e21]">
              Fill out your details to get a live demo of Campaign Monitor:
            </p> */}
          </div>

       
          

 
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div>
              <input
                type="number"
                placeholder="order id"
                name="order_id"
                className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                // value={eventOrder.order_type}
                {...register("order_id", { required: true })}
              />
            </div>
            {/* Creating a grid with two columns and a gap of 4px.  */}
            <div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="transaction id"
                  name="order_type"
                  className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                  value="eventx"
                  {...register("order_type", {required: true})}
                />
              </div>
            </div>
            <div>
              <div className="w-full">
                <input
                  type="number"
                  name="collect_amount"
                  className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"

                  {...register("collect_amount", {required: true})}
                />
              </div>
            </div>

            {location.uconunty === "Bangladesh" ? (
              <>
                <div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="amount_type"
                      className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                      value="BDT"
                      {...register("amount_type", {required: true})}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="amount_type"
                      className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                      value="USD"
                      {...register("amount_type", {required: true})}
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <div className="w-full">
                <input
                  type="text"
                  name="response_url"
                  className="input input-bordered hover:input-primary w-full  mt-2 rounded-none"
                  value="https://www.hellokompass.com/services-payments"
                  {...register("response_url", {required: true})}
                />
              </div>
            </div>
          </div>
         
       

          <div className="flex justify-end mt-20">
           
            <button
              type="submit"
              className=" bg-[#0C1E21]  w-28 mt-6 h-10 rounded-[32px] font-poppins text-white font-regular text-[14px] "
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
