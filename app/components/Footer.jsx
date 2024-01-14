import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
function Footer() {
    return (
        <div className='bg-[#272727] py-10 px-10 rounded-t-[20px]'>
            <div className="flex w-full justify-between items-center pb-10 border-b border-gray-400/[.6]">
                <h1 className='text-white text-4xl font-thin'>Lets Connect there</h1>
                <Link href={'#hire'} className='px-4 py-2 bg-orange-400 text-white rounded-full'> Hire me</Link>
            </div>
            <div className="flex md:flex-row flex-col px-10 gap-4 justify-between md:py-10 border-b border-gray-400/[.5]">
                <div className=" flex flex-col items-start gap-10 py-10">
                    <div className="logo flex items-center justify-center gap-1">
                        <p className='p-2 bg-orange-400 rounded-full text-white h-10 w-10 txt-center font-black'>GL</p>
                        <h1 className='text-white'>GULN</h1>
                    </div>
                    <form action="" method="post" className='flex gap-2 flex-col rounded-[40px] w-fit'>
                        <h2 className='text-2xl text-orange-400 font-thin'>Get the latest information</h2>
                        <div className="flex">
                            <input type="email" placeholder='email' className='px-2 py-1 rounded-l-[40px]' />
                            <button type="submit" className='bg-orange-400 px-2 rounded-r-[40px] overflow-hidden'>
                                <img src="/icon/outlined/action/main/send.svg" className='rotate-45' alt="" />
                            </button>
                        </div>
                    </form>
                    <div className="flex gap-4">
                        <Link href={"#"}><FaLinkedinIn className='text-white' /></Link>
                        <Link href={"#"}><FaGithub className='text-white' /></Link>
                        <Link href={"#"}><FaInstagram className='text-white' /></Link>
                        <Link href={"#"}><FaTwitter className='text-white' /></Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5 text-white">
                    <h2 className='text-orange-400 font-thin text-xl font-light'>Navigation</h2>
                    <Link href={'#home'}>Home</Link>
                    <Link href={'#home'}>About Us</Link>
                    <Link href={'#home'}>Service</Link>
                    <Link href={'#home'}>Resume</Link>
                    <Link href={'#home'}>Project</Link>
                </div>
                <div className=" flex flex-col gap-5 text-white">
                    <h2 className='text-orange-400 font-thin text-xl font-light'>Navigation</h2>
                    <Link href={'#phone'}>+91 9384126303</Link>
                    <Link href={'#phone'}>+91 6380680045</Link>
                    <Link href={'damangowdaman@gmail.com'}>damangowdaman@gmail.com</Link>
                </div>
            </div>
            <div className="footer flex px-10 text-[12px] w-full justify-between py-2 text-white font-thin">
                <p>Copyright© 2023 Gowdaman. All Rights Reserved.</p>
                <p>User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer