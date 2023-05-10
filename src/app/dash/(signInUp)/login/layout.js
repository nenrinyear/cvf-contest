
export const metadata = {
    title: "ログイン",
    description: "CVFへ参加するためのログインページです。",
    openGraph: {
        title: "ログイン",
        description: "CVFへ参加するためのログインページです。",
    },
    twitter: {
        description: "CVFへ参加するためのログインページです。",
    }
}

export default function Login({ children }) {
    return (
        <>
            { children }
        </>
    )
}