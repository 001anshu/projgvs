
import React from 'react'
//this is experience card used in experience
const ExpeCard = ({exp}) => {
  return (
    <div className='p-2 h-[500px]  max-w-[350px] max-h-[550px] rounded-xl  m-6' style={{
      border:'1px solid white '
    }}>
      <div className='text-2xl font-semibold p-2  text-center' style={{
        color:'yellow'
      }}>{exp.title}</div>
      <div className='flex justify-center'><img
        src={exp.src}
        alt={exp.alt}
        className='max-h-[400px] '
        />
      </div>
      <div className='text-center
      ' >
        {exp.disc}
      </div>
    </div>
  )
}

export default ExpeCard;