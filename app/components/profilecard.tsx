import Image from 'next/image'
import React from 'react'
import SocialMediaIcon from "@/app/components/socialmediaicon"
import { AiOutlineGlobal } from 'react-icons/ai'

const ProfileCard = () => {
  return (
    <main className='bg-[#0F172A]'>
      <div className='flex items-center justify-between text-[#E2E8F0] p-6 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-800 mt-2'>
        
        {/* Left Side Text Content */}
        <div>
          <h1 className='text-3xl font-bold text-white'>Laiba Ashfaq Ahmed</h1>
          <p className='mt-1 font-normal'>Creative Web Developer | Visionary Graphic Designer | Strategic Problem-Solver. 🚀🎨💡</p>

          {/* Based in Pakistan + Social Icons */}
          <div className='mt-2'>
            <p className="flex items-center gap-2 text-gray-500 font-light">
            <AiOutlineGlobal />
               Based in Karachi , Pakistan 🇵🇰
            </p>
            <div className="mt-2 flex gap-2">  
              <SocialMediaIcon />  {/* Social Icons appear below */}
            </div>
          </div>
        </div>

        {/* Right Side (Profile Image) */}
        <div className="w-24 h-24">
          <Image
            src="/me.png"  // Replace with your actual image path
            alt="Profile Picture"
            width={96}
            height={96}
            className="rounded-lg border border-gray-500"
          />
        </div>

      </div>
    </main>
  )
}

export default ProfileCard
