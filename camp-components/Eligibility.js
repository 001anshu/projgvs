import React from "react";

const Eligibility = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(26,37,46)",
        color: "white",
      }}
      id="eligibility"
    >
      <div>
        <div>
          <p
            className="text-center  "
            style={{
              fontSize: "2rem",
              padding: "20px",
            }}
          >
            ELIGIBILITY
          </p>
        </div>
        <div
          className="md:flex"
          style={{
            
          }}
        >
          <div
            className="md:w-1/2"
            style={{
              padding: "20px",
            }}
          >
            <img className="rounded-xl" src="vrindavan.jpg" />
          </div>
          <div
            className="text-xl md:w-1/2"
            style={{
              
              backgroundColor: "rgb(26,37,46)",
              padding:"20px"
            }}
          >
            <p
            style={{
              padding:"10px"
            }}
            >
              <span className="font-semibold">4 Regulations:</span> Applicant should follow the four regulative
              principles including refrain from tea & coffee from Gaur Purnima
              (25th March 2024)
            </p>
            <p style={{
              padding:"10px"
            }}>
              <span className="font-semibold">Chanting 16 Rounds:</span> Applicant should be chanting minimum 16 rounds
              of the Hare Krishna Mahamantra daily
            </p>
            <p style={{
              padding:"10px"
            }}>
              <span className="font-semibold">Dress Code:</span> Applicant should follow the prescribed dress code:
            </p>
            <p style={{
              paddingLeft:"10px"
            }} >For Men: Dhoti-Kurta</p>
            <p style={{
              paddingLeft:"10px"
            }}>For Women: Sari</p>
            <p style={{
              padding:"10px"
              
            }}>
              <span className="font-semibold">Up-to-date Information:</span> Applicant’s personal information is
              up-to-date in the database, mainly: Photograph | Mobile number (If
              any) Email Id (If any) | Age & gender
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
