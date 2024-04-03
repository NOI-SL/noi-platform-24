import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
// import { motion } from "framer-motion";
import Image from "next/image";
import awardImages from '@/assets/img/GoldSilverBronze.png';
interface Award {
  title: string;
  description: string;
}

const Awards: React.FC = () => {
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
      <Navbar />
        <div className="min-h-full flex flex-col items-left justify-center text-left text-white overflow-hidden bg-black py-20 px-20">
          <h1 className="text-4xl font-bold text-gold text-center">Awards | සම්මාන</h1>
          <div className="flex flex-row w-full">
            <div className="flex flex-col justify-center items-center w-1/2 py-20">
                <h1 className="text-2xl font-bold text-white text-center">Under 16 | 16 න් පහළ</h1>
                <p className="text-gold text-center">Gold | Silver | Bronze</p>
                <Image className="py-5" src={awardImages} alt="Image 2" width={200} height={200} />
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 py-20">
                <h1 className="text-2xl font-bold text-white text-center">Under 20 | 20 න් පහළ</h1>
                <p className="text-gold text-center">Gold | Silver | Bronze</p>
                <Image className="py-5" src={awardImages} alt="Image 2" width={200} height={200} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gold text-center">Special Awards | විශේෂ සම්මාන</h1>
          {awards.map((award, index) => (
            <div className="py-10" key={index}>
              <h2 className="text-2xl text-gold text-left">{award.title}</h2>
              <p>{award.description}</p>
            </div>
          ))}

          <p className="text-gold py-10">Four contestants will be selected based on their performance at the main competition to represent Sri Lanka at the International Olympiad in Informatics 2022 program, hosted by Indonesia.</p>
        </div>
    </>
  );
};

export default Awards;
