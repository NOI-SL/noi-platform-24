"use client";
import React, { createContext } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/loadingscreen";
import TableResults from "./table";
import NOIMask from "@/assets/img/NOIMask.svg";
import Particles from "@/components/particles/ParticleDesign";

interface Result {
  title: string;
  subtopic: string;
  description: string;
  link: string;
}

const Page: React.FC = () => {
  const results: Result[] = [
    {
      title: "NOI 2023",
      subtopic: "Sri Lanka",
      description: "View Marksheet",
      link: "https://example.com",
    },
    {
      title: "NOI 2022",
      subtopic: "Sri Lanka",
      description: "View Marksheet",
      link: "https://example.com",
    },
    {
      title: "NOI 2021",
      subtopic: "Sri Lanka",
      description: "View Marksheet",
      link: "https://example.com",
    },
  ];

  return (
    <>
      {/* <motion.main
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -50 }}
        // transition={{ duration: 0.5 }}
        className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen text-white"
      >
        <Navbar />
        <Particles />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center "
        >
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              className="hover:scale-105 transition-transform duration-300"
              src={NOIMask}
              alt="maskImage"
              width={700}
              height={500}
            />
          </div>
          <h1 className="text-2xl font-bold text-gold text-center mt-10">
            Results | ප්‍රතිඵල
          </h1>
        </motion.main>
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center "
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="p-4 w-2/3">
                <h2 className="text-1xl font-bold text-gold text-left">
                  April 2024
                </h2>
                <div className="w-full h-[600px] flex flex-col justify-center items-center mt-10">
                  <TableResults />
                </div>
              </div>
            </div>
          </div>
        </motion.main>
        <Footer/>
      </motion.main> */}
    </>
  );
};

export default Page;
