"use client"
import React from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Footer from "@/components/footer"
import Particles from "@/components/particles/ParticleDesign"

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
        {
            name: "Mr. Thamindu Sri Nirmal",
            title: "Chair",
            organization: "IEEE CodeX Sri Lanka",
            image: thamindu,
        },
        {
            name: "Mr. Kulunu Weerasoory",
            title: "Vice Chair",
            organization: "IEEE Young Professionals Sri Lanka",
            image: kulunu,
        },
        {
            name: "Eng. Dilini Ekanayaka",
            title: "Chair",
            organization:
                "Educational Activities Committee, IEEE Sri Lanka Section",
            image: dilini,
        },
    ]

    const noiScientificCommittee: Organizer[] = [
        {
            name: "Venudi Dayarathne",
            title: "Coordinator",
            organization: "NOI 2025 Program",
            image: venudi,
        },
        {
            name: "Pasindu Wijesena",
            title: "Member",
            organization: "NOI 2025 Program",
            image: pasindu,
        },
    ]

    const renderOrganizerCard = (organizer: Organizer, index: number) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center border border-gold/20 hover:border-gold/50 transition-all duration-300"
        >
            <div className="mb-4 flex justify-center">
                <Image
                    src={organizer.image}
                    alt={organizer.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-2 border-gold/30"
                />
            </div>
            <h3 className="text-gold text-lg font-semibold mb-2">
                {organizer.name}
            </h3>
            <p className="text-gold/80 font-medium mb-1">{organizer.title}</p>
            <p className="text-white/70 text-sm">{organizer.organization}</p>
        </motion.div>
    )

    return (
        <>
            <motion.main className="min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen">
                <Navbar />
                <Particles />

                <div className="mt-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex flex-col justify-center items-center"
                    >
                        <h1 className="text-3xl font-bold text-gold text-center mb-8 mt-10">
                            Organizers
                        </h1>
                        <div className="max-w-4xl px-8 mb-16">
                            <p className="text-white/80 text-center text-lg leading-relaxed">
                                Organized by{" "}
                                <span className="text-gold font-semibold">
                                    IEEE Young Professionals Sri Lanka
                                </span>{" "}
                                in collaboration with the{" "}
                                <span className="text-gold font-semibold">
                                    National Olympiad in Informatics Scientific
                                    Committee
                                </span>
                                , and endorsed by the{" "}
                                <span className="text-gold font-semibold">
                                    Ministry of Education Sri Lanka
                                </span>
                                .
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-6xl px-8 pb-20"
                >
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gold text-center mb-8">
                            IEEE
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ieeeOrganizers.map((organizer, index) =>
                                renderOrganizerCard(organizer, index)
                            )}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold text-center mb-8">
                            NOI Scientific Committee
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                            {noiScientificCommittee.map((organizer, index) =>
                                renderOrganizerCard(organizer, index)
                            )}
                        </div>
                    </div>
                </motion.div>

                <Footer />
            </motion.main>
        </>
    )
}

export default Page
