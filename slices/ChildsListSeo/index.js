import React from 'react';
import { PrismicRichText, PrismicText, PrismicLink } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { createClient } from '../../prismicio';
import classes from './ChildsList.module.css';
import ChildsListSeo from '../../components/ui/Shared/ChildsListSeo';
/**
 * @typedef {import("@prismicio/client").Content.InternalChildsSlice} InternalChildsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InternalChildsSlice>} InternalChildsProps
 * @param { InternalChildsProps }
 */
const InternalChilds = ({ slice }, pages) => (
    <ChildsListSeo pages={pages} />

);

export default InternalChilds;
