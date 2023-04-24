import styles from './Hero.module.css';
import CanvasAnimation from './CanvasAnimation';

import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
})

export default function PageHero( props ) {
    return (
        <div className={styles.Top}>
            <div className={styles.Canvas}>
                <CanvasAnimation className={styles.Canvas_SVG} />
            </div>
            <div className={`${styles.Text} ${jost.className}`}>
                <h1 className={styles.Title}>
                    {props.Title}
                </h1>
                {("Description" in props) ?
                    <p className={styles.Description}>
                        {props.Description}
                    </p>
                    :
                    ""}
            </div>
        </div>
    );
}