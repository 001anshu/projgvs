import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Features from './pages/Features'
import About from './pages/About'
import Courses from './pages/Courses'
import EmblaCarousel from './pages/EmblaCarousel'
import Display from './pages/Display'
import Projects from './pages/Projects'
import Testimonial from './pages/Testimonial'
import Form from './pages/Form'
import Footer from './pages/Footer'


const page = () => {
  return (
    <div>
      
      <Navbar/>
      <Display/>
      <Home/>
      <Features/>
      <About/>
      <Courses/>
      <Projects/>
      <Testimonial/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default page