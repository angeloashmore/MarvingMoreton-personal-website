import Head from 'next/head';
import PartnersBox from '../components/ui/Shared/PartnersBox';
import { createClient } from '../prismicio';
import { components } from '../slices';
import { SliceZone } from '@prismicio/react';
import { useRouter } from 'next/router';
export default function Homepage(props) {
    const router = useRouter();
    const currentRoute = router.pathname;

    const {
        metaTitle,
        metaDescription,
        ogImage,
        ogImageAlt,
        navigation,
        settings,
        page
    } = props;

    function structuredDataOrg() {
        return {
            __html: `{
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": "Marving Moreton",
      "url": "https://marvingmoreton.com/",
      "logo": "https://images.prismic.io/marving-moreton/672d8c7d-8a32-4bb8-a642-0267f05c2a99_marving-moreton-favicon.png?auto=compress,format"
    }`
        };
    }

    return (
        <div>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} key="desc" />
                <link rel="canonical" href="/" key="canonical" />

                {/* <!-- Twitter Card data --> */}
                <meta name="twitter:card" content="summary" />
                {/* <meta name="twitter:site" content="@publisher_handle" /> */}
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                {/* <meta name="twitter:creator" content="@author_handle" /> */}
                {/* <-- Twitter Summary card images must be at least 120x120px --> */}
                <meta name="twitter:image" content={ogImage} />

                {/* <!-- Open Graph data --> */}
                <meta property="og:title" content={metaTitle} />
                <meta property="og:type" content="page" />
                <meta property="og:url" content={currentRoute} />
                <meta property="og:image" content={ogImage} alt={ogImageAlt} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:site_name" content="Marving Moreton" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={structuredDataOrg()}
                    key="org-jsonld"
                />
            </Head>

            <main>
                <SliceZone slices={page.data.slices} components={components} />
            </main>
        </div>
    );
}

// export async function getStaticProps({ previewData }) {
//   const client = createClient({ previewData });

//   const page = await client.getSingle("homepage");

//   return {
//     props: {
//       page,
//     },
//   };
// }

export async function getStaticProps({ previewData, locale }) {
    // Prismic client
    const clientPrismic = createClient({ previewData });
    const page = await clientPrismic.getSingle('homepage', { lang: locale });

    return {
        props: {
            metaTitle: page.data.meta_title,
            metaDescription: page.data.meta_description,
            ogImage: page.data.og_image.url,
            ogImageAlt: page.data.og_image.alt,
            page: page
            // totalPages: totalPages,
            // page: page,
        }
    };
}
