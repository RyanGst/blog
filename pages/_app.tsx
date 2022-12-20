import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { globals } from "../globals";


import Script from "next/script";

import "terminal.css";

import "../styles/base.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <div className="terminal">
      <Head>
        {globals.googleAnalyticsId && (
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          ></Script>
        )}
        {globals.googleAnalyticsId && (
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}
          ></Script>
        )}
      </Head>

      <Header currentRoute={asPath} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
