import { AppProps } from 'next/app';
import { ThemeProvider } from '../components/Layout/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;