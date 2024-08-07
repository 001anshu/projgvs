// components/Home.js
"use client";

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div
      className="md:flex  p-4 mx-auto my-6 max-w-[1200px] md:justify-between items-center shadow-2xl shadow-indigo-500 rounded-xl"
      id="home"
    >
      <div className="md:hidden flex h-auto relative overflow-hidden">
        <img
          className=" m-4  md:flex h-1/2 relative overflow-hidden md:w-1/2 rounded-lg"
          alt="img"
          src="https://yt3.ggpht.com/G-cytOeQglvEP7EdU2iKHh4Cx6ljGgeGRGsMt1nBtgCch0HKAub6-bkUegKOYc0PI1OS-CPKZ2aBlYs=s1080-c-fcrop64=1,00001b85ffffe472-rw-nd-v1"
        />
      </div>
      <div className="mb-4 md:w-1/2">
        <h1 className="text-4xl m-6 lg:m-8">
          Society for Nature, Humanity, and Spirituality
        </h1>
        <p className=" font-bold m-8">
          "People need Krishna consciousness to be happy, and the whole world is
          in need of this consciousness." — Srila Prabhupada
        </p>
        <p className="text-md m-4 lg:m-10">
          The Society for Nature and Humanity is a dedicated organization
          inspired by Vedic India and the teachings of the Bhagavad Gita,
          committed to fostering a harmonious relationship between individuals,
          communities, and the environment. Our mission encompasses holistic
          service through initiatives like goshala (cow sanctuary), gurukuls
          (traditional schools), and youth programs that guide and educate based
          on spiritual and ethical values. We conduct seminars and workshops on
          the Bhagavad Gita to impart wisdom and promote sustainable living.
          Engaging in environmental initiatives, our society aims to create a
          balanced ecosystem where human potential is realized in harmony with
          nature, providing a sanctuary of learning, growth, and community
          service.
        </p>
        {/* <Link href="/construction">
                  <button className="bg-indigo-500 p-4 m-4 text-white">ENROLL NOW →</button>

        </Link> */}
      </div>

      <div className="md:flex hidden h-auto relative overflow-hidden md:w-1/2">
        <img
          className="m-4 max-h-[500px] rounded-lg md:w-fit"
          alt="img"
          src="https://yt3.ggpht.com/G-cytOeQglvEP7EdU2iKHh4Cx6ljGgeGRGsMt1nBtgCch0HKAub6-bkUegKOYc0PI1OS-CPKZ2aBlYs=s1080-c-fcrop64=1,00001b85ffffe472-rw-nd-v1"
        />
      </div>
    </div>
  );
};

export default Home;
