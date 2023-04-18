import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import styles from './page.module.css';

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
        <div className={`${styles.top} ${zen_maru_gothic.className}`}>
            <main className={styles.main}>
                aaaa
            </main>
        </div>
    )
}