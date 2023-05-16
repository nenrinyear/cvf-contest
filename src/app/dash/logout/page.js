"use client";
import { signOut } from "next-auth/react";
import { redirect } from 'next/navigation';

import { useSession } from "next-auth/react";

export default function Logout() {
    const { data: session, status } = useSession();
    if (status === 'loading') return <p>loading...</p>
    
    if (status === 'unauthenticated') {
        redirect('/dash/login');
    }
    if (status === 'authenticated') {
        signOut();
    }
}