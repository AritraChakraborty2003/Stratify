import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import "./services.css";
const DashBoard = () => {
  const data = [
    {
      image: "./images/cmap.jpg",
      name: "Codemap",
    },
    {
      image: "./images/spaceY.png",
      name: "Space4U",
    },
    {
      image: "./images/electronic.webp",
      name: "Electronics Hub",
    },
  ];
  const data2 = [
    {
      image: "./images/Anish.png",
      name: "Anish Gupta",
      desig: "Backend Developer",
    },
    {
      image: "./images/Abhishek.png",
      name: "Abhishek Kr. Pandey",
      desig: "IOT Expert",
    },
    {
      image: "./images/Tushar.png",
      name: "Tushar Solanki",
      desig: "Fullstack Developer",
    },
  ];
  const data1 = [
    {
      image: "./images/space1.jpg",
      name: "Space4U",
    },
    {
      image: "./images/electronic India.png",
      name: "ModernElectronics",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {(localStorage.getItem("admin") == "#12356" && (
        <>
          <Header1 />
          <button
            className="bg-blue1 text-white p-2 mt-3 ml-3"
            onClick={() => {
              navigate("/login");
              localStorage.removeItem("admin");
            }}
          >
            Logout
          </button>
          <div className="float-right flex h-17 w-20 mt-3 mr-4">
            <img
              src="./images/feed icon.png"
              className="max-h-full max-w-full mr-5"
            ></img>
            <img
              src="./images/chaticon.png"
              className="max-h-full max-w-full"
            ></img>
          </div>
          <div className="mainArea h-100vw flex flex flex-col justify-center items-center">
            <div className="imgHolder h-32  w-screen flex justify-center">
              <img src="./images/picImage.jpeg"></img>
            </div>
            <p className="text-7xl font-bold overflow-y-hidden">
              Welcome, {location.state.name}
            </p>
          </div>
          <div className="w-[100vw] flex justify-center mt-5">
            <div className="bg-white border-solid border-b-2 w-[80vmin] ">
              <input
                className="text-gray  roounded-2xl w-[80vmin] "
                placeholder="  Write Something to add your post..."
              ></input>
            </div>
          </div>
          <div className="flex justify-center w-screen">
            <button className="bg-blue1 text-white p-2 mt-3">Add Media</button>
            <button className="bg-blue text-white p-2 mt-3 ml-5">
              Post Idea
            </button>
          </div>

          <div className="dataSection">
            <ul>
              <li className="mt-5 text-4xl font-bold ml-3">
                Startups you follow:
                <div className="heading flex flex-wrap justify-center gap-x-3 mt-5 w-12/12 gap-5 lg:gap-0 p-5 ">
                  {data.map((val) => (
                    <div
                      className="w-[247px] h-[290px] pt-5 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 mt-10 ml-7"
                    >
                      <div className="w-12/12 flex justify-center">
                        <img
                          className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                          src={val.image}
                          alt=""
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="p-5">
                        <a href="#">
                          <p className="mb-2 text-center text-base font-medium tracking-tight text-gray-900 dark:text-white ont-poppins">
                            {val.name}
                          </p>
                        </a>
                      </div>

                      <div className="btnHolder w-12/12 flex justify-center">
                        <button className="bg-blue text-white text-lg p-1 w-24">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
              <li className="mt-5 text-4xl font-bold ml-3">
                Suggested Companies:
                <div className="heading flex flex-wrap justify-center gap-x-3 mt-5 w-12/12 gap-5 lg:gap-0 p-5 ">
                  {data1.map((val) => (
                    <div
                      className="w-[247px] h-[290px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-7"
                    >
                      <div className="w-12/12 flex justify-center">
                        <img
                          className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                          src={val.image}
                          alt=""
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="p-5">
                        <a href="#">
                          <p className="mb-2 text-center text-base font-medium tracking-tight text-gray-900 dark:text-white ont-poppins">
                            {val.name}
                          </p>
                        </a>
                      </div>

                      <div className="btnHolder w-12/12 flex justify-center">
                        <button className="bg-blue1 text-white text-lg p-1 w-24">
                          Follow
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
              <li className="mt-5 text-4xl font-bold ml-3">
                Similar People:
                <div className="heading flex flex-wrap justify-center gap-x-3 mt-5 w-12/12 gap-5 lg:gap-0 p-5 ">
                  {data2.map((val) => (
                    <div
                      className="w-[247px] h-[290px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-7"
                    >
                      <div className="w-12/12 flex justify-center">
                        <img
                          className="rounded-t-lg border-solid border-grey-2 shadow-xl"
                          src={val.image}
                          alt=""
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="mt-1">
                        <a href="#">
                          <p className="mb-2 text-center text-base font-medium tracking-tight text-gray-900 dark:text-white ont-poppins">
                            {val.name}
                          </p>
                        </a>
                      </div>
                      <div className="mt-1">
                        <a href="#">
                          <p className="mb-2 text-center text-base font-medium tracking-tight text-gray-900 dark:text-white ont-poppins">
                            {val.desig}
                          </p>
                        </a>
                      </div>

                      <div className="btnHolder w-12/12 flex justify-center">
                        <button className="bg-blue1 text-white text-lg p-1 w-24">
                          Follow
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
          <p>Pre Footer Logic</p>
          <Footer1 />
        </>
      )) || <Navigate to="/login" />}
    </>
  );
};
export default DashBoard;
