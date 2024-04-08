"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import logo from "./NOILogoGold.svg";
import { LogoutButton } from "./ui/login";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import mobileLogo from "../../Assets/NavBar/as-lpgp.png";

interface Component {
  title: string;
  href: string;
}

// interface NavbarProps {
//   status?: string;
//   name?: string;
//   // Optional "status" prop
//   // Add other expected props here
// }

const components: Component[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "How to Compete",
    href: "/howtocompete",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Awards",
    href: "/awards",
  },
  {
    title: "Timeline",
    href: "/timeline",
  },
  // {
  //   title: "Results",
  //   href: "/results",
  //   description: "Results of NOI 24",
  // },
  {
    title: "IOI 2023",
    href: "https://ioi2023.hu/",
  },
  {
    title: "Register Now",
    href: "/register",
  },
  // {
  //   title: "Portal",
  //   href: "/",
  //   description: "NOI 24 Portal",
  // },
];
// const Navbar: React.FC<NavbarProps> = (NavbarProps) => {
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 hidden py-5 lg:flex flex-row w-full">
      <div className="md:mx-60 mx-5 flex flex-row justify-between content-center items-center w-full">
        <Link href="/" passHref>
          <Image
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            src={logo}
            alt="NOI 24"
            width={130}
            height={50}
          />
        </Link>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {components.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    {item.title === "IOI 2023" ? (
                      <a
                        href={item.href}
                        className="text-sans text-sm text-gold py-2 px-4 cursor-pointer hover:text-white transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link href={item.href}>
                        <div className="text-sans text-sm text-gold py-2 px-4 cursor-pointer hover:text-white transition duration-300">
                          {item.title}
                        </div>
                      </Link>
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              {status === "authenticated" && (
                <NavigationMenuItem>
                  <LogoutButton />
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
