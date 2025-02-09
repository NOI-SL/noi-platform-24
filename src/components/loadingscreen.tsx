import React from "react"
import Image from "next/image"
import loadingIcon from "@/assets/img/Horse.svg"
import NOILOgo from "@/assets/img//NOILogoGold.svg"

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-darkgreen">
            <div className="flex flex-col items-center">
                <h1 className="text-white text-2xl font-bold">NOI 2025</h1>
            </div>
        </div>
    )
}

export default LoadingScreen
