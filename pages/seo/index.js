import { SliceZone } from '@prismicio/react'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

const SeoMother = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default SeoMother

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('seo_mother')

  return {
    props: {
      page,
    },
  }
}