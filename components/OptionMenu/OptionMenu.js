import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Avatar from '../Avatar/Avatar';
import MenuItem from './MenuItem';
import Button from '../Button/Button';
import Home from '../../Images/icons/Home';
import Saved from '../../Images/icons/Saved';
import User from '../../Images/icons/User';
import { useRouter } from 'next/router';
const OptionMenu = () => {
  const router = useRouter();
  const [tempMenuOptions, setTempMenuOptions] = useState([
    { text: 'Home', icon: <Home />, isSelected: true, url: '/' },
    {
      text: 'My Courses',
      icon: <Saved />,
      isSelected: false,
      url: '/my-courses/',
    },
    {
      text: 'Profile',
      icon: <User />,
      isSelected: false,
      url: '/profile',
    },
  ]);

  useEffect(() => {
    const item = tempMenuOptions.find((x) => x.isSelected);
  }, [tempMenuOptions]);

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
      <div className='default-border flex justify-center flex-col  rounded-2xl p-6 mb-5'>
        {tempMenuOptions.map((item, index) => {
          const { text, icon, isSelected, url } = item;

          return (
            <MenuItem
              key={text}
              text={text}
              icon={icon}
              isSelected={isSelected}
              url={url}
              onClick={() => {
                const newOptions = tempMenuOptions.map((item) => ({
                  ...item,
                  isSelected: false,
                }));
                const newSelected = {
                  ...tempMenuOptions[index],
                  isSelected: true,
                };

                newOptions[index] = newSelected;
                setTempMenuOptions(newOptions);
                router.push(item.url);
                // console.log(newOptions);
              }}
            />
          );
        })}
      </div>
      <div className='hidden default-border md:flex justify-center flex-col items-center  rounded-2xl p-6'>
        <Image
          src='/images/icons/Rounded-corners.svg'
          width='64px'
          height='64px'
          className='object-contain'
          alt='signing with google button'
        />
        <h1 className='mt-4'>Upgrade Plan</h1>
        <p className='paragraph-3 max-w-[280px] text-center mt-6 mb-10'>
          Become a <h5 className='inline'>Pro</h5> member today and save more
          then <h4 className='inline '>75%</h4>
        </p>

        <Button
          text='Sea deal'
          onClick={() => {
            alert('click');
          }}
        />
        <div className='default-border   rounded-2xl min-w-[300px] text-center mt-14'>
          <h2>Log out</h2>
        </div>
      </div>
    </section>
  );
};

export default OptionMenu;
