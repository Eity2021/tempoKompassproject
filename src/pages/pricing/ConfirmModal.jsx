import React from "react";
import { useNavigate } from "react-router-dom";
import items from "../../assets/Nimages/item.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ConfirmModal = ({ setModalVisible }) => {
  const navigate = useNavigate();
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex justify-center">
          <div>
            <LazyLoadImage    effect="opacity" src={items} alt="" className="h-14 w-14" />{" "}
          </div>
          <div>
          <p className="py-6 text-center font-medium ml-3">
            Do you want more Item.....
          </p>
          </div>
         
          </div>

          <div className="modal-action flex justify-center">
           <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
           <label
              htmlFor="confirm-modal"
              onClick={() => setModalVisible(false)}
              className="btn btn-primary 2xl:w-70 md:w-52 w-52 h-[48px] text-white  rounded-[2rem] mb-3 text-lg"
            >
              Back to pricing
            </label>
            <button
              onClick={() => navigate("/services")}
              className="btn btn-primary 2xl:w-70 md:w-52 w-52 h-[48px] text-white  rounded-[2rem] mb-3 text-lg"
            >
              Continue to checkout
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
