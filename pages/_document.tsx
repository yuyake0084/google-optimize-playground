import React, { Fragment } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    const { NODE_ENV, GA_TRACKING_ID, OPTIMIZE_CONTAINER_ID  } = process.env
    const isProd = NODE_ENV === 'production';

    console.log(GA_TRACKING_ID)

    return (
      <Html>
        <Head>
          {isProd && (
            <Fragment>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script async src={`https://www.googleoptimize.com/optimize.js?id=${OPTIMIZE_CONTAINER_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', { 'optimize_id': '${OPTIMIZE_CONTAINER_ID}'});
                  `
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;