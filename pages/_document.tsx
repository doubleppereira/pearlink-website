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
          content="Pear Link Systems its company that excels in Application Development (Mobile, Web and Desktop), UI UX Design and Software Architectures. Experience in Blockchain and Web3, Mobile and Desktop Apps."
        />
        <meta
          name="description"
          content="Pear Link Systems its company that excels in Application Development (Mobile, Web and Desktop), UI UX Design and Software Architectures. Experience in Blockchain and Web3, Mobile and Desktop Apps."
        />
        <meta
          name="keywords"
          content="web3,blockchain,web software,app,ui,maintenance,company,pearlink,profile,software,portugal"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="tags"
          content="web3,blockchain,web software,app,ui,maintenance,company,pearlink,profile,software,portugal"
        />
        <meta property="og:url" content="https://pearlink.pt/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pear Link Systems" />
        <link rel="icon" href="/images/favicon.svg" />
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
