// app/camp/page.js

import Chitrakut from "@/camp-components/Chitrakut";
import Navbar from "@/camp-components/Navbar";
import About from "@/camp-components/About";
import React from "react";
import Date from "@/camp-components/Date";
import Experience from "@/camp-components/Experience";

const Camp = () => {
  return (
    <div >
      <Navbar/>
      <Chitrakut />
      <About/>
      <Date/>
      <Experience/>

    </div>
  );
};

export default Camp;
