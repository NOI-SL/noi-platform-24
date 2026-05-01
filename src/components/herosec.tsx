"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// import { useSession } from "next-auth/react"
import LoadingScreen from "@/components/loadingscreen"
import PrimButtwo from "./ui/buttontwo"

const Herosec: React.FC = () => {
    // const { status } = useSession()

    // if (status === "loading") {
    //     return (
    //         <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-brand-black">
    //             <LoadingScreen />
    //         </main>
    //     )
    // }

    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-transparent">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Glow Orbs */}
                <div 
                    className="glow-orb w-[400px] h-[400px] -top-20 -left-20 bg-brand-peach/30" 
                    style={{ animation: "pulse 10s infinite alternate" }}
                />
                <div 
                    className="glow-orb w-[500px] h-[500px] -bottom-40 -right-20 bg-brand-orange/20" 
                    style={{ animation: "pulse 12s infinite alternate-reverse" }}
                />
                
                <Navbar />

                <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 py-20 lg:py-0 min-h-screen">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block text-brand-peach text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 opacity-80">
                            National Olympiad In Informatics 2026
                        </span>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-brand-light">
                            Decode the <span className="tech-gradient-text">Future</span>
                        </h1>

                        <div className="max-w-2xl mx-auto space-y-6">
                            <p className="text-base md:text-lg text-brand-light/70 leading-relaxed font-sans font-light">
                                Informatics Olympiad is an algorithmic programming contest held annually for secondary school students all over the world.
                            </p>
                            <p className="text-sm md:text-base text-brand-light/60 leading-relaxed font-sans font-light italic">
                                NOI Sri Lanka recognizes exceptional students, raising awareness and selecting the national team for the International Olympiad in Informatics (IOI).
                            </p>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <PrimButtwo
                                name="Register Now"
                                link="https://docs.google.com/forms/d/e/1FAIpQLScqNMAtWQ5DnkdVuBuWxnqgMQvZCchHe0hLdxAtfVZhYXx3lQ/viewform"
                            />
                            <Link 
                                href="/howtocompete"
                                className="text-brand-light/50 hover:text-brand-light transition-colors duration-300 text-sm font-medium tracking-widest uppercase border-b border-brand-light/20 pb-1"
                            >
                                How to Compete
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <Footer />
            </main>

            <style jsx>{`
                @keyframes pulse {
                    from { transform: translate(0, 0) scale(1); opacity: 0.15; }
                    to { transform: translate(20px, 20px) scale(1.1); opacity: 0.25; }
                }
            `}</style>
        </>
    )
}

export default Herosec
