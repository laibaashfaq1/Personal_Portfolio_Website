'use client'

import React from 'react'

const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-6 bg-gray-900 text-[#E2E8F0] rounded-lg border border-gray-800 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
      <p className="text-gray-400 mb-6">Have a project or want to connect? I'd love to hear from you.</p>

      {/* Replace 'your_form_id' with your actual Formspree form ID */}
      <form 
      action="https://formspree.io/f/meoapdll" 
      method="POST">
        
        {/* Name Input Field */}
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Your name" 
          className="bg-gray-800 border border-gray-700 p-2 rounded-md text-white w-full mb-3"
        />
        
        {/* Email Input Field */}
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Your email" 
          className="bg-gray-800 border border-gray-700 p-2 rounded-md text-white w-full mb-3"
        />
        
        {/* Message Input Field */}
        <textarea 
          name="message" 
          required 
          placeholder="Your message" 
          className="bg-gray-800 border border-gray-700 p-2 rounded-md text-white w-full mb-3"
        />
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>

      {/* Contact Email */}
      <div className="mt-6 text-sm text-gray-400">
        Or reach out via email: 
        <a 
          href="mailto:laibaashfaqahmed232@gmail.com" 
          className="text-blue-400 underline ml-1"
        >
          laibaashfaqahmed232@gmail.com
        </a>
      </div>
    </div>
  )
}

export default ContactPage
