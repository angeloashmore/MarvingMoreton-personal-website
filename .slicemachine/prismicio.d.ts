// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * title field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * description field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
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
type HomepageDocumentDataSlicesSlice = FaqSlice | ImageFeaturedSlice | HeroHomeSlice;
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
export type AllDocumentTypes = HomepageDocument;
/**
 * Primary content in BlogHero → Primary
 *
 */
interface BlogHeroSliceDefaultPrimary {
    /**
     * Title field in *BlogHero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: blog_hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *BlogHero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: blog_hero.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for BlogHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `BlogHero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogHeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<BlogHeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *BlogHero*
 *
 */
type BlogHeroSliceVariation = BlogHeroSliceDefault;
/**
 * BlogHero Shared Slice
 *
 * - **API ID**: `blog_hero`
 * - **Description**: `BlogHero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogHeroSlice = prismicT.SharedSlice<"blog_hero", BlogHeroSliceVariation>;
/**
 * Primary content in Faq → Primary
 *
 */
interface FaqSliceDefaultPrimary {
    /**
     * Title field in *Faq → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: faq.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Faq → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: faq.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Faq → Items
 *
 */
export interface FaqSliceDefaultItem {
    /**
     * test field in *Faq → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.items[].test
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    test: prismicT.RichTextField;
}
/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FaqSliceDefaultPrimary>, Simplify<FaqSliceDefaultItem>>;
/**
 * Slice variation for *Faq*
 *
 */
type FaqSliceVariation = FaqSliceDefault;
/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSlice = prismicT.SharedSlice<"faq", FaqSliceVariation>;
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
/**
 * Primary content in ImageFeatured → Primary
 *
 */
interface ImageFeaturedSliceDefaultPrimary {
    /**
     * Title field in *ImageFeatured → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image_featured.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ImageFeatured → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: image_featured.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for ImageFeatured Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageFeatured`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageFeaturedSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageFeaturedSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ImageFeatured*
 *
 */
type ImageFeaturedSliceVariation = ImageFeaturedSliceDefault;
/**
 * ImageFeatured Shared Slice
 *
 * - **API ID**: `image_featured`
 * - **Description**: `ImageFeatured`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageFeaturedSlice = prismicT.SharedSlice<"image_featured", ImageFeaturedSliceVariation>;
/**
 * Primary content in Services → Primary
 *
 */
interface ServicesSliceDefaultPrimary {
    /**
     * Title field in *Services → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: services.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Services → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: services.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Services`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ServicesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ServicesSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Services*
 *
 */
type ServicesSliceVariation = ServicesSliceDefault;
/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: `Services`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ServicesSlice = prismicT.SharedSlice<"services", ServicesSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, AllDocumentTypes, BlogHeroSliceDefaultPrimary, BlogHeroSliceDefault, BlogHeroSliceVariation, BlogHeroSlice, FaqSliceDefaultPrimary, FaqSliceDefaultItem, FaqSliceDefault, FaqSliceVariation, FaqSlice, HeroHomeSliceDefaultPrimary, HeroHomeSliceDefault, HeroHomeSliceVariation, HeroHomeSlice, ImageFeaturedSliceDefaultPrimary, ImageFeaturedSliceDefault, ImageFeaturedSliceVariation, ImageFeaturedSlice, ServicesSliceDefaultPrimary, ServicesSliceDefault, ServicesSliceVariation, ServicesSlice };
    }
}
