import Image from 'next/image'
import React from 'react'

const Chitrakut = () => {
  return (
    <div>
      <div className='p-4 rounded-lg items-center flex justify-center'>
        <img
         src= 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaLEsbrNNgbEkC30Fuwtn663suWWpntmNqx3rilA5hfmnYOkh33DsrVYSqevcTsDy7l5pKvoswnc89PJNI2Qi1lOcyWJU-AqwE=w1160-h878-rw-v1'
        
         className='md:w-3/4 rounded-lg '
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