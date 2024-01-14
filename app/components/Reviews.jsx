import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Reviews() {
  return (
    <div className='relative service-home h-fit w-screen py-10 rounded-[20px] overflow-hidden'>
      <div className="flex flex-col gap-10 z-[1]">
        <div className="flex flex-col items-center gap-2 justify-center px-10">
          <h1 className='text-4xl text-white'>Testimonials That <br />Speak to <span className='text-orange-400'>My Results </span></h1>
          <p className='md:w-[600px] text-white md:text-center text-justify'>
            Feel free to adapt and modify these examples to better reflect your specific experiences and the nature of your work. Include metrics or specific achievements whenever possible to add credibility to the testimonials</p>
        </div>
        <div className="reviews w-screen overflow-x-scroll scrollbar-hide px-10">
          <div className="flex gap-10 w-fit">
            <div className="flex flex-col px-4 py-2 bg-white/[.1] backdrop-blur-sm md:min-w-[600px] min-w-[400px] rounded shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <div className="h-[50px] w-[50px] flex rounded-full overflow-hidden ">
                    <img src="data:image/jpeg;base64,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" className='' alt="" />
                  </div>
                  <div className="">
                    <h1 className='text-white'>Harish</h1>
                    <p className='text-[12px] text-gray-400 font-thin'>Product Manager</p>
                    <img src="/assets/rate.png" className='h-4' alt="" />
                  </div>
                </div>
                <img src="/assets/quote180.svg" className='rotate-180 text-gray-200' alt="qoute" />
              </div>
              <div className="context" >
                <p className='font-thin text-sm text-white'>
                  "Working with Gowdaman was an absolute pleasure. His attention to detail, creativity, and ability to meet tight deadlines set him apart. The project exceeded our expectations, and we look forward to collaborating on future endeavors."
                </p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-2 bg-white/[.1] backdrop-blur-sm md:min-w-[600px] min-w-[400px] rounded shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <div className="h-[50px] w-[50px] flex rounded-full overflow-hidden ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROk7pqc9jS75XOl3Gd7v1p1SJ8ioMPOSWkCg&usqp=CAU" className='' alt="" />
                  </div>
                  <div className="">
                    <h1 className='text-white'>lokesh s</h1>
                    <p className='text-[12px] text-gray-400 font-thin'>Senior Developer</p>
                    <img src="/assets/rate.png" className='h-4' alt="" />
                  </div>
                </div>
                <img src="/assets/quote180.svg" className='rotate-180 text-gray-200' alt="qoute" />
              </div>
              <div className="context" >
                <p className='font-thin text-sm text-white'>
                  "During Gowdaman's tenure with us, his contributions were invaluable. His proactive approach to problem-solving and strong work ethic significantly impacted our team's success. I wholeheartedly recommend Gowdaman for any project or position requiring dedication and expertise."</p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-2 bg-white/[.1] backdrop-blur-sm md:min-w-[600px] min-w-[400px] rounded shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <div className="h-[50px] w-[50px] flex rounded-full overflow-hidden ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgn-KjYnVilVW-SnKuT2ThxajDrnOf-n-J2Q&usqp=CAU" className='' alt="" />
                  </div>
                  <div className="">
                    <h1 className='text-white'>Priyanka shetty</h1>
                    <p className='text-[12px] text-gray-400 font-thin'>Team Leader</p>
                    <img src="/assets/rate.png" className='h-4' alt="" />
                  </div>
                </div>
                <img src="/assets/quote180.svg" className='rotate-180 text-gray-200' alt="qoute" />
              </div>
              <div className="context" >
                <p className='font-thin text-sm text-white'>
                  "I had the pleasure of working closely with Gowdaman on a challenging project. His ability to communicate complex ideas, collaborate effectively, and bring innovative solutions to the table was instrumental in the project's success. I highly recommend Gowdaman for his exceptional skills and professionalism."</p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-2 bg-white/[.1] backdrop-blur-sm md:min-w-[600px] min-w-[400px] rounded shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
              <div className="flex justify-between w-full">
                <div className="flex gap-2">
                  <div className="h-[50px] w-[50px] flex rounded-full overflow-hidden ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUb5U1SPa7EWwv8eOlV_wY2ZtaFfqiK9nIA&usqp=CAU" className='' alt="" />
                  </div>
                  <div className="">
                    <h1 className='text-white'>Ragesh</h1>
                    <p className='text-[12px] text-gray-400 font-thin'>Fresher</p>
                    <img src="/assets/rate.png" className='h-4' alt="" />
                  </div>
                </div>
                <img src="/assets/quote180.svg" className='rotate-180 text-gray-200' alt="qoute" />
              </div>
              <div className="context" >
                <p className='font-thin text-sm text-white'>
                  "As a fellow freelancer, I've had the opportunity to collaborate with Gowdaman on multiple projects. His reliability, creativity, and commitment to delivering high-quality work consistently impressed me. I would gladly work with Gowdaman again and recommend him without hesitation." </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews