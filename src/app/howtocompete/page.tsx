'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Mobilenav from '@/components/mobilenav';
import LoadingScreen from '@/components/loadingscreen';

const HowToCompete: React.FC = () => {
    const { data, status } = useSession();
    const { push } = useRouter();
    const profileData = data?.user?.profile;

    useEffect(() => {
        if (status === 'unauthenticated') {
            push('/unauthorized');
        }
    }, [status, push]);

    if (status !== "authenticated") {
        return (
            <LoadingScreen />
        )
    }

    const state = status === "authenticated" ? "authenticated" : "unauthenticated";
    const name = String(profileData?.given_name);

    return (
        <>
            <Navbar
                status={state}
                name={name}
            />
            <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden"
            >
                <div className="mt-8 border w-full py-20 bg-slate-400">
                    <h1 className="text-4xl font-bold">How to Compete | තරඟ වදින ආකාරය</h1>
                </div>
                <div className="mt-8 text-left lg:w-1/2 md:w-3/4 w-full mx-auto">
                    <h2 className="text-2xl font-bold">Eligibility | සුදුසුකම්</h2>
                    <ul className="text-left list-disc mt-4">
                        <li>The National Olympiad in Informatics program is for secondary school students, and contestants should be enrolled in a school.</li>
                        <li>Contestants should be not older than twenty years on the 1st of July 2022.</li>
                    </ul>
                </div>
                <div className="container mx-auto text-left px-4 py-8 lg:w-1/2 md:w-3/4 w-full">
                    <h1 className="text-2xl font-bold mb-4">Process of the competition | තරඟ ක්‍රියාවලිය</h1>
                    <p className="mb-4">Upon registering at the NOI website, you will be able to sign into the NOI portal using the email and password provided at registration. The NOI portal is the dashboard that contains information regarding upcoming competitions, training sessions, homework, etc. personalized for you.</p>
                    <p className="mb-8">If you’re new to programming, you can start off with the training material provided in the NOI portal.</p>

                    <h2 className="text-lg font-semibold mb-4">Division B Program :</h2>
                    <ul className="list-disc ml-8 mb-4">
                        <li>All newly registered contestants will be added to the Division B program as stated earlier.</li>
                        <li>The monthly practice contests for the Division B contestants commenced on the 25th of November 2021.</li>
                        <li>Contestants in this division have to face monthly practice contests hosted by the ACM Student Chapter of UCSC in collaboration with the Scientific Committee of NOI and these will be notified to the participants by the event coordinators.</li>
                        <li>At the end of each monthly contest, the top two contestants of the Division B program will be promoted to the Division A program.</li>
                    </ul>

                    <h2 className="text-lg font-semibold mb-4">Division A Program :</h2>
                    <ul className="list-disc ml-8 mb-8">
                        <li>The initial 8 contestants of the division A program have already been selected from the NOI 2021 competition after taking their final scores into consideration. With the initial 8 contestants, the Division A training program commenced in November 2021.</li>
                        <li>Participants who enter this division will remain in this division until the end of the next Division B monthly practice contest.</li>
                        <li>Contestants will have to participate in a set of competitions every month.</li>
                        <li>The score of the participants in the division A program will be calculated based on the score obtained by participating in contests instructed by the program organizers. (Eg : A coordinator may instruct you to take part the codeforces contests along with other international contests)</li>
                        <li>Contestants in the division A program are allowed to compete in NOI monthly contests, but their results wouldn&apos;t be counted for the final leaderboard of the contest.</li>
                        <li>At the end of each monthly Division B contest, the last ranking two members of the Division A program will be demoted to the Division B program.</li>
                    </ul>

                    <p className="mb-8">The main competition (or the National Olympiad in Informatics) will take place at the University of Colombo. The 8 contestants of Division A by April 2022 will be straight away participating in the main competition. In addition to that, there will be an online Qualifier Round which is open to any school student who meets the eligibility criteria. The top-ranking 8 students selected from this Qualifier Round will be given the chance to compete in the main competition. All registered contestants are invited to take part in the Qualifier Round.</p>

                    <p>Four contestants will be selected based on their performance at the main competition to represent Sri Lanka at the International Olympiad in Informatics 2022 program, hosted by Indonesia.</p>
                </div>
            </motion.main>
            <Mobilenav />
        </>

    );
};

export default HowToCompete;
