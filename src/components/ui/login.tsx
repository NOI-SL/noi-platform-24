"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const LoginButton = () => {
    return (
        <button
            onClick={() => signIn("asgardeo")}
            className="bg-white text-black border border-black px-8 py-2 rounded-md transition-colors duration-300 hover:bg-green-800 hover:text-white"
        >
            Sign in
        </button>
    );
};


export const LogoutButton = () => {
    const { data } = useSession();

    const handleLogout = () => {
        const idToken = data?.user?.idToken;

        if (idToken) {
            // Since next-auth does not support OIDC logout, we have to manually call the OIDC logout endpoint.
            //     signOut()
            //         .then(
            //             () => window.location.assign(
            //                 process.env.NEXT_PUBLIC_ASGARDEO_SERVER_ORIGIN +
            //                 "/oidc/logout?id_token_hint=" + idToken +
            //                 "&post_logout_redirect_uri=" + process.env.NEXT_PUBLIC_ASGARDEO_POST_LOGOUT_REDIRECT_URI
            //             )
            //         );
            // } else {
            signOut({ callbackUrl: "/" });
        }
    }

    return (
        <button className="bg-white text-center text-black border align-middle border-black px-6 py-1 rounded-md transition-colors duration-300 hover:bg-red-800 hover:text-white" onClick={() => handleLogout()}>
            Sign Out
        </button>
    );
};