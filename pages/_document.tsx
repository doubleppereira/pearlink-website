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

        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="pearlink.pt" />
        <meta property="twitter:url" content="https://pearlink.pt/" />
        <meta name="twitter:title" content="Pear Link Systems" />
        <meta
          name="twitter:description"
          content="An company profile of Pear Link Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance"
        />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

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
