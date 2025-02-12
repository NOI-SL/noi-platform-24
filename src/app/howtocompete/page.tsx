"use client"
import React, { useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
// import Mobilenav from "@/components/mobilenav";
// import LoadingScreen from "@/components/loadingscreen";
import Image from "next/image"
import img2023 from "@/assets/img/2023-team.jpg"
import img2022 from "@/assets/img/2022-team.jpg"
import img2021 from "@/assets/img/2021-team.jpg"
import img2020 from "@/assets/img/2020-team.png"
import img2019 from "@/assets/img/2019-team.jpg"
import cplusplus from "@/assets/img/cplusplus.png"
import programStructure from "@/assets/img/program-structure.png"
import NOIMask from "@/assets/img/NOIMaskp.png"
import Footer from "@/components/footer"
import Particles from "@/components/particles/ParticleDesign"
// import java from "@/assets/img/java.png";

const HowToCompete: React.FC = () => {
    const { data, status } = useSession()

    const profileData = data?.user?.profile

    return (
        <>
            <motion.main
                // initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -50 }}
                // transition={{ duration: 0.5 }}
                className="absolute min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen"
            >
                <Navbar />
                <Particles />
                <div className="mt-8 w-full bg-blacky-400 sm:w-3/4">
                    <motion.main
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-2xl text-center font-bold text-gold sm:w-full">
                            How to Compete
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
                    {/* <div className="lg:flex lg:flex-row md:flex-col sm:flex-col md-flex-row w-3/4 justify-center items-center h-auto md:h-90 py-4 mt-10">
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2023} alt="Image 1" width={200} height={200} />
            </div>
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2022} alt="Image 2" width={200} height={200} />
            </div>
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2021} alt="Image 3" width={200} height={200} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center items-center h-auto md:h-90 py-0 mb:py-10">
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2020} alt="Image 4" width={200} height={200} />
            </div>
            <div className="flex-none w-full sm:w-full md:w-1/4 lg:w-1/4 flex justify-center items-center mb-5 sm:mb-5 lg:mb-0">
              <Image src={img2019} alt="Image 5" width={200} height={200} />
            </div>
          </div> */}
                </motion.main>
                <motion.main
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col justify-center items-center mb-10"
                >
                    <div className="container mx-auto text-left flex flex-col justify-center items-center sm:justify-center sm:items-center  md:justify-left md:items-center lg:justify-left md:items-center px-4 py-8 w-3/4 sm:w-3/4 lg:w-3/4 md:w-3/4  w-full text-white">
                        <h1 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center">
                            About the Competition
                        </h1>
                        <p className="mb-8 text-white w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-5 text-center sm:text-center md:text-justify lg:text-justify">
                            NOI focuses on Competitive Programming, a format
                            where participants are presented with clearly
                            defined problems. Contestants must write programs
                            that solve these problems efficiently. Submitted
                            solutions are evaluated against test cases, with
                            emphasis on algorithms and computational thinking
                            rather than software development skills like UI/UX
                            design or application development. Participants are
                            expected to write simple programs that process
                            inputs and produce outputs.
                        </p>

                        <h2 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center">
                            Eligibility
                        </h2>
                        <p className="text-white w-full sm:w-full md:w-3/4 lg:w-full mb-2 text-center sm:text-center md:text-justify lg:text-justify">
                            Sri Lankans who are not older than 20 yrs by July 1, 2025,
                            and enrolled in a primary or secondary school (government / private) as a student are eligible for NOI.
                        </p>

                        <h1 className="text-lg font-bold mb-5 text-gold text-center sm:text-center md:text-center lg:text-center text-gold w-full sm:w-3/4 md:w-3/4 lg:w-full mb-5">
                            Competition Structure
                        </h1>

                        <Image
                            style={{ zIndex: 21 }}
                            src={programStructure}
                            alt="Program Structure"
                        />
                        <br/>
                        <div className="flex flex-col w-3/4 sm:w-3/4 md:w-full lg:w-full mx-auto">
                            <div className="mb-4">
                                <h3 className="text-md font-medium mb-2 text-gold">
                                    National Olympiad in Informatics (NOI)
                                </h3>
                                <p className="text-white">
                                    National Olympiad in Informatics is a
                                    two-day on-site competition totaling 10
                                    hours. Contestants are evaluated on
                                    challenging problem-solving tasks using C++.
                                    The top four performers with non-zero
                                    scores are selected to represent Sri Lanka at
                                    the International Olympiad in Informatics (IOI) 2025, Bolivia.

                                    <br/><br/>

                                    To participate in NOI, individuals must fulfill the eligibility
                                    criteria above AND also fulfill one of the qualification paths below.
                                </p>
                            </div>
                            <div className="mb-4 mt-4">
                                <h3 className="text-md font-medium mb-2 text-gold">
                                    Qualifying for National Olympiad in Informatics (NOI)
                                </h3>
                                <p className="text-white">
                                    There are 5 paths through which an eligible (see eligibility criteria above)
                                    individual can become qualified to participate in
                                    National Olympiad in Informatics 2025.
                                    <br/>
                                    Meeting the qualification criteria of at least one
                                    of the following paths will qualify you for the
                                    National Olympiad in Informatics.
                                    <br/>
                                    It is recommended that you do the NOI Online Qualifier unless you are already
                                    qualified through one of the other paths.
                                </p>
                            </div>
                            <ul className="list-disc pl-5 mb-4">
                                <li>
                                    <h3 className="text-md font-medium mb-2 mt-2 text-white text-gold">
                                        NOI Online Qualifier
                                    </h3>
                                    <p className="text-white">
                                        This is an online competitive programming contest held in April 2025.
                                        <br/>
                                        Top 8 performers in NOI Online Qualifier round (excluding contestants already
                                        qualified through another path), with a non-zero score are qualified for NOI
                                        through this path.
                                        <br/>
                                        All candidates registered through the website will receive notification via
                                        email on the dates and the instructions to participate in the NOI Online
                                        Qualifier.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-md font-medium mb-2 mt-2 text-white text-gold">
                                        Codeforces Weekly Contests
                                    </h3>
                                    <p className="text-white">
                                        Individuals rated above 1400 following at least 2 rated Codeforeces contests between Jan 1, 2025 to
                                        March 31, 2025 are qualified for NOI through this path.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-md font-medium mb-2 mt-2 text-white text-gold">
                                        National Schools Software Competition
                                        (NSSC)
                                    </h3>
                                    <p className="text-white">
                                        Top 6 performers with a non-zero score in the most recent NSSC held prior to the
                                        National Olympiad in Informatics (NOI) are qualified for NOI through this path.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-md font-medium mb-2 mt-2 text-white text-gold">
                                        Young Computer Scientist (YCS)
                                        Competition
                                    </h3>
                                    <p className="text-white">
                                        Individuals who rank among the top 3
                                        in the respective age categories, in the most recent YCS
                                        competition held prior to the NOI
                                        are qualified for NOI through this path.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-md font-medium mb-2 mt-2 text-white text-gold">
                                        International Mathematical Olympiad (IMO)
                                    </h3>
                                    <p className="text-white">
                                        Individuals who competed at the most recent IMO prior to NOI,
                                        representing Sri Lanka are qualified for NOI through this path.
                                    </p>
                                </li>
                            </ul>
                            {/*<div className="mb-4">*/}
                            {/*    <h3 className="text-md font-medium mb-2 text-gold">*/}
                            {/*        National Olympiad in Informatics (NOI)*/}
                            {/*        Elimination Round*/}
                            {/*    </h3>*/}
                            {/*    <p className="text-white">*/}
                            {/*        If more than 30 contestants successfully*/}
                            {/*        meet the preliminary qualification criteria*/}
                            {/*        from one or more of the above options, an*/}
                            {/*        elimination round will be held to further*/}
                            {/*        filter participants down to 30. This*/}
                            {/*        in-person competition will select the top 30*/}
                            {/*        contestants with non-zero scores to move*/}
                            {/*        forward.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            <div className="mb-4">
                                <h3 className="text-md font-medium mb-2 text-gold">
                                    International Olympiad in Informatics (IOI)
                                </h3>
                                <p className="text-white">
                                    The top four performers with non-zero
                                    scores are selected to represent Sri Lanka at
                                    the International Olympiad in Informatics (IOI) 2025, Bolivia.

                                    IOI is an internationally renowned event that brings
                                    together the best young computer scientists
                                    from across the globe.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-400 mt-5">
                            <h1 className="text-lg font-semibold mb-4 text-gold w-full text-center sm:text-center md:text-center lg:text-center">
                                Eligible Languages
                            </h1>
                            <div className="flex flex-row w-full justify-left items-center">
                                <a
                                    href="https://cplusplus.com/doc/tutorial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" w-1/4"
                                >
                                    <div className="mx-2 flex justify-center items-center">
                                        <Image
                                            style={{ zIndex: 21 }}
                                            src={cplusplus}
                                            alt="C++"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </a>

                                {/* <div className="mx-2">
                  <Image src={java} alt="Java" width={200} height={200} />
                </div> */}
                                <p className="mb-8 text-white w-1/2 sm:w-1/2 md:w-1/2 lg:w-3/4 pt-7 text-center sm:text-center md:text-justify lg:text-justify">
                                    International Olympiad in Informatics (IOI)
                                    only allows C++ as the programming language.
                                    Therefore, National Olympiad in Informatics
                                    (NOI) also allows C++ as the programming
                                    language.
                                </p>
                            </div>

                            <p className="mb-8 text-white w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-5 text-center sm:text-center md:text-justify lg:text-justify font-bold">
                                Students are encouraged to start with any
                                language they are comfortable with and gradually
                                transition to C++ with guidance from the NOI
                                community.
                            </p>
                        </div>

                        <p className="text-gold w-3/4 sm:w-3/4 md:w-3/4 lg:w-full mb-5 text-center sm:text-center md:text-justify lg:text-justify">
                            Four contestants will be selected based on their
                            performance at the main competition to represent Sri
                            Lanka at the International Olympiad in Informatics
                            2025 program, hosted by Bolivia.
                        </p>
                    </div>
                </motion.main>
                <Footer />
            </motion.main>
        </>
    )
}

export default HowToCompete
