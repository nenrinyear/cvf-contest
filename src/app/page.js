"use server";
import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import Header from './Header';
import About from './About';

import styles from './page.module.css';
import PageTransition from '@/PageTransition';
import Schedule from './Schedule';
import Footer from '@/Footer';

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
            <div className={`${styles.top} ${zen_maru_gothic.className}`}>
                <Header />
                <main className={styles.main}>
                    <About />
                    <Schedule />
                </main>
                <Footer />
            </div>
        </PageTransition>
    )
}