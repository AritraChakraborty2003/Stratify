import { useState } from "react";
import Marquee from "react-fast-marquee";
const MarqueeHeader1 = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="slidebar bg-blue text-white  w-screen p-2">
            <div className="showText w-12/12">
              <ul className="flex justify-evenly font-medium font-serif">
                <Marquee speed={80} gradient={false} pauseOnHover>
                  <li className="ml-10">
                    Great <span className="font-bold">Networking </span>
                  </li>

                  <li className="ml-20">
                    Excellent Platform
                    <span className=" font-bold">&nbsp;Support</span>
                  </li>
                  <li className="ml-20">
                    Growing <span className=" font-bold">Startups</span>
                  </li>
                  <li className="ml-20">
                    Best{" "}
                    <span className=" font-bold">Business Partnerships</span>
                  </li>
                  <li className="ml-20">
                    Top notch
                    <span className=" font-bold">
                      &nbsp;&nbsp;Corporate Connections
                    </span>
                  </li>
                </Marquee>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarqueeHeader1;
