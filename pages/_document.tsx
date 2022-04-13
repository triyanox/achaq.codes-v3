import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="/fonts/Matter-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-BoldItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-Heavy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-HeavyItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Matter-LightItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-MediumItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-RegularItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
         <link
          rel="preload"
          href="/fonts/Matter-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Matter-SemiBoldItalic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-white dark:bg-black antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
