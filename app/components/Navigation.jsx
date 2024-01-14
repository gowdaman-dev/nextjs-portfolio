'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { scrollTo } from "next/router";
function Navigation() {
  const anim = (variants) => {
    return ({
      initial: 'initial',
      animate: 'enter',
      exit: 'exit',
      variants
    })
  }
  const menuframe = {
    initial: {
      x: '100%'
    },
    enter: {
      x: "0%",
      transition: {
        duration: .65,
        ease: 'easeInOut'
      }
    },
    exit: {
      x: "100%",
      transition: {
        duration: .4,
        ease: 'easeInOut'
      }
    }
  }
  const menubar = {
    initial:{
      opacity:1,
    },
    enter:{
      opacity:0,
    },
    initialb1: {
      translateY: 5
    },
    initialb3: {
      translateY: -5
    },
    enterb1: {
      translateY: 0,
      rotate: "45deg",
      transition: {
        duration: .5,
        ease: "easeInOut"
      }
    },
    enterb3: {
      translateY: 0,
      rotate: "-45deg",
      transition: {
        duration: .5,
        ease: "easeInOut"
      }
    },
  }
  const [menu, setMenu] = useState(false)
  return (
    <motion.div className='w-screen px-10 py-5 top-0 left-0 z-10 fixed'>
      <div className="w-full py-2 rounded-full bg-[#171717] flex justify-between text-white items-center px-2">
        <div className="lg:flex gap-8 font-light hidden">
          <Link onClick={() => scrollTo("#home", 100)} className='hover:bg-white hover:text-[#171717] transition-color duration-500 px-6 py-4 rounded-full bg-orange-400' href={'#home'}>Home</Link>
          <Link onClick={() => scrollTo("#about", 100)} className='hover:bg-white hover:text-[#171717] transition-color duration-500 px-6 py-4 rounded-full' href={'#about'}>About</Link>
          <Link onClick={() => scrollTo("#service", 100)} className='hover:bg-white hover:text-[#171717] transition-color duration-500 px-6 py-4 rounded-full' href={'#service'}>Service</Link>
        </div>
        <div className="logo flex items-center justify-center gap-1">
          <p className='p-2 bg-orange-400 rounded-full text-white h-10 w-10 txt-center font-black'>GL</p>
          <h1>GULN</h1>
        </div>
        <div className="lg:flex gap-8 font-light hidden">
          <Link onClick={() => scrollTo("#resume", 100)} className='hover:bg-white hover:text-[#171717] transition-color duration-500 px-6 py-4 rounded-full' href={'#resume'}>Resume</Link>
          <Link onClick={() => scrollTo("#project", 100)} className='hover:bg-white hover:text-[#171717] transition-color duration-500 px-6 py-4 rounded-full' href={'#project'}>Project</Link>
          <Link onClick={() => scrollTo("#contact", 100)} className='hover:bg-white hover:text-[#171717] transition-color duration-500 px-6 py-4 rounded-full' href={'#contact'}>Contact</Link>
        </div>
        <motion.div onClick={() => { setMenu(!menu) }} className=" relative lg:hidden h-[40px] w-[40px] relative z-[10] cursor-pointer bg-white rounded-full flex items-center justify-center  gap-1">
          <motion.div initial='initialb1' animate={menu ? 'enterb1' : 'initialb1'} variants={menubar} className="ham-bars absolute w-[25px] bg-black rounded-xl"></motion.div>
          <motion.div initial='initial' animate={menu ? 'enter' : 'initial'} variants={menubar} className="ham-bars absolute w-[25px] bg-black rounded-xl"></motion.div>
          <motion.div initial='initialb3' animate={menu ? 'enterb3' : 'initialb3'} variants={menubar} className="ham-bars absolute w-[25px] bg-black rounded-xl"></motion.div>
        </motion.div>
        <AnimatePresence mode='wait'>
          {
            menu && (
              <motion.div {...anim(menuframe)} className="fixed top-0 right-0 h-screen w-[300px] z-[5] bg-white/[.8] backdrop-blur-sm lg:hidden flex flex-col gap-4 items-start justify-center px-10">
                <Link onClick={() => { setMenu(false); scrollTo('#home',100) }} className='text-orange-400 text-2xl font-light' href={'#home'}>home</Link>
                <Link onClick={() => { setMenu(false); scrollTo('#about',100) }} className='text-orange-400 text-2xl font-light' href={'#about'}>About</Link>
                <Link onClick={() => { setMenu(false); scrollTo('#service',100) }} className='text-orange-400 text-2xl font-light' href={'#service'}>Service</Link>
                <Link onClick={() => { setMenu(false); scrollTo('#resume',100) }} className='text-orange-400 text-2xl font-light' href={'#resume'}>Resume</Link>
                <Link onClick={() => { setMenu(false); scrollTo('#project',100) }} className='text-orange-400 text-2xl font-light' href={'#project'}>Project</Link>
                <Link onClick={() => { setMenu(false); scrollTo('#contact',100) }} className='text-orange-400 text-2xl font-light' href={'#home'}>Contact</Link>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Navigation

