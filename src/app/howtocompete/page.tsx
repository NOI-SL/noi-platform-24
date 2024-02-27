// Importing React, Framer Motion for animations, and defining color scheme in Tailwind's custom classes
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backimage from '@/components/hero.png';
import Navbar from '@/components/navbar';
import { useState } from 'react';




const Howtocompete: React.FC = () => {
    return (
        <>
        <Navbar/>
        <main className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden">
            <div>
                <h1 className=''>How to Compete | තරඟ වදින ආකාරය</h1>
            </div>
            <div>
                <h2>Eligibility | සුදුසුකම්</h2>
                <ul className='text-left '>
                    <li>The National Olympiad in Informatics program is for secondary school students, and contestants should be enrolled in a school.</li>
                    <li>Contestants should be not older than twenty years on the 1st of July 2022.</li>
                </ul>
            </div>
        </main>
        </>

    );
};

export default Howtocompete;
