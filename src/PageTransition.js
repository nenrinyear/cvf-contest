"use client";
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}