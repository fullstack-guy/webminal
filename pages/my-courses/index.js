import React from 'react';
import Layout from '../shared/Layout';
import Head from 'next/head';
import MyCoursesList from '../../components/MyCoursesList/MyCoursesList';

const myCourses = () => {
  return (
    <>
      <Head>
        <title>Webminal - Learn and Practise Linux online, Programming online</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <div>
          <h1 className='pl-8 py-10'>My Courses 🗄️</h1>
          <MyCoursesList />
        </div>
      </Layout>
    </>
  );
};

export default myCourses;
