import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'

const CourseCard = ({data}) => {
  return (
    <div >
      
      <div className='border w-[340px]  bg-indigo-50 rounded-lg p-2 m-4 '>
        <div className='md:w-[340px] md:h-[400px]'><TestimonialCarousel images={data.img}/></div>
       
        <h2 className='flex justify-center text-2xl'>{data.name}</h2>
        <p className='font-mono'>{data.desc}</p>
        <div className="flex justify-center items-center">
        <button className='bg-indigo-500 w-1/3 m-2 flex justify-center items-center font-mono rounded-md text-xl text-white p-2'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard