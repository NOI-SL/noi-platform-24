"use client";
import React, { createContext } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
// import { motion } from "framer-motion";
import Image from "next/image";
import awardImages from "@/assets/img/GoldSilverBronze.png";
import { motion } from "framer-motion";
import NOIMask from "@/assets/img/NOIMask.svg";
import Footer from "@/components/footer";
import Particles from "@/components/particles/ParticleDesign";
interface Award {
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const awards: Award[] = [
    {
      title: "Best Performing Contestant",
      description: "Recognizing outstanding performance and dedication",
    },
    {
      title: "Best Performing School",
      description:
        "Recognizing educational excellence and outstanding contributions in competition.",
    },
    {
      title: "Best Performing Girl Coder",
      description:
        "Recognizing exceptional talent and achievements of female coders.",
    },
    // Add more awards as needed
  ];

  return (
    <>
      <div className="min-h-full w-full flex flex-col items-left justify-center text-left text-white overflow-hidden bg-gradient-to-br from-black to-darkgreen">
        <Navbar />
        <Particles />
        <div className="w-full flex flex-col justify-center items-center pb-10">
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="hover:scale-105 transition-transform duration-300"
                src={NOIMask}
                alt="maskImage"
                width={700}
                height={500}
                style={{ zIndex: 21 }}
              />
            </div>
            <h1 className="text-2xl font-bold text-gold text-center mt-10">
              Awards
            </h1>
          </motion.main>
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col w-1/2 lg:flex-row lg:w-1/2 sm:flex-col sm:w-full">
              <div className="flex flex-col w-full justify-center items-center sm:w-full md:w-3/4 lg:w-1/2 pt-20 sm:pt-10 md:pt-20 lg:pt-20">
                <h1 className="text-1xl font-bold text-white text-center">
                  Under 16
                </h1>
                <p className="text-gold text-center">Gold | Silver | Bronze</p>
                <Image
                  className="py-5"
                  src={awardImages}
                  alt="Image 2"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col w-full justify-center items-center sm:w-full md:w-3/4 lg:w-1/2 pt-10 sm:pt-10 md:pt-20 lg:pt-20">
                <h1 className="text-1xl font-bold text-white text-center">
                  Under 20
                </h1>
                <p className="text-gold text-center">Gold | Silver | Bronze</p>
                <Image
                  className="py-5"
                  src={awardImages}
                  alt="Image 2"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </motion.main>
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col w-3/4 sm:w-1/2 md:3/4 lg:w-1/2 pt-10">
              <h1 className="text-2xl font-bold text-gold text-center pb-10">
                Special Awards
              </h1>
              {awards.map((award, index) => (
                <div className="py-10" key={index}>
                  <h2 className="text-1xl text-gold text-center sm:text-center md:text-center lg:text-center ">
                    {award.title}
                  </h2>
                  <p className="text-center sm:text-center md:text-center lg:text-center">{award.description}</p>
                </div>
              ))}

              <p className="text-gold py-10 text-justify sm:text-justify md:text-justify lg:text-justify">
                Four contestants will be selected based on their performance at
                the main competition to represent Sri Lanka at the International
                Olympiad in Informatics 2024 program, hosted by Egypt.
              </p>
            </div>
          </motion.main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
