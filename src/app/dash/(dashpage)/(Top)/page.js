"use client";

import PageTransition from '@/components/PageTransition';
import styles from './page.module.css';

export default function Dashboard() {
    return (
        <PageTransition>
            <div className={styles.Title}>
                <p className={`${styles.Title_text}`}>
                    マイページ
                </p>
            </div>
            <div className={styles.About}>
                <p className={`${styles.About_text}`}>
                    ここにマイページの内容が入ります。
                </p>
            </div>
        </PageTransition>
    )
}