import { AppProps } from 'next/app';
import GlobalStyle from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
