import styles from './HowToJoin.module.css';
import PageViewAnimate from '@/components/PageViewAnimate';

import { VscAccount } from 'react-icons/vsc';
import { BsPersonVideo2 } from 'react-icons/bs';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import { Jost } from 'next/font/google';
import Link from 'next/link';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});

export default function HowToJoin() {
    return (
        <PageViewAnimate>
            <div className={styles.Top}>
                <div className={styles.Layout}>
                    <div className={styles.Title}>
                        <p className={styles.Title_text}>
                            How to Join
                            <span className={`${styles.Title_text_ja} ${jost.className}`}>
                                参加方法
                            </span>
                        </p>
                    </div>
                    <div className={styles.HowToJoin}>
                        <div className={styles.HowToJoin_Step}>
                            <div className={styles.HowToJoin_Step_Icon}>
                                <VscAccount />
                            </div>
                            <p className={styles.HowToJoin_Step_text}>
                                最初に
                                <Link
                                    href="/dash/register"
                                    className={styles.HowToJoin_Step_text_link}>
                                    登録ページ
                                </Link>
                                から、参加登録を行ってください。
                            </p>
                        </div>
                        <div className={styles.HowToJoin_Step}>
                            <div className={styles.HowToJoin_Step_Icon}>
                                <BsPersonVideo2 />
                            </div>
                            <p className={styles.HowToJoin_Step_text}>
                                初回登録が完了したら、映像制作を初めてください。
                            </p>
                        </div>
                        <div className={styles.HowToJoin_Step}>
                            <div className={styles.HowToJoin_Step_Icon}>
                                <AiOutlineCloudUpload />
                            </div>
                            <p className={styles.HowToJoin_Step_text}>
                                期限内に
                                <Link
                                    href="/dash/submit"
                                    className={styles.HowToJoin_Step_text_link}>
                                    提出ページ
                                </Link>
                                から、提出を行ってください。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageViewAnimate>
    )
}