import Link from 'next/link'
import styles from './layout.module.css'

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata = {
    title: "マイページ",
    description: "CVF参加者のマイページです。",
}

export default async function DashboardLayout({ children }) {
    "use server";
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return (
            <>
                <div className={styles.Top}>
                    <div className={styles.NeedToLogin}>
                        <div className={styles.NeedToLogin_Title}>
                            <p className={styles.NeedToLogin_Title_Text}>
                                マイページを表示するにはログインが必要です。
                            </p>
                        </div>
                        <Link
                            className={styles.NeedToLogin_Button}
                            href="/dash/login"
                        >
                            ログイン
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    if (typeof session !== 'undefined') {
        if (session.user.userData === null) {
            redirect('/dash/setup');
        }
        return (
            <>
                <div className={styles.Top}>
                    <div className={styles.LeftFixedMenu}>
                        <div className={styles.Container}>
                            <div className={styles.Menu}>
                                <div className={styles.Menu_Title}>
                                    <p className={styles.Menu_Title_Text}>
                                        メニュー
                                    </p>
                                </div>
                                <div className={styles.Menu_Item}>
                                    <Link
                                        className={styles.Menu_Item_Text}
                                        href="/dash"
                                    >
                                        マイページトップ
                                    </Link>
                                </div>
                                <div className={styles.Menu_Item}>
                                    <Link
                                        className={styles.Menu_Item_Text}
                                        href="/dash/news"
                                    >
                                        ニュース
                                    </Link>
                                </div>
                                <div className={styles.Menu_Item}>
                                    <Link
                                        className={styles.Menu_Item_Text}
                                        href="/dash/submit"
                                    >
                                        アップロード
                                    </Link>
                                </div>
                                <div className={styles.Menu_Item}>
                                    <Link
                                        className={styles.Menu_Item_Text}
                                        href="/dash/settings"
                                    >
                                        アカウント設定
                                    </Link>
                                </div>
                                {session.user.userData.admin ? 
                                    <>
                                        <hr />
                                        <div className={styles.Menu_Item}>
                                            <Link
                                                className={styles.Menu_Item_Text}
                                                href="/dash/admin"
                                            >
                                                管理者ページ
                                            </Link>
                                        </div>
                                    </>
                                : ''}
                            </div>
                        </div>
                    </div>
                    <div className={styles.Layout}>
                        {children}
                    </div>
                </div>
            </>
        )
    }
}