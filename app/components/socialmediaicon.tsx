import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaBehance, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const SocialMediaIcon = () => {
  return (
    <div >
      {/* Sovial Icons */}
            <div className='flex gap-3 mt-4'>
              {/* Email */}
              <Link 
              href={"https://mail.google.com/mail/u/0/?tab=rm#inbox"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <AiOutlineMail />
            </Link> 
              {/* LinkedIn */}
              <Link 
              href={"https://www.linkedin.com/in/laiba-ashfaq-ahmed-3a8502274/"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <AiOutlineLinkedin />
            </Link>
              {/* GitHub */}
              <Link 
              href={"https://github.com/laibaashfaq1"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <FaGithub />
            </Link>
            {/* Behance */}
              <Link 
              href={"https://www.behance.net/laibaashfaq22"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <FaBehance />
            </Link>
              {/* Twitter */}
              <Link 
              href={"https://x.com/LaibaAhm1"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <FaXTwitter />
            </Link>
              {/* Youtube */}
              <Link 
              href={"https://www.youtube.com/@Graphics-tip"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <AiOutlineYoutube />
            </Link>
              {/* Facebook */}
              <Link 
              href={"https://www.facebook.com/profile.php?id=100010454466369"} 
              target="_blank" 
              className="p-2 border border-gray-700 rounded-lg hover:bg-blue-500">
              <AiFillFacebook/>
            </Link>
            </div>
    </div>
  )
}

export default SocialMediaIcon
