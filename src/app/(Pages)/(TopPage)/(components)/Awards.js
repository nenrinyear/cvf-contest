import PageTransition from "@/components/PageTransition";

import styles from './Awards.module.css';
import Link from "next/link";

import { Jost } from 'next/font/google';
import PageViewAnimate from "@/components/PageViewAnimate";
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});

export default function Awards() {
    return (
        <PageViewAnimate>
            <div className={styles.Top}>
                <div className={styles.Layout}>
                    <div className={styles.Title}>
                        <p className={`${styles.Title_text} ${jost.className}`}>
                            Awards
                            <span className={`${styles.Title_text_ja}`}>
                                審査について
                            </span>
                        </p>
                    </div>
                    <>
                        <div className={styles.Awards}>
                            <div className={styles.Awards_title}>
                                <p className={`${styles.Awards_title_text} ${jost.className}`}>
                                    賞について
                                </p>
                            </div>
                            <div className={styles.Awards_content}>
                                <p className={`${styles.Awards_content_text}`}>
                                    本コンテストでは、1位となったチームに豪華(?)賞品を贈呈します！
                                </p>
                                <p className={`${styles.Awards_content_text}`}>
                                    結果発表の際に、賞品の内容を発表し、1位となったチームにはその後受け取りに関するご連絡をいたします。お楽しみに！
                                </p>
                                <p className={`${styles.Awards_content_text}`}>
                                    ※賞品は現在調整中ですが、インターネット上でやり取り可能なものを予定しています。
                                </p>
                            </div>
                        </div>
                    </>
                    <>
                        <div className={styles.Screening}>
                            <div className={styles.Screening_title}>
                                <p className={`${styles.Screening_title_text} ${jost.className}`}>
                                    審査方法
                                </p>
                            </div>
                            <div className={styles.Screening_content}>
                                <p className={`${styles.Screening_content_text}`}>
                                    本コンテストでは、公募された審査員による審査を行います。
                                </p>
                                <p className={`${styles.Screening_content_text}`}>
                                    投稿締切後、運営がランダムに参加者を数名程度のチームに振り分けます。
                                </p>
                                <p className={`${styles.Screening_content_text}`}>
                                    そのチームの各メンバーの作品を審査し、得られた点数を合計し、チームの点数を算出します。
                                </p>
                                <p className={`${styles.Screening_content_text}`}>
                                    その後、全体の順位を決定し、各賞を決定します。
                                </p>
                            </div>
                            <div className={styles.Screening_content_title}>
                                <p className={` ${jost.className}`}>
                                    審査基準
                                </p>
                            </div>
                            <div className={styles.Screening_content}>
                                <p className={`${styles.Screening_content_text}`}>
                                    本コンテストでは、審査員が決定後、審査基準を決定します。
                                </p>
                                <p className={`${styles.Screening_content_text}`}>
                                    審査基準は、おおよそ3つの観点を想定しており、また、それとは別に、審査員独自の観点を点数化し、合計点を算出します。
                                </p>
                                <p className={`${styles.Screening_content_text}`}>
                                    ※審査基準はMV・文字PVを想定して決定しますが、それ以外の作品についても参加可能です。
                                </p>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </PageViewAnimate>
    )
}