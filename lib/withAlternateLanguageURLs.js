import * as prismicH from '@prismicio/helpers';

/**
 * Adds a `url` property to each Prismic document's `alternate_language` element.
 *
 * This is useful when you need to link to a document's alternative language.
 *
 * @param {import("@prismicio/types").PrismicDocument} doc
 * @param {import("@prismicio/client").Client} client
 *
 * @returns {Promise<import("@prismicio/types").PrismicDocument>}
 */
export const withAlternateLanguageURLs = async (doc, client) => {
    const alternate_languages = await Promise.all(
        doc.alternate_languages.map(async (alternateLanguage) => {
            const doc = await client.getByID(alternateLanguage.id);

            return {
                ...alternateLanguage,
                url: prismicH.asLink(doc)
            };
        })
    );

    return {
        ...doc,
        alternate_languages
    };
};
