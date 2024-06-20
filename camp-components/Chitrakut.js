import Image from 'next/image'
import React from 'react'

const Chitrakut = () => {
  return (
    <div>
      <div>
        
        <Image
        className='  w-full'
        src='/chitrakut01.png'
        alt='chitrakut img'
        placeholder="blur"
        blurDataURL="20"
        width={1700}
        height='600'
        />
        
      </div>
    </div>
  )
}

export default Chitrakut