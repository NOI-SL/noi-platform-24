'use client'
import Herosec from "@/components/herosec";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { AuthProvider } from "@asgardeo/auth-react";

export default function Home() {
  return (
    <AuthProvider
      config={{
        signInRedirectURL: "https://localhost:3000",
        signOutRedirectURL: "https://localhost:3000",
        clientID: "SVU2z9pmfL0Mpv9vyCgn1uRdYsEa",
        baseUrl: "https://api.asgardeo.io/t/kodecosmo",
        scope: ["openid", "profile"],
      }}
      >
    <main className="min-h-full  flex flex-col  w-full">
      <Navbar />
      <Herosec />
    </main>
    </AuthProvider>
    
  );
}
