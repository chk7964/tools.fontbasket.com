import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <body>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" async />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;