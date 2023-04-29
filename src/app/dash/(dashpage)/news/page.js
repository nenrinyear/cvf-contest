import PageTransition from '@/components/PageTransition';
import styles from './page.module.css';

export default function DashNews() {
    return (
        <PageTransition>
            <div className={styles.Title}>
                <p className={`${styles.Title_text}`}>
                    ニュース
                </p>
            </div>
            <div className={styles.About}>
                <p className={`${styles.About_text}`}>
                    ここにニュースの内容が入ります。
                </p>
            </div>
        </PageTransition>
    )
}