import React from "react";
import { BsCircleFill } from "react-icons/bs";

import { toast } from "react-toastify";
import "../pricing/PricingCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  getBdtDiscountedPrice,
  getPerUserPriceBdt,
  getPerUserPriceUsd,
  getUsdDiscountedPrice,
  getYearlyBdtPrice,
  getYearlyUsdPrice,
} from "../../components/utils/discountLogics";
import { useState } from "react";
// import Close from "../../common/components/svg/store/Close";
import warning from "../../assets/Nimages/Cart/warning.png";
import WhiteWarning from "../../assets/Nimages/Cart/whiteWarning.png";
import CircleTick from "../../components/svg/store/CircleTick";
import ColorTick from "../../components/svg/store/ColorTick";
import BlackClose from "../../components/svg/store/BlackClose";
import { useContextProvider } from "../../components/contextProvider/PricingProvider";

const price = {
  heading: "text-heading-md text-primary text-center  my-2 mb-3 font-bold",
  center: "text-center flex px-6",
  points: "text-lg text-paragraph-base text-left  pl-1 md:pr-6 pr-2",
  points2:
    "text-[15px] text-[#fff] text-start  font-poppins font-regular pl-1 my-2 ",
  points4:
    "text-[15px] text-[#848199] text-start  font-poppins font-regular pl-1 my-2 ",
  points3: "text-lg text-paragraph-base text-start  pl-1 my-[10px] ",
  hr: "border flex justify-center  my-4",
  circle: "w-2 h-2 mt-[14px] text-primary ml-2 mr-2",
  flex: "flex justify-between",
};

