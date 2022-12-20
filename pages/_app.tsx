import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { globals } from "../globals";
import { Header } from "../components/Header/Header";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "terminal.css";
import "../styles/base.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <div className="terminal">
      <Head>
        {globals.googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          ></script>
        )}
        {globals.googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}
          ></script>
        )}
      </Head>

      <Header currentRoute={asPath} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default App;
