import Link from "next/link";
import { microcmsClient } from "../microcms-client";
import styles from './NewsDetail.module.css';

export default async function NewsDetail({ id }) {
    const newsData = await microcmsClient.get({ endpoint: 'news', queries: { q: id} });

    if(newsData.contents.length < 1) {
        return (
            <div>
                <p>404</p>
            </div>
        )
    }
    const news = newsData.contents[0];
    
    return (
        <div>
            <div>
                <p className={styles.Back}>
                    <Link href="/dash/news">← ニュース一覧へ</Link>
                </p>
            </div>
            <h1 className={styles.Title}>{news.title}</h1>
            <p>
                <time dateTime={news.updatedAt}>
                    {new Date(news.updatedAt).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: news.content }} className={styles.content} />
        </div>
    )
}