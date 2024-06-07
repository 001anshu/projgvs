import React from "react";

const Accomodation = () => {
  return (
    <div
      className=""
      id="accomodation"
      style={{ backgroundColor: "rgb(27,37,46)", color: "white" }}
    >
      <div
        className="text-xl"
        style={{
          border: "1px solid rgb(27,37,46) ",
          padding: "10px",
        }}
      >
        <div
            className="text-center   font-semibold"
            style={{
              fontSize: "3rem",
              padding:"20px"
              
            }}
          >
            Accomodation
          </div>
        <div
          className=""
          style={{
            border: "1px solid white ",
            margin:"40px",
            padding:"20px",
            borderRadius: "50px",
          }}
        >
          
          <div>
            <p
              style={{
                padding: "10px",
              }}
            >
              • It is MANDATORY for every yatra participant to book his or her
              accommodation through the yatra committee only. Yatra participants
              must not book their accommodation directly in any hotel or
              guesthouse in Mayapur. However, if you have your own residential
              facility at Mayapur, you are exempted from above rule.
            </p>
            <p
              style={{
                padding: "10px",
              }}
            >
              • Families wanting to stay together, should ensure that profiles
              of all family members are connected in the database, before online
              accommodations begin.
            </p>
            <p
              style={{
                padding: "10px",
              }}
            >
              • Devotees will need to visit www.rgmdatabase.com and choose the
              room where they would like to stay and with which other devotees.
              Once one of the available rooms is selected, payment has to be
              made online immediately for the room.
            </p>
            <p
              style={{
                padding: "10px",
              }}
            >
              • For a group of devotees wanting to stay together, one of the
              group members can book for the whole group, provided he/she has
              access to profiles of all other group members. Contact Yatra
              Helpline (info@rgyatra.com) for any help in this regard.
            </p>
            <p
              style={{
                padding: "10px",
              }}
            >
              • For those devotees who are not net savvy, a counter will be
              available at Sri Sri Radha Gopinath Mandir at a stipulated time,
              where a volunteer will register and book accommodation on the
              devotee’s behalf (using the respective devotee’s Login Id and
              Password). Only cash will be accepted at this counter.
            </p>
          </div>
          <div
            className=" md:w-1/3  rounded-xl "
            style={{
              backgroundColor: "rgb(255,145,1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <button
              className="bg-yellow-200 text-center p-2 m-2 flex justify-center  items-center"
              style={{
                borderRadius: "30px",
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
