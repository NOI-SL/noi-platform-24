"use client";

import Herosec from '@/components/herosec';
import Heroseclog from '@/components/heroseclog';
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
          <Heroseclog />
          <Mobilenav />
        </main>
      ) : (

        <main className="">
          <Herosec />
        </main>

      )}
    </>

  )
}
