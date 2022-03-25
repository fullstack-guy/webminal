import React from 'react';
import Head from 'next/head';
import Layout from '../shared/Layout';
import CircleProgressbar from '../../components/CircleProgressbar/CircleProgressbar';
import Avatar from '../../components/Avatar/Avatar';
import Notifications from '../../components/Notifications/Notifications';

const profile = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <div>
          <h1 className='pl-8 py-10'>profile ✨</h1>
          <div className='flex flex-col items-center'>
            <div className='relative'>
              <CircleProgressbar />
              <div className='absolute top-[38%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                <Avatar
                  img='/images/demo-avatar.webp'
                  size={120}
                  withBorder={false}
                />
              </div>
              <div className='absolute top-[42%] left-[50%] translate-y-[50%] translate-x-[-50%] bg-primary px-2 py-2  text-center rounded-2xl min-w-[80px] border-2 border-white'>
                <h4>Pro</h4>
              </div>
            </div>
            <div className='-mt-[50px]'>
              <h3>John Smith 💯</h3>
              <p className='paragraph-3 -ml-[8px]'>johnsmith@gmail.com</p>
            </div>
          </div>
          <section className='-mt-[30px]'>
            <h3 className='pl-8 pb-4 pt-12'>Settings ⚙️</h3>
            <Notifications
              size={40}
              icon={'icon-tag-search.svg'}
              header='Achievements'
              text='Learn all the basics that you need to know to get started.'
            />
            <Notifications
              size={40}
              icon={'icon-tag-docs.svg'}
              header='Notifications'
              text='Manage the way we send you all the notifications and alerts.'
            />
            <Notifications
              size={40}
              icon={'icon-tag-settings.svg'}
              header='Payment Details'
              text='You have 1 card ending 6789 linked to your account.'
            />
            <Notifications
              size={40}
              icon={'icon-tag-star.svg'}
              header='Preferences'
              text='Manage all the preferences and permissions.'
            />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default profile;
