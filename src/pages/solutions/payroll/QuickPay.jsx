import React, { useState } from "react";
import quickPay from "../../../assets/Nimages/Payroll/quickPay.png";
import "./Payroll.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// accordion
const accordionData = [
  {
    id: 1,
    question: "Full-service payroll",
    answer:
      "Kompass Teams will generate full payroll as per the configuration of the organization. Customize payroll generation gave the freedom to the organization either partial or full. Which will be notified to all employees. .",
  },
  {
    id: 2,
    question: "Time and attendance",
    answer:
      "The simple time attendance format will help the HR manager to upload the data to the system before generating the payroll. ",
  },
  {
    id: 3,
    question: "Insights and reporting",
    answer:
      "Kompass Teams will generate different on-demand salary-related reports as per the need of the employee. An employee has full freedom to download his required reports from the app without any further waiting for the HR manager.",
  },
  {
    id: 3,
    question: "Tax calculation",
    answer:
      "Kompass Teams will help you to generate tax as per the territory tax law configured by the HR manager. And this option is also optional and configurable. Employees will also download tax slips from the system. ",
  },
];

export default function QuickPay() {
  const [accordionActive, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index == accordionActive) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }
  return (
    <div className="hero  pt-24 ">
      <div className="container">
        <div className="flex flex-col lg:flex-row px-[10px]">
          <div className="flex-1  flex lg:justify-start  justify-center mt-[-260px]">
            <LazyLoadImage src={quickPay} effect="blur" alt="QuickPay" />
          </div>
          <div className="flex h-100 items-center justify-center flex-1">
            <div className="lg:ml-14 ml-0 lg:mt-0 mt-10">
              <h1
                className="font-medium text-left  xl:text-[66px]  lg:text-[55px]md:text-[40px] text-[30px]   text-[#242424]    xl:leading-[75px]  md:leading-[55px] leading-[35px] pb-4"
                style={{ fontFamily: "Noe Display" }}
              >
                <span className="text-[#11989F]">Quickly</span> pay your team,
                no matter <span className="text-[#11989F]">where</span> they
                are.
              </h1>
              <div>
                <div className="accordion__section">
                  {accordionData.map((item, index) => (
                    <div key={index} onClick={() => toggleAccordion(index)}>
                      <div className="shadow-[0px_4px_15px_rgba(0,0,0,0.1)] px-[15px] py-[10px] mt-[20px] rounded-[10px]">
                        <div className=" text-[18px] font-medium font-poppins text-[#545454] flex justify-between  pt-3 transition duration-250 ease-in-out ">
                          <h4
                            className={
                              accordionActive == index ? "active" : ""
                            }
                          >
                            {item.question}
                          </h4>
                          <span>
                            {" "}
                            {accordionActive == index ? (
                              <>
                                <span className="vertical text-[18px] font-medium font-poppins text-[#545454]">
                                  -
                                </span>
                              </>
                            ) : (
                              <>
                                {" "}
                                <span className="vertical text-[18px] font-medium font-poppins text-[#545454]">
                                  +
                                </span>
                              </>
                            )}
                          </span>
                        </div>
                        <div className=" text-[16px] font-regular  text-[#4F6169] mb-4 pr-8 font-poppins">
                          <p
                            className={
                              accordionActive == index ? "active" : "inactive"
                            }
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
