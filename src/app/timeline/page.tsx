"use client"
import React, { createContext } from "react"
import { useSession } from "next-auth/react"
import Navbar from "@/components/navbar"
// import { motion } from "framer-motion";
import Image from "next/image"
import awardImages from "@/assets/img/GoldSilverBronze.png"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import "./Timeline.css"
import NOIMask from "@/assets/img/NOIMaskp.png"
import Footer from "@/components/footer"
import Particles from "@/components/particles/ParticleDesign"

const Page: React.FC = () => {
    let items = [
        {
            date: "February 13, 2025",
            event: "Registrations Openes for NOI 2025",
            description: "",
        },
        {
            date: "March 31, 2025",
            event: "Registrations Close for NOI 2025",
            description: "",
        },
        {
            date: "April 5, 2025",
            event: "Deadline for Submission of Proof of Qualification for Codeforces",
            description: "",
        },
        {
            date: "April 5, 2025",
            event: "Qualifier Contest for NOI 2025",
            description:
                "An online qualifier contest will be conducted to select promising students who will advance to compete in the National Olympiad in Informatics (NOI) 2025.",
        },
        {
            date: "April 19, 2025",
            event: "NOI 2025 Day 1",
            description:
                "Day 1 of NOI 2025 will be conducted at the end of April.",
        },
        {
            date: "April 26, 2025",
            event: "NOI 2025 Day 2",
            description:
                "Day 2 of NOI 2025 will be conducted at the end of April.",
        },
        {
            date: "May - June, 2025",
            event: "Training Program",
            description:
                "The selected national team will undergo an intensive training program, focusing on algorithms, competitive programming techniques, and problem-solving strategies to prepare for the International Olympiad in Informatics (IOI) 2025.",
        },
        {
            date: "July 27 - Aug 3, 2025",
            event: "International Olympiad in Informatics (IOI) 2025",
            description:
                "The Sri Lankan national team will represent the country at the International Olympiad in Informatics 2025, which will be held in Bolivia. ",
        },
        {
            date: "November, 2025",
            event: "Award Ceremony",
            description:
                "An official award ceremony will be held to recognize and celebrate students who have demonstrated outstanding performance in NOI 2025. Special awards and certificates will be distributed to the top achievers.",
        },
    ]
    function timelineItem(
        date: string,
        event: string,
        description: string,
        index: number
    ) {
        return (
            <div
                className={`timeline-4 ${index % 2 === 0 ? "left" : "right"}-4`}
                key={index}
            >
                <div
                    className={` opacity-90 rounded card gradient-custom${
                        index % 2 === 0 ? "-4" : ""
                    }`}
                >
                    <div className="card-body p-4">
                        <i className="fas fa-brain fa-2x mb-3"></i>
                        <b>
                            <h4 className="text-gold">{event}</h4>
                        </b>
                        <p className="text-white">{description}</p>
                        <p className="text-gold">{date}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="min-h-full w-full flex flex-col items-left justify-center text-left text-white overflow-hidden bg-gradient-to-br from-black to-darkgreen">
                <Navbar />
                <Particles />
                <motion.main
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col justify-center items-center pb-10"
                >
                    <div className="w-full flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold text-gold text-center mt-10">
                            NOI 2025 Timeline
                        </h1>
                        <div className="flex flex-col w-4/5 mb-10">
                            <div className="timeLineContainorOuter w-full">
                                <div className="timeLineContainor  w-full">
                                    <div className="row py-4 w-full">
                                        <div
                                            className="col-lg-4"
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                        >
                                            <div className="site-section-heading"></div>
                                        </div>
                                    </div>
                                    <div
                                        className="main-timeline-4 text-white w-full"
                                        id="timeLineComponentDiv"
                                    >
                                        {items.map((item, index) => {
                                            return timelineItem(
                                                item.date,
                                                item.event,
                                                item.description,
                                                index
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.main>
                <Footer />
            </div>
        </>
    )
}

export default Page
