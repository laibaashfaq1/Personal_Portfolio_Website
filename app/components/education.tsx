import React from 'react';

const Education = () => {
  return (
    <div className="max-w-2xl mx-auto mt-4 p-6 text-[#E2E8F0] rounded-lg shadow-lg border border-gray-800">
      <h1 className="text-xl font-bold">Education</h1>
      <div className="mt-4 space-y-4">
        {/* GIAIC */}
        <div className="p-4 bg-gray-800 rounded-lg shadow border border-gray-800">
          <h3 className="font-semibold text-white">Governor House, GIAIC</h3>
          <p className="text-sm text-gray-400">
            Learning Artificial Intelligence, Web 3.0 & Metaverse
          </p>
          <p className="text-sm text-gray-500 mt-2">2023 - Ongoing</p>
        </div>

        {/* Graphic Course */}
        <div className="p-4 bg-gray-800 rounded-lg shadow border border-gray-800">
          <h3 className="font-semibold text-white">BMJ Digital Education</h3>
          <p className="text-sm text-gray-400">
            Advanced Graphic Design | Ux /Ui Design 
          </p>
          <p className="text-sm text-gray-500 mt-2">Nov/2022-April/2023</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow border border-gray-800">
          <h3 className="font-semibold text-white">Digi SKill</h3>
          <p className="text-sm text-gray-400">
            Graphic Design
          </p>
          <p className="text-sm text-gray-500 mt-2">Nov/2022-January/2023</p>
        </div>
        {/* College */}
        <div className="p-4 bg-gray-800 rounded-lg shadow border border-gray-800">
          <h3 className="font-semibold text-white">Government Women College</h3>
          <p className="text-sm text-gray-400">Intermediate in Pre-Medical</p>
          <p className="text-sm text-gray-500 mt-2">2020 - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
