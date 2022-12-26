import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('blog_post', params.uid)

  return {
    props: {
      page,
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
