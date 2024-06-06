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

const IndexPage = () => {
  return (
    <div>
      <Display />
      <Home />
      <Features />
      <About />
      <Courses />
      <Projects />
      <Donate />
      <Form />
    </div>
  );
};

export default IndexPage;
