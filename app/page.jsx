import React from 'react'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Home />
      <Service />
      <About />
      <Portfolio />
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page