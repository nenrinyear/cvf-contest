import { Zen_Maru_Gothic } from 'next/font/google';

import Header from './(components)/Header';
import About from './(components)/About';
import Awards from './(components)/Awards';
import HowToJoin from './(components)/HowToJoin';
import Schedule from './(components)/Schedule';

import styles from './(components)/page.module.css';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

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
                    <Awards />
                    <HowToJoin />
                    <Schedule />
                </main>
                <Footer />
            </div>
        </PageTransition>
    )
}