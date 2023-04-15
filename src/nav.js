"use client";
import Image from 'next/image';
import navStyles from './nav.module.css';

import { Jost } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';


const navVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
    closed: {
        x: '100%',
        opacity: 0,
    },
};

const navItemVariants = {
    open: {
        opacity: 1,
        x: 0,
    },
    closed: {
        opacity: 0,
        x: '10%',
    },
};

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
})

const Links = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/about',
        text: 'About',
    },
    {
        href: '/contact',
        text: 'Contact',
    },
    {
        href: 'https://mouri.work',
        text: 'M0UR1 Works',
    }
];

export default function NavCompornent() {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const navMenuOpenToggle = () => {
        console.log(!navMenuOpen);
        setNavMenuOpen(!navMenuOpen);
    };
    useEffect(() => {
        const navShow = () => {
            const nav = document.getElementById('nav');
            if (window.scrollY > 0) {
                nav.classList.add(navStyles.nav_top_Fixed);
            } else {
                if (!navMenuOpen) {
                    console.log(navMenuOpen);
                    nav.classList.remove(navStyles.nav_top_Fixed);
                }
            }
        };
        navShow();
        window.addEventListener('scroll', navShow);
        return () => window.removeEventListener('scroll', navShow);
    }, [navMenuOpen,]);
    const containerRef = useRef(null);
    return (
        <header className={navStyles.nav}>
            <nav className={`${navStyles.nav_top} ${jost.className}`} id='nav'>
                <Link
                    className={navStyles.nav_logo}
                    href="/"
                    >
                    <Image
                        src="/CVF_static_icon.webp"
                        alt="CVF"
                        width={50}
                        height={50}
                        className={navStyles.nav_logo_image}
                    />
                    <p className={navStyles.nav_logo_text}>CVF</p>
                </Link>
                <ul className={navStyles.nav_list}>
                    {Links.map((link) => (
                        <li className={navStyles.nav_item} key={link.href}>
                            <Link 
                                href={link.href}
                                className={navStyles.nav_link}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={`${navStyles.nav_humbger} ${navMenuOpen? navStyles.nav_humbger_Open : ''}`} onClick={navMenuOpenToggle}>
                    <div className={navStyles.nav_humbger_line}></div>
                    <div className={navStyles.nav_humbger_line}></div>
                    <div className={navStyles.nav_humbger_line}></div>
                </div>
                <motion.div
                    initial={false}
                    animate={navMenuOpen ? 'open' : 'closed'}
                    variants={navVariants}
                    ref={containerRef}
                    className={`${navStyles.nav_menu}`}>
                    <ul className={navStyles.nav_menu_list}>
                        {Links.map((link) => (
                            <motion.li
                                variants={navItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={navStyles.nav_menu_item} key={link.href}>
                                <Link
                                    href={link.href}
                                    className={navStyles.nav_menu_link}
                                >
                                    {link.text}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                <div className={`${navStyles.nav_bg} ${navMenuOpen? navStyles.nav_bg_Open: undefined}`} />
            </nav>
        </header>
    )
}