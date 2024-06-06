// app/camp/page.js

import Chitrakut from "@/camp-components/Chitrakut";
import Navbar from "@/camp-components/Navbar";
import About from "@/components/About";
import React from "react";

const Camp = () => {
  return (
    <div >
      <Navbar/>
      <Chitrakut />
      {/* <About/> */}

    </div>
  );
};

export default Camp;
