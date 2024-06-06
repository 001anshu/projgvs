// components/Home.js
"use client"

import React from "react";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="lg:flex lg:flex-row p-4 sm:flex sm:flex-col  md:mx-32 m-4 rounded-xl shadow-xl shadow-indigo-400 md:m-10 " id="home">
      <div className="mb-4 lg:w-1/2">
        <p className=" font-bold m-8">"People need Krishna consciousness to be happy, and the whole world is in need of this consciousness." — Srila Prabhupada</p>
        <h1 className="text-4xl m-6 lg:m-8">Society for Nature, Humanity, and Spirituality</h1>
        <p className="text-md m-4 lg:m-10">
          The Society for Nature and Humanity is a dedicated organization inspired by Vedic India and the teachings of the Bhagavad Gita, committed to fostering a harmonious relationship between individuals, communities, and the environment. Our mission encompasses holistic service through initiatives like goshala (cow sanctuary), gurukuls (traditional schools), and youth programs that guide and educate based on spiritual and ethical values. We conduct seminars and workshops on the Bhagavad Gita to impart wisdom and promote sustainable living. Engaging in environmental initiatives, our society aims to create a balanced ecosystem where human potential is realized in harmony with nature, providing a sanctuary of learning, growth, and community service.
        </p>
        <Link href="/camp">
                  <button className="bg-indigo-500 p-4 m-4 text-white">ENROLL NOW →</button>

        </Link>
      </div>

      <div className="md:flex h-auto relative overflow-hidden">
        <img className="m-4 max-h-[500px] rounded-lg animate-float" alt="img" src="/yatra05.jpg" />
      </div>
    </div>
  );
};

export default Home;
