const Banner1 = () => {
  return (
    <>
      <div className=" bg-blue1 flex flex-wrap justify-center">
        <div className="md:h-96 w-[110vmin] xl:w-[75vmin] border-white flex justify-center mt-16">
          <div className="imgBox h-72 w-[90vmin] flex justify-center">
            <img
              src="./images/startup.png"
              className="max-w-full max-h-full contain"
            ></img>
          </div>
        </div>
        <div className="md:h-96 w-[110vmin] xl:w-[75vmin]  border-white lg:mt-16 flex justify-center lg:flex-start">
          <div className="imgBox h-72 w-[90vmin] flex flex-start items-center">
            <div className="flex flex-col justify-center">
              <p className="text-8xl text-white font-bold overflow-y-hidden">
                Startify
              </p>
              <p className="text-lg text-white font-normal mt-3">
                (Connecting entrepreneurship with innovators)
              </p>
              <p className="text-xl text-white font-bold mt-3">
                <button className="bg-black text-white p-3 mt-2 rounded-x hover:bg-red">
                  Get Started
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner1;
