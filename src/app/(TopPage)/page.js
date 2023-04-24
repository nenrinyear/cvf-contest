"use server";
import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import Header from './(components)/Header';
import About from './(components)/About';

import styles from './(components)/page.module.css';
import PageTransition from '../../components/PageTransition';
import Schedule from './(components)/Schedule';
import Footer from '../../components/Footer';
import HowToJoin from './(components)/HowToJoin';

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
                    <HowToJoin />
                    <Schedule />
                </main>
                <Footer />
            </div>
        </PageTransition>
    )
}