import { useState, useEffect } from "react";
import Head from "next/head";
import { useSession } from "@supabase/auth-helpers-react";

import CoursesList from "../components/CoursesList/CoursesList";

import Layout from "./shared/Layout";
import Login from "../pages/login";

export default function Home() {
  const session = useSession();
  return (
    <>
      <Head>
        <title>Webminal - Learn and Practise Linux online, Programming online</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!session ? (
        <Login />
      ) : (
        <Layout>
          <CoursesList />
        </Layout>
      )}
    </>
  );
}
