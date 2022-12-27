import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Source_Sans_Pro } from "@next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const canonicalUrl = `https://marvingmoreton.com` + router.asPath;

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/public/marving-moreton-favicon.png"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
