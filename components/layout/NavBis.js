import React, { useState, useRef, useEffect } from 'react';
import classes from './NavBis.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/marving-moreton-developer-logo.png';

import { useRouter } from 'next/router';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function MainNavigation() {
    const router = useRouter();
    const currentRoute = router.pathname;

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > elTopOffset + elHeight) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    // add/remove scroll event listener
    useEffect(() => {
        let header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height);
        };

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <React.Fragment>
            <div
                className={`${classes['navbar']} ${
                    sticky.isSticky ? ' sticky' : ''
                }`}
                ref={headerRef}
                id="sticky-header"
            >
                <header className={classes['header']}>
                    <div className={classes['nav-logo']}>
                        <Link href="/" className={classes['link-box']}>
                            <Image
                                src={logo}
                                width={60}
                                height={60}
                                alt="test"
                                // layout="responsive"
                                // width={133}
                                // height={68}
                            />
                            <h2 className={classes['name']}>Marving Moreton</h2>
                        </Link>
                    </div>

                    <button
                        className={classes['hamburger']}
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            size="2xl"
                            className={`${classes['icon--open']} ${
                                classes['centering']
                            } ${
                                isNavExpanded
                                    ? `${classes['hidden']}`
                                    : `${classes['visible']}`
                            }`}
                        />
                        <div className={classes['centering']}>
                            <FontAwesomeIcon
                                icon={faX}
                                size="2xl"
                                className={`${classes['icon--close']} ${
                                    isNavExpanded
                                        ? `${classes['visible']}`
                                        : `${classes['hidden']}`
                                }`}
                            />
                        </div>
                        {/* icon from Heroicons.com */}
                        {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg> */}
                    </button>

                    <div className={classes['nav-container']}>
                        <nav
                            className={
                                isNavExpanded
                                    ? `${classes['main-nav']} ${classes['navigation-menu']} ${classes['expanded']}`
                                    : `${classes['main-nav']} ${classes['navigation-menu']}`
                            }
                        >
                            <ul className={classes['main-nav-list']}>
                                <li>
                                    <Link legacyBehavior href="/">
                                        <a
                                            className={`${
                                                classes['main-nav-link']
                                            } ${
                                                currentRoute === '/'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setIsNavExpanded(
                                                    !isNavExpanded
                                                );
                                            }}
                                        >
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/menu">
                                        <a
                                            className={`${
                                                classes['main-nav-link']
                                            } ${
                                                currentRoute === '/'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setIsNavExpanded(
                                                    !isNavExpanded
                                                );
                                            }}
                                        >
                                            Development
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link legacyBehavior href="/gallerie">
                                        <a
                                            className={`${
                                                classes['main-nav-link']
                                            } ${
                                                currentRoute === '/'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setIsNavExpanded(
                                                    !isNavExpanded
                                                );
                                            }}
                                        >
                                            SEO
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/notre-histoire">
                                        <a
                                            className={`${
                                                classes['main-nav-link']
                                            } ${
                                                currentRoute === '/'
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setIsNavExpanded(
                                                    !isNavExpanded
                                                );
                                            }}
                                        >
                                            Blog
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <hr className={classes.line}></hr> */}
            </div>
        </React.Fragment>
    );
}

export default MainNavigation;
