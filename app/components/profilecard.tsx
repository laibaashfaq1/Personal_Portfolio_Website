'use client'

import Image from 'next/image'
import React from 'react'
import SocialMediaIcon from "@/app/components/socialmediaicon"
import { AiOutlineGlobal } from 'react-icons/ai'
import { Typewriter } from 'react-simple-typewriter'

const ProfileCard = () => {
  return (
    <main className='bg-[#0F172A] py-8'>
      <div className='flex items-center justify-between text-[#E2E8F0] p-6 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-800 mt-2'>
        
        {/* Left Side Text Content */}
        <div className='md:w-2/3'>
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

          <p className="mt-2 flex items-center gap-2 text-gray-500 text-sm">
            <AiOutlineGlobal /> Based in Karachi, Pakistan 🇵🇰
          </p>

          {/* Social Icons */}
          <div className="mt-2 flex gap-2">
            <SocialMediaIcon />
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex gap-4">
            <a
              href="/resume.pdf" // replace with actual path
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Download Resume
            </a>
            <a
              href="/Contact"
              className="border border-gray-500 hover:border-blue-500 text-gray-300 hover:text-blue-300 px-4 py-2 rounded-lg text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side (Profile Image) */}
        <div className="w-28 h-28 mt-4 md:mt-0">
          <Image
            src="/me.png"
            alt="Profile Picture"
            width={112}
            height={112}
            className="rounded-lg border border-gray-500"
          />
        </div>
      </div>
    </main>
  )
}

export default ProfileCard
