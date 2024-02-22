"use client";

import { LoginButton } from "@/components/ui/login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Unauthorized() {
    const { status } = useSession();
    const { push } = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            push('/profile');
        }
    }, [status])

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 ">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 sm:p-8 m-4 sm:m-8">
                <div className="bg-red-500 text-white flex items-center  justify-between px-4 py-3 rounded mb-4">
                    <h1 className="text-2xl font-bold mb-4">Unauthorized</h1>
                </div>
                <p>You are not authorized to access this page.</p>
            </div>
            <LoginButton />
        </main>

    );
};