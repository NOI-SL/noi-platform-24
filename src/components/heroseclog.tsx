// Herosec.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import PrimBut from "./ui/buttonone"; // Make sure PrimBut is also converted to TypeScript
import Image from "next/image";
import NOIMask from "@/assets/img/NOIMask.svg";
import Navbar from "@/components/navbar";
import PrimButtwo from "./ui/buttontwo";
import Footer from "@/components/footer";

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
        <>
            <main className="absolute min-h-full w-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen">
                <Navbar />
                <div className="flex flex-col items-center justify-center w-full h-screen text-accent">
                    {isSplineLoaded && (
                        <>
                            <div>
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    className="z-10"
                                >
                                    {/* Responsive font sizes for h1 element */}
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                            type: "spring",
                                            stiffness: 100,
                                        }}
                                        className="z-10"
                                    >
                                        <div className="w-full cursor-pointer hover:pointer">
                                            <Image
                                                className="hover:scale-105 transition-transform duration-300"
                                                src={NOIMask}
                                                alt="maskImage"
                                                width={700}
                                                height={500}
                                            />
                                            <p className="text-sm text-white md:text-lg lg:text-[25px] tracking-widest font-sans lg:mb-2">
                                                <b>National Olympiad In Informatics</b>
                                            </p>
                                            <p className="text-sm text-gold md:text-lg lg:text-[15px] tracking-widest font-sans lg:mb-2">
                                                <b>ජාතික පරිගණක විද්‍යා ඔලිම්පියාඩ් තරඟාවලිය</b>
                                            </p>
                                            <p className="text-sm text-gold md:text-lg lg:text-[20px] tracking-widest font-sans lg:mb-2">
                                                <b>2024</b>
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className="items-center z-10 font-horus"
                            >
                                <PrimBut name="Continue to Profile" link="/profile" />
                                {/* <PrimButtwo name="Continue to Profile" link="/profile" /> */}
                                {/* <p className='font-sans'>If you haven't registered yet please register now</p> */}
                            </motion.div>
                        </>
                    )}
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Herosec;
