"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn as signInByNextAuth, useSession } from "next-auth/react";

import PageTransition from '@/components/PageTransition';
import Link from "next/link";
import { redirect } from "next/navigation";

import styles from "../page.module.css";
import PageHero from "@/components/Hero";



export default function Register() {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
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

    const signUp = async () => {
        if (password !== passwordConfirm) {
            setError("パスワードが一致しません");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const idToken = await userCredential.user.getIdToken();
            await signInByNextAuth("credentials", {
                idToken,
                callbackUrl: "/dash",
            });
        } catch (error) {
            setError(error.message);
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
                Title="新規登録" />
            <div className={styles.Top}>
                {error && <div className={styles.Error}><p>{error}</p></div>}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        signUp();
                    }}
                    className={styles.Form}
                >
                    <div className={styles.Form__Child}>
                        <div className={styles.Input}>
                            <label
                                htmlFor="email"
                                className={styles.Form__Label}
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
                            <label htmlFor="password1" className={styles.Form__Label}>
                                パスワード
                            </label>
                            <input
                                type="password"
                                id="password1"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="パスワード"
                                required
                                className={styles.Input__Text}
                            />
                            <label htmlFor="password2" className={styles.Form__Label}>
                                パスワード確認
                            </label>
                            <input
                                type="password"
                                id="password2"
                                value={passwordConfirm}
                                onChange={(event) => setPasswordConfirm(event.target.value)}
                                placeholder="パスワード確認"
                                required
                                className={styles.Input__Text}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={styles.Button}
                    >
                        新規登録
                    </button>
                    <p className={styles.RegisterLogin__Text}>
                        既にアカウントをお持ちの方はこちら↓
                    </p>
                    <Link href="/dash/login" className={styles.RegisterLogin__Button}>
                        ログイン
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
    )
}