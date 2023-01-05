import { localeOverrides } from '../prismicio';

/**
 * Resolves a locale from Next.js into one that Prismic uses.
 *
 * @param {string} nextLocale
 *
 * @returns {string} The resolved locale.
 */
export function resolveLocaleFromNext(nextLocale) {
    const entries = Object.entries(localeOverrides);

    const overrideEntry = entries.find(([_original, override]) => {
        return override === nextLocale;
    });

    return overrideEntry ? overrideEntry[0] : nextLocale;
}
