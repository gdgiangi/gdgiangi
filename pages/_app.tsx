import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.75, maximum-scale=0.75, minimum-scale=0.75, user-scalable=no, target-densityDpi=device-dpi"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
