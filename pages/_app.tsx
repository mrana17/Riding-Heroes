import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Riding Heroes</title>
        <link rel="icon" href="/full-Logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
