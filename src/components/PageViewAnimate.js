"use client";
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const variants = {
    hidden: {
        opacity: 0, y: 100
    },
    animate: {
        opacity: 1, y: 0
    }
}

export default function PageViewAnimate({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.4,
    });

    useEffect(() => {
        if (navigator.userAgent.indexOf('iPhone') > -1 && navigator.userAgent.indexOf('CriOS') > -1) {
            controls.start("animate");
        }else if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
}