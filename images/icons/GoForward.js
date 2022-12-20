import React from 'react';

const GoForward = (props, { stroke }) => {
  return (
    <svg
      width={16}
      height={17}
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5 14.2857L11 8.28571L5 2.28571'
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GoForward;
