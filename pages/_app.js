import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Lato } from '@next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700', '900']
});

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const canonicalUrl = `https://marvingmoreton.com` + router.asPath;

    return (
        <PrismicProvider
            linkResolver={linkResolver}
            internalLinkComponent={({ href, children, locale, ...props }) => (
                <Link legacyBehavior href={href} locale={locale}>
                    <a {...props}>{children}</a>
                </Link>
            )}
        >
            <PrismicPreview repositoryName={repositoryName}>
                {/* <Layout> */}
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="https://images.prismic.io/marving-moreton/672d8c7d-8a32-4bb8-a642-0267f05c2a99_marving-moreton-favicon.png?auto=compress,format"
                    />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <main className={lato.className}>
                    <Component {...pageProps} />
                </main>
                {/* </Layout> */}
            </PrismicPreview>
        </PrismicProvider>
    );
}
