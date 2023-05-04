"use client";
import Link from 'next/link'
import styles from './layout.module.css'

import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';


export default function DashboardLayout({ children }) {
    const { data: session, status } = useSession();
    if (status === 'loading') {
        return (
            <>
                <div className={styles.LoadingTop}>
                    <div className={styles.Spinner} />
                </div>
            </>
        )
    }
    
    if (status === 'unauthenticated') {
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
    if (status === 'authenticated') {
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