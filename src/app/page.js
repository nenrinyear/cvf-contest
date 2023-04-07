"use client";
import { Jost } from 'next/font/google';
import { useEffect } from 'react';

const jost = Jost({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weights: [200, 500],
    display: 'swap',
})

export default function Home() {
    useEffect(() => {
        const video = document.getElementById('logo-mp4');
        video.play()
            .catch((error) => {
                const image = new Image();
                image.src = '/CVF_static_icon.webp';
                image.className = 'sm:w-1/4 w-full rounded-full';
                video.insertAdjacentHTML('afterend', image.outerHTML);
                video.remove();
            });
    }, []);
    return (
        <div className="top">
            <header className='w-screen h-screen bg-black'>
                <div className="w-full sm:h-full h-2/3 flex justify-center items-center">
                    <video muted loop className="sm:w-1/4 w-full rounded-full" id='logo-mp4' >
                        <source src="/CVF_motion.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute bottom-0 left-0 mt-0 mr-0 sm:mb-12 mb-8 sm:ml-12 ml-8 bg-transparent">
                    <p className={`text-white font-extralight italic text-8xl select-none pt-2 pb-2 pr-0 pl-0 ${jost.className}`}>
                        CVF
                    </p>
                </div>
            </header>
            <main>
                <div className="h-screen">aaaaaaaaaaaaaa</div>
            </main>
        </div>
    )
}