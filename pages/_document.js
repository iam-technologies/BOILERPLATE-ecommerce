import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

// General SEO page
class MyDocument extends Document {
  render() {
    return (
      <html lang="ca">
        <Head>
          {/* You can use the head tag, just not for setting <title> as it leads to unexpected behavior */}
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <meta charSet="utf-8" />
          <meta name="description" content="añada descripción de su tienda" />

          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
