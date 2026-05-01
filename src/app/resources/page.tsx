"use client"
import React from "react"
// import { useSession } from "next-auth/react"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import Footer from "@/components/footer"

interface Resource {
    title: string
    subtopic: string
    description: string
    link: string
}
interface Passpapers {
    title: string
    description: string
    link: string
}

const Page: React.FC = () => {
    const pastProblemsAndSolutions: Passpapers[] = [
        { title: "IOI 2025 Materials", description: "Find Materials", link: "https://ioinformatics.org/page/ioi-2025/60" },
        { title: "IOI 2024 Materials", description: "Find Materials", link: "https://ioinformatics.org/page/ioi-2024/59" },
        { title: "IOI 2023 Materials", description: "Find Materials", link: "https://ioinformatics.org/page/ioi-2023/58" },
        { title: "IOI 2022 Materials", description: "Find Materials", link: "https://ioinformatics.org/page/ioi-2022/56" },
        { title: "IOI 2021 Materials", description: "Find Materials", link: "https://ioinformatics.org/page/ioi-2021/55" },
        { title: "IOI 2020 Materials", description: "Find Materials", link: "https://ioinformatics.org/page/ioi-2020/54" },
    ]
    const books: Resource[] = [
        { title: "Competitive Programmer's Handbook", subtopic: "Antti Laaksonen", description: "Download Book", link: "https://cses.fi/book/book.pdf" },
        { title: "Introduction to Algorithms 3rd Edition", subtopic: "Thomas H. Cormen", description: "Original Source", link: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
    ]
    const others: Resource[] = [
        { title: "IOI Syllabus", subtopic: "ISC", description: "Visit Syllabus", link: "https://ioinformatics.org/page/syllabus/12" },
        { title: "Hackerrank", subtopic: "www.hackerrank.com", description: "Visit Platform", link: "https://www.hackerrank.com/" },
        { title: "Codeforces", subtopic: "www.codeforces.com", description: "Visit Platform", link: "https://codeforces.com/" },
        { title: "C++ Videos", subtopic: "Codearchery", description: "Watch Videos", link: "https://www.youtube.com/@Codearchery/featured" },
    ]

    const ResourceCard = ({ title, subtopic, description, link }: { title: string; subtopic?: string; description: string; link: string }) => (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden flex flex-col justify-between bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-brand-peach/30 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,143,112,0.15)] h-36"
        >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-peach/0 via-brand-peach/0 to-brand-peach/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className="relative z-10 flex flex-col h-full justify-start">
                <p className="text-brand-light font-semibold text-lg leading-tight group-hover:text-brand-peach transition-colors duration-300 line-clamp-2">
                    {title}
                </p>
                {subtopic && <p className="text-brand-light/40 text-sm mt-1.5 line-clamp-1">{subtopic}</p>}
                
                <div className="flex items-center gap-2 mt-auto">
                    <span className="text-brand-peach/70 text-sm font-medium group-hover:text-brand-peach transition-colors duration-300">
                        {description}
                    </span>
                    <svg className="w-4 h-4 text-brand-peach/50 group-hover:text-brand-peach group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </a>
    )

    const PastProblemCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
        const yearMatch = title.match(/\d{4}/);
        const year = yearMatch ? yearMatch[0] : "";

        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex flex-col justify-between bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-brand-peach/30 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(255,143,112,0.15)] h-32"
            >
                {/* Background Year */}
                {year && (
                    <div className="absolute -right-2 -bottom-8 text-8xl font-black text-white/[0.02] group-hover:text-brand-peach/[0.05] transition-colors duration-500 pointer-events-none select-none z-0 tracking-tighter">
                        {year}
                    </div>
                )}
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-peach/0 via-brand-peach/0 to-brand-peach/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-brand-light font-semibold text-lg group-hover:text-brand-peach transition-colors duration-300">
                        {title}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-auto">
                        <span className="text-brand-peach/70 text-sm font-medium group-hover:text-brand-peach transition-colors duration-300">
                            {description}
                        </span>
                        <svg className="w-4 h-4 text-brand-peach/50 group-hover:text-brand-peach group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </a>
        );
    }

    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center text-center overflow-hidden bg-transparent">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Glow Orbs */}
                <div
                    className="glow-orb w-[450px] h-[450px] -top-20 -right-20 bg-brand-peach/30"
                    style={{ animation: "pagePulse 11s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[350px] h-[350px] bottom-40 -left-20 bg-brand-orange/20"
                    style={{ animation: "pagePulse 15s infinite alternate-reverse" }}
                />

                <Navbar />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-36 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-16 text-center"
                    >
                        <span className="inline-block text-brand-peach text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
                            National Olympiad In Informatics 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight text-brand-light">
                            Learning <span className="tech-gradient-text">Resources</span>
                        </h1>
                        <p className="text-brand-light/50 text-base">Everything you need to prepare and excel.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Past Problems */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="col-span-1 md:col-span-2"
                        >
                            <h2 className="text-brand-peach text-lg font-semibold tracking-widest uppercase mb-4 text-left">
                                Past Problems & Solutions
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pastProblemsAndSolutions.map((r, i) => (
                                    <PastProblemCard key={i} title={r.title} description={r.description} link={r.link} />
                                ))}
                            </div>
                        </motion.section>

                        {/* Books */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="col-span-1 md:col-span-2"
                        >
                            <h2 className="text-brand-peach text-lg font-semibold tracking-widest uppercase mb-4 text-left">
                                Books
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {books.map((r, i) => (
                                    <ResourceCard key={i} title={r.title} subtopic={r.subtopic} description={r.description} link={r.link} />
                                ))}
                            </div>
                        </motion.section>

                        {/* Others */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="col-span-1 md:col-span-2"
                        >
                            <h2 className="text-brand-peach text-lg font-semibold tracking-widest uppercase mb-4 text-left">
                                Platforms & Others
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {others.map((r, i) => (
                                    <ResourceCard key={i} title={r.title} subtopic={r.subtopic} description={r.description} link={r.link} />
                                ))}
                            </div>
                        </motion.section>
                    </div>
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
