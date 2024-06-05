import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import About from "./About";
import Information from "./Information";

const Display = () => {
  const info = [
    { text: "Chitrakut Camp" },
    { text: "Ayodhya Camp" },
    { text: "HG KLP class from 9am" },
  
  ];
  
  const images = [
    {
      name: "test2",
      src: "Br02.jpg",
    },
    {
      name: "test",
      src: "Br4.jpg",
    },
    {
      name: "test",
      src: "Br10.jpg",
    },
    {
      name: "test2",
      src: "Br11.jpg",
    },
  ];
  return (
    <div className="md:h-[580px] h-full p-8 m-4 md:flex md:justify-center md:items-center ">
      <div className="md:w-1/3 md:m-10 mb-4 p-2 w-full h-full overflow-auto max-h-[400px] custom-scrollbar ">
        <Information info={info}/>
      </div>
      <div className="md:w-1/2 w-full h-full overflow-hidden relative">
        <EmblaCarousel images={images} />
        <button className="bg-blue-300 opacity-85 md:p-2 p-1 md:w-1/4 md:h-16 w-1/2 md:ml-20 rounded-md font-semibold text-2xl text-white absolute bottom-0 left-0 m-4">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Display;
