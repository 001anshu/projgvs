
import React from 'react'
//this is experience card used in experience
const ExpeCard = ({exp}) => {
  return (
    <div className='p-2 h-full max-w-[350px] max-h-[550px] rounded-xl  m-6' style={{
      border:'1px solid white '
    }}>
      <div className='text-2xl '>{exp.title}</div>
      <div><img
        src={exp.src}
        alt={exp.alt}
        className='max-h-[400px]'
        />
      </div>
      <div >
        {exp.disc}
      </div>
    </div>
  )
}

export default ExpeCard;