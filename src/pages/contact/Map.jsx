import React from "react";
import Email from "../../components/svg/store/Email";
import Phone from "../../components/svg/store/Phone";
import Location from "../../components/svg/store/Location";
export default function map() {
  return (
    <div className="lg:pt-[120px] pt-[0px] px-[30px]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[120px]">
        <div className="rounded-lg">
          <iframe
            style={{ borderRadius: "4px" }}
            width="100%"
            height="550"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kompass%20,gulshan%20Dhaka%20+(Map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://maps-generator.com/"></a>
        </div>

        <div className="h-[100%] flex items-center">
          <div >
            <div className="flex">
              <Email></Email>
              <div>
                <p className="text-[18px] text-[#0C1E21] font-medium pt-[3px] pl-[32px]  font-poppins">
                  {" "}
                  Email US
                </p>
                <p className="text-[16px] text-[#0C1E21] font-regular pt-[15px] p-[32px]  font-poppins underline">
                  hello@hellokompass.com
                </p>
              </div>
            </div>
            <div className="flex">
              <Phone></Phone>
              <div>
                <p className="text-[18px] text-[#0C1E21] font-medium pt-[3px] pl-[32px]  font-poppins">
                  {" "}
                  Call US
                </p>
                <p className="text-[16px] text-[#0C1E21] font-regular pt-[15px] px-[32px]  font-poppins ">
                +88 02 48811450          
                 </p>
                <p className="text-[16px] text-[#0C1E21] font-regular  pt-[0px] p-[32px]  font-poppins ">
                +880 2222222222       
                 </p>
              </div>
            </div>
            <div className="flex">
              <Location></Location>
              <div>
                <p className="text-[18px] text-[#0C1E21] font-medium pt-[3px] pl-[32px]  font-poppins">
                  {" "}
                  Our location
                </p>
                <p className="text-[16px] text-[#0C1E21] font-regular pt-[15px] p-[32px]  font-poppins ">
                Commercial Address: Suite <br></br>6B,H10,R1,Block B, Niketan <br></br> Gulshan, Dhaka <br></br> 1212,Bangladesh
                </p>
                {/* <p className="text-[16px] text-[#0C1E21] font-regular pt-[15px] p-[32px]  font-poppins ">
                Registered Address: Plot-7,<br></br>Road-17, 5th Floor Rupsha <br></br>Tower, Banani Dhaka <br></br>1213,Bangladesh</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
