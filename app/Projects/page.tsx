'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { webProjects } from "@/app/components/webproject"
import { graphicProjects } from '../components/graphicpro';

const Projectpage = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className="max-w-2xl mx-auto mt-4 p-6 text-[#E2E8F0] rounded-lg shadow-lg bg-gray-900 border border-gray-800">
      <h1 className="text-xl font-bold mb-4">Projects</h1>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setActiveTab('graphic')}
          className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'graphic' ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
          Graphic Projects
        </button>
        <button 
          onClick={() => setActiveTab('web')}
          className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'web' ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
          Web Development Projects
        </button>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Graphic Projects */}
        {activeTab === 'graphic' && graphicProjects.length > 0 && graphicProjects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-lg border border-gray-700 flex justify-between items-center hover:bg-gray-700 transition"
          >
            <div className="flex-1">
              <h2 className="text-lg font-medium">{project.title}</h2>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
            {project.image && (
              <div className="ml-4 w-20 h-20 flex-shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={80} 
                  height={80} 
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </a>
        ))}

        {/* Web Projects */}
        {activeTab === 'web' && webProjects.length > 0 && webProjects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md hover:bg-gray-700 transition"
          >
            <h2 className="text-lg font-medium mb-2">{project.title}</h2>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-gray-700 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Show the link only if projects exist */}
      {(graphicProjects.length > 0 || webProjects.length > 0) && (
        <h3 className="text-sm mt-6 text-gray-400">
          {activeTab === 'graphic' ? (
            <>You can see more of my projects on <a 
              target='_blank'
              href="https://www.behance.net/laibaashfaq22" 
              className="text-blue-400 hover:underline"
            >
              Behance
            </a>.</>
          ) : activeTab === 'web' ? (
            <>You can see more of my projects on <a 
              target='_blank'
              href="https://github.com/laibaashfaq1"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>.</>
          ) : null}
        </h3>
      )}
    </div>
  )
}

export default Projectpage
