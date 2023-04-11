"use client";

import { useEffect } from 'react';

export default function LogoMovieAnimation({ className }) {
    useEffect(() => {
        const video = document.getElementById('logo-mp4');
        video.play()
            .catch((error) => {
                const image = new Image();
                image.src = '/CVF_static_icon.webp';
                image.className = 'sm:tw-w-1/4 tw-w-1/2 tw-rounded-full';
                video.insertAdjacentHTML('afterend', image.outerHTML);
                video.remove();
            });
    }, []);
    return (
        <video muted loop playsInline poster='/CVF_static_icon.webp' className={className} id='logo-mp4' >
            <source src="/CVF_motion.mp4" type="video/mp4" />
        </video>
    )
}