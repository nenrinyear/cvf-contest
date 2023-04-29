import PageTransition from '@/components/PageTransition';

import styles from './page.module.css';

export default function Register() {
    return (
        <PageTransition>
            <div className={styles.Title}>
                <div className={styles.Title_text}>
                    投稿受付開始までお待ち下さい。
                </div>
            </div>
        </PageTransition>
    )
}