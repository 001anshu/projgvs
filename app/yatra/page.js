// app/camp/page.js

import Chitrakut from "@/camp-components/Chitrakut";
import Navbar from "@/camp-components/Navbar";
import About from "@/camp-components/About";
import React from "react";
import Date from "@/camp-components/Date";
import Experience from "@/camp-components/Experience";
import Gallary from "@/camp-components/Gallary";
import Accomodation from "@/camp-components/Accomodation";
import Eligibility from "@/camp-components/Eligibility";
import Contact from "@/camp-components/Contact";

const Camp = () => {
  return (
    <div >
      <Navbar/>
      <Chitrakut />
      <About/>
      <Date/>
      <Experience/>
      <Gallary/>
      <Accomodation/>
      <Eligibility/>
      <Contact/>

    </div>
  );
};

export default Camp;
