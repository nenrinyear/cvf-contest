"use client";
import Image from 'next/image';
import navStyles from './nav.module.css';

import { Jost } from 'next/font/google';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
})

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
                nav.classList.remove(navStyles.nav_top_Fixed);
            }
        };
        window.addEventListener('scroll', navShow);
        navShow();
    }, []);
    return (
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
                <li className={navStyles.nav_item}>
                    <Link href="/" className={navStyles.nav_link}>Home</Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/about" className={navStyles.nav_link}>About</Link>
                </li>
                <li className={navStyles.nav_item}>
                    <Link href="/contact" className={navStyles.nav_link}>Contact</Link>
                </li>
            </ul>
            <div className={`${navStyles.nav_humbger} ${navMenuOpen? navStyles.nav_humbger_Open : ''}`} onClick={navMenuOpenToggle}>
                <div className={navStyles.nav_humbger_line}></div>
                <div className={navStyles.nav_humbger_line}></div>
                <div className={navStyles.nav_humbger_line}></div>
            </div>
            <div className={`${navStyles.nav_menu} ${navMenuOpen ? navStyles.nav_menu_Open : ''}`}>
                <ul className={navStyles.nav_menu_list}>
                    <li className={navStyles.nav_menu_item}>
                        <Link href="/" className={navStyles.nav_menu_link}>Home</Link>
                    </li>
                    <li className={navStyles.nav_menu_item}>
                        <Link href="/about" className={navStyles.nav_menu_link}>About</Link>
                    </li>
                    <li className={navStyles.nav_menu_item}>
                        <Link href="/contact" className={navStyles.nav_menu_link}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}