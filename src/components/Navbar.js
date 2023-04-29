"use client";
import Image from 'next/image';
import navStyles from './Navbar.module.css';

import { Jost } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

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


export default function NavCompornent({ isStaticFixed = false, isFixedTop = false }) {
    const { data: session, status } = useSession();
    const Links = [
        {
            href: '/',
            text: 'Home',
        },
        {
            href: '/about',
            text: 'About',
        },
    ];

    if (status === "authenticated") {
        Links.push({
            href: '/dash',
            text: 'MyPage',
        });
        Links.push({
            href: '/api/auth/signout',
            text: 'Logout',
        });
    } else {
        Links.push({
            href: '/dash/login',
            text: 'Login',
        });
    }
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const navMenuOpenToggle = () => {
        console.log(!navMenuOpen);
        const nav = document.getElementById('bg');
        if (navMenuOpen) {
            setTimeout(() => {
                nav.style.display = 'none';
            }, 300);
        } else {
            nav.style.display = 'block';
            nav.style.opacity = '0';
        }
        setTimeout(() => {
            nav.style.opacity = null;
            setNavMenuOpen(!navMenuOpen)
        }, 100);
    };
    useEffect(() => {
        const navShow = () => {
            const nav = document.getElementById('nav');
            if (isStaticFixed) {
                nav.classList.add(navStyles.Top_Fixed);
                return;
            };
            if (window.scrollY > 0) {
                nav.classList.add(navStyles.Top_Fixed);
            } else {
                if (!navMenuOpen) {
                    console.log(navMenuOpen);
                    nav.classList.remove(navStyles.Top_Fixed);
                }
            }
        };
        navShow();
        window.addEventListener('scroll', navShow);
        return () => window.removeEventListener('scroll', navShow);
    }, [navMenuOpen, isStaticFixed]);
    const containerRef = useRef(null);
    return (
        <header className={navStyles.Nav}>
            <nav className={`${navStyles.Top} ${jost.className} ${isFixedTop? navStyles.Fixed_Top: ''}`} id='nav'>
                <Link
                    className={navStyles.Logo}
                    href="/"
                    >
                    <Image
                        src="/CVF_static_icon.webp"
                        alt="CVF"
                        width={50}
                        height={50}
                        className={navStyles.Logo_Image}
                    />
                    <p className={navStyles.Logo_Text}>CVF</p>
                </Link>
                <ul className={navStyles.List}>
                    {Links.map((link) => (
                        <li className={navStyles.Item} key={link.href}>
                            <Link 
                                href={link.href}
                                className={navStyles.Link}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={`${navStyles.Humbger} ${navMenuOpen? navStyles.Humbger_Open : ''}`} onClick={navMenuOpenToggle}>
                    <div className={navStyles.Humbger_Line}></div>
                    <div className={navStyles.Humbger_Line}></div>
                    <div className={navStyles.Humbger_Line}></div>
                </div>
                <motion.div
                    initial={false}
                    animate={navMenuOpen ? 'open' : 'closed'}
                    variants={navVariants}
                    ref={containerRef}
                    className={`${navStyles.Menu}`}>
                    <ul className={navStyles.Menu_List}>
                        {Links.map((link) => (
                            <motion.li
                                variants={navItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={navStyles.Menu_Item} key={link.href}>
                                <Link
                                    href={link.href}
                                    className={navStyles.Menu_Link}
                                    onClick={navMenuOpenToggle}
                                >
                                    {link.text}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                <div className={`${navStyles.bg} ${navMenuOpen ? navStyles.bg_Open : ''}`} id="bg" style={{display: 'none',}} />
            </nav>
        </header>
    )
}