"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface PrimButProps {
    name: string;
    link: string;
}

const PrimButtwo: React.FC<PrimButProps> = ({ name, link }) => {
    const [hovered, setHovered] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            router.push(link);
        }
    };

    return (
        <motion.button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            className="relative px-10 py-4 overflow-hidden group rounded-full border border-brand-peach/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Background fill animation */}
            <motion.div
                className="absolute inset-0 bg-brand-peach"
                initial={{ x: "-100%" }}
                animate={{ x: hovered ? "0%" : "-100%" }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            />
            
            {/* Text */}
            <span className={`relative z-10 text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                hovered ? 'text-brand-black' : 'text-brand-peach'
            }`}>
                {name}
            </span>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-brand-peach blur-xl transition-opacity duration-300" />
        </motion.button>
    );
}

export default PrimButtwo;
