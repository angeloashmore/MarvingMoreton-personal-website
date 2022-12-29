import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const canonicalUrl = `https://marvingmoreton.com` + router.asPath;

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="icon"
              type="image/png"
              href="/public/marving-moreton-favicon.png"
            />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
          <main className={lato.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}
