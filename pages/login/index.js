import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import { moveSideUpDown } from '../../utils/variants';
import supabase from '../../utils/supabase-browser';

const login = () => {
  const session = useSession()
  return (
    <>
      <Head>
        <title>Webminal - Learn and Practise Linux online, Programming online</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Free GNU/Linux Online Terminal and Programming platform '
        />
      </Head>
      <main className='default-container  h-screen'>
        <div className='flex flex-col md:flex-row h-full'>
          <motion.div
            variants={moveSideUpDown(-0, -55)}
            initial='hidden'
            animate='visible'
            className='md:flex-grow  m-10 flex flex-col items-center justify-center pr-5'
          >
            <Image
              src='/images/login.svg'
              width={336}
              height={270}
              alt='login image'
              priority={true}
            />
            <h1 className='mt-10'>Connect with the Tutors</h1>
            <p className='paragraph-3 max-w-xs text-center mt-3'>
              You can easily connect with thousands of tutors by using our
              platform.
            </p>
          </motion.div>
          <motion.div
            variants={moveSideUpDown(-0, 55)}
            initial='hidden'
            animate='visible'
            className='flex md:flex-grow flex-col justify-center items-center px-5'
          >
            <div className='text-center mb-6'>
              <h1 className='mb-2'>Login Now</h1>
              <p className='paragraph-3'>Please login to your account</p>
            </div>
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" providers={['google']} onlyThirdPartyProviders/>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default login;
