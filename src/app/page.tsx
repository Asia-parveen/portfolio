import React from 'react'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import TechRatio from './components/TechRatio'
import Projects from './components/Projects'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'


const Homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
     <Hero/>
     <Skills/>
     <TechRatio />
     <Projects/>
     <Services/>
     <Reviews/>
     <Contact/>
   
     
    </div>
  )
}

export default Homepage