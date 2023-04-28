"use client";
import styles from "./page.module.css";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";

export default function SignUpThenInitPage() {
    const router = useRouter();
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

        setTimeout(router.push("/"), 1000);
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
            <div className={styles.Top}>
                <h1>初期登録</h1>
                <pre>
                    {JSON.stringify(session, null, 2)}
                </pre>
                <form
                    onSubmit={setData}
                    className={styles.Form}
                >
                    {error && <div className={styles.Error}><p>{error}</p></div>}
                    <div className={styles.Form__Child}>
                        <div className={styles.Input__Top}>
                            <label htmlFor="name" className={styles.Input__Label}>名前</label>
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
            </div>
        )
    } else if (status === "authenticated" && session.user.userData !== null) {
        redirect("/dash");
    } else if (status === "unauthenticated") {
        redirect("/dash/login");
    }
}