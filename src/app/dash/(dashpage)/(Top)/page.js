import PageTransition from '@/components/PageTransition';
import styles from './page.module.css';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    return (
        <PageTransition>
            <div className={styles.Title}>
                <p className={`${styles.Title_text}`}>
                    マイページ
                </p>
            </div>
            <div className={styles.About}>
                <p className={`${styles.About_text}`}>
                    ようこそ、{session.user.userData.name}さん。
                </p>
                <p className={`${styles.About_text}`}>
                    現在調整中です。登録されている情報は以下の通りです。
                </p>
                <p className={`${styles.About_text}`}>
                    ユーザー名: {session.user.userData.name}
                </p>
                <p className={`${styles.About_text}`}>
                    TwitterID: {session.user.userData.twitterID}
                </p>
                <p className={`${styles.About_text}`}>
                    登録された日時: {session.user.userData.createdAt}
                </p>
            </div>
        </PageTransition>
    )
}