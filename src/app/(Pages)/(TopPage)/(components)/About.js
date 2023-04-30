import Link from 'next/link';
import styles from './About.module.css';
import PageViewAnimate from '@/components/PageViewAnimate';

import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});

export default function About() {
    return (
        <PageViewAnimate>
            <div className={styles.top} id='about'>
                <div className={styles.Layout}>
                    <div className={styles.Title}>
                        <p className={`${styles.Title_text} ${jost.className}`}>
                            What&#x27;s CVF?
                            <span className={`${styles.Title_text_ja}`}>
                                CVFって何？
                            </span>
                        </p>
                    </div>
                    <div className={styles.About}>
                        <p className={`${styles.About_text}`}>
                            CVFとは、オンラインで開催される、参加費無料の映像イベントです。
                            <br />
                            <br />
                            他のイベントにはあまり見かけない、<u>審査員による点数化とランキング付け、軽いアドバイスがある</u>ため、現在の自身の映像力を客観的に見ることができます。
                            <br />
                            <br />
                            審査員は、毎回一般公募を行っています。
                            <br />
                            審査の透明性を高め、また、審査員へのヘイトを防ぐように様々なルール制定をしており、参加する側も審査員に応募する側も、安心して参加できます。
                            <br />
                            <br />
                            初心者の方も大歓迎です！ぜひお気軽にご参加ください！！
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
        </PageViewAnimate>
    )
}