"use client";

import Herosec from '@/components/herosec';
import Mobilenav from '@/components/mobilenav';
import Navbar from '@/components/navbar';
import { LoginButton, LogoutButton } from '@/components/ui/login'
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data, status } = useSession();
  const profileData = data?.user?.profile;

  if (status === "loading") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p className="text-xl pb-24">Loading...</p>
      </main>
    )
  }
  
  return (
    <>
      {status === "authenticated" ? (
        <main className="">
          <Navbar />
          <Herosec />
          <Mobilenav />
        </main>
      ) : (

        <main className="min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gray-100">
          <p className="text-xl p-8">You are not logged in!</p>
          <LoginButton />
        </main>

      )}
    </>

  )
}
