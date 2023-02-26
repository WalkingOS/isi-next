import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/global.scss';

import type { AppProps } from 'next/app';
import ContextProvider from '@/context/ContextProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ContextProvider><Component {...pageProps} /></ContextProvider>
);

export default MyApp;
