import React, { useState } from 'react';

const ProgressBar = ({ width, color }) => {
  const [progress, setProgress] = useState(width);
  console.log(color, progress);
  return (
    <div className='progress-bar-container flex items-center gap-3'>
      <div className='progress-bar bg-gray-100  h-[5px] rounded relative  z-10 w-[100%]'>
        <div
          className={`inner ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h6>{progress}%</h6>
    </div>
  );
};

export default ProgressBar;
