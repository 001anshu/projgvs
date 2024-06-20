import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div
      id="features"
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-sky-500 rounded-xl text-xl text-white"
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <Link href={"/construction"}>
          <button
            className="lg:text-2xl text-center bg_black rounded-lg hover_yellow   p-2 change"
            style={{
              padding: "20px",
              fontSize: "1.5rem",
              marginTop: "60px",
              width: "250px",
              margin: "20px",
            }}
          >
            Database Entry
          </button>
        </Link>
        <Link href="http://gaurangavedic.org.in/yatra" passHref>
          <button
            className="lg:text-2xl text-center bg_black rounded-lg hover_yellow p-2 change"
            style={{
              padding: "20px",
              fontSize: "1.5rem",
              marginTop: "60px",
              width: "250px",
              margin: "20px",
            }}
          >
            Registration
          </button>
        </Link>
        <Link href={"/construction"}>
          <button
            className="lg:text-2xl text-center bg_black rounded-lg hover_yellow p-2 change"
            style={{
              padding: "20px",
              fontSize: "1.5rem",
              marginTop: "60px",
              width: "250px",
              margin: "20px",
            }}
          >
            Accommodation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
