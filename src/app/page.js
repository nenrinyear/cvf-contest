"use client";
import { Jost, Zen_Maru_Gothic } from 'next/font/google';
import { useEffect, Suspense } from 'react';

import CanvasAnimation from './canvas-animation';

import styles from './page.module.css';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 500],
    display: 'swap',
})

const zen_maru_gothic = Zen_Maru_Gothic({
    subsets: ['latin'],
    style: ['normal'],
    weight: "500",
    display: 'swap',
})

export default function Home() {
    useEffect(() => {
        const video = document.getElementById('logo-mp4');
        video.play()
            .catch((error) => {
                const image = new Image();
                image.src = '/CVF_static_icon.webp';
                image.className = 'sm:tw-w-1/4 tw-w-full tw-rounded-full';
                video.insertAdjacentHTML('afterend', image.outerHTML);
                video.remove();
            });
    }, []);
    return (
        <div className={`${styles.top} ${zen_maru_gothic.className}`}>
            <header className='tw-w-full tw-h-screen tw-relative -tw-z-50 tw-bg-black'>
                <div className='tw-absolute tw-w-full tw-h-full -tw-z-40 tw-select-none'>
                    <CanvasAnimation className='tw-w-full tw-h-full tw-object-cover tw-object-center' />
                </div>
                <div className="tw-w-full sm:tw-h-full tw-h-2/3 tw-flex tw-z-10 tw-justify-center tw-items-center">
                    <video muted loop className="sm:tw-w-1/4 tw-w-full tw-rounded-full" id='logo-mp4' >
                        <source src="/CVF_motion.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="tw-absolute tw-bottom-0 tw-left-0 tw-mt-0 tw-mr-0 sm:tw-mb-12 tw-mb-8 sm:tw-ml-12 tw-ml-8 tw-bg-transparent">
                    <p className={`tw-text-white tw-font-extralight tw-italic tw-text-8xl tw-select-none tw-pt-2 tw-pb-2 tw-pr-0 tw-pl-0 ${jost.className}`}>
                        CVF
                    </p>
                </div>
            </header>
            <main>
                <div className="tw-h-screen">aaaaaaaaaaaaaa</div>
            </main>
        </div>
    )
}