import PageTransition from "@/components/PageTransition";

import styles from './Awards.module.css';
import Link from "next/link";

import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 300, 500],
    display: 'swap',
});

export default function Awards() {
    return (
        <PageTransition>
            <div className={styles.Top}>
                <div className={styles.Layout}>
                    <div className={styles.Title}>
                        <p className={`${styles.Title_text} ${jost.className}`}>
                            Awards
                            <span className={`${styles.Title_text_ja}`}>
                                審査について
                            </span>
                        </p>
                    </div>
                    <div className={styles.Screening}>
                        <div className={styles.Screening_title}>
                            <p className={`${styles.Screening_title_text} ${jost.className}`}>
                                審査方法
                            </p>
                        </div>
                        <div className={styles.Screening_content}>
                            <p className={`${styles.Screening_content_text}`}>
                                本コンテストでは、審査員による審査を行います。
                            </p>
                            <p className={`${styles.Screening_content_text}`}>
                                審査員は、各部門の審査員長をはじめ、各部門の審査員を務める方々です。
                            </p>
                            <p className={`${styles.Screening_content_text}`}>
                                審査員長は、各部門の審査員を務める方々です。
                            </p>
                            <p className={`${styles.Screening_content_text}`}>
                                審査員長は、各部門の審査員を務める方々です。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}