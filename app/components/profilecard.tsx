'use client'

import Image from 'next/image'
import React from 'react'
import SocialMediaIcon from "@/app/components/socialmediaicon"
import { AiOutlineGlobal } from 'react-icons/ai'
import { Typewriter } from 'react-simple-typewriter'
import Ctabutton from './Ctabutton'

const ProfileCard = () => {
  return (
    <main className='bg-[#0F172A] py-8 px-4'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between text-[#E2E8F0] p-6 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-800 mt-2'>

        {/* Left Side Text Content */}
        <div className='w-full md:w-2/3 text-center md:text-left'>
          <h1 className='text-3xl font-bold text-white'>Laiba Ashfaq Ahmed</h1>
          <p className='mt-1 font-normal text-blue-400'>
            <Typewriter
              words={['Creative Web Developer', 'Visionary Graphic Designer', 'Strategic Problem-Solver 🚀']}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="mt-2 flex justify-center md:justify-start items-center gap-2 text-gray-500 text-sm">
            <AiOutlineGlobal /> Based in Karachi, Pakistan 🇵🇰
          </p>

          <div className="mt-2 flex justify-center md:justify-start gap-2">
            <SocialMediaIcon />
          </div>

          <div className="mt-3 flex justify-center md:justify-start">
            <Ctabutton />
          </div>
        </div>

        {/* Right Side (Profile Image) */}
        <div className="mt-6 md:mt-0 md:ml-4">
          <Image
            src="/me.png"
            alt="Profile Picture"
            width={112}
            height={112}
            className="rounded-lg border border-gray-500 object-cover"
          />
        </div>
      </div>
    </main>
  )
}

export default ProfileCard
