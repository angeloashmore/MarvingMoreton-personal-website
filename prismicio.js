import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./sm.json";
import * as prismicH from '@prismicio/helpers'
/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: "homepage",
    path: "/",
  },
  {
    type: "page",
    path: "/:uid",
  },
  {
    type: "seo_mother",
    path: "/seo",
  },
  {
    type: "seo_child",
    path: "/seo/:uid",
  },
  {
    type: "dev_mother",
    path: "/dev",
  },
  {
    type: "dev_child",
    path: "/dev/:uid",
  },

  { type: "blog_homepage", path: "/blog" },
  {
    type: "blog_post",
    path: "/blog/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
