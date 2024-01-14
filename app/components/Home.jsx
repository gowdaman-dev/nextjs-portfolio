'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
function Home() {
    const comp = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from(
                '#title',
                {
                    yPercent: '100',
                    opacity: 0,
                    duration: .5,
                    ease: 'power1.inOut',
                    stagger: .2
                }
            ).from('#strips', {
                rotate: '90deg',
                opacity: 0,
                duration: .5,
                ease: 'power1.inOut'
            }).from('#subtitle', {
                yPercent: "-20",
                opacity: 0,
                duration: .5,
                ease: 'power1.inOut'
            }).from("#avatarbg", {
                height: 0,
            }).from('#avatar', {
                yPercent: '100',
                duration: .7,
                ease: "power1.inOut",
            }).from('#avatarpattan', {
                scale:.2,
                opacity:0,
                ease: "elastic.inOut",
            }).to(
                "#title", {
                yPercent: '0',
                opacity: 1,
                duration: .5,
                delay: .5,
                ease: 'power1.inOut'
            }
            ).to('#strips', {
                rotate: '0deg',
                opacity: 1,
                duration: .5,
                delay: .5,
                ease: 'power1.inOut'

            }).to(
                '#subtitle', {
                yPercent: "",
                opacity: 1,
                duration: .5,
                ease: 'power1.inOut'
            }
            ).to('#avatarbg', {
                height: "50%",
                duration: .5,
                ease: 'elastic'
            }).to("#avatar", {
                yPercent: '0',
                duration: .5,
                ease: "power1.inOut",
            }).to('#avatarpattan', {
                scale:1,
                opacity:1,
                ease: "elastic.inOut",
            })

        })
    }, comp)
    return (
        <div id='home' ref={comp} className='h-screen  w-screen bg-orange-200/[.5]  flex flex-col items-center justify-center relative'>
            <div className="relative flex flex-col gap-4 items-center justify-center py-10 -translate-y-20">
                <div className="relative" id='title'>
                    <Image src={'/assets/spick1.svg'} id='strips' className="absolute -right-7 -top-7" height={35} width={35} />
                    <p className='text-sm border border-black px-2 py-1 rounded-full'>Hello</p>
                </div>
                <h1 className='font-semibold md:text-6xl sm:text-5xl text-4xl ' id='title'>I'm <span className='text-orange-400'>Gowdaman</span>,</h1>
                <h1 className='font-semibold md:text-6xl sm:text-5xl text-4xl ' id='title'>FullStack Developer</h1>
                <Image src={'/assets/spick2.svg'} id='strips' className="absolute -left-[55px] -bottom-4" height={55} width={55} />
            </div>
            <div className="w-[400px] absolute bottom-0 flex flex-col items-center justify-end overflow-y-hidden">
                <Image src={'/heropic.png'} id='avatar' height={600} width={400} className='z-[2]' />
                <Image src={'/assets/heropatten.png'} id='avatarpattan' height={1000} width={1000} className='w-[900px] absolute bottom-0 z-[1]' />
                <div id='avatarbg' className=" absolute h-1/2 w-full bg-orange-400 rounded-t-full z-[0]"></div>
                <div id='hiremiddle' className="flex w-[250px] justify-between absolute bottom-10 z-[2] backdrop-blur-sm bg-white/[.1] px-4 py-2 rounded-full  shadow-[-1px_1px_0px_0px_var(--whitebg),1px_-1px_0px_0px_var(--white50)]">
                    <Link className='flex gap-2 px-4 py-2 text-white bg-orange-400 rounded-full' href={'#portfolio'}>Portfolio <img src="/icon/outlined/directions/straight arrows/up right.svg" alt="" /></Link>
                    <Link className='flex gap-2 px-4 py-2 text-white ' href={'#hire'}>Hire Me</Link>
                </div>
            </div>
            <div className="absolute lg:flex hidden w-full px-10 justify-between" id='subtitle'>
                <div className="flex flex-col items-left w-[320px]">
                    <Image src={'/assets/quote.svg'} height={34} width={34} className='z-[1]' />
                    <p>Gowdaman's Exceptional Fullstack Developer <br /> ensure our website's success <br />highly Recommended</p>
                </div>
                <div className="flex flex-col items-end w-[320px]">
                    <Image src={'/assets/rate.png'} height={44} width={104} className='z-[1]' />
                    <p className='text-4xl font-bold'>7 Years</p>
                    <p className='font-semibold'>Experince</p>
                </div>
            </div>
        </div>
    )
}

export default Home