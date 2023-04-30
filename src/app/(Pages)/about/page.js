import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import PageHero from '@/components/Hero';

import styles from './page.module.css';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
})
const zen_maru_gothic = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "500",
    display: 'swap',
})

export default function Home() {
    return (
        <PageTransition>
            <PageHero
                Title="CVFとは"
            />
            <div className={`${styles.top} ${zen_maru_gothic.className}`}>
                <main className={styles.main}>
                    <div className={styles.main_layout}>
                        <div className={styles.main_layout_title}>
                            <p className={`${styles.main_layout_title_text} ${jost.className}`}>
                                CVFとは
                            </p>
                        </div>
                        <div className={styles.main_layout_content}>
                            <p className={`${styles.main_layout_content_text}`}>
                                CVFとは、
                                <span className={`${styles.main_layout_content_text_highlight}`}>
                                    Creative Video Festival
                                </span>
                                の略称です。
                            </p>
                            <p className={`${styles.main_layout_content_text}`}>
                                本コンテストは、
                                <span className={`${styles.main_layout_content_text_highlight}`}>
                                    作品を作ることを通して、
                                </span>
                                作品を作ることの楽しさを知ってもらうことを目的としています。
                            </p>
                            <p className={`${styles.main_layout_content_text}`}>
                                現在調整中...
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </PageTransition>
    )
}