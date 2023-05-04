"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn as signInByNextAuth, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

import styles from "../page.module.css";
import PageHero from "@/components/Hero";
import Errors from "../Errors.component";


export default function SingIn({ searchParams: { error: errorQuery } }) {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (status === 'loading') {
        return (
            <>
                <div className={styles.LoadingTop}>
                    <div className={styles.Spinner} />
                </div>
            </>
        )
    }

    if (status === "authenticated") {
        // redirect to /dash
        redirect("/dash");
    }

    const signIn = async () => {
        if (!email) {
            setError("メールアドレスを入力してください");
            return;
        }
        if (!password) {
            setError("パスワードを入力してください");
            return;
        }    

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const idToken = await userCredential.user.getIdToken();
            await signInByNextAuth("credentials", {
                idToken,
                callbackUrl: "/dash",
            });
        } catch (e) {
            if (e.code === "auth/user-not-found" || e.code === "auth/wrong-password") {
                setError("ユーザーが見つからなかったか、パスワードが間違っています");
                return;
            }
            console.error(e);
            setError(e.message);
        }
    };

    const discordSignIn = async () => {
        await signInByNextAuth("discord", {
            callbackUrl: "/dash",
        });
    };

    return (
        <PageTransition>
            <PageHero
                Title="ログイン" />
            <div className={styles.Top}>
                {error && <div className={styles.Error}><p>{error}</p></div>}
                {errorQuery && <div className={styles.Error}><p>{errorQuery}</p></div>}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        signIn();
                    }}
                    className={styles.Form}
                >
                    <div className={styles.Form__Child}>
                        <div className={styles.Input}>
                            <label
                                htmlFor="email"
                                className={styles.Input__Label}
                            >
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="メールアドレス"
                                required
                                className={styles.Input__Text}
                                />
                        </div>
                        <div className={styles.Input}>
                            <label
                                htmlFor="password"
                                className={styles.Input__Label}
                            >
                                パスワード
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="パスワード"
                                required
                                className={styles.Input__Text}
                                />
                        </div>
                    </div>
                    <button type="submit" className={styles.Button}>
                        ログイン
                    </button>
                    <p className={styles.RegisterLogin__Text}>
                        メールアドレスとパスワードで新規登録する方は↓
                    </p>
                    <Link href="/dash/register" className={styles.RegisterLogin__Button}>
                        新規登録
                    </Link>
                    <hr className={styles.hr} />
                    <button
                        type="button"
                        onClick={() => {
                            discordSignIn();
                        }}
                        className={styles.DiscordButton}
                    >
                        Discordでログイン(同時に公式サーバーへ参加します)
                    </button>
                </form>

            </div>
        </PageTransition>
    );
};
