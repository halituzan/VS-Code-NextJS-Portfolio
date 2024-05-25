// ** React Import
import { Children } from "react";

// ** Next Import
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/images/apple-touch-icon.png'
          />
          <link rel='shortcut icon' href='/images/favicon.ico' />
          <title>Welcome Halit's Page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
