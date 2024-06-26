import React from "react";
import Features from "./Features";

const About = () => {
  return (
    <div
      id="about"
      className="md:flex md:flex-col   p-4 mx-auto my-6  md:justify-center md:items-center  "
      
    >
      <div
        className="mb-4 flex flex-col  justify-center items-center md:w-3/4 rounded-xl "
        style={{
          border: "solid rgb(20,163,244) 2px",
          backgroundColor: "rgb(212,228,248)",
        }}
      >
        <h1 className="text-5xl m-4 text-orange-400 lg:m-6 text-center">
          About Yatra
        </h1>
        <p className="font-bold m-4 text-center">
          "We are not human beings having a spiritual experience; we are
          spiritual beings having a human experience." — Srila Prabhupada
        </p>
        <div className="md:text-md text-sm m-4 lg:m-6 text-center" style={{}}>
          <p className="">
            Over the years, devotees have visited Vrindavan, Govardhan, Ayodhya,
            Jaipur, Sri Rangam, Tirupati, Mayapur, Dwarka, Udupi, Rameshwaram
            and many other places.The number of devotees participating in these
            yatras have increased.
          </p>

          <p>
            Family Camps give devotees an opportunity to perform the devotional
            activity of shravanam (hearing) of hari-katha. Shravanam done in the
            association of devotees, in a holy dhama, is said to award one
            immense devotional merits.
          </p>

          <p>
            With thousands of devotees participating, these yatras give devotees
            a wonderful opportunity to hear hari-katha and chant the holy names
            with complete absorption in an environment free from one’s regular
            household and professional anxieties.
          </p>

        </div>
        {/* <button className="bg-indigo-500 md:w-1/3 rounded-lg    p-4 m-4 text-white">
        KNOW MORE →{" "}
      </button> */}
      </div>
      {/* <Features/> */}
    </div>
  );
};

export default About;
