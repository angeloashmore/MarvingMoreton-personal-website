import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import classes from '../../components/ui/Shared/PartnersLine.module.css';
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.PartnersLineSlice} PartnersLineSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PartnersLineSlice>} PartnersLineProps
 * @param { PartnersLineProps }
 */

const PartnersLine = ({ slice }) => (
    <section className={classes['section--partners']}>
        <div className={classes['container--partners']}>
            <h2 className="heading-secondary">
                At Agency side, Client side or as Freelancer
            </h2>

            <div className={classes['partners-logos-box']}>
                <Image
                    className={`${classes['partner-logo']} ${classes['continental']}`}
                    src="/logos/continental-grey.svg"
                    width={180}
                    height={40}
                    alt="continental logo"
                    // width={50}
                    // height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className={`${classes['partner-logo']} ${classes['crakrevenue']}`}
                    src="/logos/crakrevenue-grey.svg"
                    width={180}
                    height={40}
                    alt="crakrevenue logo"
                    // width={50}
                    // height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className={`${classes['partner-logo']} ${classes['sigfox']}`}
                    src="/logos/sigfox-grey.svg"
                    width={180}
                    height={40}
                    alt="sigfox IoT logo "
                    // width={50}
                    // height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className={`${classes['partner-logo']} ${classes['accor-hotel']}`}
                    src="/logos/accor-hotels-grey.svg"
                    width={180}
                    height={40}
                    alt="Accor Hotels logo"
                    // width={50}
                    // height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className={`${classes['partner-logo']} ${classes['sephora']}`}
                    src="/logos/sephora-grey.svg"
                    width={180}
                    height={40}
                    alt="sephora logo"
                    // width={50}
                    // height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
                <Image
                    className={`${classes['partner-logo']} ${classes['sephora']}`}
                    src="/logos/tourcrib-grey.svg"
                    width={180}
                    height={40}
                    alt="sephora logo"
                    // width={50}
                    // height={50}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />
            </div>
        </div>
    </section>
);

export default PartnersLine;
