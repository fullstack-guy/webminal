import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
const login = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Free GNU/Linux Online Terminal and Programming platform '
        />
      </Head>
      <main className='default-container'>
        <div className='flex flex-col md:flex-row h-full'>
          <div className='flex-grow  flex flex-col items-center justify-center pr-5'>
            <Image
              src='/images/login.svg'
              width='336'
              height='270'
              alt='login image'
            />
            <h1 className='mt-10'>Connect with the Tutors</h1>
            <p className='paragraph-3 max-w-xs text-center mt-3'>
              You can easily connect with thousands of tutors by using our
              platform.
            </p>
          </div>
          <div className='flex flex-grow flex-col justify-center items-center px-5'>
            <div className='text-center mb-6'>
              <h1 className='mb-2'>Login Now</h1>
              <p className='paragraph-3'>Please login to your account</p>
            </div>
            <div className='rounded-lg  text-center  bg-primary w-full relative  hover:bg-primary-dark cursor-pointer  transition-all  hover:text-white '>
              <h3 className='hover:text-white  p-2'>Signing with Google</h3>
              <div className='absolute  right-1.5 top-3 mt-[2px] '>
                <Image
                  src='/images/icons/Go-forward.svg'
                  width='16px'
                  height='16px'
                  alt='signing with google button'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default login;
