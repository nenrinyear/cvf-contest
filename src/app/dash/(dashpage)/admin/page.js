import PageTransition from "@/components/PageTransition";
import styles from './page.module.css';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";

import VerifySend from './VerifySend';

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

    const verifyList = await fetch(`${process.env.CVF2023_MYAPI_HOST}/verifyList`, {
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
                                        <td>{user.emailVerified === "1" ?
                                            "済"
                                            :
                                            <div>
                                                <VerifySend email={user.email} adminEmail={session.user.userData.email} adminID={session.user.userData.userID}>
                                                    未
                                                </VerifySend>
                                            </div>
                                        }</td>
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
                <p className={styles.MemberTable_text}>
                    メール確認DB
                </p>
                <div className={styles.Table}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ユーザー名</th>
                                <th>送信日時</th>
                                <th>isVerify</th>
                                <th>メールアドレス</th>
                            </tr>
                        </thead>
                        <tbody>
                            {verifyList['response'].map((verifyList) => {
                                return (
                                    <tr key={verifyList.verifyID}>
                                        <td>{verifyList.verifyID}</td>
                                        <td>{verifyList.userName}</td>
                                        <td>{verifyList.sentAt}</td>
                                        <td>{verifyList.isVerified === "1"? "✨" : "🪅"}</td>
                                        <td>{verifyList.email}</td>
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