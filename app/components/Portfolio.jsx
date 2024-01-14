import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Portfolio() {
  return (
    <div id='project' className='h-fit w-screen flex flex-col py-10'>
      <div className="flex md:px-20 px-10 justify-between items-center">
        <h1 className='md:text-4xl text-2xl font-bold'>Lets have a look at <br />my <span className='text-orange-400'>Portfolio</span></h1>
        <Link className='text-white bg-orange-400 px-4 py-2 md:text-normal text-sm rounded-full' href={'#moreprojects'}>See All</Link>
      </div>
      <div className="flex flex-col md:px-20 px-10 py-10">
        <div className="w-full py-4 flex justify-between items-center cursor-pointer border-b border-orange-300">
          <h1 className='md:text-2xl text-medium font-light text-gray-900'>EaseBot (online notification and navigation web)</h1>
          <img src="/icon/outlined/directions/chevron/right.svg" alt="" />
        </div>
        <div className="w-full py-4 flex justify-between items-center cursor-pointer border-b border-orange-300">
          <h1 className='md:text-2xl text-medium font-light text-gray-900'>Portfolio(HTML & CSS)</h1>
          <img src="/icon/outlined/directions/chevron/right.svg" alt="" />
        </div>
        <div className="w-full py-4 flex justify-between items-center cursor-pointer border-b border-orange-300">
          <h1 className='md:text-2xl text-medium font-light text-gray-900'>Trav (Responsive design)</h1>
          <img src="/icon/outlined/directions/chevron/right.svg" alt="" />
        </div>
        <div className="w-full py-4 flex justify-between items-center cursor-pointer border-b border-orange-300">
          <h1 className='md:text-2xl text-medium font-light text-gray-900'>Sound Loaded (Gsap web animation)</h1>
          <img src="/icon/outlined/directions/chevron/right.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio