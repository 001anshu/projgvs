import React from "react";
import Link from 'next/link';
const Information=({info})=>{
  return(
    <div className="h-full w-full bg-gradient-to-r from-indigo-200 rounded-lg">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-300 rounded-lg text-white font-semibold text-center  text-2xl p-2">
        Information
      </div>
      <div className="bg-gradient-to-r from-indigo-200">
      
      <ul className="  text-xl font-semibold text-black m-2 p-2">
        # Chitrakut Camp Registration <Link href={"/yatra"}> <span className="text-blue-500 underline"> click here</span>  </Link>
        
        </ul>
        <ul className="  text-xl font-semibold text-black m-2 p-2">
        # Rath Yatra in Chouparan
        
        </ul>
        
      </div>

    </div>
  )
}
export default Information;