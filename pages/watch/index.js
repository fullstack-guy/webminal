import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../shared/Layout';
import CoursesList from '../../components/CoursesList/CoursesList';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const watch = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <div className='flex flex-col items-center gap-4 p-4 mt-7'>
          <div>
            <Image
              src='/images/temp-video.png'
              className='object-contain'
              width='490px'
              height='304px'
              alt={'temp'}
            />
          </div>

          <h1>Complete Introduction to the Basics of JavaScript</h1>
          <p>
            Here are all the basics that you need to know in order to get
            started.
          </p>
          <div className='w-[100%]'>
            <ProgressBar width={55} color={'bg-secondary'} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default watch;
