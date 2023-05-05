import PageTransition from '@/components/PageTransition';
import styles from './page.module.css';

import { microcmsClient } from './microcms-client';
import Link from 'next/link';
export default async function DashNews() {
    const newsData = await microcmsClient.get({ endpoint: 'news' });

    
    return (
        <PageTransition>
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
                    let date = new Date(news.updatedAt);
                    if (new Date().getTimezoneOffset() === 0) {
                        date.setHours(date.getHours() + 9);
                    }
                    return (
                        <div className={styles.News} key={news.id}>
                            <div className={styles.News_Date}>
                                <Link href={`/dash/news/${news.id}`}>
                                    <time dateTime={news.updatedAt}>
                                        {date.toLocaleDateString('ja-JP', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        })}
                                    </time>
                                </Link>
                            </div>
                            <div className={styles.News_Title}>
                                <Link href={`/dash/news/${news.id}`}>
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