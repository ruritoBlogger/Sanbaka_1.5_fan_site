import "./_app.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>さんばか1.5周年ファンサイト</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
