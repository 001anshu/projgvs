import React from "react";
const Information=({info})=>{
  return(
    <div className="h-full w-full bg-indigo-50 ">
      <div className="bg-indigo-400 text-white   text-2xl p-2">
        Information
      </div>
      <div className="bg-indigo-50">
      
       {
        info.map((i,ind)=>(
          <ul className="text-xl bg-indigo-100 m-2 p-2" key={ind}>
            {i.text}
          </ul>
        ))
       }
        
      </div>

    </div>
  )
}
export default Information;