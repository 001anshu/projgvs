import { monk_img, temple_img } from "@/public/constant";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const About = () => {
  return (
    <div
      id="about"
      className="md:flex p-4 mx-auto my-6 max-w-[1200px] justify-center items-center shadow-2xl shadow-indigo-500 rounded-xl"
    >
      <div className=" m-4  md:flex h-1/2 relative overflow-hidden md:w-1/2">
        <img className="md:w-full  rounded-xl" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbh4A-QtC1iFuw39NKo-2G-gbHEbhtiAK2dqTcX_zAOqQBYvoH8mcQVLnxg4LLFI5Cp6t6wfO5hVh7A1zIiXDasrGaPSsg6OWI=w1160-h878-rw-v1"alt="prabhupada" />
      </div>
      <div className="mb-4 md:w-1/2">
        
        <h1 className="text-4xl m-6 lg:m-8 ">
          Experience An Amazing Indian Vedic Culture Journey
        </h1>
        <p className="font-bold m-4">
          "Our duty is to spread Krishna consciousness and alleviate the
          suffering of others in this age of ignorance." — Srila Prabhupada
        </p>
        <p className="text-md m-4 lg:m-6">
          The Society for Nature, Humanity, and Spirituality also emphasizes the
          importance of community engagement and collective well-being. Through
          our various outreach programs, we offer free health camps, distribute
          organic produce, and provide spiritual counseling to those in need. By
          fostering a sense of unity and compassion, we aim to build a
          supportive network where individuals can thrive both physically and
          spiritually. Our society stands as a beacon of hope, nurturing the
          mind, body, and soul in harmony with the teachings of the Bhagavad
          Gita, and working tirelessly to create a sustainable and enlightened
          world for all.
        </p>
        {/* <button className="bg-indigo-500 p-4 m-4 text-white">
          KNOW MORE →{" "}
        </button> */}
      </div>
    </div>
  );
};

export default About;
