import '../styles/globals.css';
import '../components/Header/header.css';
import '../components/Input/input.css';
import '../components/CoruseInfo/course-info.css';
import '../components/CircleProgressbar/circleProgressbar.css';
import { MainMenuProvider } from '../context/MainMenuContext';
function MyApp({ Component, pageProps }) {
  return (
    <MainMenuProvider>
      <Component {...pageProps} />
    </MainMenuProvider>
  );
}

export default MyApp;
