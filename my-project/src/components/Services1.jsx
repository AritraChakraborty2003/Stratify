const Services = () => {
  const data = [
    {
      image: "./images/networking.avif",
      name: "Business Networking",
      caption: "Our Platform streamlines networking to grow and scale startups",
    },
    {
      image: "./images/mentr icon.webp",
      name: "Mentorship",
      caption:
        "The users of our platfrom can connect business leaders for mentorship",
    },
    {
      image: "./images/p1.png",
      name: "Business Partnership",
      caption: "One stop platform for business partnership and collaboration",
    },
    {
      image: "./images/buyandsellbusiness.png",
      name: "Buy/Sell Business",
      caption:
        "Our platform help people assist in accuisitions and mergers of the buy/sell of their business",
    },
  ];
  return (
    <>
      <div className="heading flex justify-center mt-5 w-12/12 ">
        <p className="text-7xl font-bold overflow-y-hidden">Features</p>
      </div>
      <div className="heading flex flex-wrap justify-evenly mt-5 w-12/12 gap-5 lg:gap-0 ">
        {data.map((val) => (
          <div
            className="w-[247px] h-[290px] pt-3 bg-white  border-solid border-gray-500 rounded-lg shadow-2xl overflow-hidden transform transition duration-300 
                                hover:scale-x-110 ml-6"
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
                <p className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {val.name}
                </p>
              </a>
              <p className="mb-3 font-semibold text-sm text-brown dark:text-gray-400 font-poppins">
                {val.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Services;
