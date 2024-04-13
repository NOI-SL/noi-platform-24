import React from "react";
import Image from "next/image";
import loadingIcon from "@/assets/img/Horse.svg";
import NOILOgo from "@/assets/img//NOILogoGold.svg";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-darkgreen">
      <div className="flex flex-col items-center">
        <Image
          alt="loading Icon"
          src={NOILOgo}
          width={150}
          height={150}
          className=" rounded-lg"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
