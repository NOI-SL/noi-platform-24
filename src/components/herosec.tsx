// Herosec.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import PrimBut from './ui/buttonone'; // Make sure PrimBut is also converted to TypeScript
import logo from './logoblack.png';
import Image from 'next/image';
import backimage from './hero.png';

const Herosec: React.FC = () => {
    // State to manage the loading of the Spline scene
    const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);

    useEffect(() => {
        // This is a placeholder to simulate the delay of loading the Spline scene
        // In a real scenario, you would use a Spline API method to check if it's loaded, if available.
        const timer = setTimeout(() => {
            setIsSplineLoaded(true);
        }, 1000); // assuming the Spline takes 3 seconds to load

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden">
            <div className=' top-0 -z-50 left-0 w-full h-full'>
                <Image src={backimage.src} alt="NOI 24" layout="fill" objectFit="cover" quality={100} unoptimized />
            </div>


            <div className="flex flex-col items-center justify-center w-full h-screen text-white">
                {isSplineLoaded && (
                    <>
                        <div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
                                className="z-10"
                            >
                                {/* Responsive font sizes for h1 element */}
                                <h1 className="text-6xl md:text-[150px] lg:text-[250px] xl:text-[250px] 2xl:text-[300px] tracking-widest font-bold font-horus ">NOI 24</h1>
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
                                className="z-10"
                            >
                                {/* Responsive text sizes and margin adjustments */}
                                <p className="text-sm md:text-lg lg:text-[20px] xl:text-[22px] 2xl:text-[24px] tracking-widest font-sans mb-10 md:mb-15 lg:mb-20">NATIONAL OLYMPIAD IN INFORMATICS</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
                            className="items-center z-10 font-horus"
                        >
                            <PrimBut name="Register Now" link="/register" />
                        </motion.div>
                    </>
                )}
            </div>



        </main>
    );
}

export default Herosec;
