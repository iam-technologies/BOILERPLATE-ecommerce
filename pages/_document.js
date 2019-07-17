import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  render() {
    const { themeContext } = this.props;

    return (
      <html lang="en-US">
        <Head>
          <meta
            name="theme-color"
            content={themeContext ? themeContext.theme.palette.primary.main : null}
          />
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

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(<App {...props} />)
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
