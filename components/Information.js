import React from "react";
import Link from 'next/link';
const Information=({info})=>{
  return(
    <div className="h-full w-full bg-gradient-to-r from-indigo-200">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-300 text-white font-semibold text-center  text-2xl p-2">
        Information
      </div>
      <div className="bg-gradient-to-r from-indigo-200">
      
       {
        info.map((i,ind)=>(
          <Link href={i.link} key={ind}>
            
          <ul className=" focus:bg-blue-500 text-xl font-semibold text-red-600 m-2 p-2" >
            {"->"} {i.text}
         
          </ul>
          </Link>
        
        ))
       }
        
      </div>

    </div>
  )
}
export default Information;