import { Zen_Maru_Gothic } from "next/font/google"

const zen_maru_gothic = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "500",
    display: 'swap',
})

export default function SignInUpLayout({ children }) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
        }} className={zen_maru_gothic.className}>
            {children}
        </div>
    )
}