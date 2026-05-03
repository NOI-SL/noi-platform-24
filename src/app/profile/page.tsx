"use client";

import Navbar from '@/components/navbar';
import { LogoutButton } from '@/components/ui/login'
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { PatternDotsCircle, PatternWaves, PatternStripesCircle } from "@/components/ui/card-patterns"

export default function Profile() {
    // const { data, status } = useSession();
    const { push } = useRouter();

    // const profileData = data?.user?.profile;
    const profileData: any = {};

    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         push('/unauthorized');
    //     }
    // }, [status, push])

    // if (status !== "authenticated") {
    //     return (
            <main className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-transparent overflow-hidden">
                <div className="grainy-overlay" />
                <div className="glow-orb w-[400px] h-[400px] -top-20 -left-20 bg-brand-peach" style={{ animation: "pagePulse 10s infinite alternate" }} />
                <p className="text-brand-light/60 text-lg relative z-10">Loading...</p>
                <style jsx>{`
                    @keyframes pagePulse {
                        from { transform: translate(0, 0) scale(1); opacity: 0.12; }
                        to { transform: translate(25px, 25px) scale(1.12); opacity: 0.22; }
                    }
                `}</style>
    //         </main>
    //     )
    // }

    const fields = [
        { label: "First Name", value: profileData?.given_name },
        { label: "Last Name", value: profileData?.family_name },
        { label: "Email", value: profileData?.username },
    ]

    return (
        <>
            <main className="relative flex flex-col min-h-screen items-center text-center pt-36 pb-20 px-6 bg-transparent overflow-hidden">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Glow Orbs */}
                <div
                    className="glow-orb w-[450px] h-[450px] -top-20 -right-20 bg-brand-peach/30"
                    style={{ animation: "pagePulse 11s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[350px] h-[350px] bottom-40 -left-20 bg-brand-orange/20"
                    style={{ animation: "pagePulse 15s infinite alternate-reverse" }}
                />

                <Navbar />

                <div className="relative z-10 w-full max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-10"
                    >
                        <span className="inline-block text-brand-peach text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
                            Your Account
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-light leading-tight tracking-tight">
                            My <span className="tech-gradient-text">Profile</span>
                        </h1>
                    </motion.div>

                    {/* Profile Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="glass-card relative overflow-hidden rounded-2xl p-6 mb-6 text-left"
                    >
                        <h2 className="relative z-10 text-brand-peach font-semibold tracking-wide mb-4">Profile Information</h2>
                        <div className="relative z-10 space-y-3">
                            {fields.map(({ label, value }) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 py-2 border-b border-white/5 last:border-0">
                                    <span className="text-brand-light/40 text-sm w-28 shrink-0">{label}</span>
                                    <p className="text-brand-light font-medium">{value || "—"}</p>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-screen">
                            <PatternDotsCircle />
                        </div>
                    </motion.div>

                    {/* Hackerrank */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="glass-card relative overflow-hidden rounded-2xl p-6 mb-6 text-left border border-brand-orange/10"
                    >
                        <h2 className="relative z-10 text-brand-orange font-semibold tracking-wide mb-2">HackerRank</h2>
                        <p className="relative z-10 text-brand-light/40 text-sm">No HackerRank data linked yet.</p>
                        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen hue-rotate-[220deg]">
                            <PatternWaves />
                        </div>
                    </motion.div>

                    {/* Division */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="glass-card relative overflow-hidden rounded-2xl p-6 mb-8 text-left border border-purple-500/10"
                    >
                        <h2 className="relative z-10 text-purple-400 font-semibold tracking-wide mb-2">Division</h2>
                        <p className="relative z-10 text-brand-light/40 text-sm">Division info not yet available.</p>
                        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen hue-rotate-[280deg] saturate-150">
                            <PatternStripesCircle />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex justify-center"
                    >
                        <LogoutButton />
                    </motion.div>
                </div>
            </main>

            <style jsx>{`
                @keyframes pagePulse {
                    from { transform: translate(0, 0) scale(1); opacity: 0.12; }
                    to { transform: translate(25px, 25px) scale(1.12); opacity: 0.22; }
                }
            `}</style>
        </>
    )
}
