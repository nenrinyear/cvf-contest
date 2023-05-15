import Link from "next/link";
import { microcmsClient } from "../microcms-client";
import styles from './NewsDetail.module.css';

export default async function NewsDetail({ params: { id }, searchParams }) {
    let news = {},
        isDraft = false;
    try {
        if (process.env.DEPLOY_ENV !== 'production') {
            news = await microcmsClient.get({ endpoint: 'news-dash', contentId: id , queries: { draftKey: searchParams['draftKey'] } });
            isDraft = true;
        } else {
            news = await microcmsClient.get({ endpoint: 'news-dash', contentId: id });
        }
    } catch (e) {
        console.error(e);
        return (
            <div>
                <div>
                    <p className={styles.Back}>
                        <Link href={`/dash/news${isDraft? '?draftKey='+searchParams['draftKey'] : ''}`}>← ニュース一覧へ</Link>
                    </p>
                </div>
                <h1 className={styles.Title}>404 Not Found</h1>
                <p>
                    お探しのページは見つかりませんでした。
                </p>
            </div>
        )
    }

    let publishedAtDate = new Date(news.publishedAt?? news.createdAt),
        updatedAtDate = new Date(news.updatedAt);
    if (new Date().getTimezoneOffset() === 0) {
        publishedAtDate.setHours(publishedAtDate.getHours() + 9);
        updatedAtDate.setHours(updatedAtDate.getHours() + 9);
    }
    
    return (
        <>
            {process.env.DEPLOY_ENV !== 'production' ? <><p>{process.env.DEPLOY_ENV}</p><pre>{JSON.stringify(searchParams)}</pre></> : ''}
            <div>
                <p className={styles.Back}>
                    <Link href={`/dash/news${isDraft? '?draftKey='+searchParams['draftKey'] : ''}`}>← ニュース一覧へ</Link>
                </p>
            </div>
            <h1 className={styles.Title}>{news.title}</h1>
            <div className={styles.Date}>
                <time dateTime={news.publishedAt ?? news.createdAt}>
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
                        <time dateTime={news.updatedAt}>
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
        </>
    )
}