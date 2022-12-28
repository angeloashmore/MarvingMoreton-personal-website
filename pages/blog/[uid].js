import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../slices'
import React from 'react'

import PostHeader from "../../components/ui/Blog//PostHeader";


const Page = ({ page, navigation, settings }) => {
  console.log(page.data.title)
  return (
    <React.Fragment>
      <PostHeader title={page.data.title[0].text} />
      <SliceZone slices={page.data.slices} components={components} />
    </React.Fragment>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('blog_post', params.uid)
console.log(page.data.title[0].text)
  return {
    props: {
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      ogImage: page.data.og_image.url,
      title: page.data.title,
      datePublished: page.data.publication_date,
      page: page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('blog_post')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
