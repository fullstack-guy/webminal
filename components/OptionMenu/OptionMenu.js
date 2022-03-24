import React from 'react';
import Image from 'next/image';
import Avatar from '../Avatar/Avatar';
import MenuItem from './MenuItem';

const tempMenuOptions = [
  { text: 'Home', icon: '/images/icons/home.svg', isSelected: true },
  { text: 'My Courses', icon: '/images/icons/saved.svg', isSelected: false },
  { text: 'Profile', icon: '/images/icons/user.svg', isSelected: false },
];

const OptionMenu = () => {
  return (
    <section className='flex flex-col justify-center'>
      <div className='default-border p-3  mb-5'>
        <div className='default-container flex items-center gap-2'>
          <div className='px-2'>
            <Avatar img='/images/demo-avatar.webp' />
          </div>
          <div>
            <h4>John Smith</h4>
            <p className='paragraph-4'>johnsmith@gmail.com</p>
          </div>
          <div className='pl-3'>
            <Image
              src='/images/icons/Go-forward.svg'
              width='16px'
              height='16px'
              alt='signing with google button'
            />
          </div>
        </div>
      </div>
      <div className='default-border flex justify-center flex-col  rounded-2xl p-6'>
        {tempMenuOptions.map(({ text, icon, isSelected }) => (
          <MenuItem
            key={text}
            text={text}
            icon={icon}
            isSelected={isSelected}
          />
        ))}
      </div>
    </section>
  );
};

export default OptionMenu;
