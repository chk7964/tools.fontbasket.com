import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// const LANGUAGES = ['fr', 'en'];

class MyDocument extends Document {
  render() {
    // const pathPrefix = this.props.__NEXT_DATA__.page.split('/')[1];

    // const lang =
    //   LANGUAGES.indexOf(pathPrefix) !== -1 ? pathPrefix : LANGUAGES[0];

    return (
      <Html>
        <Head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        </Head>
        <body>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossOrigin="anonymous"></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;