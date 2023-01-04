import classes from './ChildsListSeo.module.css';
import React from 'react';
import Link from 'next/link';
import { PrismicLink, PrismicText } from '@prismicio/react';

export default function ChildsListSeo(props) {
    const { childList } = props;

    return (
        <section className={classes['childs-section']}>
            <div className={classes['childs-grid']}>
                <div className={classes['childs-list']}>
                    {childList &&
                        childList.map((child) => (
                            <React.Fragment key={child.id}>
                                <PrismicLink
                                    document={child}
                                    className={classes['card-link']}
                                >
                                    <div className={classes['child-card']}>
                                        <h3>{child.data.title}</h3>
                                    </div>
                                </PrismicLink>
                            </React.Fragment>
                        ))}
                </div>
            </div>
        </section>
    );
}

// export async function getStaticProps({ params, previewData }) {
//     const client = createClient({ previewData });

//     const page = await client.getByUID('seo_child', params.uid);
//     const pages = await client.getAllByType('seo_child');
//     // console.log(pages);
//     return {
//         props: {
//             page,
//             pages: pages
//         }
//     };
// }
