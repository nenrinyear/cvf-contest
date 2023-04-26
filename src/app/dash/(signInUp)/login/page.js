"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn as signInByNextAuth, useSession } from "next-auth/react";


export default function SingIn() {
    const data = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
            if (e.code === "auth/user-not-found") {
                setError("ユーザーが見つかりませんでした");
                return;
            } else if (e.code === "auth/wrong-password") {
                setError("パスワードが間違っています");
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
        <div>
            {error && <p>{error}</p>}
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
            <button
                type="button"
                onClick={() => {
                    signIn();
                }}
            >
                ログイン
            </button>
            <hr />

            <button
                type="button"
                onClick={() => {
                    discordSignIn();
                }}
            >
                Discordでログイン
            </button>

        </div>
    );
};
