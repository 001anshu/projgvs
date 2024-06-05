import React from "react";

const Project_card = ({ props }) => {
  // console.log(props)
  return (
    <div>
      {props.switch == 1 ? (
        <>
          <div
            className="md:flex md:justify-center md:items-center p-4 bg-slate-100 m-4 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${props.img.src})` }}
          >
            <div
              className="md:w-1/2 text-white p-4 rounded-lg"
              style={{
                backdropFilter: "blur(1px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1 className="text-4xl m-6 text-orange-400 lg:m-8">
                {props.header}
              </h1>
              <p className="text-lg m-4 lg:m-10">{props.discription}</p>
              <button className="bg-indigo-500 p-4 m-4 text-white">
                KNOW MORE →{" "}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
           <div
            className="md:flex md:justify-center md:items-center p-4 bg-slate-100 m-4 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${props.img.src})` }}
          >
            <div
              className="md:w-1/2 text-white p-4 rounded-lg"
              style={{
                backdropFilter: "blur(1px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h1 className="text-4xl m-6 text-orange-400 lg:m-8">
                {props.header}
              </h1>
              <p className="text-lg m-4 lg:m-10">{props.discription}</p>
              <button className="bg-indigo-500 p-4 m-4 text-white">
                KNOW MORE →{" "}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project_card;
