import React from 'react'

function Contact() {
    return (
        <>
            <div id='contact' className="py-10 w-screen">
                <div className="py-10 bg-orange-500">
                    <div className="overflow-x-scroll bg-white py-2 rotate-[-2deg] scrollbar-hide">
                        <p className='text-2xl w-max font-light  text-gray-800 tracking-widest'>UI / UX Design - Nextjs - Reactjs - Framer Motion - Gsap - Rest API - Mongodb - Mysql - UI / UX Design - Nextjs - Reactjs - Framer Motion - Gsap - Rest API - Mongodb - Mysql</p>
                    </div>
                </div>
            </div>
            <div className='h-fit w-screen px-10'>
                <div className="flex flex-col py-10 items-center justify-center gap-10">
                    <div className=" flex items-center w-full justify-center flex-col">
                        <h1 className='md:text-4xl text-3xl font-thin text-center'>Have an Awsome Project <br />Idea?
                            <span className='text-orange-400'>Let’s Discuss</span></h1>
                    </div>
                    <form action="" method="post" className='flex gap-2 w-[400px] items-center justify-center '>
                        <div className="bg-orange-400/[.4] rounded-full px-2 p-1">
                            <img src="/icon/mail.svg" alt="mail" className='h-[20px] w-[20px]' />
                        </div>
                        <input type="text" placeholder='Enter your email' className='w-full px-4 rounded-full bg-gray-100 outline-none py-1' />
                        <button className='px-4 py-2 bg-orange-400 text-white rounded-full' type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact