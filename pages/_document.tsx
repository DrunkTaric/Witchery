import Nav from "@/components/nav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Venom</title>
        <meta name="author" content="DrunkTaric" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Best poison company in the world" />
      </Head>
      <body>
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
