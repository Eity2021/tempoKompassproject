import { useContextProvider } from "../../../components/contextProvider/PricingProvider";
import React, { useState, useEffect } from "react";
import paymentSuccessful from "../../../assets/Nimages/paymentSuccessful.png";
import paymentFailed from "../../../assets/Nimages/paymentFailed.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Invoice() {
  const { setCart } = useContextProvider();
  const [odrx, setOdrx] = useState(null);
  const [typr, setTypr] = useState(null);
  const [code, setCode] = useState(null);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const odrx = params.get("odrx");
    const typr = params.get("odrxtypr");
    const code = params.get("code");
    const status = params.get("status");
    const message = params.get("message");

    setOdrx(odrx);
    setTypr(typr);
    setCode(code);
    setStatus(status);
    setMessage(message);

    if (odrx && typr) {
      sessionStorage.setItem("odrx", odrx);
      sessionStorage.setItem("typr", typr);
      sessionStorage.setItem("code", code);
      sessionStorage.setItem("status", status);
      sessionStorage.setItem("message", message);
    }
  }, [odrx, typr]);

  useEffect(() => {
    const odrx = sessionStorage.getItem("odrx");
    const typr = sessionStorage.getItem("typr");

      const fetchPDF = async () => {
        try {
          const response = await fetch(
            `https://api.hellokompass.com/pdfinvoice?ordrx=${odrx}&typr=${typr}`,
            {
              method: "GET",
              headers: {
                Accept: "application/pdf",
                // other headers if needed
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }

          const blob = await response.blob();
          return URL.createObjectURL(blob);
        } catch (error) {
          console.error("Error fetching PDF:", error);
        }
      };

      const getPDF = async () => {
        const url = await fetchPDF();
        setPdfUrl(url);
      };

      getPDF();
    
  }, []);
  return (
    <div className="mt-[5%] h-full">
      {(() => {
        if ((code === '200') ) {
          localStorage.removeItem("cart");
          setCart([]);
          return (
            <div className="container">
              <div className="grid  md:grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:flex justify-center items-center h-full ">
                  <div className="h-[85vh] flex items-center">
                  <div className="text-center ">
                    <div className="flex justify-center">
                      <div className="w-[15rem] ">
                        {/* <Lottie animationData={paymentSuccessful} /> */}
                        <LazyLoadImage
                          src={paymentSuccessful}
                          alt="paymentSuccessful"
                        />
                      </div>
                    </div>
                    <h2 className="text-5xl font-bold text-primary mb-2">
                      {status} !
                    </h2>
                    <h2 className="mb-6 text-[1rem] text-[#757575]">
                      {message}
                    </h2>
                    <div>
                      <Link to="/">
                        <button className="btn bg-[#0C1E21]  font-poppins text-white font-regular text-[14px]">
                          Back Home
                        </button>
                      </Link>
                    </div>
                  </div>
                    </div>
                </div>

                <div className="mx-4">
                  <div className="mt-20 lg:mt-0">
                    {pdfUrl ? (
                      <iframe
                        src={pdfUrl}
                        width="100%"
            
                        title="PDF Viewer"
                        style={{
                          height: window.innerWidth >= 1024 ? "1000px" : window.innerWidth >= 768 ? "800px" : "600px",
                          border: "none",
                        }}
                      />
                    ) : (
                      <div className="pt-[99px]">
                        <p>Loading PDF...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (code === "400") {
          localStorage.removeItem("cart");
          setCart([]);
          return (
           <div className="h-[85vh]">
             <div className="flex justify-center items-center h-full ">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-[15rem] ">
                    <LazyLoadImage src={paymentFailed} alt="failed" />
                  </div>
                </div>

                <h2 className="2xl:text-5xl  text-4xl font-bold text-[#FF0000] mb-2">
                  {status}
                </h2>
                <h2 className="mb-6 text-[1rem] text-[#757575]">{message}</h2>
                <div>
                  <Link to="/">
                    <button className="btn bg-[#0C1E21]  font-poppins text-white font-regular text-[14px]">
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          );
        } else if (code === "401") {
          localStorage.removeItem("cart");
          setCart([]);
          return (
            <div className="h-[85vh]">
              <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="w-[15rem] ">
                    <LazyLoadImage src={paymentFailed} alt="failed" />
                  </div>
                </div>

                <h2 className="2xl:text-5xl  text-4xl font-bold text-[#FF0000] mb-2">
                  {status}
                </h2>
                <h2 className="mb-6 text-[1rem] text-[#757575]">{message}</h2>
                <div>
                  <Link to="/">
                    <button className="btn bg-[#0C1E21]  font-poppins text-white font-regular text-[14px]">
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
              </div>
          );
        } else {
          <></>;
        }
      })()}
    </div>
  );
}
