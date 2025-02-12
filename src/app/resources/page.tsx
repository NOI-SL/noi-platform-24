"use client"
import React, { createContext } from "react"
import { useSession } from "next-auth/react"
import Navbar from "@/components/navbar"
import Image from "next/image"
import { motion } from "framer-motion"
import LoadingScreen from "@/components/loadingscreen"
import NOIMask from "@/assets/img/NOIMaskp.png"
import Footer from "@/components/footer"
import Particles from "@/components/particles/ParticleDesign"
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
        {
            title: "IOI 2024 Materials",
            description: "Find Materials",
            link: "https://ioinformatics.org/page/ioi-2024/59",
        },
        {
            title: "IOI 2023 Materials",
            description: "Find Materials",
            link: "https://ioinformatics.org/page/ioi-2023/58",
        },
        {
            title: "IOI 2022 Materials",
            description: "Find Materials",
            link: "https://ioinformatics.org/page/ioi-2022/56",
        },
        {
            title: "IOI 2021 Materials",
            description: "Find Materials",
            link: "https://ioinformatics.org/page/ioi-2021/55",
        },
        {
            title: "IOI 2020 Materials",
            description: "Find Materials",
            link: "https://ioinformatics.org/page/ioi-2020/54",
        },
    ]
    const books: Resource[] = [
        {
            title: "Competitive Programmer's Handbook",
            subtopic: "Antti Laaksonen",
            description: "Download Book",
            link: "https://cses.fi/book/book.pdf",
        },
        {
            title: "Introduction to Algorithms 3 rd Edition",
            subtopic: "Thomas H. Cormen",
            description: "Original Source",
            link: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
        },
    ]
    const others: Resource[] = [
        {
            title: "IOI Syllubus",
            subtopic: "ISC",
            description: "Visit Syllubus",
            link: "https://ioinformatics.org/page/syllabus/12",
        },
        {
            title: "Hackerrank",
            subtopic: "www.hackerrank.com",
            description: "Visit Hackerrank Platform",
            link: "https://www.hackerrank.com/",
        },
        {
            title: "Codeforces",
            subtopic: "www.codeforces.com",
            description: "Visit Codeforces Platform",
            link: "https://codeforces.com/",
        },
        {
            title: "C++ Videos",
            subtopic: "Codearchary",
            description: "Visit Codearchary Videos",
            link: "https://www.youtube.com/@Codearchery/featured",
        },
    ]
    return (
        <>
            <motion.main
                // initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -50 }}
                // transition={{ duration: 0.5 }}
                className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen"
            >
                <Navbar />
                <Particles />
                <div className="mt-8 w-full bg-blacky-400">
                    <motion.main
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col justify-center items-center "
                    >
                        <h1 className="text-2xl font-bold text-gold text-center mb-8 mt-10">
                            Resources
                        </h1>
                    </motion.main>
                </div>

                <motion.main
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col justify-center items-center "
                >
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col justify-center items-center">
                            <div className="p-4 w-1/2">
                                <h2 className="text-2xl font-bold text-gold text-center sm:text-center md:text-center lg:text-center mt-10">
                                    Past Problems and Solutions
                                </h2>
                                <div className="w-full flex flex-col justify-center items-center  mt-10">
                                    {pastProblemsAndSolutions.map(
                                        (resource, index) => (
                                            <div
                                                key={index}
                                                className="w-full flex flex-col justify-center items-center"
                                            >
                                                <h2 className="text-1xl font-bold text-gold text-center">
                                                    {resource.title}
                                                </h2>
                                                <p
                                                    className="text-white text-center mb-20  hover:text-gold"
                                                    style={{ zIndex: 21 }}
                                                >
                                                    <a
                                                        href={resource.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {resource.description}
                                                    </a>
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="p-4 w-1/2 ">
                                <h2 className="text-2xl font-bold text-gold text-center sm:text-center md:text-center lg:text-center">
                                    Books
                                </h2>
                                <div className="w-full flex flex-col justify-center items-center  mt-10">
                                    {books.map((resource, index) => (
                                        <div
                                            key={index}
                                            className="w-full flex flex-col justify-center items-center"
                                        >
                                            <h2 className="text-1xl font-bold text-gold text-center">
                                                {resource.title}
                                            </h2>
                                            <p className="text-white text-center">
                                                {resource.subtopic}
                                            </p>
                                            <p
                                                className="text-white text-center mb-20  hover:text-gold"
                                                style={{ zIndex: 21 }}
                                            >
                                                <a
                                                    href={resource.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {resource.description}
                                                </a>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 w-1/2">
                                <h2 className="text-2xl font-bold text-gold text-center sm:text-center md:text-center lg:text-center">
                                    Others
                                </h2>
                                <div className="w-full flex flex-col justify-center items-center  mt-10">
                                    {others.map((resource, index) => (
                                        <div
                                            key={index}
                                            className="w-full flex flex-col justify-center items-center"
                                        >
                                            <h2 className="text-1xl font-bold text-gold text-center">
                                                {resource.title}
                                            </h2>
                                            <p className="text-white text-center">
                                                {resource.subtopic}
                                            </p>
                                            <p
                                                className="text-white text-center mb-20  hover:text-gold"
                                                style={{ zIndex: 21 }}
                                            >
                                                <a
                                                    href={resource.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {resource.description}
                                                </a>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.main>
                <Footer />
            </motion.main>
        </>
    )
}

export default Page
