"use client";
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import { FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';

import { Jost, Zen_Maru_Gothic } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});

const links = [
    {
        name: "Topページ",
        href: "/",
        inPageLink: [
            {
                name: "CVFとは",
                href: "#about",
            },
            {
                name: "スケジュール",
                href: "#schedule",
            },
        ],
    },
    {
        name: "参加者ページ",
        href: "/dash",
        inPageLink: [
            {
                name: "参加登録",
                href: "/register",
            },
            {
                name: "ログイン",
                href: "/login",
            },
            {
                name: "投稿",
                href: "/submit",
            }
        ]
    },
    {
        name: "過去企画での作品一覧",
        href: "/archive",
        inPageLink: [
            {
                name: "第1回",
                href: "/1",
            },
            {
                name: "第2回",
                href: "/2",
            },
        ],
    },
    {
        name: "運営メンバー",
        href: "/management",
    },
    {
        name: "お問い合わせ",
        href: "/contact",
    },
    ]

export default function Footer() {
    return (
        <footer className={`${styles.Footer} ${jost.className}`} id='footer'>
            <div className={styles.info}>
                <div className={styles.CVF}>
                    <Image
                        src="/CVF_static_icon.webp"
                        alt="CVF icon"
                        width={100}
                        height={100}
                        className={styles.CVF_icon}
                    />
                    <div className={styles.CVF_copy}>
                        未来へ羽ばたこう
                    </div>
                    <div className={styles.CVF_name}>
                        CVF
                    </div>
                </div>
                <div className={styles.Links}>
                    <div
                        className={`${styles.PageTop}`}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }}>
                        <div>
                            Page Top <span>↑</span>
                        </div>
                    </div>
                    <div className={styles.SNS}>
                        <a
                            className={styles.Icon}
                            href="https://twitter.com/CVFOrner"
                            title='Twitter Official Account'
                            target='_blank'
                            rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a
                            className={styles.Icon}
                            href="https://youtube.com/CVFOrner"
                            title='YouTube Official Channel'
                            target='_blank'
                            rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                        <a
                            className={styles.Icon}
                            href="https://discord.gg/5Q9Q5QJ"
                            title='Discord Official Server'
                            target='_blank'
                            rel="noopener noreferrer">
                            <FaDiscord />
                        </a>
                        <a 
                            className={styles.Icon}
                            href="https://twitter.com/fugumaru_eizo"
                            title='主催者Twitter'
                            target='_blank'
                            rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <nav className={`${styles.Footer_navs} ${jost.className}`}>
                {links.map((link, index) => (
                    <div className={styles.Footer_nav} key={index}>
                        <ul>
                            <li className={styles.nav_Primary}>
                                <Link
                                    href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        {("inPageLink" in link)? link.inPageLink.map((inPageLink, index) => (
                            <li className={styles.nav_Secondary} key={index}>
                                <Link
                                    href={link.href+inPageLink.href}
                                    className={styles.nav_link}>
                                    {inPageLink.name}
                                </Link>
                            </li>
                        )): null}
                        </ul>
                    </div>
                ))}
            </nav>
        </footer>
    )
}