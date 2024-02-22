'use client'
import React from 'react';
import Link from 'next/link';
import { FaHome, FaUserPlus } from 'react-icons/fa';

const Mobilenav: React.FC = () => {
    return (
        <nav className='flex fixed flex-row justify-between bg-white/60 items-center lg:hidden text-black z-50 bottom-0 py-1 px-10 w-full bg-opacity-90 backdrop-filter backdrop-blur-[1000px]'>
            <Link href="/" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <FaHome size={24} />
                    <span>Home</span>
                </div>
            </Link>
            <Link href="/register" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <FaUserPlus size={24} />
                    <span>Register Now</span>
                </div>
            </Link>
        </nav>
    );
};

export default Mobilenav;
