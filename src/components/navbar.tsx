import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./NOILogoGold.svg";
import { useState } from "react";

interface Component {
  title: string;
  href: string;
}

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
  {
    title: "IOI 2024",
    href: "https://www.ioi2024.eg/",
  },
  {
    title: "Register Now",
    href: "/register",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full md:flex md:flex-col md:justify-center md:items-center align-middle content-center z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gold hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                style={{ zIndex: 21 }}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" style={{ zIndex: 21 }}>
                  <Image
                    style={{ zIndex: 21 }}
                    
                    src={logo}
                    alt="Your Company"
                    width={160}
                    height={40}
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {components.map((component, index) => (
                    <Link
                    className="items-center justify-center align-middle"
                      href={component.href}
                      key={index}
                      style={{ zIndex: 21 }}
                      target={
                        component.title === "IOI 2024" ? "_blank" : "_self"
                      }
                      rel={
                        component.title === "IOI 2024"
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      <div className="text-gold hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        {component.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu" style={{ zIndex: 21 }}>
          <div
            className={`${isOpen ? "block" : "hidden"} sm:hidden`}
            id="mobile-menu"
            style={{ zIndex: 21 }}
          >
            <div
              className="space-y-1 px-2 pb-3 pt-2 transition-opacity duration-3000 z-50"
              style={{ zIndex: 40 }}
            >
              {isOpen && (
                <>
                  {components.map((component, index) => (
                    <Link
                    className="z-50"
                      href={component.href}
                      key={index}
                      style={{ zIndex: 21 }}
                      target={
                        component.title === "IOI 2024" ? "_blank" : "_self"
                      }
                      rel={
                        component.title === "IOI 2024"
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      <div
                        className="text-gold hover:text-white block rounded-md px-3 py-2 text-base font-medium z-21"
                        style={{ zIndex: 21 }}
                      >
                        {component.title}
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
