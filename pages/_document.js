
import Document, { Html, Head, Main, NextScript } from 'next/document'
const APP_NAME = "Christopher Harju"
const APP_DESCRIPTION = "Christopher Harju's portfolio and personal website"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/android-chrome-192x192.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
          />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="keywords" content="Christopher, Harju, Finland, Porfolio, Website, React, JS, Node, Express"/>
          <meta name="author" content="Christopher Harju"></meta>
          <meta name="theme-color" content="#000000"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
