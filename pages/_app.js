import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import { MainMenuProvider } from '../context/MainMenuContext';
import '../styles/globals.css';
import '../components/Header/header.css';
import '../components/Input/input.css';
import '../components/CoruseInfo/course-info.css';
import '../components/CircleProgressbar/circleProgressbar.css';
function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <MainMenuProvider>
        <Component {...pageProps} />
      </MainMenuProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
