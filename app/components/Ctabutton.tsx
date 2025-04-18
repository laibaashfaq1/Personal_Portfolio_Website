import React, { useState } from 'react';

const Ctabutton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
              <div className="mt-4 flex gap-4">
            <a
              href="/Portfolio.pdf" // replace with actual path
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
  );
};

export default Ctabutton;
