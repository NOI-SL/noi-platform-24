"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";
import Particles from "@/components/particles/ParticleDesign";
import { LoginButton } from "@/components/ui/login";

const Page: React.FC = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = !!session;

  //react hook form and zod validation

  const [display, setDisplay] = useState({
    form: true,
    success: false,
    error: false,
  });

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setDisplay({
          form: false,
          success: true,
          error: false,
        });
      } else {
        const errorData = await response.json();
        setDisplay({
          form: false,
          success: false,
          error: true,
        });
      }
    } catch (error) {
      setDisplay({
        form: false,
        success: false,
        error: true,
      });
    }
  };

  return (
    <>
      <motion.main
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -50 }}
        // transition={{ duration: 0.5 }}
        className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen pb-10"
      >
        <Navbar />
        <Particles />
        <div className="flex flex-col">
          <div className="mt-10">
            <h2 className="text-4xl font-bold text-center mb-5 font-horus text-gold">
              Registration | Student
            </h2>
            <p className="text-center font-horus">NOI 2024 Portal Access</p>
          </div>
          <div
            className="mt-10 p-5 bg-gradient-to-br from-black to-darkgreen"
            style={{ display: display.form ? "block" : "none" }}
          >
            <p className="text-center text-gold">
              Sign up for National Olympiad in Informatics program.
            </p>
            <p className="text-center text-bold text-gold">
              Registrations are now open.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit(onSubmit)}
          className="p-8 w-full max-w-6xl shadow-sm"
        >
          <div
            className="grid md:grid-cols-2 gap-10"
            style={{ display: display.form ? "grid" : "none" }}
          >
            <div>
              <h2 className="text-2xl font-bold my-8 text-gold">
                Basic Information
              </h2>
              <label className="block mb-5">
                <span className="text-gold">First Name</span>
                <input
                  type="text"
                  // value={formData.firstName}
                  // onChange={handleInputChange}
                  {...register("firstName")}
                  placeholder="Your first name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.firstName && typeof errors.firstName === "string" && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gold">Last Name</span>
                <input
                  type="text"
                  // value={formData.lastName}
                  // onChange={handleInputChange}
                  {...register("lastName")}
                  placeholder="Your last name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.lastName && typeof errors.lastName === "string" && (
                  <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gold">Full Name</span>
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="Your full name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.fullName && typeof errors.fullName === "string" && (
                  <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gold">Birthdate</span>
                <input
                  type="date"
                  {...register("birthdate")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.birthdate && typeof errors.birthdate === "string" && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.birthdate}
                  </p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gold">Gender</span>
                <select
                  {...register("gender")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                >
                  <option value="" disabled>
                    Choose One
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && typeof errors.gender === "string" && (
                  <p className="text-sm text-red-600 mt-1">{errors.gender}</p>
                )}
              </label>
              <h2 className="text-2xl font-bold my-8 text-gold">
                School Information
              </h2>
              <label className="block mb-5">
                <span className="text-gold">School Name</span>
                <input
                  type="text"
                  placeholder="School name"
                  {...register("schoolName")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.schoolName && typeof errors.schoolName === "string" && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.schoolName}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gold">School Address</span>
                <input
                  type="text"
                  placeholder="School address"
                  {...register("schoolAddress")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.schoolAddress &&
                  typeof errors.schoolAddress === "string" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.schoolAddress}
                    </p>
                  )}
              </label>
            </div>

            <div>
              <h2 className="text-2xl font-bold my-8 text-gold">
                Contact Information
              </h2>
              <label className="block mb-5">
                <span className="text-gold">Address Line 1</span>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  {...register("addressLine1")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.addressLine1 &&
                  typeof errors.addressLine1 === "string" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.addressLine1}
                    </p>
                  )}
              </label>
              <label className="block mb-5">
                <span className="text-gold">Address Line 2</span>
                <input
                  type="text"
                  placeholder="Address Line 2"
                  {...register("addressLine2")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.addressLine2 &&
                  typeof errors.addressLine2 === "string" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.addressLine2}
                    </p>
                  )}
              </label>
              <label className="block mb-5">
                <span className="text-gold">Address Line 3 / City</span>
                <input
                  type="text"
                  placeholder="Address Line 3 / City"
                  {...register("addressLine3City")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.addressLine3City &&
                  typeof errors.addressLine3City === "string" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.addressLine3City}
                    </p>
                  )}
              </label>
              <label className="block mb-5">
                <span className="text-gold">Contact Number</span>
                <input
                  type="text"
                  placeholder="Contact Number"
                  {...register("contactNumber")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.contactNumber &&
                  typeof errors.contactNumber === "string" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.contactNumber}
                    </p>
                  )}
              </label>
              <label className="block mb-5">
                <span className="text-gold">Email</span>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.email && typeof errors.email === "string" && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </label>
              <label className="block mb-5">
                <h2 className="text-2xl font-bold my-8 text-gold">
                  Proof Document Type
                </h2>
                <span className="text-gold">Choose proof document type</span>
                <select
                  {...register("documentType")}
                  className="mt-1 block w-full rounded-md border border-gold shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                >
                  <option value="" disabled>
                    Choose One
                  </option>
                  <option value="nic">NIC</option>
                  <option value="postal_id">Postal ID</option>
                  <option value="passport">Passport</option>
                  <option value="letter">Letter certified by school</option>
                  <option value="birth_certificate">Birth Certificate</option>
                </select>
                {errors.documentType &&
                  typeof errors.documentType === "string" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.documentType}
                    </p>
                  )}
              </label>
              <h2 className="text-2xl font-bold mt-8 mb-1 text-gold">
                Documents URL
              </h2>
              <div>
                <p className="text-sm text-gold">
                  Upload to Google Drive and make it viewable to anyone, then
                  copy the link.
                </p>
                <input
                  type="url"
                  {...register("document")}
                  placeholder="Eg: https://drive.google.com/drive/u/0/home...."
                  className="mt-1 mb-5 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.document && typeof errors.document === "string" && (
                  <p className="text-sm text-red-600 mt-1">{errors.document}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 border-2 font-horus text-lg border-gold rounded-md shadow-sm text-gold hover:text-gold bg-black hover:bg-drkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
          <div
            className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
            style={{ display: display.success ? "block" : "none" }}
          >
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">Registration Successful</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
              Join our whatsapp group for more updates.. Link -
              https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB
            </div>
            <div className="flex">
              <button
                type="button"
                className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <svg
                  className="me-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                <Link
                  target="_black"
                  href="https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB"
                >
                  <div>Join WhatsApp Group</div>
                </Link>
              </button>
              <button
                type="button"
                className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
                data-dismiss-target="#alert-additional-content-3"
                aria-label="Close"
              >
                <Link href="/">
                  <div>Back to Home</div>
                </Link>
              </button>
            </div>
          </div>

          <div
            className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
            style={{ display: display.error ? "block" : "none" }}
          >
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">Registration Failed</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
              Try again. If the problem persists, contact the administrator.
              Email : hapuarachchikaviru@gmail.com
            </div>
            <div className="flex">
              <button
                type="button"
                className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  className="me-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                <Link href="/register">
                  <div>Try Again</div>
                </Link>
              </button>
              <button
                type="button"
                className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
              >
                <Link href="https://wa.me/94713491029">
                  <div>Contact Admin</div>
                </Link>
              </button>
            </div>
          </div>
        </form>
      </motion.main>
      <Footer />
    </>
  );
};

export default Page;
