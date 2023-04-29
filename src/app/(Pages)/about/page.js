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
                </main>
                <Footer />
            </div>
        </PageTransition>
    )
}