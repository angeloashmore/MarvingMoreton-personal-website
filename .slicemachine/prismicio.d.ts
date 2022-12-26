// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Blog_Home documents */
type BlogHomeDocumentData = Record<string, never>;
/**
 * Blog_Home document from Prismic
 *
 * - **API ID**: `blog_home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogHomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BlogHomeDocumentData>, "blog_home", Lang>;
/** Content for Blog_Post documents */
type BlogPostDocumentData = Record<string, never>;
/**
 * Blog_Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogPostDocumentData>, "blog_post", Lang>;
/** Content for DEV_Child documents */
type DevChildDocumentData = Record<string, never>;
/**
 * DEV_Child document from Prismic
 *
 * - **API ID**: `dev_child`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DevChildDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<DevChildDocumentData>, "dev_child", Lang>;
/** Content for DEV_Mother documents */
type DevMotherDocumentData = Record<string, never>;
/**
 * DEV_Mother document from Prismic
 *
 * - **API ID**: `dev_mother`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DevMotherDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<DevMotherDocumentData>, "dev_mother", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeroHomeSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroHomeSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for SEO_Child documents */
type SeoChildDocumentData = Record<string, never>;
/**
 * SEO_Child document from Prismic
 *
 * - **API ID**: `seo_child`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeoChildDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SeoChildDocumentData>, "seo_child", Lang>;
/** Content for SEO_Mother documents */
type SeoMotherDocumentData = Record<string, never>;
/**
 * SEO_Mother document from Prismic
 *
 * - **API ID**: `seo_mother`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeoMotherDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SeoMotherDocumentData>, "seo_mother", Lang>;
export type AllDocumentTypes = BlogHomeDocument | BlogPostDocument | DevChildDocument | DevMotherDocument | HomepageDocument | PageDocument | SeoChildDocument | SeoMotherDocument;
/**
 * Primary content in HeroHome → Primary
 *
 */
interface HeroHomeSliceDefaultPrimary {
    /**
     * Title field in *HeroHome → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_home.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroHome → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_home.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *HeroHome → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_home.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * CTA_1_anchor field in *HeroHome → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_home.primary.cta_1_anchor
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_1_anchor: prismicT.KeyTextField;
    /**
     * CTA_1_Link field in *HeroHome → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_home.primary.cta_1_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_1_link: prismicT.LinkField;
    /**
     * CTA_2_anchor field in *HeroHome → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_home.primary.cta_2_anchor
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_2_anchor: prismicT.KeyTextField;
    /**
     * CTA_2_Link field in *HeroHome → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_home.primary.cta_2_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_2_link: prismicT.LinkField;
}
/**
 * Default variation for HeroHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroHome`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroHomeSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroHomeSliceDefaultPrimary>, never>;
/**
 * Slice variation for *HeroHome*
 *
 */
type HeroHomeSliceVariation = HeroHomeSliceDefault;
/**
 * HeroHome Shared Slice
 *
 * - **API ID**: `hero_home`
 * - **Description**: `HeroHome`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroHomeSlice = prismicT.SharedSlice<"hero_home", HeroHomeSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BlogHomeDocumentData, BlogHomeDocument, BlogPostDocumentData, BlogPostDocument, DevChildDocumentData, DevChildDocument, DevMotherDocumentData, DevMotherDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SeoChildDocumentData, SeoChildDocument, SeoMotherDocumentData, SeoMotherDocument, AllDocumentTypes, HeroHomeSliceDefaultPrimary, HeroHomeSliceDefault, HeroHomeSliceVariation, HeroHomeSlice };
    }
}
