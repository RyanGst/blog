import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, children: styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.children}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
