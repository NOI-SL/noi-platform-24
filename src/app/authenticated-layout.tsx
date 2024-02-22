// app/authenticated-layout.tsx
'use client';
import { AuthProvider } from "@asgardeo/auth-react";
import React from "react"; // Ensure React is imported for typing

const AuthenticatedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AuthProvider
            config={{
                signInRedirectURL: "https://localhost:3000",
                signOutRedirectURL: "https://localhost:3000",
                clientID: "SVU2z9pmfL0Mpv9vyCgn1uRdYsEa",
                baseUrl: "https://api.asgardeo.io/t/kodecosmo",
                scope: ["openid", "profile"]
            }}
        >
            {children}
        </AuthProvider>
    );
};

export default AuthenticatedLayout;
