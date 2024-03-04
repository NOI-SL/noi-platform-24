'use client'
import React from 'react';
import Link from 'next/link';
import { Home, UserPlus, HelpCircle, User, ChevronUp } from 'lucide-react';

const Mobilenav: React.FC = () => {
    return (
        <nav className='flex fixed inset-x-0 bottom-0 z-50 flex-row justify-around pb-4 bg-white/95 backdrop-blur-lg py-3 px-4 lg:hidden shadow-lg  rounded -t-2xl text-slate-700'>
            <Link href="/" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <Home size={24} className="text-slate-700" />
                    <span className="text-sm">Home</span>
                </div>
            </Link>
            <Link href="https://www.noi.lk/register" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <UserPlus size={24} className="text--slate-700" />
                    <span className="text-sm">Register Now</span>
                </div>
            </Link>
            <Link href="/howtocompete" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <HelpCircle size={24} className="text-y-slate-700" />
                    <span className="text-sm">Compete</span>
                </div>
            </Link>
            <Link href="/profile" passHref>
                <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <User size={24} className="text-p-slate-700" />
                    <span className="text-sm">Profile</span>
                </div>
            </Link>
            <div className="flex flex-col items-center space-y-1 cursor-pointer">
                <ChevronUp size={24} className="text-slate-700" />
                <span className="text-sm">More</span>
            </div>
        </nav>
    );
};

export default Mobilenav;
