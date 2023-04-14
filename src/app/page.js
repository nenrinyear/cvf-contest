"use server";
import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import CanvasAnimation from '../CanvasAnimation';
import LogoMovieAnimation from '../LogoAnimation';

import NavCompornent from '../nav';

import styles from './page.module.css';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
})

const zen_maru_gothic = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "500",
    display: 'swap',
})

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_canvas_top}>
                <CanvasAnimation className={styles.header_canvas_svg} />
            </div>
            <div className={styles.header_logo_top}>
                <LogoMovieAnimation className={styles.header_logo_movie} />
            </div>
            <div className={styles.header_title_top}>
                <p className={`${styles.header_title_slogan} ${jost.className}`}>
                    Next to the Stage.
                </p>
                <p className={`${styles.header_title_CVF} ${jost.className}`}>
                    CVF
                </p>
            </div>
            <div className={`${styles.header_scroll_down_top} ${jost.className}`}>
                <span className={styles.header_scroll_down_arrow}>&ang;</span>
                <p className={styles.header_scroll_down_text}>Scroll Down</p>
                
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className={`${styles.top} ${zen_maru_gothic.className}`}>
            <NavCompornent />
            <Header />
            <main>
                <div className={styles.main}>
                    <div className={styles.main_title}>
                        <h1 className={`${styles.main_title_text} ${jost.className}`}>CVF</h1>
                    </div>
                    <div className={styles.main_content}>
                        <p className={styles.main_content_text}>
                            CVFは、
                            <br />
                            ファッションの世界における
                            <br />
                            デザイナー、モデル、ブランド、
                            <br />
                            エージェンシー、メディア、
                            <br />
                            ファッション関連の企業、
                            <br />
                            そしてファッションに関わる
                            <br />
                            すべての人々の
                            <br />
                            交流を促進するための
                            <br />
                            プラットフォームです。
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}