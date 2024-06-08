// app/page.js
import React from 'react';
import Display from '../components/Display';
import Home from '../components/Home';
import Features from '../components/Features';
import About from '../components/About';
import Courses from '../components/Courses';
import Projects from '../components/Projects';
import Donate from '../components/Donate';
import Form from '../components/Form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Date from '@/camp-components/Date';

const IndexPage = () => {
  return (
    <div>
      <Navbar/>
      <Display />
      <Home />
      {/* <Features /> */}
      <About />
      <Courses />
      <Projects />
      {/* <Donate /> */}
      <Form />
      <Footer/>
    </div>
  );
};

export default IndexPage;
