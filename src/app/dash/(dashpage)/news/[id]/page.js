import Link from "next/link";
import { microcmsClient } from "../microcms-client";
import styles from './NewsDetail.module.css';
import PageViewAnimate from "@/components/PageViewAnimate";

export default async function NewsDetail({ id, searchParams }) {
    let newsData = {},
        isDraft = false;
    if (process.env.DEPLOY_ENV !== 'production') {
        newsData = await microcmsClient.get({ endpoint: 'news-dash', queries: { q: id, draftKey: searchParams['draftKey'] } });
        isDraft = true;
    } else {
        newsData = await microcmsClient.get({ endpoint: 'news-dash', queries: { q: id} });
    }

    if(newsData.contents.length < 1) {
        return (
            <div>
                <p>404</p>
            </div>
        )
    }
    const news = newsData.contents[0];

    let publishedAtDate = new Date(news.publishedAt?? news.createdAt),
        updatedAtDate = new Date(news.updatedAt);
    if (new Date().getTimezoneOffset() === 0) {
        publishedAtDate.setHours(publishedAtDate.getHours() + 9);
        updatedAtDate.setHours(updatedAtDate.getHours() + 9);
    }
    
    return (
        <PageViewAnimate>
            {process.env.DEPLOY_ENV !== 'production' ? <><p>{process.env.DEPLOY_ENV}</p><pre>{JSON.stringify(searchParams)}</pre></> : ''}
            <div>
                <p className={styles.Back}>
                    <Link href={`/dash/news${isDraft? '?draftKey='+searchParams['draftKey'] : ''}`}>← ニュース一覧へ</Link>
                </p>
            </div>
            <h1 className={styles.Title}>{news.title}</h1>
            <div className={styles.Date}>
                <time dateTime={publishedAtDate.toISOString()}>
                    {publishedAtDate.toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                    })}
                </time>
                {publishedAtDate.getTime() < updatedAtDate.getTime() ? 
                    <div>
                        更新&nbsp;
                        <time dateTime={updatedAtDate.toISOString()}>
                            {updatedAtDate.toLocaleDateString('ja-JP', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </time>
                    </div>
                : ''}
            </div>
            <div dangerouslySetInnerHTML={{ __html: news.content }} className={styles.content} />
        </PageViewAnimate>
    )
}