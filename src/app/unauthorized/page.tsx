"use client";

import { LoginButton } from "@/components/ui/login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Unauthorized() {
    const { status } = useSession();
    const { push } = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            push('/');
        }
    }, [status, push])

    return (
        <>
            <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-brand-black overflow-hidden">
                {/* Grainy Texture Overlay */}
                <div className="grainy-overlay" />

                {/* Glow Orbs */}
                <div
                    className="glow-orb w-[400px] h-[400px] -top-20 -left-20 bg-brand-peach"
                    style={{ animation: "pagePulse 10s infinite alternate" }}
                />
                <div
                    className="glow-orb w-[350px] h-[350px] -bottom-20 -right-20 bg-brand-orange"
                    style={{ animation: "pagePulse 14s infinite alternate-reverse" }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-md w-full text-center"
                >
                    <div className="bg-black/30 backdrop-blur-sm border border-brand-peach/10 rounded-2xl p-10 mb-6">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-brand-light mb-3 tracking-tight">
                            Unauthorized
                        </h1>
                        <p className="text-brand-light/50 mb-8 leading-relaxed">
                            You are not authorized to access this page. Please sign in to continue.
                        </p>
                        <LoginButton />
                    </div>
                </motion.div>
            </main>

            <style jsx>{`
                @keyframes pagePulse {
                    from { transform: translate(0, 0) scale(1); opacity: 0.12; }
                    to { transform: translate(25px, 25px) scale(1.12); opacity: 0.22; }
                }
            `}</style>
        </>
    );
};