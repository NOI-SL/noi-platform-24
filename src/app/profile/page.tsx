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
    }, [status, push])

    if (status !== "authenticated") {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-black to-darkgreen">
                <p className="text-xl pb-8">Loading...</p>
            </main>
        )
    }

    const state = String(status) === "authenticated" ? "authenticated" : "unauthenticated";
    const name = String(profileData?.given_name);

    return (
        <>

            <main className="flex flex-col min-h-screen p-4 sm:p-8 from-black to-darkgreen bg-gradient-to-br text-white">
                <Navbar />
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row items-center">
                                <span className="w-full sm:w-1/4 font-semibold text-gray-600">First Name:</span>
                                <p className="text-gray-700">{profileData?.given_name}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center">
                                <span className="w-full sm:w-1/4 font-semibold text-gray-600">Last Name:</span>
                                <p className="text-gray-700">{profileData?.family_name}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center">
                                <span className="w-full sm:w-1/4 font-semibold text-gray-600">Email:</span>
                                <p className="text-gray-700">{profileData?.username}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-8 w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Hackerank</h2>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {/* Account settings content */}
                    </div>
                </section>
                <section className="mb-8 w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Division</h2>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {/* Activity log content */}
                    </div>
                </section>
                <div>
                    <LogoutButton />
                </div>
            </main>
            <Mobilenav />
        </>


    )
}
