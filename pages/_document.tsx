import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta key="og:title" property="og:title" content="Pear Link Systems" />
        <meta
          key="og:description"
          property="og:description"
          content="An company profile of Pear Link Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance"
        />
        <meta
          name="description"
          content="An company profile of Pear Link Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance"
        />
        <meta
          name="keywords"
          content="web3,blockchain,web software,app,ui,maintenance,company,pearlink,profile"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="tags"
          content="web,app,ui,maintenance,company,pearlink,profile"
        />
        <meta property="og:url" content="https://pearlink.pt/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pear Link Systems" />
        <meta
          property="og:description"
          content="An company profile of Pear Link Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance"
        />

        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
