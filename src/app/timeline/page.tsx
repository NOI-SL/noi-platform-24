"use client"
import React from "react"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import "./Timeline.css"
import Footer from "@/components/footer"

const Page: React.FC = () => {
    let items = [
        { date: "February 13, 2026", event: "Registrations Open for NOI 2026", description: "" },
        { date: "March 31, 2026", event: "Registrations Close for NOI 2026", description: "" },
        { date: "April 5, 2026", event: "Deadline for Submission of Proof of Qualification for Codeforces", description: "" },
        {
            date: "April 5, 2026",
            event: "Qualifier Contest for NOI 2026",
            description: "An online qualifier contest will be conducted to select promising students who will advance to compete in the National Olympiad in Informatics (NOI) 2026.",
        },
        { date: "May 3, 2026", event: "NOI 2026 Day 1", description: "Day 1 of NOI 2026 will be conducted at the end of April." },
        { date: "May 4, 2026", event: "NOI 2026 Day 2", description: "Day 2 of NOI 2026 will be conducted at the end of April." },
        {
            date: "May – June, 2026",
            event: "Training Program",
            description: "The selected national team will undergo an intensive training program, focusing on algorithms, competitive programming techniques, and problem-solving strategies to prepare for IOI 2026.",
        },
        {
            date: "July 27 – Aug 3, 2026",
            event: "International Olympiad in Informatics (IOI) 2026",
            description: "The Sri Lankan national team will represent the country at the International Olympiad in Informatics 2026, which will be held in Bolivia.",
        },
        {
            date: "November, 2026",
            event: "Award Ceremony",
            description: "An official award ceremony will be held to recognize and celebrate students who have demonstrated outstanding performance in NOI 2026.",
        },
    ]

    function timelineItem(date: string, event: string, description: string, index: number) {
        return (
            <div className={`timeline-4 ${index % 2 === 0 ? "left" : "right"}-4`} key={index}>
                <div className={`opacity-90 rounded card gradient-custom${index % 2 === 0 ? "-4" : ""}`}>
                    <div className="card-body p-4">
                        <b><h4 className="text-gold">{event}</h4></b>
                        {description && <p className="text-white mt-2">{description}</p>}
                        <p className="text-gold mt-2 text-sm font-medium">{date}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center text-center overflow-hidden bg-transparent">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Glow Orbs */}
                <div
                    className="glow-orb w-[500px] h-[500px] -top-20 -left-20 bg-brand-peach"
                    style={{ animation: "pagePulse 13s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[400px] h-[400px] -bottom-20 -right-20 bg-brand-orange"
                    style={{ animation: "pagePulse 17s infinite alternate-reverse" }}
                />

                <Navbar />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-36 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-16"
                    >
                        <span className="inline-block text-brand-peach text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
                            National Olympiad In Informatics 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight text-brand-light">
                            Event <span className="tech-gradient-text">Timeline</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col w-full">
                            <div className="timeLineContainorOuter w-full">
                                <div className="timeLineContainor w-full">
                                    <div className="main-timeline-4 text-white w-full" id="timeLineComponentDiv">
                                        {items.map((item, index) =>
                                            timelineItem(item.date, item.event, item.description, index)
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <Footer />
            </main>

            <style jsx>{`
                @keyframes pagePulse {
                    from { transform: translate(0, 0) scale(1); opacity: 0.12; }
                    to { transform: translate(25px, 25px) scale(1.12); opacity: 0.22; }
                }
            `}</style>
        </>
    )
}

export default Page
