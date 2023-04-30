import CanvasAnimation from '@/components/CanvasAnimation';
import LogoMovieAnimation from '@/components/LogoAnimation';

import styles from './Header.module.css';
import { Jost, Noto_Sans_JP } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [100, 200, 300, 400, 500],
    display: 'swap',
})

const noto_sans_jp = Noto_Sans_JP({
    subsets: ['latin'],
    style: 'normal',
    weight: "500",
    display: 'swap',
});

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_canvas_top}>
                <CanvasAnimation className={styles.header_canvas_svg} />
            </div>
            <div className={styles.header_logo_top}>
                <LogoMovieAnimation className={styles.header_logo_movie} />
            </div>
            <div className={styles.header_title_top}>
                <p className={`${styles.header_title_slogan} ${noto_sans_jp.className}`}>
                    <span>未来へ羽ばたこう</span>
                    <span>、クリエイターたち</span>
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