import PageTransition from "@/components/PageTransition";
import styles from './page.module.css';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/dash/login');
    } else if (session.user.userData.admin !== "1") {
        redirect('/dash');
    }

    const userList = await fetch(`${process.env.CVF2023_MYAPI_HOST}/getUserList`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + process.env.CVF2023_MYAPI_SECRET,
        },
        body: JSON.stringify({
            "adminID": session.user.userData.userID,
            "adminEmail": session.user.userData.email,
        }),
    }).then((res) => {
        return res.json();
    });

    return (
        <PageTransition>
            <div className={styles.Title}>
                <p className={`${styles.Title_text}`}>
                    管理者ページ
                </p>
            </div>
            <div className={styles.MemberTable}>
                <p className={`${styles.MemberTable_text}`}>
                    ユーザー一覧
                </p>
                <div className={styles.Table}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ユーザー名</th>
                                <th>メールアドレス</th>
                                <th>メルアド確認</th>
                                <th>TwitterID</th>
                                <th>登録日時</th>
                                <th>情報最終更新</th>
                                <th>管理者</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList['response'].map((user) => {
                                return (
                                    <tr key={user.userID}>
                                        <td>{user.userID}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.emailVerified === "1" ? "済" : "😡"}</td>
                                        <td>{user.twitterID}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.updatedAt}</td>
                                        <td>{user.admin === "1" ? "🧸" : "無"}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageTransition>
    )
}