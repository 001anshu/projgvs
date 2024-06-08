import React from 'react'

const About = () => {
  return (
    <div
    id="about"
    className="md:flex p-4 mx-auto my-6  md:justify-center md:items-center shadow-2xl shadow-indigo-500 rounded-xl  " 
  >
    
    <div className="mb-4 flex flex-col justify-center items-center max-w-[1200px] rounded-xl "style={{border:'solid rgb(20,163,244) 2px',
          backgroundColor:'rgb(212,228,248)'}}>
      <p className="font-bold m-4 text-center">
        "We are not human beings having a spiritual experience; we are spiritual beings having a human experience." — Srila Prabhupada
      </p>
      <h1 className="text-5xl m-4 text-orange-400 lg:m-6 text-center">
        About Yatra
      </h1>
      <div className="md:text-xl text-md m-4 lg:m-6 text-center" style={{
        
      }}>
      <p className="" >
      Over the years, devotees have visited Vrindavan, Govardhan, Ayodhya, Jaipur, Sri Rangam, Tirupati, Mayapur, Dwarka, Udupi, Rameshwaram and many other places.The number of devotees participating in these yatras have increased manifold i.e from an humble twenty in 1986 to a magnificent 10000 in 2023.</p>

<p>Kartik Yatras give devotees an opportunity to perform the devotional activity of shravanam (hearing) of hari-katha. Shravanam done in the association of devotees, in a holy dhama, is said to award one immense devotional merits.</p>

<p>With thousands of devotees participating, these yatras give devotees a wonderful opportunity to hear hari-katha and chant the holy names with complete absorption in an environment free from one’s regular household and professional anxieties.</p>
      
      </div>
      <button className="bg-indigo-500 md:w-1/3 rounded-lg    p-4 m-4 text-white">
        KNOW MORE →{" "}
      </button>
    </div>
  </div>
  )
}

export default About