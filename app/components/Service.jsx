'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Service() {
    const [animate, setAnimate] = useState(false)
    const anim = (variants) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            whileInView: 'view',
            variants
        }
    }
    const servheader = {
        initial: {
            y: 20,
            opacity: 0,
        },
        view: {
            y: 0,
            opacity: 1,
        }
    }
    const servcard = {
        initial: {
            x: 100,
            scale:.6,
            opacity: 0,
        },
        view: {
            x: 0,
            scale:1,
            opacity: 1,
        }
    }
    return (
        <motion.div id='service' className='relative service-home h-fit w-screen py-10 rounded-[20px] overflow-hidden'>
            <motion.div  className="flex flex-col gap-10 z-[1]">
                <motion.div initial='initial' whileInView='view' transition={{ease:'easeInOut',duration:1,delay:.5}} variants={servheader} className="flex items-center md:justify-between justify-center  px-10">
                    <h1 className='text-4xl text-white'>My <span className='text-orange-400'>Service</span></h1>
                    <p className='w-[600px] text-white md:block hidden'>
                        I specialize in creating dynamic and responsive web applications that not only meet but exceed your business objectives. With a keen eye for design and a robust understanding of both front-end and back-end technologies
                    </p>
                </motion.div>
                <motion.div className="w-full overflow-scroll scrollbar-hide z-[2]">
                    <motion.div drag dragConstraints={{left:100 , right:100 , top:0 , bottom:0}}  className="flex w-fit  gap-10 px-10 justify-between">
                        <motion.div initial='initial' whileInView='view' transition={{ease:'easeInOut',duration:1,delay:.8}} variants={servcard}  className="service-card z-[1] relative overflow-hidden h-[350px] w-[300px] bg-white/[.2] backdrop-blur-sm rounded-[40px] shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
                            <h1 className='text-2xl w-full text-center py-4 text-white border-b border-white/[.1]'>UI / UX Design</h1>
                            <motion.div className=" absolute bottom-0 w-full w-fit bg-red-400/[.2] flex flex-col items-center justify-end">
                                <motion.div className="w-[85%] h-[130px] bg-gray-400/[.4]  translate-y-[170px] z-[0] rounded-[50px]"></motion.div>
                                <motion.div className="w-[95%] h-[100px] bg-gray-300  translate-y-[60px] z-[0] rounded-[50px]"></motion.div>
                                <img src="/serivce/1.png" className='w-full rounded-t-[40px] z-[3]' alt="servoce1" />
                            </motion.div>
                            <Link href={"#"} className='absolute z-[4] p-5 bg-orange-400 rounded-full bottom-0 right-0'><Image src={'/icon/outlined/directions/straight arrows/up right.svg'} height={50} width={50} /></Link>
                        </motion.div>
                        <motion.div initial='initial' whileInView='view' transition={{ease:'easeInOut',duration:1,delay:1.2}} variants={servcard}  className="service-card z-[1] relative overflow-hidden h-[350px] w-[300px] bg-white/[.2] backdrop-blur-sm rounded-[40px] shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
                            <h1 className='text-2xl w-full text-center py-4 text-white border-b border-white/[.1]'>Web Design</h1>
                            <motion.div className=" absolute bottom-0 w-full w-fit bg-red-400/[.2] flex flex-col items-center justify-end">
                                <motion.div className="w-[85%] h-[130px] bg-gray-400/[.4]  translate-y-[170px] z-[0] rounded-[50px]"></motion.div>
                                <motion.div className="w-[95%] h-[100px] bg-gray-300  translate-y-[60px] z-[0] rounded-[50px]"></motion.div>
                                <img src="/serivce/2.png" className='w-full rounded-t-[40px] z-[3]' alt="servoce1" />
                            </motion.div>
                            <Link href={"#"} className='absolute z-[4] p-5 bg-orange-400 rounded-full bottom-0 right-0'><Image src={'/icon/outlined/directions/straight arrows/up right.svg'} height={50} width={50} /></Link>
                        </motion.div>
                        <motion.div initial='initial' whileInView='view' transition={{ease:'easeInOut',duration:1,delay:1.6}} variants={servcard}  className="service-card z-[1] relative overflow-hidden h-[350px] w-[300px] bg-white/[.2] backdrop-blur-sm rounded-[40px] shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
                            <h1 className='text-2xl w-full text-center py-4 text-white border-b border-white/[.1]'>Fullstack development</h1>
                            <motion.div className=" absolute bottom-0 w-full w-fit bg-red-400/[.2] flex flex-col items-center justify-end">
                                <motion.div className="w-[85%] h-[130px] bg-gray-400/[.4]  translate-y-[170px] z-[0] rounded-[50px]"></motion.div>
                                <motion.div className="w-[95%] h-[100px] bg-gray-300  translate-y-[60px] z-[0] rounded-[50px]"></motion.div>
                                <img src="/serivce/3.png" className='w-full rounded-t-[40px] z-[3]' alt="servoce1" />
                            </motion.div>
                            <Link href={"#"} className='absolute z-[4] p-5 bg-orange-400 rounded-full bottom-0 right-0'><Image src={'/icon/outlined/directions/straight arrows/up right.svg'} height={50} width={50} /></Link>
                        </motion.div>
                        <motion.div initial='initial' whileInView='view' transition={{ease:'easeInOut',duration:1,delay:2}} variants={servcard}  className="service-card z-[1] relative overflow-hidden h-[350px] w-[300px] bg-white/[.2] backdrop-blur-sm rounded-[40px] shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
                            <h1 className='text-2xl w-full text-center py-4 text-white border-b border-white/[.1]'>Landing page</h1>
                            <motion.div className=" absolute bottom-0 w-full w-fit bg-red-400/[.2] flex flex-col items-center justify-end">
                                <motion.div className="w-[85%] h-[130px] bg-gray-400/[.4]  translate-y-[170px] z-[0] rounded-[50px]"></motion.div>
                                <motion.div className="w-[95%] h-[100px] bg-gray-300  translate-y-[60px] z-[0] rounded-[50px]"></motion.div>
                                <img src="/serivce/2.png" className='w-full rounded-t-[40px] z-[3]' alt="servoce1" />
                            </motion.div>
                            <Link href={"#"} className='absolute z-[4] p-5 bg-orange-400 rounded-full bottom-0 right-0'><Image src={'/icon/outlined/directions/straight arrows/up right.svg'} height={50} width={50} /></Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <img src="/serivce/dc1.png" className="absolute right-0  bottom-0 w-[200px] z-[0]" alt="" />
            <img src="/serivce/dc2.png" className="absolute top-[50%] left-[50%] traslate-[-50%] w-[200px] h-[230px]" alt="" />
            <img src="/serivce/dc3.png" className="absolute bottom-0" alt="" />
        </motion.div >
    )
}

export default Service