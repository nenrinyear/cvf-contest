"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn as signInByNextAuth } from "next-auth/react";

import PageTransition from '@/components/PageTransition';
import { Zen_Maru_Gothic } from 'next/font/google';
import Link from "next/link";



const zen_maru_gothic_500 = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "500",
    display: 'swap',
})

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");

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


    return (
        <PageTransition>
            <div className={zen_maru_gothic_500.className}>
                <h1>新規登録</h1>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="メールアドレス"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="パスワード"
                />
                <input
                    type="password"
                    value={passwordConfirm}
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                    placeholder="パスワード確認"
                />
                <button
                    type="button"
                    onClick={() => {
                        signUp();
                    }}
                >
                    新規登録
                </button>
                {error && <p>{error}</p>}
                <hr />
                <p>既にアカウントをお持ちの方はこちら</p>
                <Link
                    href="/dash/login"
                >ログイン</Link>
            </div>
        </PageTransition>
    )
}