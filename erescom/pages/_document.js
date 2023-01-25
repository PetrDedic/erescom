import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="../fonts/Square.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../fonts/Squareo.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Share:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Share:ital,wght@0,400;0,700;1,400;1,700&display=swap");
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
