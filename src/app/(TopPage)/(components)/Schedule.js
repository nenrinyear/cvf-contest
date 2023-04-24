"use server";
import styles from './Schedule.module.css';
import PageViewAnimate from '../../../components/PageViewAnimate';

import Link from 'next/link';

import { Jost, Zen_Maru_Gothic } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});
const zen_maru_gothic_400 = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "400",
    display: 'swap',
})

const TimelineData = [
    {
        "step": 1,
        "title": "サイト公開",
        "date": "2023/4/29",
        "content": [
            {
                "type": "p",
                "content": "サイトを公開しました",
            },
        ],
    },
    {
        "step": 2,
        "title": "参加登録開始",
        "date": "2023/4/30",
        "content": [
            {
                "type": "link",
                "href": "/dash/register",
                "content": "こちら",
            },
            {
                "type": "text",
                "content": "から参加登録ができるようになります",
            },
        ],
    },
    {
        "step": 3,
        "title": "投稿受付開始",
        "date": "2023/6/1",
        "content": [
            {
                "type": "link",
                "href": "/dash/submit",
                "content": "こちら",
            },
            {
                "type": "text",
                "content": "から、コンテスト審査のための映像の投稿ができるようになります",
            },
        ],
    },
    {
        "step": 4,
        "title": "投稿受付終了",
        "date": "2023/6/30",
        "content": [
            {
                "type": "p",
                "content": "投稿受付を終了します。",
            },
            {
                "type": "p",
                "content": "以降の投稿は受け付けませんのでご注意ください。",
            },
        ],
    },
    {
        "step": 5,
        "title": "審査結果発表",
        "date": "2023/7/16",
        "content": [
            {
                "type": "p",
                "content": "審査結果をYouTubeプレミア公開にて発表します。",
            },
            {
                "type": "p",
                "content": "動画へのリンクは後日公開します。",
            },
            {
                "type": "p",
                "content": "また、当サイトでも発表します。",
            },
        ],
    }
]

export default function Schedule() {
    return (
        <PageViewAnimate>
            <div className={styles.top} id='schedule'>
                <div className={styles.Layout}>
                    <div className={styles.Title}>
                        <p className={`${styles.Title_text}`}>
                            Schedule
                            <span className={`${styles.Title_text_ja} ${jost.className}`}>
                                参加から審査の流れ
                            </span>
                        </p>
                    </div>
                    <div className={styles.Schedule}>
                        <div className={`${styles.Timeline_Top}`}>
                            {TimelineData.map((data) => {
                                return (
                                    <section className={`${styles.Timeline_Section}`} key={`${data.step}`}>
                                        <div className={`${styles.Timeline_Section_Num}`}>
                                            <time
                                                className={`${styles.Timeline_Section_Date}`}
                                                dateTime={`${data.date.replace(/\//g, '-')}`}>
                                                {`${data.date}`}
                                            </time>
                                        </div>
                                        <div className={`${styles.Timeline_Section_Title}`}>{`${data.title}`}</div>
                                        <div className={`${styles.Timeline_Section_Content}`}>
                                            {data.content.map((content) => {
                                                if (content.type === "p") {
                                                    return (
                                                        <p key={`${content.content}`}>{`${content.content}`}</p>
                                                    )
                                                } else if (content.type === "text") {
                                                    return (
                                                        <span key={`${content.content}`}>{`${content.content}`}</span>
                                                    )
                                                } else if (content.type === "link") {
                                                    return (
                                                        <Link
                                                            href={`${content.href}`}
                                                            className={`${styles.Timeline_Section_Link}`}
                                                            key={`${content.content}`}>
                                                            {`${content.content}`}
                                                        </Link>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </PageViewAnimate>
    )
}