import { Jost, Zen_Maru_Gothic } from 'next/font/google';

import CanvasAnimation from './canvas-animation';
import LogoMovieAnimation from './logo-animation';

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
    return (
        <div className={`${styles.top} ${zen_maru_gothic.className}`}>
            <header className='tw-w-full tw-h-screen tw-relative tw-z-0 tw-bg-black'>
                <div className='tw-absolute tw-w-full tw-h-full tw-z-10 tw-select-none'>
                    <CanvasAnimation className='tw-w-full tw-z-10 tw-object-cover tw-object-center' />
                </div>
                <div className="tw-w-full sm:tw-h-full tw-h-2/3 tw-flex tw-relative tw-z-20 tw-justify-center tw-items-center">
                    <LogoMovieAnimation className='sm:tw-w-1/4 tw-w-1/2 tw-rounded-full' />
                </div>
                <div className="tw-absolute tw-z-20 tw-backdrop-blur-lg tw-20 tw-bottom-0 tw-left-0 tw-mt-0 tw-mr-0 sm:tw-mb-12 tw-mb-32 sm:tw-ml-12 tw-ml-6 tw-bg-transparent">
                    <p className={`tw-text-white tw-font-extralight tw-italic tw-text-3xl tw-select-none tw-ml-2 ${jost.className}`}>
                        Next to the Stage.
                    </p>
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