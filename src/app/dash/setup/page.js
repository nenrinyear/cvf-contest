"use client";
import styles from "./page.module.css";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { redirect } from "next/navigation";
import PageHero from "@/components/Hero";
import Link from "next/link";
import Errors from "../(signInUp)/Errors.component";

export default function SignUpThenInitPage() {
    const { data: session, status } = useSession();
    const [error, setError] = useState("");
    
    const [name, setName] = useState("");
    const [twitterID, setTwitterID] = useState("");
    
    
    const setData = async (e) => {
        e.preventDefault();
        const __chk = await fetch("/api/db/setUserData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: session.user.email,
                name: name,
                twitterID: twitterID,
            }),
            cache: "no-cache",
        }).then(res => res.text());

        setTimeout(() => {
            if (__chk === "OK") {
                location.reload();
            } else {
                setError("エラーが発生しました。お問い合わせください");
            }
        }, 1000);
    }

    if (status === "loading") {
        return (
            <>
                <p>loading...</p>
                <pre>
                    {JSON.stringify(session, null, 2)}
                </pre>
                <pre>
                    {JSON.stringify(status, null, 2)}
                </pre>
            </>
        );
    }
    if (status === "authenticated" && session.user.userData === null) {
        return (
            <>
                <PageHero
                    Title="初回登録" />
                <div className={styles.Top}>
                    <div className={styles.Description}>
                        <p>初回登録を行います。</p>
                        <p>活動名・TwitterID(任意)を入力いただき、登録ボタンを押してください</p>
                        <p>登録後、画面を再読み込みしていただくとマイページへ移動します</p>
                        <p>(1回入力いただくと登録は完了します)</p>
                    </div>
                    <div className={styles.Loading_Spinner}>
                        <div className={styles.Loading_Spinner__Child}></div>
                    </div>
                    {error && <Errors>{error}</Errors>}
                    <form
                        onSubmit={setData}
                        className={styles.Form}
                    >
                        <div className={styles.Form__Child}>
                            <div className={styles.Input__Top}>
                                <label htmlFor="email" className={styles.Input__Label}>メールアドレス</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={session.user.email}
                                    required
                                    className={styles.Input__Text}
                                    disabled
                                />
                            </div>
                            <div className={styles.Input__Top}>
                                <label htmlFor="name" className={styles.Input__Label}>活動名<span style={{ color: '#ee1212',}}>(*)</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    required
                                    className={styles.Input__Text}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className={styles.Input__Top}>
                                <label htmlFor="twitterID" className={styles.Input__Label}>Twitter ID</label>
                                <input
                                    type="text"
                                    name="twitterID"
                                    id="twitterID"
                                    value={twitterID}
                                    required
                                    className={styles.Input__Text}
                                    onChange={e => setTwitterID(e.target.value)}
                                />
                            </div>
                            <button type="submit" className={styles.Button}>登録</button>
                        </div>
                    </form>
                    <div className={styles.BackToDashboard}>
                        <Link
                            href="/dash"
                            className={styles.Link}
                        >
                            ダッシュボードへ戻る
                        </Link>
                    </div>
                </div>
            </>
        )
    } else if (status === "authenticated" && session.user.userData !== null) {
        redirect("/dash");
    } else if (status === "unauthenticated") {
        redirect("/dash/login");
    }
}