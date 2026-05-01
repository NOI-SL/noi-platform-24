"use client"
import React from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Footer from "@/components/footer"
import { PatternWaves, PatternDotsWave, PatternChevrons, PatternDotsCircle, PatternStripesCircle } from "@/components/ui/card-patterns"

import thamindu from "@/assets/img/thamindu.png"
import kulunu from "@/assets/img/kulunu.jpg"
import dilini from "@/assets/img/dilini.png"
import venudi from "@/assets/img/venudi.png"
import pasindu from "@/assets/img/pasindu.png"

interface Organizer {
    name: string
    title: string
    organization: string
    image: any
}

const Page: React.FC = () => {
    const ieeeOrganizers: Organizer[] = [
        { name: "Mr. Thamindu Sri Nirmal", title: "Chair", organization: "IEEE CodeX Sri Lanka", image: thamindu },
        { name: "Mr. Kulunu Weerasoory", title: "Vice Chair", organization: "IEEE Young Professionals Sri Lanka", image: kulunu },
        { name: "Eng. Dilini Ekanayaka", title: "Chair", organization: "Educational Activities Committee, IEEE Sri Lanka Section", image: dilini },
    ]

    const noiScientificCommittee: Organizer[] = [
        { name: "Venudi Dayarathne", title: "Coordinator", organization: "NOI 2026 Program", image: venudi },
        { name: "Pasindu Wijesena", title: "Member", organization: "NOI 2026 Program", image: pasindu },
    ]

    const renderPattern = (index: number) => {
        const type = index % 5;
        if (type === 0) return <PatternWaves />;
        if (type === 1) return <PatternDotsWave />;
        if (type === 2) return <PatternChevrons />;
        if (type === 3) return <PatternDotsCircle />;
        return <PatternStripesCircle />;
    };

    const renderOrganizerCard = (organizer: Organizer, index: number) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
        >
            <div className="relative z-10 mb-5 flex justify-center">
                <div className="p-1 rounded-[2rem] bg-brand-black/30 border border-white/5 backdrop-blur-sm shadow-xl">
                    <Image
                        src={organizer.image}
                        alt={organizer.name}
                        width={120}
                        height={120}
                        className="rounded-[1.75rem] object-cover"
                    />
                </div>
            </div>
            <h3 className="relative z-10 text-brand-light text-xl font-bold mb-1 tracking-tight">{organizer.name}</h3>
            <p className="relative z-10 text-brand-peach font-medium text-sm mb-3">{organizer.title}</p>
            <p className="relative z-10 text-brand-light/50 text-xs tracking-wide">{organizer.organization}</p>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50">
                {renderPattern(index)}
            </div>
        </motion.div>
    )

    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center text-center overflow-hidden bg-transparent">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Glow Orbs */}
                <div
                    className="glow-orb w-[500px] h-[500px] -top-40 -right-20 bg-brand-orange/20"
                    style={{ animation: "pagePulse 12s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[400px] h-[400px] bottom-20 -left-20 bg-brand-peach/30"
                    style={{ animation: "pagePulse 16s infinite alternate-reverse" }}
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-brand-light">
                            Meet the <span className="tech-gradient-text">Organizers</span>
                        </h1>
                        <p className="text-brand-light/60 text-lg leading-relaxed max-w-2xl mx-auto">
                            Organized by{" "}
                            <span className="text-brand-peach font-semibold">IEEE CodeX Sri Lanka</span>
                            {" "}in collaboration with the{" "}
                            <span className="text-brand-peach font-semibold">NOI Scientific Committee</span>
                            , and endorsed by the{" "}
                            <span className="text-brand-peach font-semibold">Ministry of Education Sri Lanka</span>.
                        </p>
                    </motion.div>

                    {/* IEEE Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-bold text-brand-light mb-8 flex items-center justify-center gap-3">
                            <span className="h-px flex-1 bg-white/10 hidden sm:block" />
                            <span>IEEE</span>
                            <span className="h-px flex-1 bg-white/10 hidden sm:block" />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ieeeOrganizers.map((organizer, index) => renderOrganizerCard(organizer, index))}
                        </div>
                    </motion.div>

                    {/* Scientific Committee Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        <h2 className="text-2xl font-bold text-brand-light mb-8 flex items-center justify-center gap-3">
                            <span className="h-px flex-1 bg-white/10 hidden sm:block" />
                            <span>NOI Scientific Committee</span>
                            <span className="h-px flex-1 bg-white/10 hidden sm:block" />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {noiScientificCommittee.map((organizer, index) => renderOrganizerCard(organizer, index))}
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
