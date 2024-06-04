import React from 'react'

const CourseCard = ({data}) => {
  return (
    <div >
      
      <div className='border bg-indigo-50 rounded-lg m-4 '>
        <img className='md:w-[500px] md:h-[400px]'
        src={data.img}
        alt='test'
        />
        <h2 className='flex justify-center text-2xl'>{data.name}</h2>
        <p className='font-mono'>Description</p>
        <div className="flex justify-center items-center">
        <button className='bg-indigo-500 w-1/3 m-2 flex justify-center items-center font-mono rounded-md text-xl text-white p-2'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard