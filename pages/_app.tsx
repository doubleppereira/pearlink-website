import 'styles/globals.css';
import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';
import { DefaultSeo } from 'next-seo';
import AOS from 'aos';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <>
      <DefaultSeo
        openGraph={{
          title: 'Pear Link Systems',
          description:
            'Pear Link Systems its company that excels in Application Development (Mobile, Web and Desktop), UI UX Design and Software Architectures',
          images: [
            {
              url: 'https://pearlink.pt/images/opengraph-image.png',
              width: 1200,
              height: 600,
              alt: 'company brand',
            },
          ],
          url: 'https://pearlink.pt/',
          type: 'website',
          locale: 'en_US',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
