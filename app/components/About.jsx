import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <>
            <div id='about' className='w-screen h-fit py-10 px-10'>
                <h1 className='text-center md:text-6xl text-5xl font-bold pb-10'>My <span className='text-orange-400'>Experince</span></h1>
                <div className="flex flex-col gap-10 px-10 py-10 relative items-center justify-center">
                    <div className="absolute md:flex hidden h-[100%] z-[0] w-0 border border-1 border-dashed border-gray-900"></div>
                    <div className="flex md:flex-row flex-col gap-10 w-full justify-between z-[1] items-top">
                        <div className="content flex flex-col gap-2">
                            <h1 className='text-gray-800 font-semibold text-4xl'>Pyhton Programming</h1>
                            <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo?</p>
                        </div>
                        <div className="md:grid hidden place-items-center h-[40px] w-[40px] bg-white rounded-full border border-2 border-dashed border-gray-700">
                            <div className="h-[30px] w-[30px] rounded-full bg-orange-400"></div>
                        </div>
                        <div className="content flex flex-col gap-2">
                            <h1 className='text-gray-800 font-semibold text-4xl'>JavaScript</h1>
                            <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo?</p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-10 w-full justify-between z-[1] items-top">
                        <div className="content flex flex-col gap-2">
                            <h1 className='text-gray-800 font-semibold text-4xl'>NodeJs</h1>
                            <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo?</p>
                        </div>
                        <div className="md:grid hidden place-items-center h-[40px] w-[40px] bg-white rounded-full border border-2 border-dashed border-gray-700">
                            <div className="h-[30px] w-[30px] rounded-full bg-orange-400"></div>
                        </div>
                        <div className="content flex flex-col gap-2">
                            <h1 className='text-gray-800 font-semibold text-4xl'>ExpressJs</h1>
                            <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo?</p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-10 w-full justify-between z-[1] items-top">
                        <div className="content flex flex-col gap-2">
                            <h1 className='text-gray-800 font-semibold text-4xl'>MongoDB</h1>
                            <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo?</p>
                        </div>
                        <div className="md:grid hidden place-items-center h-[40px] w-[40px] bg-white rounded-full border border-2 border-dashed border-gray-700">
                            <div className="h-[30px] w-[30px] rounded-full bg-orange-400"></div>
                        </div>
                        <div className="content flex flex-col gap-2">
                            <h1 className='text-gray-800 font-semibold text-4xl'>ReactJs & NextJs</h1>
                            <p className='text-gray-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='resume' className="w-screen h-fit bg-blue-50 px-10 pt-20 pb-10 flex items-center justify-center">
                <div className="flex md:flex-row flex-col  gap-10 h-fit w-full md:justify-evenly justify-center h-full md:items-end items-center">
                    <div className="h-fit relative w-fit h-fit flex-items-center justify-center">
                        <div className="bottom-0  rounded-[40px] h-[450px] w-[300px] flex flex-col  justify-end">
                            <Image src={'/about/abouthero.png'} className='block absolute bottom-0 left-0 mx-auto' height={350} width={300}></Image>
                            <div className="bg-orange-400 rounded-[40px] h-[300px] w-[300px] flex flex-col"></div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col md:w-[600px] h-[400px]">
                        <h1 className='text-4xl text-gray-900 font-semibold'>Why <span className='text-orange-400'>Hire me</span>?</h1>
                        <p className='text-gray-400 font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolores saepe tempore odit placeat magnam, consequatur, iure velit libero commodi repellendus, in recusandae laboriosam dolorum praesentium deserunt ea dolorem numquam eligendi et qui eaque nisi? Suscipit inventore laboriosam dolorum eligendi.</p>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-5">
                                <h1 className='text-3xl font-semibold'>1050+</h1>
                                <p className='font-light text-gray-800'>Project Ideas</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <h1 className='text-3xl font-semibold'>250+</h1>
                                <p className='font-light text-gray-800'>Project Completed</p>
                            </div>
                        </div>
                        <Link className='border border-black rounded-[40px] px-8 py-6 w-fit' href={"#hire"}>Hire me</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About