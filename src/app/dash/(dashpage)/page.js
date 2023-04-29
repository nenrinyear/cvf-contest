"use client";

import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

import styles from './page.module.css';

export default function Dashboard() {
    const { data: session, status } = useSession();
    if (status === 'loading') return <p>loading...</p>
    
    if (status === 'unauthenticated') return <p>unauthenticated</p>
    if (status === 'authenticated') {
        if (session.user.userData === null) {
            redirect('/dash/setup');
        }

        console.log(session, status)
        return (
            <div className={styles.Top}>
                <h1>Dashboard</h1>
                {session.user.email}
            </div>
        )
    }
}