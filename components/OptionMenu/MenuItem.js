import React from 'react';
import Image from 'next/image';

const MenuItem = ({ text, icon, isSelected }) => {
  let isSelectedCss = '';
  if (isSelected) {
    isSelectedCss =
      'bg-primary border-primary border rounded-3xl hover:bg-primary-dark transition-all ';
  }
  return (
    <div
      className={`flex  cursor-pointer  mb-3 p-4   gap-2 items-center ${isSelectedCss}`}
    >
      <div>
        <Image
          src={icon}
          className='object-contain'
          width='36'
          height='36px'
          alt={text}
        />
      </div>
      {isSelected ? <h4 className='flex-grow'>{text}</h4> : <p>{text}</p>}
    </div>
  );
};

export default MenuItem;
