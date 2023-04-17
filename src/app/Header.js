import CanvasAnimation from '../CanvasAnimation';
import LogoMovieAnimation from '../LogoAnimation';

import styles from './Header.module.css';
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
})

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