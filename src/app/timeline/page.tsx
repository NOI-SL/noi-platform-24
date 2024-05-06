"use client";
import React, { createContext } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
// import { motion } from "framer-motion";
import Image from "next/image";
import awardImages from "@/assets/img/GoldSilverBronze.png";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "./Timeline.css";
import NOIMask from "@/assets/img/NOIMaskp.png";
import Footer from "@/components/footer";
import Particles from "@/components/particles/ParticleDesign";

const Page: React.FC = () => {
  let items = [
    {
      date: "17th February, 2024",
      event: "Registrations Opened for NOI 2024",
      description: "",
    },
    {
      date: "25th February, 2024",
      event: "February Monthly Contest.",
      description: "",
    },
    {
      date: "26th March, 2024",
      event: "March Monthly Contest",
      description: "",
    },
    {
      date: "25th April, 2024",
      event: "April Monthly Contest",
      description:
        "April Monthly Contest with APIO Selection Test. Served as the Selection Test to select the Sri Lankan Delegation for APIO 2024.",
    },
    {
      date: "26th May, 2024 | 10AM - 3PM",
      event: "National Olympiad in Informatics - Qualifier Round",
      description: "Conducted online through Hackerrank",
    },
    {
      date: "8th June, 2024 | 10AM - 3PM",
      event: "Day 01 - Final Round of NOI 2024",
      description: "Final Round of NOI 2024, held at the UCSC labs. Four students will be selected to represent Sri Lanka at the International Olympiad in Informatics 2024.",
    },
    {
      date: "9th June, 2024 | 10AM - 3PM",
      event: "Day 02 - Final Round of NOI 2024",
      description:
        "Final Round of NOI 2024, held at the UCSC labs. Four students will be selected to represent Sri Lanka at the International Olympiad in Informatics 2024.",
    },
    {
      date: "TBD",
      event: "Training after National Rounds",
      description:
        "Post-national round training on advanced topics, problem-solving, and mock contests. Led by experienced trainers and former IOI participants.",
    },
    {
      date: "1st september - 8th September 2024",
      event: "International Olympiad in Informatics (IOI 2024)",
      description:
        "International Olympiad in Informatics (IOI 2024) to be held in Alexandria, Egypt.",
    },
    {
      date: "To be announced",
      event: "Awards Ceremony of NOI 2024",
      description:
        "The felicitation and appreciation of students who performed exceptionally.",
    },
  ];
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
    );
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
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="hover:scale-105 transition-transform duration-300 my-8"
                src={NOIMask}
                alt="maskImage"
                width={650}
                height={500}
                style={{ zIndex: 21 }}
              />
            </div>
            <h1 className="text-2xl font-bold text-gold text-center mt-10">
              NOI 2024 Timeline
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
                      );
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
  );
};

export default Page;
