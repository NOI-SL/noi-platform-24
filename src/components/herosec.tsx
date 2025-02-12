"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import PrimBut from "./ui/buttonone" // Make sure PrimBut is also converted to TypeScript
import Image from "next/image"
import NOIMask from "@/assets/img/NOIMaskp.png"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useSession } from "next-auth/react"
import LoadingScreen from "@/components/loadingscreen"
import PrimButtwo from "./ui/buttontwo"
import Particles from "@/components/particles/ParticleDesign"
import Mobilenav from "./mobilenav"
import deera from "@/assets/img/deera.jpeg"
import mindiya from "@/assets/img/mindiya.jpeg"
import malitha from "@/assets/img/malitha.jpeg"
import praveen from "@/assets/img/praveen.jpeg"

const Herosec: React.FC = () => {
    const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false)
    const { data, status } = useSession()
    const profileData = data?.user?.profile

    const state =
        String(status) === "authenticated" ? "authenticated" : "unauthenticated"
    const name = String(profileData?.given_name || "NOI User")

    useEffect(() => {
        if (status !== "loading") {
            const timer = setTimeout(() => {
                setIsSplineLoaded(true)
            }, 1000) // assuming the Spline takes 3 seconds to load
            return () => clearTimeout(timer)
        }
    }, [status])

    if (status === "loading") {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <LoadingScreen />
            </main>
        )
    }

    return (
        <>
            <main className="absolute min-h-screen h-auto w-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen">
                <Navbar />
                <div className="flex flex-col items-center justify-center w-full p-10 sm:p-10 md:p-0 h-auto md:h-1.1-screen text-accent">
                    <Particles />
                    {isSplineLoaded && (
                        <>
                            <div>
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    className="z-10"
                                    style={{ zIndex: 21 }}
                                >
                                    {/* Responsive font sizes for h1 element */}
                                    <div
                                        className="w-full cursor-pointer hover:pointer"
                                        style={{ zIndex: 21 }}
                                    >
                                        {/* <Image
                                            className="hover:scale-105 transition-transform duration-300 mb-8"
                                            src={NOIMask}
                                            alt="maskImage"
                                            width={700}
                                            height={500}
                                            style={{ zIndex: 50 }}
                                        /> */}
                                        <p className="text-sm text-gold md:text-lg lg:text-[25px] tracking-widest font-sans lg:mb-2">
                                            <b>
                                                National Olympiad In Informatics
                                                2025
                                            </b>
                                        </p>

                                        <div className="max-w-[600px] mx-10 py-30">
                                            <p className="text-sm text-white md:text-lg lg:text-[15px] tracking-widest font-sans lg:mb-4">
                                                Informatics Olympiad is an
                                                algorithmic programming contest
                                                held annually for secondary
                                                school students all over the
                                                world.
                                            </p>
                                            <p className="text-sm text-white md:text-lg lg:text-[15px] tracking-widest font-sans lg:mb-4">
                                                The National Olympiad in
                                                Informatics (NOI) is organized
                                                within Sri Lanka to recognize
                                                exceptional students, raise
                                                awareness among secondary school
                                                students and teachers, and
                                                select the National team,
                                                representing Sri Lanka at the
                                                International Olympiad in
                                                Informatics (IOI).
                                            </p>
                                        </div>
                                        {/* <p className="text-sm text-gold md:text-lg lg:text-[15px] tracking-widest font-sans lg:mb-2">
                      <b>ජාතික පරිගණක විද්‍යා ඔලිම්පියාඩ් තරඟාවලිය</b>
                    </p> */}
                                        {/* <p className="text-sm text-gold md:text-lg lg:text-[20px] tracking-widest font-sans lg:mb-2">
                      <b>2024</b>
                    </p> */}
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className="items-center z-10 font-horus"
                            >
                                {/* {state === "authenticated" ? (
                  // <PrimButtwo  name="Continuing to Profile" link="/profile"  />
                  <PrimButtwo name="Register Now" link="/register" />
                ) : (
                  // <PrimBut name="Continue to portal" link="/" />
                  <PrimButtwo name="Register Now" link="/register" />
                )} */}
                                {/* <p className='font-sans'>If you haven't registered yet please register now</p> */}
                            </motion.div>
                        </>
                    )}
                </div>
                {/* <Mobilenav /> */}
                <Footer />
            </main>
        </>
    )
}

export default Herosec
