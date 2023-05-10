import PageTransition from '@/components/PageTransition';
import styles from './page.module.css';

import { microcmsClient } from './microcms-client';
import Link from 'next/link';

export default async function DashNews({ searchParams }) {
    let newsData, isDraft = false;
    if (process.env.NODE_ENV !== 'production') {
        newsData = await microcmsClient.get({ endpoint: 'news-dash', queries: { draftKey: searchParams['draftKey'] } });
        isDraft = true;
    } else {
        newsData = await microcmsClient.get({ endpoint: 'news-dash' });
    }

    
    return (
        <PageTransition>
            {process.env.NODE_ENV !== 'production' ? <p>{ process.env.NODE_ENV }</p> : ''}
            <div className={styles.Title}>
                <p className={`${styles.Title_text}`}>
                    ニュース
                </p>
            </div>
            <div className={styles.About}>
                <p className={`${styles.About_text}`}>
                    参加者向けのお知らせや、大会の情報を掲載しています。
                </p>
                {newsData.contents.map((news) => {
                    let publishedAtDate = new Date(news.publishedAt?? news.createdAt),
                        updatedAtDate = new Date(news.updatedAt);
                    if (new Date().getTimezoneOffset() === 0) {
                        publishedAtDate.setHours(publishedAtDate.getHours() + 9);
                        updatedAtDate.setHours(updatedAtDate.getHours() + 9);
                    }
                    return (
                        <div className={styles.News} key={news.id}>
                            <div className={styles.News_Date}>
                                {publishedAtDate.getTime() < updatedAtDate.getTime() ?
                                    <Link href={`/dash/news/${news.id}${isDraft? '?draftKey='+searchParams['draftKey'] : ''}`}>
                                        <time dateTime={updatedAtDate.toISOString()}>
                                            {updatedAtDate.toLocaleDateString('ja-JP', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric',
                                            })}
                                        </time>
                                        &nbsp;更新
                                    </Link>
                                    : <Link href={`/dash/news/${news.id}${isDraft? '?draftKey='+searchParams['draftKey'] : ''}`}>
                                        <time dateTime={publishedAtDate.toISOString()}>
                                            {publishedAtDate.toLocaleDateString('ja-JP', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric',
                                            })}
                                        </time>
                                    </Link>
                                }
                            </div>
                            <div className={styles.News_Title}>
                                <Link href={`/dash/news/${news.id}${isDraft? '?draftKey='+searchParams['draftKey'] : ''}`}>
                                    {news.title}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        

        </PageTransition>
    )
}