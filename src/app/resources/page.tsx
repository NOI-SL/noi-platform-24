"use client"
import React from "react"
import { useSession } from "next-auth/react"
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
            className="group flex items-center justify-between bg-black/30 backdrop-blur-sm border border-brand-peach/10 hover:border-brand-peach/40 rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5"
        >
            <div className="text-left">
                <p className="text-brand-light font-medium group-hover:text-brand-peach transition-colors duration-300">{title}</p>
                {subtopic && <p className="text-brand-light/40 text-xs mt-0.5">{subtopic}</p>}
            </div>
            <span className="text-brand-peach/60 text-sm font-medium group-hover:text-brand-peach transition-colors duration-300 shrink-0 ml-4">
                {description} →
            </span>
        </a>
    )

    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center text-center overflow-hidden bg-brand-black">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Glow Orbs */}
                <div
                    className="glow-orb w-[450px] h-[450px] -top-20 -right-20 bg-brand-peach"
                    style={{ animation: "pagePulse 11s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[350px] h-[350px] bottom-40 -left-20 bg-brand-orange"
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {pastProblemsAndSolutions.map((r, i) => (
                                    <ResourceCard key={i} title={r.title} description={r.description} link={r.link} />
                                ))}
                            </div>
                        </motion.section>

                        {/* Books */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            <h2 className="text-brand-peach text-lg font-semibold tracking-widest uppercase mb-4 text-left">
                                Books
                            </h2>
                            <div className="flex flex-col gap-3">
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
                        >
                            <h2 className="text-brand-peach text-lg font-semibold tracking-widest uppercase mb-4 text-left">
                                Platforms & Others
                            </h2>
                            <div className="flex flex-col gap-3">
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
