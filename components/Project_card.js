import React from "react";

const Project_card = ({ props }) => {
  return (
    <div>
      {props.switch === 1 ? (
        <div
          className="md:flex md:justify-center md:items-center p-4 bg-slate-100 m-4 md:mx-44 rounded-lg shadow-lg shadow-indigo-300 relative bg-cover bg-center "
          style={{ backgroundImage: `url(${props.img.src})` }}
        >
          <div
            className="md:w-2/3  text-white p-2  rounded-lg"
            style={{
              backdropFilter: "blur(1px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="text-4xl m-6 text-orange-400 lg:m-8">
              {props.header}
            </h1>
            <p className="text-sm md:text-md m-4 lg:m-10">{props.discription}</p>
            <button className="bg-indigo-500 p-4 m-4 text-white">
              KNOW MORE →{" "}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="md:flex md:justify-center md:items-center p-4 bg-slate-100 m-4 md:mx-44 my-10 rounded-lg shadow-lg shadow-indigo-300 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${props.img.src})` }}
        >
          <div
            className="md:w-2/3  text-white p-4 rounded-lg"
            style={{
              backdropFilter: "blur(1px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="text-4xl m-6 text-orange-400 lg:m-8">
              {props.header}
            </h1>
            <p className="text-sm md:text-md m-4 lg:m-10">{props.discription}</p>
            <button className="bg-indigo-500 p-4 m-4 text-white">
              KNOW MORE →{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project_card;
