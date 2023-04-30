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
                        <p className={`${styles.Title_text} ${jost.className}`}>
                            How to Join
                            <span className={`${styles.Title_text_ja}`}>
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
                    <div className={styles.HowToJoin_Note}>
                        <div className={styles.HowToJoin_Note__TopTitle}>
                            <p className={styles.HowToJoin_Note__TopTitle_text}>
                                参加方法
                            </p>
                        </div>
                        <div className={styles.HowToJoin_Note__Container}>
                            <div className={styles.HowToJoin_Note__Title}>
                                <p className={styles.HowToJoin_Note__Title_text}>
                                    1. 参加申請をする
                                </p>
                            </div>
                            <div className={styles.HowToJoin_Note__Content}>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    <Link
                                        href="/dash/register"
                                        className={styles.HowToJoin_Note__Content_text_link}>
                                        参加申請ページ
                                    </Link>にて、アカウント作成をしてください。
                                </p>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    その後、自動的に初回設定ページに移動するので、活動名とTwitterID(任意)を入力してください。
                                </p>
                            </div>
                        </div>
                        <div className={styles.HowToJoin_Note__Container}>
                            <div className={styles.HowToJoin_Note__Title}>
                                <p className={styles.HowToJoin_Note__Title_text}>
                                    2. 映像制作をする
                                </p>
                            </div>
                            <div className={styles.HowToJoin_Note__Content}>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    登録後、映像制作を始めてください！
                                </p>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    制作期間は、2023年6月31日までです。
                                </p>
                            </div>
                        </div>
                        <div className={styles.HowToJoin_Note__Container}>
                            <div className={styles.HowToJoin_Note__Title}>
                                <p className={styles.HowToJoin_Note__Title_text}>
                                    3. 作品を提出する
                                </p>
                            </div>
                            <div className={styles.HowToJoin_Note__Content}>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    制作を終えたら、<Link
                                        href="/dash/submit"
                                        className={styles.HowToJoin_Note__Content_text_link}>
                                        作品提出ページ
                                    </Link>にて、作品を指定されているファイル形式で提出してください。
                                </p>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    結果発表後に、ご自身のYouTubeチャンネルやTwitter等で公開していただいても構いませんが、ファイルでの提出が必須となります。ご注意ください。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.HowToJoin_Note}>
                        <div className={styles.HowToJoin_Note__TopTitle}>
                            <p className={styles.HowToJoin_Note__TopTitle_text}>
                                事前に確認してほしいこと
                            </p>
                        </div>
                        <div className={styles.HowToJoin_Note__Container}>
                            <div className={styles.HowToJoin_Note__Title}>
                                <p className={styles.HowToJoin_Note__Title_text}>
                                    1. 作品内に他人の著作物が含まれていませんか？
                                </p>
                            </div>
                            <div className={styles.HowToJoin_Note__Content}>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    作品内に他人の著作物(楽曲や映像素材等)が含まれている場合、その著作物の使用が許可されているかどうかを確認してください。(二次創作ガイドラインなど)
                                </p>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    また、クレジット表記の有無等の確認もお願いします。
                                </p>
                            </div>
                        </div>
                        <div className={styles.HowToJoin_Note__Container}>
                            <div className={styles.HowToJoin_Note__Title}>
                                <p className={styles.HowToJoin_Note__Title_text}>
                                    2. 作品内に不適切な表現はありませんか？
                                </p>
                            </div>
                            <div className={styles.HowToJoin_Note__Content}>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    本コンテストでは、結果発表の際に、公式YouTubeチャンネルで全作品を公開する予定です。
                                    その際に、不適切な表現が含まれている作品は、公開を控えさせていただく場合があります。
                                </p>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    作品内に、暴力的な表現や、性的な表現、差別的な表現などが含まれていないかを確認してください。
                                </p>
                            </div>
                        </div>
                        <div className={styles.HowToJoin_Note__Container}>
                            <div className={styles.HowToJoin_Note__Title}>
                                <p className={styles.HowToJoin_Note__Title_text}>
                                    3. 登録するEメールアドレスは使用可能ですか？
                                </p>
                            </div>
                            <div className={styles.HowToJoin_Note__Content}>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    本コンテストでは、登録したEメールアドレスに対して、お知らせや連絡を行います。
                                    そのため、使用するメールアドレスは連絡がつくものを使用してください。
                                </p>
                                <p className={styles.HowToJoin_Note__Content_text}>
                                    (Discordアカウントでの登録も、公式サーバーでのお知らせもありますが、基本的には連携されているメールアドレスにてご連絡いたします。)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </PageViewAnimate>
    )
}