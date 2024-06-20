import Image from 'next/image'
import React from 'react'

const Chitrakut = () => {
  return (
    <div>
      <div>
        <div className='bg-blue-300 text-center text-3xl font-serif  ' style={{
          backgroundColor: 'rgb(20,163,244)',
          color:'white',
          fontFamily:'-moz-initial'
        }}>
         <h1 className=' ' style={{color:'white'}}>Gauranga Vedic Society</h1>
         <h1 className=' '>Present`s</h1>
         <h1 className=' '>Chitrakut Dham Yatra</h1>
        </div>
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