"use client"
import React from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Globe, Terminal, School, User, Sigma, CheckCircle2, Languages, Trophy, ArrowRight, Code2 } from "lucide-react"

// Arrow connector component
const FlowArrow = () => (
    <div className="w-12 shrink-0 flex items-center justify-center">
        <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/40" />
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-blue-500/50" />
        </div>
    </div>
)

import { PatternWaves, PatternDotsWave, PatternChevrons, PatternDotsCircle, PatternStripesCircle } from "@/components/ui/card-patterns"

const HowToCompete: React.FC = () => {
    const paths = [
        {
            title: "NOI Online Qualifier",
            year: "2026",
            label: "Primary Selection",
            date: "14 Apr 2026",
            location: "Online Contest",
            desc: "The primary entry point. An online algorithmic contest held in April 2026 to identify top national talent.",
            icon: Globe,
            color: "bg-purple-500",
            pattern: "waves"
        },
        {
            title: "Codeforces Weekly",
            year: "2025-26",
            label: "Rating Based",
            date: "Ongoing",
            location: "Global Platform",
            desc: "For active competitive programmers. Maintain a 1400+ rating with recent participation.",
            icon: Terminal,
            color: "bg-blue-500",
            pattern: "dots-wave"
        },
        {
            title: "NSSC Winners",
            year: "2025",
            label: "Top 6 Finishers",
            date: "Oct 2025",
            location: "Colombo, LK",
            desc: "Recognizing excellence in the National Schools Software Competition. Top 6 finishers qualify.",
            icon: School,
            color: "bg-yellow-400",
            pattern: "chevrons"
        },
        {
            title: "YCS Excellence",
            year: "2025",
            label: "Top 3 Performers",
            date: "Nov 2025",
            location: "Colombo, LK",
            desc: "Top 3 performers from the Young Computer Scientist competition age categories are eligible.",
            icon: User,
            color: "bg-green-500",
            pattern: "dots-circle"
        },
        {
            title: "Math Olympiad",
            year: "2025-26",
            label: "Direct Entry",
            date: "Jul 2025",
            location: "International",
            desc: "Sri Lankan representatives at the International Mathematical Olympiad (IMO) receive direct entry.",
            icon: Sigma,
            color: "bg-orange-500",
            pattern: "stripes-circle"
        },
    ]

    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-transparent text-slate-200">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Atmospheric Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
                    <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-sky-500/10 blur-[100px]" />
                    <div className="absolute -bottom-[5%] left-[20%] w-[35%] h-[35%] rounded-full bg-indigo-600/5 blur-[120px]" />
                </div>

                <Navbar />

                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-48 pb-32">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl mb-32"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-blue-500/50" />
                            <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">
                                Competition Guidelines
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight text-white leading-tight">
                            Path to the <span className="text-blue-500">National Team</span>
                        </h1>
                        <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl">
                            A comprehensive guide for students aspiring to represent Sri Lanka at the International Olympiad in Informatics (IOI) 2026.
                        </p>
                    </motion.div>

                    {/* About & Eligibility */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 glass-card rounded-2xl p-10 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Trophy className="w-5 h-5 text-blue-500" />
                                    About the Competition
                                </h2>
                                <div className="space-y-6 text-slate-400 font-light leading-relaxed text-base">
                                    <p>
                                        The National Olympiad in Informatics (NOI) is the premier platform for identifying Sri Lanka&apos;s most talented young computer scientists. Unlike traditional software development, NOI focuses exclusively on <span className="text-blue-400 font-medium">Competitive Programming</span>.
                                    </p>
                                    <p>
                                        Contestants are challenged to solve complex algorithmic problems using logic and mathematical precision. Success requires deep knowledge of data structures, algorithms, and computational efficiency.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card rounded-2xl p-10 border-t-2 border-t-blue-600/50"
                        >
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                Eligibility
                            </h2>
                            <ul className="space-y-5">
                                <li className="flex gap-4">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    <p className="text-slate-400 font-light text-sm">Sri Lankan citizen enrolled in a primary or secondary school.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    <p className="text-slate-400 font-light text-sm">Not older than 20 years of age by July 1, 2026.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    <p className="text-slate-400 font-light text-sm">Demonstrated proficiency in algorithmic thinking.</p>
                                </li>
                            </ul>
                        </motion.section>
                    </div>

                    {/* Qualification Path Cards */}
                    <div className="mb-32">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div className="max-w-xl text-left">
                                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Qualification Paths</h2>
                                <p className="text-slate-500 font-light text-sm">Candidates must qualify through at least one of the following five distinct academic and competitive pathways.</p>
                            </div>
                            <div className="hidden md:block h-[1px] flex-1 mx-12 bg-white/5" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paths.map((path, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="glass-card relative overflow-hidden rounded-xl p-8 flex flex-col min-h-[360px] group"
                                >
                                    {/* Top Row */}
                                    <div className="flex justify-between items-start mb-10 relative z-10">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${path.color} shadow-lg`}>
                                            <path.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-medium tracking-wider">{path.date}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex-1 flex flex-col">
                                        <span className="text-[11px] text-gray-400 mb-2">{path.label}</span>
                                        <h4 className="text-[22px] font-bold text-white mb-2 leading-tight">{path.title}</h4>
                                        <div className="text-[15px] font-semibold text-gray-300 mb-6">{path.year}</div>
                                        
                                        <p className="text-[13px] text-gray-500/80 leading-relaxed font-light mb-8 max-w-[90%] group-hover:text-gray-400 transition-colors duration-300">
                                            {path.desc}
                                        </p>
                                    </div>

                                    {/* Bottom row */}
                                    <div className="mt-auto relative z-10">
                                        <span className="text-[11px] text-gray-400">{path.location}</span>
                                    </div>
                                    
                                    {/* Pattern */}
                                    {path.pattern === 'waves' && <PatternWaves />}
                                    {path.pattern === 'dots-wave' && <PatternDotsWave />}
                                    {path.pattern === 'chevrons' && <PatternChevrons />}
                                    {path.pattern === 'dots-circle' && <PatternDotsCircle />}
                                    {path.pattern === 'stripes-circle' && <PatternStripesCircle />}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ═══════════════════════════════════════════════════════ */}
                    {/* Program Structure — Flow Diagram                      */}
                    {/* ═══════════════════════════════════════════════════════ */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-[1.5rem] p-8 md:p-12 mb-32 overflow-hidden"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight text-center">
                            Program <span className="text-blue-500">Structure</span>
                        </h2>
                        <p className="text-slate-500 text-sm text-center mb-12 max-w-lg mx-auto">
                            The complete journey from eligibility verification to international representation.
                        </p>

                        {/* Scrollable flow */}
                        <div className="overflow-x-auto">
                            <div className="min-w-[960px] px-2">

                                {/* Column Headers */}
                                <div className="flex mb-6">
                                    <div className="w-[140px] shrink-0 border-b border-dashed border-blue-500/15 pb-3">
                                        <span className="text-blue-400/60 text-[9px] font-bold uppercase tracking-[0.25em]">Eligibility</span>
                                    </div>
                                    <div className="w-12 shrink-0" />
                                    <div className="flex-1 border-b border-dashed border-blue-500/15 pb-3">
                                        <span className="text-blue-400/60 text-[9px] font-bold uppercase tracking-[0.25em]">Qualifying for NOI</span>
                                    </div>
                                    <div className="w-12 shrink-0" />
                                    <div className="w-[200px] shrink-0 border-b border-dashed border-blue-500/15 pb-3">
                                        <span className="text-blue-400/60 text-[9px] font-bold uppercase tracking-[0.25em]">NOI</span>
                                    </div>
                                    <div className="w-12 shrink-0" />
                                    <div className="w-[200px] shrink-0 border-b border-dashed border-blue-500/15 pb-3">
                                        <span className="text-blue-400/60 text-[9px] font-bold uppercase tracking-[0.25em]">After NOI</span>
                                    </div>
                                </div>

                                {/* Flow Nodes */}
                                <div className="flex items-stretch pt-6">

                                    {/* ── Eligibility ── */}
                                    <div className="w-[140px] shrink-0 flex items-center">
                                        <div className="w-full rounded-lg border border-blue-500/20 bg-blue-500/[0.04] p-4 text-center">
                                            <User className="w-5 h-5 text-blue-500/60 mx-auto mb-3" />
                                            <p className="text-slate-300 text-[11px] font-medium leading-relaxed">
                                                Sri Lankans who are not older than 20 yrs by July 1, 2026 and enrolled in a primary or secondary school
                                            </p>
                                        </div>
                                    </div>

                                    <FlowArrow />

                                    {/* ── Qualification Paths ── */}
                                    <div className="flex-1 flex flex-col gap-3 justify-center">
                                        {/* Primary */}
                                        <div className="rounded-lg border border-blue-500/25 bg-blue-500/[0.06] px-5 py-3.5 flex items-center gap-3 hover:bg-blue-500/10 transition-colors">
                                            <Globe className="w-4 h-4 text-blue-500 shrink-0" />
                                            <div>
                                                <span className="text-white font-semibold text-[13px]">NOI Online Qualifier</span>
                                                <span className="text-blue-400/50 text-[9px] ml-2 uppercase tracking-wider">Primary</span>
                                            </div>
                                        </div>

                                        {/* Secondary group */}
                                        <div className="rounded-xl border border-white/[0.06] p-3.5 relative mt-1">
                                            <span className="absolute -top-2 left-3 px-2 text-[8px] font-bold text-slate-600 uppercase tracking-wider bg-[#0a1628] border border-white/5 rounded">
                                                Other Qualification Paths
                                            </span>
                                            <div className="flex flex-col gap-2 mt-1.5">
                                                {[
                                                    { icon: Terminal, name: "Codeforces Weekly Contests" },
                                                    { icon: School, name: "National School Software Competition (NSSC)" },
                                                    { icon: User, name: "Young Computer Scientist (YCS)" },
                                                    { icon: Sigma, name: "International Mathematical Olympiad (IMO)" },
                                                ].map((item, i) => (
                                                    <div key={i} className="rounded-md border border-white/[0.04] bg-white/[0.02] px-4 py-2.5 flex items-center gap-3 text-slate-400 text-[12px] hover:border-blue-500/15 hover:text-slate-300 transition-colors">
                                                        <item.icon className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                                                        {item.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <FlowArrow />

                                    {/* ── NOI ── */}
                                    <div className="w-[200px] shrink-0 flex items-center">
                                        <div className="w-full rounded-xl border border-blue-500/25 bg-blue-600/[0.08] p-6 text-center relative overflow-hidden">
                                            {/* Subtle glow behind */}
                                            <div className="absolute inset-0 bg-blue-500/5 blur-2xl pointer-events-none" />
                                            <div className="relative z-10">
                                                <div className="w-11 h-11 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                                                    <Trophy className="w-5 h-5 text-blue-500" />
                                                </div>
                                                <h4 className="text-white font-bold text-sm mb-1 leading-snug">National Olympiad in Informatics</h4>
                                                <p className="text-blue-400/60 text-[9px] font-bold uppercase tracking-widest">(NOI) 2026</p>
                                            </div>
                                        </div>
                                    </div>

                                    <FlowArrow />

                                    {/* ── IOI ── */}
                                    <div className="w-[200px] shrink-0 flex items-center">
                                        <div className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
                                            <div className="w-11 h-11 rounded-full bg-slate-800/80 border border-white/5 flex items-center justify-center mx-auto mb-4">
                                                <Globe className="w-5 h-5 text-slate-400" />
                                            </div>
                                            <h4 className="text-white font-bold text-sm mb-1 leading-snug">International Olympiad in Informatics</h4>
                                            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">(IOI) 2026, Bolivia</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </motion.section>

                    {/* Language & C++ */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-3 glass-card rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 text-left"
                        >
                            <div className="w-20 h-20 shrink-0 bg-slate-950/30 rounded-xl flex items-center justify-center border border-white/5">
                                <Code2 className="w-9 h-9 text-blue-500/70" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <Languages className="w-4 h-4 text-blue-500" />
                                    <h2 className="text-white text-lg font-bold tracking-tight">
                                        Standard Technical Environment
                                    </h2>
                                </div>
                                <p className="text-slate-500 leading-relaxed font-light text-[13px] mb-5">
                                    As per the International Olympiad standards, <span className="text-slate-300 font-medium">C++</span> is the mandatory programming language. We advise candidates to build deep proficiency in C++ STL and optimized implementations.
                                </p>
                                <a 
                                    href="https://cplusplus.com/doc/tutorial/" 
                                    target="_blank" 
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-[10px] font-bold uppercase tracking-widest"
                                >
                                    View Documentation <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </motion.section>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center bg-blue-600/5 border-blue-500/10"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-600/5 flex items-center justify-center mb-5 text-blue-500">
                                <Globe className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-bold mb-2 text-sm tracking-tight">Host Nation</h3>
                            <p className="text-slate-500 text-xs font-light">
                                IOI 2026 will be hosted by the Republic of Bolivia.
                            </p>
                        </motion.div>
                    </div>

                    {/* Footer line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center pt-12 border-t border-white/5"
                    >
                        <p className="text-slate-600 text-[10px] tracking-widest uppercase font-bold">
                            Official Selection Protocol — NOI Sri Lanka 2026
                        </p>
                    </motion.div>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default HowToCompete
