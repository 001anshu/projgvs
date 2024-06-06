import React from 'react'

const Navbarbtn = ({name,gotoId}) => {
  return (

    <button className=' text-md cursor-pointer  p-2 m-4 md:w-24 lg:w-full md:text-xl hover:scale-x-110  w-28    hover:text-slate-400  text-center text-black rounded-md' onClick={gotoId} >{name}</button>
  )
}

export default Navbarbtn