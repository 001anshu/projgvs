import React from "react";
import Link from 'next/link';
const Information=({info})=>{
  return(
    <div className="h-full w-full bg-gradient-to-r from-indigo-200">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-300 text-white font-semibold text-center  text-2xl p-2">
        Information
      </div>
      <div className="bg-gradient-to-r from-indigo-200">
      
      <ul className="  text-xl font-semibold text-black m-2 p-2">
        # Chitrakut Camp Registration <Link href={"/yatra"}> <span className="text-blue-500 underline"> click here</span>  </Link>
        
        </ul>
        <ul className="  text-xl font-semibold text-black m-2 p-2">
        # Rath Yatra Registration<Link href={"/construction"}> <span className="text-blue-500 underline"> click here</span>  </Link>
        
        </ul>
        
      </div>

    </div>
  )
}
export default Information;