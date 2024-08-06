import Image from 'next/image'
import React from 'react'

const Chitrakut = () => {
  return (
    <div>
      <div className='rounded-lg items-center flex justify-center'>
        <img
         src= 'https://yt3.ggpht.com/vCCdYmvQH5WDDebiJ0RQr_yms-kjO9nz2XIz8676REPeCmWNYdidGyr5EQUMs-vGYkITpHJUQBeP2g=s1600-rw-nd-v1'
        
         className='w-full rounded-lg '
         />
        {/* <Image
        className='  w-full'
        src='/chitrakut01.png'
        alt='chitrakut img'
        placeholder="blur"
        blurDataURL="20"
        width={1700}
        height='600'
        /> */}
        
      </div>
    </div>
  )
}

export default Chitrakut