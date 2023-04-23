"use server";
import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import Header from './index_components/Header';
import About from './index_components/About';

import styles from './index_components/page.module.css';
import PageTransition from './components/PageTransition';
import Schedule from './index_components/Schedule';
import Footer from './components/Footer';

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