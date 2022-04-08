import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuItem = ({ text, icon, isSelected, url, onClick }) => {
  // console.log('render', isSelected);
  let isSelectedCss = '';
  if (isSelected) {
    isSelectedCss =
      'bg-primary border-primary border rounded-3xl hover:bg-primary-dark transition-all ';
  }
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`flex  cursor-pointer  mb-3 p-4   gap-2 items-center ${isSelectedCss}`}
    >
      <div>{icon}</div>
      {isSelected ? <h4 className='flex-grow'>{text}</h4> : <p>{text}</p>}
    </div>
  );
};

export default MenuItem;
