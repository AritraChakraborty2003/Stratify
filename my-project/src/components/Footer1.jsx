import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Footer1 = () => {
  const [statusBlog, setStatusBlog] = useState(false);
  const [statusShop, setStatusShop] = useState(false);
  const [statusPolicy, setStatusPolicy] = useState(false);
  return (
    <>
      {(screen.width < 1280 && (
        <footer>
          <div className="flex-wrap footer-body-w-12/12 pb-2 md:pb-0 bg-blue1 flex text-white">
            <div className="leftPart w-[85vmin] pt-3">
              <p className="ml-5 font-oxygen font-medium">
                "Startify creates a synergistic ecosystem designed to connect
                startups with venture capitalists, business coaches, and finance
                leaders. Through AI-driven suggestions, the platform optimizes
                deal flow, enhancing funding prospects for entrepreneurs.
                Real-time chat functionality fosters seamless communication,
                enabling dynamic networking and rapid information exchange."{" "}
              </p>
              <div className="socialIcons mt-5 ml-3 flex space-x-5">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="subsPanel flex">
                <input
                  type="search"
                  name=""
                  id=""
                  className="ml-3 mt-4 w-9/12 p-2"
                  placeholder="Subscribe to emailer"
                />
                <button
                  type="button"
                  className="bg-brown w-24 h-12 mt-[17px]
               text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="leftPart w-[90vmin] mt-5 pb-5">
              <div className="box1 w-12/12  ml-5 border-b-2 pb-2">
                <div className="holder flex">
                  <div className="textHolder w-11/12">
                    <p className="font-bold">Brand</p>
                  </div>
                  <img
                    id="imgIcon"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    className="float-right"
                    onClick={() => {
                      console.log(statusBlog);

                      if (statusBlog) {
                        document.getElementById("imgIcon").src =
                          "./images/ricon.png";
                        setStatusBlog(false);
                      } else {
                        document.getElementById("imgIcon").src =
                          "./images/downicon.png";
                        setStatusBlog(true);
                      }
                    }}
                  ></img>
                </div>
              </div>
              {statusBlog ? (
                <div className="brandHolder ml-5" id="brandHolder">
                  <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Blogs</li>
                  </ul>
                </div>
              ) : null}
              <div className="box1 w-12/12 ml-5 border-b-2 pb-2 mt-4">
                <div className="holder flex">
                  <div className="textHolder w-11/12">
                    <p className="font-bold">Features</p>
                  </div>
                  <img
                    id="imgIcon1"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    className="float-right"
                    onClick={() => {
                      if (statusShop) {
                        document.getElementById("imgIcon1").src =
                          "./images/ricon.png";
                        setStatusShop(false);
                      } else {
                        document.getElementById("imgIcon1").src =
                          "./images/downicon.png";
                        setStatusShop(true);
                      }
                    }}
                  ></img>
                </div>
              </div>

              {statusShop ? (
                <div className="brandHolder ml-5" id="brandHolder1">
                  <ul>
                    <li className="mt-1">Business Networks</li>
                    <li className="mt-1">Partnership</li>
                    <li className="mt-1">mentorship</li>
                    <li className="mt-1">Ecosytem</li>
                  </ul>
                </div>
              ) : null}

              <div className="box1 w-12/12 ml-5 border-b-2 mt-4">
                <div className="holder flex">
                  <div className="textHolder w-11/12">
                    <p className="font-bold">Policies</p>
                  </div>
                  <img
                    id="imgIcon2"
                    src="./images/ricon.png"
                    height={20}
                    width={20}
                    className="float-right"
                    onClick={() => {
                      if (statusPolicy) {
                        document.getElementById("imgIcon2").src =
                          "./images/ricon.png";
                        setStatusPolicy(false);
                      } else {
                        document.getElementById("imgIcon2").src =
                          "./images/downicon.png";
                        setStatusPolicy(true);
                      }
                    }}
                  ></img>
                </div>
              </div>

              {statusPolicy ? (
                <div className="brandHolder ml-5 mt-2" id="brandHolder2">
                  <ul>
                    <li className="mt-1">Privacy</li>
                    <li className="mt-1">Data Security</li>
                    <li className="mt-1">Rules for users</li>
                    <li className="mt-1">T&C</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </footer>
      )) ||
        (screen.width >= 1280 && screen.width < 1536 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-blue1 text-white flex justify-evenly mt-10">
              <div className="leftPart w-[100vmin] mt-14">
                <p className="ml-5 font-oxygen font-medium">
                  "Startify creates a synergistic ecosystem designed to connect
                  startups with venture capitalists, business coaches, and
                  finance leaders. Through AI-driven suggestions, the platform
                  optimizes deal flow, enhancing funding prospects for
                  entrepreneurs. Real-time chat functionality fosters seamless
                  communication, enabling dynamic networking and rapid
                  information exchange."{" "}
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
               text-white"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="endingDiv mt-7 ml-3">
                  <p className="">
                    Copyright| All Rights Reserved,Techhub Bharat
                  </p>
                </div>
              </div>

              <div className="leftPart w-[100vmin] ">
                <div className="pl-10 flex space-x-10 items-start mt-10 footerBox w-[100vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">Features</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Business Networks</li>
                      <li className="mt-1">Partnership</li>
                      <li className="mt-1">mentorship</li>
                      <li className="mt-1">Ecosytem</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Data Security</li>
                      <li className="mt-1">Rules for users</li>
                      <li className="mt-1">T&C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 1536 && screen.width < 1728 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 lg:h-96 bg-blue1 flex text-white mt-10">
              <div className="leftPart w-[95vmin]">
                <p className="ml-5 font-oxygen font-medium">
                  "Startify creates a synergistic ecosystem designed to connect
                  startups with venture capitalists, business coaches, and
                  finance leaders. Through AI-driven suggestions, the platform
                  optimizes deal flow, enhancing funding prospects for
                  entrepreneurs. Real-time chat functionality fosters seamless
                  communication, enabling dynamic networking and rapid
                  information exchange."{" "}
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
               text-white"
                  >
                    Subscribe
                  </button>
                </div>

                <div className="endingDiv mt-7 ml-3">
                  <p className="">
                    Copyright| All Rights Reserved,TechHubBharat
                  </p>
                </div>
              </div>

              <div className="leftPart  w-[115vmin]">
                <div className="flex justify-evenly items-start mt-10 footerBox w-[110vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Features</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Business Networks</li>
                      <li className="mt-1">Partnership</li>
                      <li className="mt-1">mentorship</li>
                      <li className="mt-1">Ecosytem</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Data Security</li>
                      <li className="mt-1">Rules for users</li>
                      <li className="mt-1">T&C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 1728 && screen.width < 1920 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-blue1 flex text-white mt-10">
              <div className="leftPart w-[75vmin]">
                <p className="ml-5 font-oxygen font-medium mt-10">
                  "Startify creates a synergistic ecosystem designed to connect
                  startups with venture capitalists, business coaches, and
                  finance leaders. Through AI-driven suggestions, the platform
                  optimizes deal flow, enhancing funding prospects for
                  entrepreneurs. Real-time chat functionality fosters seamless
                  communication, enabling dynamic networking and rapid
                  information exchange."{" "}
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
               text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="leftPart  w-[80vmin]">
                <div className="flex justify-evenly items-start mt-10 footerBox w-[79vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Features</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <ul className="text-lg font-poppins mt-2">
                        <li className="mt-1">Business Networks</li>
                        <li className="mt-1">Partnership</li>
                        <li className="mt-1">mentorship</li>
                        <li className="mt-1">Ecosytem</li>
                      </ul>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Data Security</li>
                      <li className="mt-1">Rules for users</li>
                      <li className="mt-1">T&C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 1920 && screen.width < 2048 && (
          <footer>
            <div className="flex-wrap footer-body-w-12/12 h-96  bg-blue1 flex text-white mt-10">
              <div className="leftPart w-[80vmin]">
                <p className="ml-5 font-oxygen font-medium">
                  "Startify creates a synergistic ecosystem designed to connect
                  startups with venture capitalists, business coaches, and
                  finance leaders. Through AI-driven suggestions, the platform
                  optimizes deal flow, enhancing funding prospects for
                  entrepreneurs. Real-time chat functionality fosters seamless
                  communication, enabling dynamic networking and rapid
                  information exchange."{" "}
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
               text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="leftPart  w-[97vmin]">
                <div className="flex justify-evenly items-start mt-10 footerBox w-[97vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Features</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <ul className="text-lg font-poppins mt-2">
                        <li className="mt-1">Business Networks</li>
                        <li className="mt-1">Partnership</li>
                        <li className="mt-1">mentorship</li>
                        <li className="mt-1">Ecosytem</li>
                      </ul>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Data Security</li>
                      <li className="mt-1">Rules for users</li>
                      <li className="mt-1">T&C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )) ||
        (screen.width >= 2048 && (
          <footer className="">
            <div className="flex-wrap footer-body-w-12/12 h-96 bg-blue1 flex text-white mt-10">
              <div className="leftPart w-[85vmin]">
                <p className="ml-5 font-oxygen font-medium mt-16">
                  "Startify creates a synergistic ecosystem designed to connect
                  startups with venture capitalists, business coaches, and
                  finance leaders. Through AI-driven suggestions, the platform
                  optimizes deal flow, enhancing funding prospects for
                  entrepreneurs. Real-time chat functionality fosters seamless
                  communication, enabling dynamic networking and rapid
                  information exchange."{" "}
                </p>
                <div className="socialIcons mt-5 ml-3 flex space-x-5">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="subsPanel flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="ml-3 mt-4 w-9/12 p-2"
                    placeholder="Subscribe to emailer"
                  />
                  <button
                    type="button"
                    className="bg-brown w-24 h-12 mt-[17px]
               text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="leftPart  w-[90vmin] flex justify-center">
                <div className="pl-10 flex space-x-10 items-start mt-10 footerBox w-[70vmin]  h-5/6">
                  <div className="box">
                    <h5 className="text-xl font-roboto font-bold">
                      Brand Story
                    </h5>
                    <ul className="text-lg font-poppins mt-3">
                      <li className="mt-1">About us</li>
                      <li className="mt-1">Contact Us</li>
                      <li className="mt-1">Blogs</li>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Features</h5>
                    <ul className="text-lg font-poppins mt-2">
                      <ul className="text-lg font-poppins mt-2">
                        <li className="mt-1">Business Networks</li>
                        <li className="mt-1">Partnership</li>
                        <li className="mt-1">mentorship</li>
                        <li className="mt-1">Ecosytem</li>
                      </ul>
                    </ul>
                  </div>
                  <div className="box">
                    <h5 className="text-2xl font-roboto font-bold">Policies</h5>

                    <ul className="text-lg font-poppins mt-2">
                      <li className="mt-1">Privacy</li>
                      <li className="mt-1">Data Security</li>
                      <li className="mt-1">Rules for users</li>
                      <li className="mt-1">T&C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        ))}
    </>
  );
};
export default Footer1;
