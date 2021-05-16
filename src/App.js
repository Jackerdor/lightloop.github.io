import React, { Component, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import video from './assets/showreel3.mp4';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Members from './containers/Members';
import Connect from './containers/Connect';
import Cursor from './components/Cursor';
import Viewer from './components/Viewer';






const transition = { duration:  1.4, ease: [0.2, 0.01, -0.05, 0.9] };

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 4,
      ease: "easeInOut",
    }
  }
}

const unhideVariant = {
  hidden: {
    width: 0,
  },
  visible: {
    width: 1000,
    transition: {
      delay: 0.5,
      duration: 3,
      ease: "easeInOut",
    }
  }
}

function App() {

const [navButton, setNavButton] = useState(false)

const showNavButton = () => {
  console.log(navButton)
    if(window.innerWidth <=960) {
        setNavButton(false)
    } else {
        setNavButton(true);
    }      
  };

  /* window.addEventListener('resize', showNavButton); */

  return (

  <Router>
  <div className="container noverflow">
    <motion.div initial="" animate={{width: 0, transition: {
      delay: 0.5,
      duration: 2,
      ease: [0.3, 0.01, 0.5, 1],
    }}} className="swiper">

  </motion.div>
    <div className="nav-gradient"></div>
      
      <Viewer setDisplay='false' />
      <Navbar on={navButton} />
      <Home />
      <About />
      <Projects />
      <Members />
      <Connect />
      <Cursor />
      
    </div>
  </Router>
  );
}

console.log()

export default App;
