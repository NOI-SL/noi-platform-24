"use client"
import React from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Image from "next/image"
import cplusplus from "@/assets/img/cplusplus.png"
import programStructure from "@/assets/img/program-structure.png"
import Footer from "@/components/footer"

const HowToCompete: React.FC = () => {
    return (
        <>
            <main className="relative min-h-screen w-full flex flex-col items-center text-center overflow-hidden bg-transparent">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Subtle Glow Orbs */}
                <div
                    className="glow-orb w-[500px] h-[500px] -top-40 -left-20 bg-brand-peach"
                    style={{ animation: "pagePulse 10s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[400px] h-[400px] top-1/2 -right-20 bg-brand-orange"
                    style={{ animation: "pagePulse 14s infinite alternate-reverse" }}
                />
                <div
                    className="glow-orb w-[300px] h-[300px] bottom-0 left-1/3 bg-brand-peach"
                    style={{ animation: "pagePulse 18s infinite alternate" }}
                />

                <Navbar />

                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-36 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block text-brand-peach text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
                            National Olympiad In Informatics 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-tight tracking-tight text-brand-light">
                            How to <span className="tech-gradient-text">Compete</span>
                        </h1>
                    </motion.div>

                    {/* About */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-black/30 backdrop-blur-sm border border-brand-peach/10 rounded-2xl p-8 mb-8 text-left"
                    >
                        <h2 className="text-brand-peach text-xl font-semibold mb-4 tracking-wide">
                            About the Competition
                        </h2>
                        <p className="text-brand-light/70 leading-relaxed">
                            NOI focuses on Competitive Programming, a format where participants are presented with clearly defined problems. Contestants must write programs that solve these problems efficiently. Submitted solutions are evaluated against test cases, with emphasis on algorithms and computational thinking rather than software development skills like UI/UX design or application development. Participants are expected to write simple programs that process inputs and produce outputs.
                        </p>
                    </motion.section>

                    {/* Eligibility */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="bg-black/30 backdrop-blur-sm border border-brand-peach/10 rounded-2xl p-8 mb-8 text-left"
                    >
                        <h2 className="text-brand-peach text-xl font-semibold mb-4 tracking-wide">
                            Eligibility
                        </h2>
                        <p className="text-brand-light/70 leading-relaxed">
                            Sri Lankans who are not older than 20 yrs by July 1, 2026, and enrolled in a primary or secondary school (government / private) as a student are eligible for NOI.
                        </p>
                    </motion.section>

                    {/* Competition Structure */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="bg-black/30 backdrop-blur-sm border border-brand-peach/10 rounded-2xl p-8 mb-8 text-left"
                    >
                        <h2 className="text-brand-peach text-xl font-semibold mb-6 tracking-wide">
                            Competition Structure
                        </h2>
                        <div className="flex justify-center mb-8">
                            <Image
                                src={programStructure}
                                alt="Program Structure"
                                className="rounded-xl opacity-90"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-brand-peach/90 font-medium mb-2">National Olympiad in Informatics (NOI)</h3>
                                <p className="text-brand-light/70 leading-relaxed">
                                    National Olympiad in Informatics is a two-day on-site competition totaling 10 hours. Contestants are evaluated on challenging problem-solving tasks using C++. The top four performers with non-zero scores are selected to represent Sri Lanka at the International Olympiad in Informatics (IOI) 2026, Bolivia.
                                    <br /><br />
                                    To participate in NOI, individuals must fulfill the eligibility criteria above AND also fulfill one of the qualification paths below.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-brand-peach/90 font-medium mb-3">Qualifying for NOI — 5 Paths</h3>
                                <p className="text-brand-light/70 leading-relaxed mb-4">
                                    There are 5 paths through which an eligible individual can become qualified to participate in NOI 2026. Meeting the qualification criteria of at least one of the following paths will qualify you for the National Olympiad in Informatics. It is recommended that you do the NOI Online Qualifier unless you are already qualified through one of the other paths.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        {
                                            title: "NOI Online Qualifier",
                                            desc: "This is an online competitive programming contest held in April 2026. Top 8 performers in NOI Online Qualifier round (excluding contestants already qualified through another path), with a non-zero score are qualified for NOI through this path. All candidates registered through the website will receive notification via email on the dates and the instructions to participate."
                                        },
                                        {
                                            title: "Codeforces Weekly Contests",
                                            desc: "Individuals rated above 1400 following at least 2 rated Codeforces contests between Jan 1, 2026 to March 31, 2026 are qualified for NOI through this path."
                                        },
                                        {
                                            title: "National Schools Software Competition (NSSC)",
                                            desc: "Top 6 performers with a non-zero score in the most recent NSSC held prior to the NOI are qualified for NOI through this path."
                                        },
                                        {
                                            title: "Young Computer Scientist (YCS) Competition",
                                            desc: "Individuals who rank among the top 3 in the respective age categories, in the most recent YCS competition held prior to the NOI are qualified through this path."
                                        },
                                        {
                                            title: "International Mathematical Olympiad (IMO)",
                                            desc: "Individuals who competed at the most recent IMO prior to NOI, representing Sri Lanka are qualified for NOI through this path."
                                        },
                                    ].map((item, i) => (
                                        <li key={i} className="border border-brand-peach/10 bg-white/5 rounded-xl p-4">
                                            <h4 className="text-brand-light font-semibold mb-1">{item.title}</h4>
                                            <p className="text-brand-light/60 text-sm leading-relaxed">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-brand-peach/90 font-medium mb-2">International Olympiad in Informatics (IOI)</h3>
                                <p className="text-brand-light/70 leading-relaxed">
                                    The top four performers with non-zero scores are selected to represent Sri Lanka at the International Olympiad in Informatics (IOI) 2026, Bolivia. IOI is an internationally renowned event that brings together the best young computer scientists from across the globe.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Eligible Languages */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="bg-black/30 backdrop-blur-sm border border-brand-peach/10 rounded-2xl p-8 mb-8 text-left"
                    >
                        <h2 className="text-brand-peach text-xl font-semibold mb-6 tracking-wide">
                            Eligible Languages
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a
                                href="https://cplusplus.com/doc/tutorial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 hover:scale-105 transition-transform duration-300"
                            >
                                <Image src={cplusplus} alt="C++" width={100} height={100} />
                            </a>
                            <div>
                                <p className="text-brand-light/70 leading-relaxed">
                                    International Olympiad in Informatics (IOI) only allows C++ as the programming language. Therefore, National Olympiad in Informatics (NOI) also allows C++ as the programming language.
                                </p>
                                <p className="text-brand-peach/80 mt-3 font-medium text-sm">
                                    Students are encouraged to start with any language they are comfortable with and gradually transition to C++ with guidance from the NOI community.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* IOI Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="text-brand-peach/70 text-sm leading-relaxed"
                    >
                        Four contestants will be selected based on their performance at the main competition to represent Sri Lanka at the International Olympiad in Informatics 2026 program, hosted by Bolivia.
                    </motion.div>
                </div>

                <Footer />
            </main>

            <style jsx>{`
                @keyframes pagePulse {
                    from { transform: translate(0, 0) scale(1); opacity: 0.12; }
                    to { transform: translate(30px, 30px) scale(1.15); opacity: 0.22; }
                }
            `}</style>
        </>
    )
}

export default HowToCompete
