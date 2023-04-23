import PageTransition from '@/app/components/PageTransition';
import { Zen_Maru_Gothic } from 'next/font/google';

const zen_maru_gothic_500 = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "500",
    display: 'swap',
})

export default function Register() {
    return (
        <PageTransition>
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "4rem",
                    fontWeight: "500",
                }}
                className={zen_maru_gothic_500.className}
            >
                参加登録開始までお待ち下さい。
            </div>
        </PageTransition>
    )
}