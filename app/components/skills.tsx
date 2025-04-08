import React from 'react';

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JasvaScript", "TypeScript", "React/Next.js", "Tailwind CSS",
    "Node.js", "Python", "Modern Ai", "FastAPI", "API Development", "Frontend Development",
    "Backend Development","Content Creator","Project Management", "Web design", 
    "UX/UI Design", "Logo Design", "Branding", "Graphic Design",
    "Digital Marketing", "SEO", "Social Media Management", "Video Editing",
    "Typography", "Color Theory", "Design Sprint", 
  ];

  return (
    <div className="max-w-2xl mx-auto mt-4 p-6 text-[#E2E8F0] rounded-lg shadow-lg bg-gray-900 border border-gray-800">
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-lg border border-gray-700 shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
