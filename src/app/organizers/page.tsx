"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import {
  PatternWaves,
  PatternDotsWave,
  PatternChevrons,
  PatternDotsCircle,
  PatternStripesCircle,
} from "@/components/ui/card-patterns";

import dineth from "@/assets/img/DinethPalliyaguru.jpg.jpeg";
import kulunu from "@/assets/img/kulunu.jpg";
import sidath from "@/assets/img/sidath.png";
import lakshith from "@/assets/img/lakshith.jpeg";
import pasindu from "@/assets/img/pasindu.png";
import sadeep from "@/assets/img/sadeep.jpeg";

interface Organizer {
  name: string;
  title: string;
  organization: string;
  image: any;
}

const Page: React.FC = () => {
  const ieeeOrganizers: Organizer[] = [
    {
      name: "Dineth Palliyaguru",
      title: "Chairperson",
      organization: "IEEE CodeX Sri Lanka",
      image: dineth,
    },
    {
      name: "Mr. Kulunu Weerasoory",
      title: "Chairperson",
      organization: "IEEE Young Professionals Sri Lanka",
      image: kulunu,
    },
    {
      name: "Prof. Sidath Liyanage",
      title: "Chairperson",
      organization: "Educational Activities Committee, IEEE Sri Lanka Section",
      image: sidath,
    },
  ];

  const noiScientificCommittee: Organizer[] = [
    {
      name: "Lakshith Nishshanke",
      title: "Coordinator",
      organization: "NOI 2026 Program",
      image: lakshith,
    },
    {
      name: "Pasindu Wijesena",
      title: "Member",
      organization: "NOI 2026 Program",
      image: pasindu,
    },
    {
      name: "Sadeep Weerasinghe",
      title: "Member",
      organization: "NOI 2026 Program",
      image: sadeep,
    },
  ];

  const coordinator = noiScientificCommittee.find(
    (o) => o.title.toLowerCase() === "coordinator",
  );
  const members = noiScientificCommittee.filter(
    (o) => o.title.toLowerCase() !== "coordinator",
  );

  const renderPattern = (index: number) => {
    const type = index % 5;
    if (type === 0) return <PatternWaves />;
    if (type === 1) return <PatternDotsWave />;
    if (type === 2) return <PatternChevrons />;
    if (type === 3) return <PatternDotsCircle />;
    return <PatternStripesCircle />;
  };

  const renderOrganizerCard = (organizer: Organizer, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
    >
      <div className="relative z-10 mb-5 flex justify-center">
        <div className="p-1 rounded-[2rem] bg-brand-black/30 border border-white/5 backdrop-blur-sm shadow-xl">
          <Image
            src={organizer.image}
            alt={organizer.name}
            width={120}
            height={120}
            className="rounded-[1.75rem] object-cover"
          />
        </div>
      </div>
      <h3 className="relative z-10 text-brand-light text-xl font-bold mb-1 tracking-tight">
        {organizer.name}
      </h3>
      <p className="relative z-10 text-brand-peach font-medium text-sm mb-3">
        {organizer.title}
      </p>
      <p className="relative z-10 text-brand-light/50 text-xs tracking-wide">
        {organizer.organization}
      </p>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50">
        {renderPattern(index)}
      </div>
    </motion.div>
  );

  return (
    <>
      <main className="relative min-h-screen w-full flex flex-col items-center text-center overflow-hidden bg-transparent">
        {/* Grainy Texture Overlay */}
        <div className="grainy-overlay" />

        {/* Subtle Glow Orbs */}
        <div
          className="glow-orb w-[500px] h-[500px] -top-40 -right-20 bg-brand-orange/20"
          style={{ animation: "pagePulse 12s infinite alternate" }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bottom-20 -left-20 bg-brand-peach/30"
          style={{ animation: "pagePulse 16s infinite alternate-reverse" }}
        />

        <Navbar />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-36 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <span className="inline-block text-brand-peach text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
              National Olympiad In Informatics 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-brand-light">
              Meet the <span className="tech-gradient-text">Organizers</span>
            </h1>
            <p className="text-brand-light/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Organized by{" "}
              <span className="text-brand-peach font-semibold">
                <a
                  href="https://codex.ieee.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IEEE CodeX Sri Lanka
                </a>
              </span>{" "}
              in collaboration with the{" "}
              <span className="text-brand-peach font-semibold">
                NOI Scientific Committee
              </span>
            </p>
          </motion.div>

          {/* IEEE Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-brand-light mb-8 flex items-center justify-center gap-3">
              <span className="h-px flex-1 bg-white/10 hidden sm:block" />
              <span>IEEE</span>
              <span className="h-px flex-1 bg-white/10 hidden sm:block" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ieeeOrganizers.map((organizer, index) =>
                renderOrganizerCard(organizer, index),
              )}
            </div>
          </motion.div>

          {/* Scientific Committee Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h2 className="text-2xl font-bold text-brand-light mb-8 flex items-center justify-center gap-3">
              <span className="h-px flex-1 bg-white/10 hidden sm:block" />
              <span>NOI Scientific Committee</span>
              <span className="h-px flex-1 bg-white/10 hidden sm:block" />
            </h2>

            {/* Coordinator centered */}
            {coordinator && (
              <div className="max-w-sm mx-auto mb-6">
                <div className="flex justify-center">
                  {renderOrganizerCard(coordinator, 0)}
                </div>
              </div>
            )}

            {/* Members below coordinator */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {members.map((organizer, idx) =>
                renderOrganizerCard(organizer, idx + 1),
              )}
            </div>
          </motion.div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        @keyframes pagePulse {
          from {
            transform: translate(0, 0) scale(1);
            opacity: 0.12;
          }
          to {
            transform: translate(25px, 25px) scale(1.12);
            opacity: 0.22;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