export default function PricingCard({
  pricingItem,
  setModalVisible,
  changeToggle,
}) {
  const { location, cart, setCart } = useContextProvider();

  const { etype, dxinfo, ename } = pricingItem;

  const vbdt = Number(dxinfo.vubdt);

  const vbdtFormatted = vbdt.toFixed(2);

  const finalVbdt = Number(vbdtFormatted).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  /* Calculating the yearly price of the product. */
  let bdtYearlyPrice = getYearlyBdtPrice(dxinfo);

  let usdYearlyPrice = getYearlyUsdPrice(dxinfo);
  // discount price
  let bdtYearlyMainPrice = getBdtDiscountedPrice(dxinfo);
  const bdtYearlyFinalPrice = bdtYearlyMainPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  let usdYearlyMainPrice = getUsdDiscountedPrice(dxinfo);

  let perUserBamt = getPerUserPriceBdt(dxinfo);

  let perUserUamt = getPerUserPriceUsd(dxinfo);

  let perYearBamt = bdtYearlyMainPrice / 12;
  let perYearUserBamt = perYearBamt / dxinfo?.maxuser;

  let perYearUamt = usdYearlyMainPrice / 12;
  let perYearUserUamt = perYearUamt / dxinfo?.maxuser;



  const handleAddToCart = () => {
    const newCart = cart ? [...cart] : [];

    const ecodeArray = newCart.map((item) => item.ecode);
    const enameArray = newCart.map((itemName) => itemName.ename);

    const index = ecodeArray.indexOf(pricingItem.ecode);
    const indexName = enameArray.indexOf(pricingItem.ename);

    // eslint-disable-next-line no-sequences
    if ((index, indexName === -1)) {
      if (changeToggle) {
        pricingItem.isYearly = true;
      } else {
        pricingItem.isYearly = false;
      }
      newCart.push(pricingItem);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setModalVisible(true);
      toast.success("Item added");
    } else {
      toast.error("Item already added");
    }
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  if (!dxinfo?.Qporak || !Array.isArray(dxinfo.Qporak)) {
    return <p>No data available.</p>;
  }

  return (
    <>
      {dxinfo.highlight === true ? (
        <div className="px-6 py-4  h-[680px] rounded-[26px]   bg-[#076F74] w-screen">
          <div className=" flex justify-end  pb-2">
            <div className="w-[121px] h-[27px] flex justify-center items-center  bg-[#000] rounded-[13.5px]">
              <p className="text-right text-[#fff] font-poppins text-[10px] uppercase flex justify-center items-center">
                Most Popular
              </p>
            </div>
          </div>

          {!changeToggle && (
            <div className="font-bold text-[#fff] pb-4">
              {location.uconunty === "Bangladesh" ? (
                <div>
                  {etype === "Enterprise" ? (
                    <></>
                  ) : (
                    <div>
                      <p className=" text-[36px] mt-1 font-poppins font-[400] text-left">
                        <span className="text-[#fff] mr-1 text-[36px]">৳</span>
                        {finalVbdt}
                        <sup className="text-[#fff] pl-[5px] font-poppins font-regular text-[17px]">
                          /month
                        </sup>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {etype === "Enterprise" ? (
                    <></>
                  ) : (
                    <div>
                      <p className=" text-[36px] mt-1 font-poppins font-[400] text-left">
                        <span className="text-[#fff] mr-1 text-[36px]">$</span>
                        {dxinfo.vusd}
                        <sub className="text-[#fff] pl-[5px] font-poppins font-regular text-[17px]">
                          /month
                        </sub>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* yearly */}
          {changeToggle && (
            <div className=" font-bold  text-custom-base-head pb-4">
              {location.uconunty === "Bangladesh" ? (
                <>
                  {etype === "Enterprise" ? (
                    <></>
                  ) : (
                    <div>
                      <p className=" text-[36px] mt-1 text-[#fff] font-poppins font-[400] text-left">
                        {+dxinfo.vanudis > 0 ? (
                          <>
                            <sup className="mr-2">
                              <span className="text-[#fff] mr-1 text-[36px]">
                                ৳
                              </span>
                              <del className="">{bdtYearlyPrice}</del>
                            </sup>
                          </>
                        ) : (
                          <>{null}</>
                        )}
                        <span className="text-[#fff] mr-1 text-[36px]">৳</span>
                        {bdtYearlyFinalPrice}
                        <sup className="text-[#fff] pl-[5px] font-poppins font-regular text-[17px]">
                          /year
                        </sup>
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <p className=" text-[36px] mt-1 text-[#fff] font-poppins font-[400] text-left">
                    {+dxinfo.vanudis > 0 ? (
                      <sup className="mr-2">
                        <span className="text-[#fff] mr-1 text-[36px]">$</span>
                        <del className="">{usdYearlyPrice}</del>
                      </sup>
                    ) : (
                      <>{null}</>
                    )}

                    <span className="text-[#fff] mr-1 text-[36px]">$</span>
                    {usdYearlyMainPrice}

                    <sup className="text-[#fff] pl-[5px] font-poppins font-regular text-[17px]">
                      /year
                    </sup>
                  </p>
                </div>
              )}
            </div>
          )}
          <h2 className="text-[32px] font-semibold text-[#fff] text-left font-poppins font-regular ">
            {etype}
          </h2>

          <div>
            {ename === "LMS" ? (
              <div>
                {location.uconunty === "Bangladesh" ||
                location.uconunty === "bangladesh" ? (
                  <div>
                    {etype === "Standard" ? (
                      <div>
                        <p className="text-[15px]   text-[#fff]   font-normal font-poppins text-left">
                          This is suitable for a mid Hotels & Resorts (
                          <span className="text-tiny">
                            +{dxinfo?.vlobycheckbdt}৳ per check-in
                          </span>
                          )
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div>
                    {etype === "Standard" ? (
                      <div>
                        <p className="text-[15px]   text-[#fff]   font-normal font-poppins text-left">
                          This is suitable for a mid Hotels & <br></br>Resorts (
                          <span className="text-tiny">
                            +${dxinfo?.vregusd} per check-in
                          </span>
                          )
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {location.uconunty === "Bangladesh" ||
                location.uconunty === "bangladesh" ? (
                  <div>
                    {etype === "Standard" ? (
                      <>
                        {changeToggle === false ? (
                          <>
                            {" "}
                            <div>
                              {" "}
                              <p className="text-[15px]   text-[#fff]   font-normal font-poppins text-left">
                                This is suitable for a small to mid sized
                                organization having employees {dxinfo.maxuser} (
                                <span className="text-[.9rem]">
                                  {perUserBamt.toFixed(2)}৳ per user/mo
                                </span>
                                )
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            <div>
                              {" "}
                              <p className="text-[15px]   text-[#fff]   font-normal font-poppins text-left">
                                This is suitable for a small to mid sized
                                organization having employees {dxinfo.maxuser} (
                                <span className="text-[.9rem]">
                                  {perYearUserBamt.toFixed(2)}৳ per user/mo
                                </span>
                                )
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div>
                    {etype === "Standard" ? (
                      <>
                        {changeToggle === false ? (
                          <>
                            {" "}
                            <div>
                              {" "}
                              <p className="text-[15px]   text-[#fff]   font-normal font-poppins text-left">
                                This is suitable for a small to mid sized
                                organization having employees {dxinfo.maxuser} (
                                <span className="text-[.9rem]">
                                  ${perUserUamt.toFixed(2)} per user/mo
                                </span>
                                )
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            <div>
                              {" "}
                              <p className="text-[15px]   text-[#fff]   font-normal font-poppins text-left">
                                This is suitable for a small to mid sized
                                organization having employees {dxinfo.maxuser} (
                                <span className="text-[.9rem]">
                                  ${perYearUserUamt.toFixed(2)} per user/mo
                                </span>
                                )
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="font-normal">
            <div className="mt-6 text-left">
              {dxinfo?.Qporak?.slice(0, 7).map((item, index) => (
                <>
                  {item === "GEO LOCATION" ? (
                    <div className="flex">
                      <div className=" bg-[#1f7d82] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center mt-[8px] mr-[6px]">
                        <span>
                          <CircleTick className={price.circle} />
                        </span>
                      </div>
                      <div>
                        <p className={price.points2}>GEO LOCATION*</p>
                      </div>
                      <div
                        class="tooltip tooltip-secondary"
                        data-tip="GEO LOCATION"
                      >
                        <div className="mt-[10px] ml-[10px] cursor-pointer">
                          <LazyLoadImage
                            src={WhiteWarning}
                            alt=""
                            className="w-[18px] ,h-[18px]"
                          ></LazyLoadImage>
                        </div>
                      </div>
                    </div>
                  ) : item === "EMPLOYEE ONBOARDING" ? (
                    <div className="flex">
                      <div className=" bg-[#1f7d82] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center mt-[8px]  mr-[6px]">
                        <span>
                          <CircleTick className={price.circle} />
                        </span>
                      </div>
                      <div>
                        <p className={price.points2}>EMPLOYEE ONBOARDING*</p>
                      </div>
                      <div
                        class="tooltip tooltip-secondary"
                        data-tip={`${dxinfo.maxuser} User Panel `}
                      >
                        <div className="mt-[10px] ml-[10px] cursor-pointer">
                          <LazyLoadImage
                            src={WhiteWarning}
                            alt=""
                            className="w-[18px] ,h-[18px]"
                          ></LazyLoadImage>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex">
                      <div className=" bg-[#1f7d82] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center mt-[8px]  mr-[6px]">
                        <span>
                          <CircleTick className={price.circle} />
                        </span>
                      </div>
                      <p key={index} className={price.points2}>
                        {item}
                      </p>
                    </div>
                  )}
                </>
              ))}

              <div>
                {dxinfo?.Qporak.length > 7 && (
                  <div className="text-[15px] pl-9 text-[#fff] font-poppins font-semibold my-2">
                    <button onClick={handleClick}>Show More</button>
                  </div>
                )}

                {showPopup && (
                  <div className="popup-container overflow-y-auto border">
                    <div className="popup-content">
                      <div className="flex justify-end mt-2">
                        {" "}
                        <button onClick={() => setShowPopup(false)}>
                          <BlackClose></BlackClose>
                        </button>
                      </div>
                      {dxinfo?.Qporak.map((item, index) => (
                        <>
                          {item === "GEO LOCATION" ? (
                            <div className="flex">
                              <span>
                                <BsCircleFill className={price.circle} />
                              </span>
                              <div>
                                <p className={price.points4}>GEO LOCATION*</p>
                              </div>
                              <div
                                class="tooltip tooltip-secondary"
                                data-tip="GEO LOCATION"
                              >
                                <div className="mt-[10px] ml-[10px] cursor-pointer">
                                  <LazyLoadImage
                                    src={warning}
                                    alt=""
                                    className="w-[18px] ,h-[18px]"
                                  ></LazyLoadImage>
                                </div>
                              </div>
                            </div>
                          ) : item === "SMS NOTIFICATION*" ? (
                            <div className="flex">
                              <span>
                                <BsCircleFill className={price.circle} />
                              </span>
                              <div>
                                <p className={price.points4}>
                                  SMS NOTIFICATION*
                                </p>
                              </div>
                              <div
                                class="tooltip tooltip-secondary"
                                data-tip="Pay Per Sms Notification"
                              >
                                <div className="mt-[10px] ml-[10px] cursor-pointer">
                                  <LazyLoadImage
                                    src={warning}
                                    alt=""
                                    className="w-[18px] ,h-[18px]"
                                  ></LazyLoadImage>
                                </div>
                              </div>
                            </div>
                          ) : item === "EMPLOYEE ONBOARDING" ? (
                            <div className="flex">
                              <span>
                                <BsCircleFill className={price.circle} />
                              </span>
                              <div>
                                <p className={price.points4}>
                                  EMPLOYEE ONBOARDING*
                                </p>
                              </div>
                              <div
                                class="tooltip tooltip-secondary"
                                data-tip="EMPLOYEE ONBOARDING"
                              >
                                <div className="mt-[10px] ml-[10px] cursor-pointer">
                                  <LazyLoadImage
                                    src={warning}
                                    alt=""
                                    className="w-[18px] ,h-[18px]"
                                  ></LazyLoadImage>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div key={index}>
                              <div className="flex">
                                <span>
                                  <BsCircleFill className={price.circle} />
                                </span>
                                <p className={price.points4}>{item}</p>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {etype === "Enterprise" ? (
            <>
              <div className="flex justify-center">
                <div className="  absolute bottom-3">
                  <label
                    htmlFor="customize-modal"
                    className="btn bg-[#e7f4f4] w-[232px] border-none h-[45px] text-[#076F74]  rounded-[24rem] mb-3  font-poppins font-medium text-[15px] hover:bg-[#c8efef]"
                  >
                    Contact For Sales
                  </label>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <div className="absolute bottom-3">
                <label
                  htmlFor="confirm-modal"
                  onClick={() => handleAddToCart()}
                  className="btn bg-[#fff]  w-[232px]  h-[45px] text-[#076F74] border-none rounded-[24rem] font-poppins mb-3 font-medium text-[15px] hover:bg-[#edecf9]"
                >
                  Choose plan
                </label>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className=" px-6 py-4 h-[600px] rounded-[26px]   lg:mt-[100px] mt-[0px] w-screen">
          {!changeToggle && (
            <div className="font-bold text-custom-base-head pb-4">
              {location.uconunty === "Bangladesh" ? (
                <div>
                  {etype === "Enterprise" ? (
                    <></>
                  ) : (
                    <div>
                      <p className="font-poppins font-[400] text-[36px] text-[#076F74] text-left">
                        <span className="text-[36px] text-[#076F74]">৳</span>
                        {finalVbdt}
                        <sup className="text-[#848199] font-[400] text-[17px] ml-[6px]">
                          /month
                        </sup>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {etype === "Enterprise" ? (
                    <></>
                  ) : (
                    <div>
                      <p className=" font-poppins font-[400] text-[36px] text-[#076F74] text-left">
                        <span className="text-[36px] text-[#076F74]">$</span>
                        {dxinfo.vusd}
                        <sup className="text-[#848199] font-[400] text-[17px] ml-[6px]">
                          /month
                        </sup>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {changeToggle && (
            <div className=" font-bold  text-custom-base-head pb-4">
              {location.uconunty === "Bangladesh" ? (
                <>
                  {etype === "Enterprise" ? (
                    <></>
                  ) : (
                    <div>
                      <p className="font-poppins font-[400] text-[36px] text-[#076F74] text-left">
                        {+dxinfo.vanudis > 0 ? (
                          <>
                            <sup className="mr-2">
                              <span className="text-[#848199] font-[400] text-[17px] ml-[6px]">
                                ৳
                              </span>
                              <del className="text-[#848199] font-[400] text-[17px] ml-[6px]">
                                {bdtYearlyPrice}
                              </del>
                            </sup>
                          </>
                        ) : (
                          <>{null}</>
                        )}
                        <span className="text-primary mr-1">৳</span>
                        {bdtYearlyFinalPrice}
                        <sub className="text-[#848199] font-[400] text-[17px] ml-[6px]">
                          /year
                        </sub>
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <p className="font-poppins font-[400] text-[36px] text-[#076F74] text-left ">
                    {+dxinfo.vanudis > 0 ? (
                      <sup className="mr-2">
                        <span className="text-primary mr-1">$</span>
                        <del className="">{usdYearlyPrice}</del>
                      </sup>
                    ) : (
                      <>{null}</>
                    )}

                    <span className="text-primary mr-1">$</span>
                    {usdYearlyMainPrice}

                    <sub className="text-paragraph-base font-[400]">/year</sub>
                  </p>
                </div>
              )}
            </div>
          )}

          {etype === "Enterprise" ? (
            <h2 className="text-[28px] font-semibold text-[#231D4F] text-left font-poppins font-regular mb-[-40px] mt-[65px]">
              {etype}
            </h2>
          ) : (
            <h2 className="text-[28px] font-semibold text-[#231D4F] text-left font-poppins font-regular ">
              {etype}
            </h2>
          )}

          <div>
            <div>
              {ename === "LMS" ? (
                <div>
                  {location.uconunty === "Bangladesh" ? (
                    <div>
                      {etype === "Basic" ? (
                        <div>
                          {" "}
                          <p className="text-[15px] text-[#3F3F3F] mt-0 font-regular text-left">
                            This is suitable for a small Hotels & <br></br>
                            Resorts (
                            <span className="text-[15px] ">
                              +{dxinfo?.vlobycheckbdt}৳ per check-in
                            </span>
                            )
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div>
                      {etype === "Basic" ? (
                        <div>
                          {" "}
                          <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                            This is suitable for a small Hotels & <br></br>
                            Resorts (
                            <span className="text-[15px] ">
                              +${dxinfo?.vregusd} per check-in
                            </span>
                            )
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {location.uconunty === "Bangladesh" ? (
                    <div>
                      {etype === "Basic" ? (
                        <div>
                          <div>
                            {changeToggle === false ? (
                              <>
                                <div>
                                  <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                    This is suitable for a small organization
                                    having employees {dxinfo.maxuser} (
                                    <span className="text-[15px]">
                                      {perUserBamt.toFixed(2)}৳ per user/mo
                                    </span>
                                    )
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                    This is suitable for a small organization
                                    having employees {dxinfo.maxuser} (
                                    <span className="text-[15px]">
                                      {perYearUserBamt.toFixed(2)}৳ per user/mo
                                    </span>
                                    )
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div>
                      {etype === "Basic" ? (
                        <div>
                          <div>
                            {changeToggle === false ? (
                              <>
                                <div>
                                  <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                    This is suitable for a small organization
                                    having employees {dxinfo.maxuser} (
                                    <span className="text-[15px]">
                                      ${perUserUamt.toFixed(2)} per user/mo
                                    </span>
                                    )
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                    This is suitable for a small organization
                                    having employees {dxinfo.maxuser} (
                                    <span className="text-[15px]">
                                      ${perYearUserUamt.toFixed(2)} per user/mo
                                    </span>
                                    )
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              {ename === "LMS" ? (
                <div>
                  {location.uconunty === "Bangladesh" ? (
                    <div>
                      {etype === "Business" ? (
                        <div>
                          {" "}
                          <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                            This is suitable for a Large Hotels & <br></br>
                            Resorts (
                            <span className="text-[15px]">
                              +{dxinfo?.vlobycheckbdt}৳ per check-in
                            </span>
                            )
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div>
                      {etype === "Business" ? (
                        <div>
                          {" "}
                          <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                            This is suitable for a Large Hotels & <br></br>
                            Resorts (
                            <span className="text-[15px]">
                              +${dxinfo?.vregusd} per check-in
                            </span>
                            )
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {location.uconunty === "Bangladesh" ? (
                    <div>
                      {etype === "Business" ? (
                        <>
                          {changeToggle === false ? (
                            <>
                              {" "}
                              <div>
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for mid sized to large
                                  organizations having employees{" "}
                                  {dxinfo.maxuser} (
                                  <span className="text-[15px]">
                                    {perUserBamt.toFixed(2)}৳ per user/mo
                                  </span>
                                  )
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              <div>
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for mid sized to large
                                  organizations having employees{" "}
                                  {dxinfo.maxuser} (
                                  <span className="text-[15px]">
                                    {perYearUserBamt.toFixed(2)}৳ per user/mo
                                  </span>
                                  )
                                </p>
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div>
                      {etype === "Business" ? (
                        <>
                          {changeToggle === false ? (
                            <>
                              {" "}
                              <div>
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for mid sized to large
                                  organizations having employees{" "}
                                  {dxinfo.maxuser} (
                                  <span className="text-[15px]">
                                    ${perUserUamt.toFixed(2)} per user/mo
                                  </span>
                                  )
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              <div>
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for mid sized to large
                                  organizations having employees{" "}
                                  {dxinfo.maxuser} (
                                  <span className="text-[15px]">
                                    ${perYearUserUamt.toFixed(2)} per user/mo
                                  </span>
                                  )
                                </p>
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              {ename === "LMS" ? (
                <div>
                  <div>
                    {location.uconunty === "Bangladesh" ? (
                      <div>
                        {etype === "Enterprise" ? (
                          <div className="mt-[40px]">
                            {" "}
                            <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                              This is suitable for a Large Hotels & <br></br>{" "}
                              Resorts
                            </p>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <div>
                        {etype === "Enterprise" ? (
                          <div className="mt-[40px]">
                            {" "}
                            <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                              This is suitable for a Large Hotels & <br></br>{" "}
                              Resorts
                            </p>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  {location.uconunty === "Bangladesh" ? (
                    <div>
                      {etype === "Enterprise" ? (
                        <>
                          {changeToggle === false ? (
                            <>
                              {" "}
                              <div className="mt-[40px]">
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for Banks & Branch, Large
                                  organizations having employees{" "}
                                  {dxinfo.maxuser}+
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              <div className="mt-[40px]">
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for Large organizations
                                  having employees {dxinfo.maxuser}+
                                </p>
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div>
                      {etype === "Enterprise" ? (
                        <>
                          {changeToggle === false ? (
                            <>
                              {" "}
                              <div className="mt-[40px]">
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for Large organizations
                                  having employees {dxinfo.maxuser}+
                                </p>
                              </div>
                            </>
                          ) : (
                            <>
                              {" "}
                              <div className="mt-[40px]">
                                {" "}
                                <p className="text-[15px]   text-[#3F3F3F] mt-0 font-regular text-left">
                                  This is suitable for Large organizations
                                  having employees {dxinfo.maxuser}+
                                </p>
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="font-normal">
              <div className="mt-6  text-left">
                {dxinfo?.Qporak?.slice(0, 7).map((item, index) => (
                  <>
                    {item === "GEO LOCATION" ? (
                      <div className="flex">
                        <div className=" bg-[#edecf9] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center mt-[8px]  mr-[6px]">
                          <span>
                            <ColorTick className={price.circle} />
                          </span>
                        </div>
                        <div>
                          <p className={price.points4}>GEO LOCATION*</p>
                        </div>
                        <div
                          class="tooltip tooltip-secondary"
                          data-tip="GEO LOCATION"
                        >
                          <div className="mt-[10px] ml-[10px] cursor-pointer">
                            <LazyLoadImage
                              src={warning}
                              alt=""
                              className="w-[18px] ,h-[18px]"
                            ></LazyLoadImage>
                          </div>
                        </div>
                      </div>
                    ) : item === "EMPLOYEE ONBOARDING" ? (
                      <div className="flex">
                        <div className=" bg-[#edecf9] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center mt-[8px]  mr-[6px]">
                          <span>
                            <ColorTick className={price.circle} />
                          </span>
                        </div>
                        <div>
                          <p className={price.points4}>EMPLOYEE ONBOARDING*</p>
                        </div>
                        <div
                          class="tooltip tooltip-secondary"
                          data-tip={`${dxinfo.maxuser} User Panel `}
                        >
                          <div className="mt-[10px] ml-[10px] cursor-pointer">
                            <LazyLoadImage
                              src={warning}
                              alt=""
                              className="w-[18px] ,h-[18px]"
                            ></LazyLoadImage>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex">
                        <div className=" bg-[#edecf9] rounded-[50%] w-[24px] h-[24px] flex justify-center items-center mt-[8px]  mr-[6px]">
                          <span>
                            <ColorTick className={price.circle} />
                          </span>
                        </div>
                        <p key={index} className={price.points4}>
                          {item}
                        </p>
                      </div>
                    )}
                  </>
                ))}

                <div>
                  {dxinfo?.Qporak.length > 7 && (
                    <div className="text-[15px] pl-9 text-[#076F74] my-2 font-poppins font-medium">
                      <button onClick={handleClick}>See More</button>
                    </div>
                  )}

                  {showPopup && (
                    <div className="popup-container overflow-y-auto mt-[100px]  border">
                      <div className="popup-content">
                        <div className="flex justify-end mt-2">
                          {" "}
                          <button onClick={() => setShowPopup(false)}>
                            <BlackClose></BlackClose>
                          </button>
                        </div>
                        {dxinfo?.Qporak.map((item, index) => (
                          <>
                            {item === "GEO LOCATION" ? (
                              <div className="flex">
                                <span>
                                  <BsCircleFill className={price.circle} />
                                </span>
                                <div>
                                  <p className={price.points4}>GEO LOCATION*</p>
                                </div>
                                <div
                                  class="tooltip tooltip-secondary"
                                  data-tip="GEO LOCATION"
                                >
                                  <div className="mt-[10px] ml-[10px] cursor-pointer">
                                    <LazyLoadImage
                                      src={warning}
                                      alt=""
                                      className="w-[18px] ,h-[18px]"
                                    ></LazyLoadImage>
                                  </div>
                                </div>
                              </div>
                            ) : item === "SMS NOTIFICATION*" ? (
                              <div className="flex">
                                <span>
                                  <BsCircleFill className={price.circle} />
                                </span>
                                <div>
                                  <p className={price.points4}>
                                    SMS NOTIFICATION*
                                  </p>
                                </div>
                                <div
                                  class="tooltip tooltip-secondary"
                                  data-tip="Pay Per Sms Notification"
                                >
                                  <div className="mt-[10px] ml-[10px] cursor-pointer">
                                    <LazyLoadImage
                                      src={warning}
                                      alt=""
                                      className="w-[18px] ,h-[18px]"
                                    ></LazyLoadImage>
                                  </div>
                                </div>
                              </div>
                            ) : item === "EMPLOYEE ONBOARDING" ? (
                              <div className="flex">
                                <span>
                                  <BsCircleFill className={price.circle} />
                                </span>
                                <div>
                                  <p className={price.points4}>
                                    EMPLOYEE ONBOARDING*
                                  </p>
                                </div>
                                <div
                                  class="tooltip tooltip-secondary"
                                  data-tip="EMPLOYEE ONBOARDING"
                                >
                                  <div className="mt-[10px] ml-[10px] cursor-pointer">
                                    <LazyLoadImage
                                      src={warning}
                                      alt=""
                                      className="w-[18px] ,h-[18px]"
                                    ></LazyLoadImage>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div key={index}>
                                <div className="flex">
                                  <span>
                                    <BsCircleFill className={price.circle} />
                                  </span>
                                  <p className={price.points4}>{item}</p>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {etype === "Enterprise" ? (
            <>
              <div className="flex justify-center">
                <div className="  absolute bottom-3">
                  <label
                    htmlFor="customize-modal"
                    className="btn bg-[#e7f4f4]  w-[232px]  border-none h-[45px] text-[#076F74]  rounded-[24rem] mb-3  font-poppins font-medium text-[15px] hover:bg-[#c8efef]"
                  >
                    Contact For Sales
                  </label>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <div className="absolute bottom-3">
                <label
                  htmlFor="confirm-modal"
                  onClick={() => handleAddToCart()}
                  className="btn bg-[#e7f4f4]  w-[232px]  border-none h-[45px] text-[#076F74]  rounded-[24rem] mb-3  font-poppins font-medium text-[15px] hover:bg-[#c8efef] "
                >
                  Choose plan
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
