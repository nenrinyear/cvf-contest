"use client";
import Script from "next/script";
import Lottie from "lottie-react";

import CVF_motion from "../public/logomotion/CVF_motion.json";

export default function CanvasAnimation({className }) {
    return (
        <>
            <Lottie 
                animationData={CVF_motion}
                loop={true}
                autoplay={true}
                renderer="svg"
                />
        </>
    )
}