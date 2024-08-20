// import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContextProvider } from "../../../../components/contextProvider/PricingProvider";
import { userValidation } from "../../../../components/Validation/YupValidation";
import ChevronRight from "../../../../components/svg/store/ChevronRight";
import {
  getBdtDiscountedPrice,
  getUsdDiscountedPrice,
} from "../../../../components/utils/discountLogics";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ProductCalculation from "../ProductCalculation";
export default function BankInfo({ onButtonClick }) {
  const {
    userData,
    setUserData,
    cart,
    setOrder,
    setPage,
    location,
    promoCode,
    pCode,
    industrys,
  } = useContextProvider();
  console.log(industrys);
  let mainVat;
  let vatValue;
  for (const vat of pCode) {
    if (vat.name === "Bangladesh") {
      mainVat = parseFloat(vat.vatpercent);
      vatValue = parseFloat(mainVat / 100);
    } else if (vat.name === !"Bangladesh") {
      mainVat = parseFloat(vat.vatpercent);
      vatValue = parseFloat(mainVat / 100);
    } else {
      <></>;
    }
  }
  const navigate = useNavigate();

  //bank info

  let vTokenPackage;
  let pTokenPackage;
  let lTokenPackage;

  let subTotalBdt = 0;
  let bdtTax = 0;
  let totalBdt = 0;
  let netBdt = 0;

  for (const product of cart) {
    if (product.isYearly) {
      subTotalBdt += getBdtDiscountedPrice(product.dxinfo);
      netBdt = parseFloat(
        subTotalBdt - parseFloat(promoCode.promo_amount || 0)
      );
      bdtTax = parseFloat(netBdt) * parseFloat(vatValue).toFixed(2);
      totalBdt = parseFloat(netBdt + parseFloat(bdtTax));
    } else subTotalBdt += parseFloat(product.dxinfo.vubdt);
    netBdt = parseFloat(subTotalBdt - parseFloat(promoCode.promo_amount || 0));
    bdtTax = parseFloat(netBdt * vatValue).toFixed(2);
    totalBdt = parseFloat(netBdt + parseFloat(bdtTax));
  }

  let subTotalUsd = 0;
  let usdTax = 0;
  let totalUsd = 0;
  let netUsd = 0;
  for (const product of cart) {
    if (product.isYearly) {
      subTotalUsd += getUsdDiscountedPrice(product.dxinfo);
      netUsd = parseFloat(
        subTotalUsd - parseFloat(promoCode.promo_amount || 0)
      );
      usdTax = parseFloat(netUsd * vatValue).toFixed(0);
      totalUsd = parseFloat(netUsd + parseFloat(usdTax));
    } else subTotalUsd += parseFloat(product.dxinfo.vusd);
    netUsd = parseFloat(subTotalUsd - parseFloat(promoCode.promo_amount || 0));
    usdTax = parseFloat(netUsd * vatValue).toFixed(2);
    totalUsd = parseFloat(netUsd + parseFloat(usdTax));
  }

  for (const product of cart) {
    if (product.ename === "VMS") {
      if (product.isYearly) {
        vTokenPackage = "YEARLY";
      } else {
        vTokenPackage = "MONTHLY";
      }
    }
  }
  for (const product of cart) {
    if (product.ename === "PMS") {
      if (product.isYearly) {
        pTokenPackage = "YEARLY";
      } else {
        pTokenPackage = "MONTHLY";
      }
    }
  }

  for (const product of cart) {
    if (product.ename === "LMS") {
      if (product.isYearly) {
        lTokenPackage = "YEARLY";
      } else {
        lTokenPackage = "MONTHLY";
      }
    }
  }

  let vEname;
  let vEtype;
  let vEcode;
  let vBdPrice;

  let pEname;
  let pEtype;
  let pEcode;
  let pBdPrice;

  let lEname;
  let lEtype;
  let lEcode;
  let lBdPrice;
  for (const product of cart) {
    if (product.ename === "VMS") {
      vEname = product.ename;
      vEtype = product.etype;
      vEcode = product.ecode;
    }
  }

  // vms yearly amount
  for (const product of cart) {
    if (product.ename === "VMS") {
      if (product.isYearly) {
        vBdPrice = getBdtDiscountedPrice(product.dxinfo);
      } else {
        vBdPrice = product.dxinfo.vubdt;
      }
    }
  }

  for (const product of cart) {
    if (product.ename === "PMS") {
      pEname = product.ename;
      pEtype = product.etype;
      pEcode = product.ecode;
      pBdPrice = product.dxinfo.vubdt;
    }
  }
  for (const product of cart) {
    if (product.ename === "PMS") {
      if (product.isYearly) {
        pBdPrice = getBdtDiscountedPrice(product.dxinfo);
      } else {
        pBdPrice = product.dxinfo.vubdt;
      }
    }
  }

  for (const product of cart) {
    if (product.ename === "LMS") {
      lEname = product.ename;
      lEtype = product.etype;
      lEcode = product.ecode;
      lBdPrice = product.dxinfo.vubdt;
    }
  }
  for (const product of cart) {
    if (product.ename === "LMS") {
      if (product.isYearly) {
        lBdPrice = getBdtDiscountedPrice(product.dxinfo);
      } else {
        lBdPrice = product.dxinfo.vubdt;
      }
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pcode: "88",
    },
    resolver: yupResolver(userValidation),
  });

  const onSubmit = (data) => {
    setUserData({ ...userData, ...data });
    axios
      .post("https://api.hellokompass.com/addsubscompany", data)
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("orderInfo", JSON.stringify(res.data));
          setOrder(res.data);
          navigate(setPage("confirmPayment"));
        } else {
          swal("Sorry !!", "Invalid Input", "error");
        }
      });
  };

  return (
    <div className="container pb-[60px]">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 ...">
          <div className="px-6">
            <div className="flex justify-end pb-[30px]">
              <div>
                <ChevronRight></ChevronRight>
              </div>
              <button
                className="text-[#0C1E21] font-regular  font-poppins text-[16px] underline"
                onClick={() => onButtonClick("checkout")}
              >
                Back
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid   grid-cols-1   gap-4">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#0C1E21] text-[14px] font-regular"
                  >
                    Billing Person<span className="text-[#ED1C24]">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Billing Person"
                    name="billing_person"
                    className="placeholder:italic input input-bordered hover:input-primary w-full mr-4  mt-1 rounded-none"
                    value={userData["billing_person"]}
                    {...register("billing_person", {
                      onChange: (e) =>
                        setUserData({
                          ...userData,
                          billing_person: e.target.value,
                        }),
                    })}
                  />
                  <p className="label-text-alt text-red-500 mt-3 ">
                    {errors.billing_person?.message}
                  </p>
                </div>
              </div>

              <div className="grid   grid-cols-1">
                <p
                  htmlFor=""
                  className="text-[#0C1E21] text-[14px] font-regular"
                >
                  Company Name<span className="text-[#ED1C24]">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  className="placeholder:italic input input-bordered hover:input-primary w-full mr-4   mt-1  rounded-none"
                  value={userData["company"]}
                  {...register("company", {
                    onChange: (e) =>
                      setUserData({ ...userData, company: e.target.value }),
                  })}
                />
                <p className="label-text-alt text-red-500 mt-3 ">
                  {errors.company?.message}
                </p>
              </div>
              {/* Creating a grid with two columns and a gap of 4px.  */}

              <div className="grid grid-cols-1 gap-4 ">
                <div>
                  <p
                    htmlFor=""
                    className="text-[#0C1E21] text-[14px] font-regular"
                  >
                    Email Address<span className="text-[#ED1C24]">*</span>
                  </p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="placeholder:italic input input-bordered hover:input-primary w-full mr-4 mt-1 rounded-none"
                    value={userData["email"]}
                    {...register("email", {
                      onChange: (e) =>
                        setUserData({ ...userData, email: e.target.value }),
                    })}
                  />
                  <p className="label-text-alt text-red-500 mt-3">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
              {/* Creating a grid with two columns and a gap of 4px.  */}

              <div className="grid grid-cols-1 ">
                <p
                  htmlFor=""
                  className="text-[#0C1E21] text-[14px] font-regular"
                >
                  Phone Number<span className="text-[#ED1C24]">*</span>
                </p>
                <div className="flex gap-2">
                  <div>
                    <select
                      name="pcode"
                      {...register("pcode", {
                        required: true,
                        onChange: () => setUserData({ ...userData }),
                      })}
                      className="input input-bordered w-40 hover:input-primary  mt-1 rounded-none"
                    >
                      {pCode.map((code) => (
                        <>
                          <option
                            selected={code.pcode === "88"}
                            value={code.pcode || ""}
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
                      className="placeholder:italic input input-bordered hover:input-primary w-full  mt-1 rounded-none"
                      value={userData["phone"]}
                      {...register("phone", {
                        onChange: (e) =>
                          setUserData({ ...userData, phone: e.target.value }),
                      })}
                    />
                    <p className="label-text-alt text-red-500 mt-3 ">
                      {errors.phone?.message}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 ">
                <p
                  htmlFor=""
                  className="text-[#0C1E21] text-[14px] font-regular"
                >
                  Industry<span className="text-[#ED1C24]">*</span>
                </p>
                <div>
                  <div>
                    <select
                      className=" input  rounded-none m-[0px]  w-full  bg-transparent focus:outline-none focus:ring-0  text-[#a0a2a5]  text-[14px] font-semibold	 placeholder:italic input-bordered hover:input-primary   mt-1 "
                      name="industry_typ"
                      {...register("industry_type", { required: true })}
                    >
                      <option value="" selected disabled>
                        Select Industry
                      </option>
                      {industrys.map((industry) => (
                        <>
                          <option
                            // className="text-[#686868]"
                            value={industry.indid}
                            key={industry.indid}
                          >
                            {industry.ind_name}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                  <p className="label-text-alt text-[#fff] mt-3">
                    {errors.industry_typ?.message}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 ">
                <p
                  htmlFor=""
                  className="text-[#0C1E21] text-[14px] font-regular"
                >
                  Address<span className="text-[#ED1C24]">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Billing Address"
                  name="address"
                  className="placeholder:italic input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none "
                  value={userData["address"]}
                  {...register("address", {
                    onChange: (e) =>
                      setUserData({ ...userData, address: e.target.value }),
                  })}
                />
                <p className="label-text-alt text-red-500 mt-3">
                  {errors.address?.message}
                </p>
              </div>
              {/* Creating a grid with two columns and a gap of 4px.  */}

              <div className=" grid-cols-1 gap-4 md:mt-10 mt-4 hidden">
                <div>
                  <input
                    type="payroll"
                    name="payroll_ename"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={pEname}
                    {...register("payroll_ename")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="payroll_etype"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={pEtype}
                    {...register("payroll_etype")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="payroll_ecode"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={pEcode}
                    {...register("payroll_ecode")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="payroll_amount"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={pBdPrice}
                    {...register("payroll_amount")}
                  />
                </div>
              </div>

              {/* Creating a grid with two columns and a gap of 4px.  */}

              <div className=" md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-4 hidden">
                <div>
                  <input
                    type="text"
                    name="vms_ename"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={vEname}
                    {...register("vms_ename")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="vms_etype"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={vEtype}
                    {...register("vms_etype")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="vms_ecode"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={vEcode}
                    {...register("vms_ecode")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="vms_amount"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={vBdPrice}
                    {...register("vms_amount")}
                  />
                </div>
              </div>

              {/* Creating a grid with two columns and a gap of 4px.  */}

              <div className=" md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-4 hidden">
                <div>
                  <input
                    type="payroll"
                    name="lobby_ename"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={lEname}
                    {...register("lobby_ename")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lobby_etype"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={lEtype}
                    {...register("lobby_etype")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lobby_ecode"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={lEcode}
                    {...register("lobby_ecode")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lobby_amount"
                    className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                    value={lBdPrice}
                    {...register("lobby_amount")}
                  />
                </div>
              </div>

              {/* Creating a grid with two columns and a gap of 4px.  */}

              <div className="hidden">
                {location.uconunty === "Bangladesh" ? (
                  <>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-4">
                      <div>
                        <input
                          type="sub_total"
                          name="sub_total"
                          className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                          value={subTotalBdt.toFixed(2)}
                          {...register("sub_total")}
                        />
                      </div>
                      {/* Creating a grid with two columns and a gap of 4px.  */}

                      <div>
                        <input
                          type="text"
                          name="vat"
                          className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                          value={bdtTax}
                          {...register("vat")}
                        />
                      </div>
                    </div>
                    {/* Creating a grid with two columns and a gap of 4px.  */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-4">
                      <div>
                        <input
                          type="total"
                          name="total"
                          className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                          value={totalBdt.toFixed(2)}
                          {...register("total")}
                        />
                      </div>
                      {/* Creating a grid with two columns and a gap of 4px.  */}

                      <div>
                        <input
                          type="text"
                          name="curency_type"
                          className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                          value="BDT"
                          {...register("curency_type")}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-4">
                      <div>
                        <input
                          type="sub_total"
                          name="sub_total"
                          className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                          value={subTotalUsd}
                          {...register("sub_total")}
                        />
                      </div>
                      {/* Creating a grid with two columns and a gap of 4px.  */}

                      <div>
                        <input
                          type="text"
                          name="vat"
                          className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                          value={usdTax}
                          {...register("vat")}
                        />
                      </div>
                    </div>
                    {/* Creating a grid with two columns and a gap of 4px.  */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-4">
                      <div>
                        <input
                          type="sub_total"
                          name="total"
                          className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                          value={totalUsd}
                          {...register("total")}
                        />
                      </div>
                      {/* Creating a grid with two columns and a gap of 4px.  */}

                      <div>
                        <input
                          type="text"
                          name="curency_type"
                          className="input input-bordered hover:input-primary w-full  mr-4 mt-2 rounded-none"
                          value="USD"
                          {...register("curency_type")}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="hidden">
                <div>
                  <input
                    type="text"
                    name="vms_tenor"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={vTokenPackage}
                    {...register("vms_tenor")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="payroll_tenor"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={pTokenPackage}
                    {...register("payroll_tenor")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lobby_tenor"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={lTokenPackage}
                    {...register("lobby_tenor")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="discount_amount"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={promoCode.promo_amount}
                    {...register("discount_amount")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="promo_code"
                    className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                    value={promoCode.promo_code}
                    {...register("promo_code")}
                  />
                </div>
                {location.uconunty == "Bangladesh" ? (
                  <div>
                    <input
                      type="text"
                      name="net_amount"
                      className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                      value={netBdt}
                      {...register("net_amount")}
                    />
                  </div>
                ) : (
                  <div>
                    <input
                      type="text"
                      name="net_amount"
                      className="input input-bordered hover:input-primary w-full mr-4 mt-2 rounded-none"
                      value={netUsd}
                      {...register("net_amount")}
                    />
                  </div>
                )}
              </div>

              <div className="mt-6">
                <label className="cursor-pointer label justify-start flex">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="checkbox checkbox-primary w-6 h-6"
                    {...register("checkbox")}
                  />

                  <span className="md:text-lg text-tiny mr-4 ml-3">
                    I agree to online payment {""}
                    <span className="text-primary">
                      <Link to="/terms" target="_blank">
                        Terms & Conditions,
                      </Link>
                    </span>
                    <span className="text-primary">
                      {" "}
                      <Link to="/privacy" target="_blank">
                        {" "}
                        Privacy Policy,
                      </Link>
                    </span>
                    <span className="text-primary">
                      <Link to="/termsOfPayment" target="_blank">
                        {" "}
                        Refund & Return Policy
                      </Link>
                    </span>
                  </span>
                </label>
                <p className="label-text-alt text-red-500 mr-10">
                  {errors.checkbox?.message}
                </p>
              </div>
              <div className="flex justify-end  mb-[20px]">
                <button
                  type="submit"
                  className=" bg-[#0C1E21]  w-28 mt-6 h-10 rounded-[32px] font-poppins text-white font-regular text-[14px] "
                >
                  NEXT
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="...">
          <div>
            <ProductCalculation></ProductCalculation>
          </div>
        </div>
      </div>
    </div>
  );
}
