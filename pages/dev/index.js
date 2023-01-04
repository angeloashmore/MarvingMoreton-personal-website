import { PrismicLink, PrismicText } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { SliceZone } from '@prismicio/react';
import { createClient } from '../../prismicio';
import { components } from '../../slices';

const DevMother = ({ page, navigation, settings }) => {
    return <SliceZone slices={page.data.slices} components={components} />;
};

export default DevMother;

export async function getStaticProps({ previewData, locale }) {
    if (locale === 'fr') {
        locale = 'fr-wo';
    }
    const client = createClient({ previewData });

    const page = await client.getSingle('dev_mother', { lang: locale });

    return {
        props: {
            page
        }
    };
}
