import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class IceCreamMeterDocument extends Document {
  render() {
    return (
      <html>
        <link rel="stylesheet" type="text/css" href="/styles/base.css" />
        <title>Ice Cream Meter</title>
        <Head></Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default IceCreamMeterDocument;
