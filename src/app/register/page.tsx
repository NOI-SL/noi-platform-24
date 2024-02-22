// Import React and necessary components
'use client'
import React from 'react';
import Input from '@/components/input';
import Mobilenav from '@/components/mobilenav';
import Navbar from '@/components/navbar';
import { LoginButton } from '@/components/ui/login';
import { useSession, signIn, signOut } from 'next-auth/react';

// Define the page component with correct TypeScript types, if applicable
const Page: React.FC = () => {
  // Retrieve session status and data
  const { data: session, status } = useSession();

  // Check if the session is loading
  const isLoading = status === "loading";

  // Check if user is authenticated based on the existence of session data
  const isAuthenticated = !!session;

  // Render content based on authentication status
  return (
    <>
      {isLoading ? (
        // Render loading state if needed
        <div>Loading...</div>
      ) : isAuthenticated ? (
        // Render content for authenticated users
        <>
          <Navbar />
          <main className="min-h-full flex flex-col items-center justify-center content-center text-center overflow-hidden">
            <h1>Register</h1>
            <Input />
          </main>
          <Mobilenav />
        </>
      ) : (
        // Render content for non-authenticated users
        <main className="min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gray-100">
          <p className="text-xl p-8">You are not logged in!</p>
          <LoginButton />
        </main>
      )}
    </>
  );
};

// Export the page component
export default Page;
