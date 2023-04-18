import Link from 'next/link';
import styles from './About.module.css';

import { Jost, Zen_Maru_Gothic } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});
const zen_maru_gothic_300 = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "300",
    display: 'swap',
})

export default function About() {
    return (
        <div className={styles.top}>
            <div className={styles.Title}>
                <p className={`${styles.Title_text} ${jost.className}`}>
                    What&#x27;s CVF?
                    <span className={`${styles.Title_text_ja}`}>
                        CVFとは？
                    </span>
                </p>
            </div>
            <div className={styles.About}>
                <p className={`${styles.About_text} ${jost.className}`}>
                    CVFは、音楽が大好きな人たちが集まって、音楽を共有するコミュニティです。
                </p>
                <div className={styles.GoToAboutPage}>
                    <p className={`${styles.GoToAboutPage_text} ${jost.className}`}>
                        <Link
                            href="/about"
                            className={styles.GoToAboutPage_text_link}>
                            CVFについてもっと知る
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}