import React from "react";
import Image from "next/image";
import logo from "./NOILogoGold.svg";
// import UCSCLogo from "@/assets/img/ucsc logo.jpg";
import ACMLogo from "@/assets/img/ACM.png";
import UCSCLogo from "@/assets/img/UCSC.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-br from-black to-darkgreen p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between flex-wrap">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <Link href="/" passHref>
                  <Image src={logo} className="h-15 me-10" alt="NOI Logo" />
                </Link>
                <a
                  href="https://ucsc.cmb.ac.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={UCSCLogo}
                    width={100}
                    height={100}
                    alt="UCSC Logo"
                    className="mr-5"
                  />
                </a>
                <a
                  href="https://ucsc.acm.org/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ACMLogo} width={100} height={50} alt="ACM Logo" />
                </a>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
              <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-white font-semibold text-gold-900 uppercase dark:text-gold text-left">
                  Pages
                </h2>
                <ul className="text-gold-500 dark:text-gold-400 font-medium text-left">
                  <li className="mb-4 text-left">
                    <Link href="/howtocompete" className="text-gold">
                      How to Compete
                    </Link>
                  </li>
                  <li className="mb-4 text-left">
                    <Link href="/resources" className="text-gold">
                      Resources
                    </Link>
                  </li>
                  <li className="mb-4 text-left">
                    <Link href="/awards" className="text-gold">
                      Awards
                    </Link>
                  </li>
                  <li className="mb-4 text-left">
                    <Link href="/timeline" className="text-gold">
                      Timeline
                    </Link>
                  </li>
                  <li className="mb-4 text-left">
                    <Link href="/results" className="text-gold">
                      Results
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-white font-semibold text-gold-900 uppercase dark:text-gold text-left">
                  Partners
                </h2>
                <ul className="text-gold-500 dark:text-gold-400 font-medium">
                  <li className="mb-4 text-left">
                    <a
                      href="https://moe.gov.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold "
                    >
                      Ministry of Education
                    </a>
                  </li>
                  <li className="mb-4 text-left">
                    <a
                      href="https://ucsc.cmb.ac.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold"
                    >
                      UCSC
                    </a>
                  </li>
                  <li className="mb-4 text-left">
                    <a
                      href="https://ioinformatics.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold"
                    >
                      IOI 2024
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full mb-6 md:mb-0">
                <h2 className="mb-6 text-white text-left font-semibold text-gold-900 uppercase dark:text-gold">
                  Contact
                </h2>
                <ul className="text-gold-500 dark:text-gold-400 font-medium">
                  <li className="mb-4 text-left">
                    <a href="#" className="text-gold text-left mb-1">
                      ACM Student Chapter of UCSC
                    </a>
                    <address className="text-gold text-left">
                      UCSC Building Complex,
                      <br />
                      No. 35, Reid Avenue,
                      <br />
                      Colombo 07,
                      <br />
                      Sri Lanka
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-gold my-6 border-gold-200 sm:mx-auto dark:border-gold-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-gold text-gold-500 sm:text-center dark:text-gold-400">
              © 2024{" "}
              <Link href="/" className="text-gold">
                NOI
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/noisrilanka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-900 dark:hover:text-gold"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F3D592"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gold-500 hover:text-gold-900 dark:hover:text-gold ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F3D592"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gold-500 hover:text-gold-900 dark:hover:text-gold ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F3D592"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gold-500 hover:text-gold-900 dark:hover:text-gold ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F3D592"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.854-1.545a11.34 11.34 0 0 1-1.652-1.146 7.856 7.856 0 0 1-2.7-3.443 9.775 9.775 0 0 1-.276-.627 8.512 8.512 0 0 1-1.058-4.007h.002c.189-.022.378-.044.566-.066a8.5 8.5 0 0 1 8.258-6.524 9.54 9.54 0 0 1 4.272 1.017 8.506 8.506 0 0 1 3.924 6.57 7.258 7.258 0 0 1-.454 3.21 20.013 20.013 0 0 1-3.119 5.4c-.238.268-.485.525-.742.777a8.537 8.537 0 0 1-3.127 1.682Z"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
