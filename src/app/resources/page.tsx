'use client'
import React, {createContext} from 'react';
import { useSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/loadingscreen";

const Page: React.FC = () => {
  return (
    <>
      <div className="min-h-full flex flex-col items-center justify-center text-white bg-gradient-to-br from-black to-darkgreen">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center items-center "
        >
          <h1 className="text-2xl font-bold text-gold text-center mb-8 mt-10">
            Resources | සම්පත්
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
              <div className="p-4 w-4/5 h-[300px]">
                <h2 className="text-1xl font-bold text-gold text-left">
                  NOI Final Scores
                </h2>
                <div className="w-full h-[150px] flex flex-row justify-center items-center">
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg  bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      NOI 2023
                    </h3>
                    <p className="text-0.5xl text-gold py-1">View Marksheet</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      NOI 2022
                    </h3>
                    <p className="text-0.5xl text-gold py-1">View Marksheet</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      NOI 2021
                    </h3>
                    <p className="text-0.5xl text-gold py-1">View Marksheet</p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-4/5  h-[300px]">
                <h2 className="text-1xl font-bold text-gold text-left">
                  Past Papers and Solutions
                </h2>
                <div className="w-full h-[150px] flex flex-row justify-center items-center">
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      IOI 2023
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      IOI 2022
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      IOI 2021
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      IOI 2020
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-4/5  h-[300px]">
                <h2 className="text-1xl font-bold text-gold text-left">
                  Books
                </h2>
                <div className="w-full h-[150px] flex flex-row justify-center items-center">
                  <div className="w-1/4 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center px-5 rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      Competitive Programmer`s Handbook
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                  <div className="w-1/4 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center px-5 rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      Introduction to Algorithems, 3rd Edition
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-4/5  h-[300px]">
                <h2 className="text-1xl font-bold text-gold text-left">
                  Others
                </h2>
                <div className="w-full h-[150px] flex flex-row justify-center items-center">
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      IOI Syllubus
                    </h3>
                    <p className="text-0.5xl text-gold py-1">Download</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      Hackerrank
                    </h3>
                    <p className="text-0.5xl text-gold py-1">View Hackerrank</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      Codeforces
                    </h3>
                    <p className="text-0.5xl text-gold py-1">View Codeforces</p>
                  </div>
                  <div className="w-1/5 text-white h-[100px] ml-10 mr-10 flex flex-col justify-center items-center rounded-lg bg-black">
                    <h3 className="text-1xl font-bold text-white text-center">
                      C++ Videos
                    </h3>
                    <p className="text-0.5xl text-gold py-1">View Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </>
  );
};


export default Page;