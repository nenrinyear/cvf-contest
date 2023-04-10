"use client";
import Script from "next/script"

export default function CanvasAnimation({className }) {
    return (
        <>
            <div id="background-motion" className={className}></div>
            <Script
                src="/logomotion/lottie.min.js"
                onLoad={() => {
                    const animation = lottie.loadAnimation({
                        container: document.getElementById('background-motion'),
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/logomotion/CVF_motion.json',
                    });
                }}
            />
        </>
    )
}