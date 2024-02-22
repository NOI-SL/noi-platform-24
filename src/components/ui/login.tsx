"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
    return (
        <button
            onClick={() => signIn("asgardeo")}
            className="bg-white text-black border border-black px-8 py-2 rounded-md transition-colors duration-300 hover:bg-black hover:text-white"
        >
            Sign in
        </button>
    );
};


export const LogoutButton = () => {
    return (
        <button onClick={() => signOut()}>
            Sign Out
        </button>
    );
};