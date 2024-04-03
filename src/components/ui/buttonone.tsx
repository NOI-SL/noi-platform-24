"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// Define an interface for the component props
interface PrimButProps {
  name: string;
  link: string;
}

const PrimBut: React.FC<PrimButProps> = ({ name, link }) => {
  const [hovered, setHovered] = useState(false);

  const handleHoverStart = () => {
    setHovered(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };

  const router = useRouter();
  // const handleClick = () => {
  //     // Delay navigation using setTimeout
  //     // setTimeout(() => {
  //     router.push(link);
  //     // }, 400); // Delay for 1 second (adjust as needed)
  // };

  const hoverAnimation = {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  const fillAnimation = {
    initial: {
      width: 0,
      height: "100%",
      backgroundColor: "#201C1C", // Change this color as needed
    },
    // animate: {
    //     width: '100%',
    //     transition: {
    //         duration: 0.15,
    //         ease: 'easeInOut',
    //     },
    // },
    // exit: {
    //     width: 0,
    //     transition: {
    //         duration: 0.25,
    //         ease: 'easeInOut',
    //     },
    // },
  };

  return (
    <div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{ position: "relative" }}
    >
      <motion.button
        className="py-3 px-8 mt-10 border-[3px] bg-darkgreen border-gold text-gold hover:text-gold-100 bg-darkgreen"
        style={{ position: "relative", overflow: "hidden", zIndex: 1 }} // Change default background color as needed
        whileHover={hoverAnimation}
        onClick={() => signIn("asgardeo")}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="z-10"
            />
          )}
        </AnimatePresence>
        <span className="" style={{ position: "relative", zIndex: 2 }}>
          {name}
        </span>
      </motion.button>
    </div>
  );
};

export default PrimBut;
