import React from "react";
const Information=({info})=>{
  return(
    <div className="h-full w-full bg-gradient-to-r from-indigo-200">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-300 text-white font-semibold text-center  text-2xl p-2">
        Information
      </div>
      <div className="bg-gradient-to-r from-indigo-200">
      
       {
        info.map((i,ind)=>(
          <ul className="text-xl font-semibold text-red-600 m-2 p-2" key={ind}>
            {"->"} {i.text}
            
          </ul>
        ))
       }
        
      </div>

    </div>
  )
}
export default Information;