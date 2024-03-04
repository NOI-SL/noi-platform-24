'use client'
import React from 'react';
import Link from 'next/link';
import { Home, UserPlus, HelpCircle, User } from 'lucide-react';

const Mobilenav: React.FC = () => {
    return (
        <nav className='flex fixed inset-x-0 bottom-0 z-50 flex-row justify-around bg-white/95 backdrop-blur-lg py-2 px-4 lg:hidden shadow-lg  rounded -t-xl'>
            <Link href="/" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <Home size={24} className="text-blue-500" />
                    <span className="text-sm font-semibold">Home</span>
                </div>
            </Link>
            <Link href="https://www.noi.lk/register" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <UserPlus size={24} className="text-green-500" />
                    <span className="text-sm font-semibold">Register Now</span>
                </div>
            </Link>
            <Link href="/howtocompete" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <HelpCircle size={24} className="text-yellow-500" />
                    <span className="text-sm font-semibold">Compete</span>
                </div>
            </Link>
            <Link href="/profile" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <User size={24} className="text-purple-500" />
                    <span className="text-sm font-semibold">Profile</span>
                </div>
            </Link>
        </nav>
    );
};

export default Mobilenav;
