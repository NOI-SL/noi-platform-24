"use client";

import Mobilenav from '@/components/mobilenav';
import Navbar from '@/components/navbar';
import { LogoutButton } from '@/components/ui/login'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Profile() {
    const { data, status } = useSession();
    const { push } = useRouter();

    const profileData = data?.user?.profile;

    useEffect(() => {
        if (status === 'unauthenticated') {
            push('/unauthorized');
        }
    }, [status])

    if (status !== "authenticated") {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-24">
                <p className="text-xl pb-24">Loading...</p>
            </main>
        )
    }

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8 m-4">
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <span className="w-1/4 font-semibold text-gray-600">First Name:</span>
                                <p className="text-gray-700">{profileData?.given_name}</p>
                            </div>
                            <div className="flex items-center">
                                <span className="w-1/4 font-semibold text-gray-600">Last Name:</span>
                                <p className="text-gray-700">{profileData?.family_name}</p>
                            </div>
                            <div className="flex items-center">
                                <span className="w-1/4 font-semibold text-gray-600">Email:</span>
                                <p className="text-gray-700">{profileData?.username}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <LogoutButton />
            </main>
            <Mobilenav />
        </>

    )
}