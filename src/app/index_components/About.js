import Link from 'next/link';
import styles from './About.module.css';

import { Jost, Zen_Maru_Gothic } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});
const zen_maru_gothic_400 = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "400",
    display: 'swap',
})

export default function About() {
    return (
        <div className={styles.top} id='about'>
            <div className={styles.Layout}>
                <div className={styles.Title}>
                    <p className={`${styles.Title_text} ${jost.className}`}>
                        What&#x27;s CVF?
                        <span className={`${styles.Title_text_ja}`}>
                            CVFとは？
                        </span>
                    </p>
                </div>
                <div className={styles.About}>
                    <p className={`${styles.About_text} ${zen_maru_gothic_400.className}`}>
                        CVFは、音楽が大好きな人たちが集まって、音楽を共有するコミュニティです。
                        <br />
                        このコミュニティでは、音楽を通して、人々がつながり、新しい発見をし、
                        <br />
                        そして、それらを共有することができます。
                        <br />
                        このコミュニティに参加することで、音楽を通して、
                        <br />
                        人々がつながり、新しい発見をし、そして、それらを共有することができます。
                        <br />
                        このコミュニティに参加することで、音楽を通して、
                        <br />
                        人々がつながり、新しい発見をし、そして、それらを共有することができます。
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
        </div>
    )
}