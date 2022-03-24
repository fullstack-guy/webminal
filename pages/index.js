import Head from 'next/head';

import Layout from './shared/Layout';

const isAuth = true;

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>Hello world</Layout>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  if (!isAuth) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
