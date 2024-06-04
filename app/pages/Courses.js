import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
  const data=[
   
    {
      img:"br13.jpg",
      name:"Yatra",
      desc:"",
    }, {
      img:"br6.jpg",
      name:"Prasad",
      desc:"",
    }, {
      img:"br8.jpg",
      name:"Counseling",
      desc:"",
    },
  ]
  //passing props with all the data ke remember to do it
  return (
    <div className=' '>
    <h1 className='text-5xl font-semibold flex justify-center'>What we offer</h1>
    <div id='courses' className='md:flex p-4   md:justify-center'>
      
      {
        data.map((d,i)=>(
          <CourseCard key={i} data={d}/>
        ))
      }
    </div>
    </div>
  )
}

export default Courses