// app/admin/page.tsx
'use client'; // Ensures this component is only rendered on the client side
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import LoadingScreen from '@/components/loadingscreen';
import { useSession } from 'next-auth/react';
import Mobilenav from '@/components/mobilenav';

const AdminPage = () => {
    const { data, status } = useSession();
    const { push } = useRouter();
    const params = useParams();

    const key = params.key;
    const isAdmin = key === "kaviru" || key === "lakshith" || key === "dasun";

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

    // Render Admin Page content or unauthorized message based on isAdmin
    // Note: This conditional rendering is client-side, ensure you have a fallback or loading state if necessary
    return (
        <>
        
        <div>
            {isAdmin ? (
                <>
                <Navbar
                    status={status}
                    name={data?.user?.profile?.given_name}
                />
                <main className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden">
                    <div className="mt-8 border w-full py-20 bg-slate-400">
                        <h1 className="text-4xl font-bold">Admin Page</h1>
                    </div>
                    <div className="mt-8 text-left lg:w-1/2 md:w-3/4 w-full mx-auto">
                        <h2 className="text-2xl font-bold">Welcome, {data?.user?.profile?.given_name}!</h2>
                        <p className="mt-4">You are an admin</p>
                    </div>
                </main>
                </>
            ) : (
                <div>
                    <h1>Unauthorized</h1>
                </div>
            )}
        </div>
        <Mobilenav />
        </>
    );
};

export default AdminPage;
