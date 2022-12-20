import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {


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
