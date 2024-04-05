// Import React and necessary components
'use client'
import React from 'react';
import Input from '@/components/input';
import Mobilenav from '@/components/mobilenav';
import Navbar from '@/components/navbar';
import { LoginButton } from '@/components/ui/login';
import { useSession, signIn, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import NOIMask from '@/assets/img/NOIMask.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { userSchema } from "@/app/validation/userScema";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the page component with correct TypeScript types, if applicable
const Page: React.FC = () => {
  // Retrieve session status and data
  const { data: session, status } = useSession();

  // Check if the session is loading
  const isLoading = status === "loading";

  // Check if user is authenticated based on the existence of session data
  const isAuthenticated = !!session;

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });



  // Render content based on authentication status
  return (
    <>
      <motion.main
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -50 }}
        // transition={{ duration: 0.5 }}
        className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen"
      >
        <Navbar />
        <div className="mt-8 w-full bg-blacky-400">
          <motion.main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col justify-center items-center "
          >
            <div className="w-full flex flex-col justify-center items-center">
              <Image
                className="hover:scale-105 transition-transform duration-300"
                src={NOIMask}
                alt="maskImage"
                width={700}
                height={500}
              />
            </div>
            <h1 className="text-2xl font-bold text-gold text-center mb-8 mt-10">
              Registration | සම්පත්
            </h1>
          </motion.main>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 w-full max-w-6xl shadow-sm "
        >
          <div
            className="grid  md:grid-cols-2 gap-10"
            style={{ display: display.form ? "grid" : "none" }}
          >
            <div>
              <h2 className="text-2xl font-bold my-8">Basic Information</h2>
              <label className="block mb-5">
                <span className="text-gray-700">First Name</span>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Your first name"
                  {...register("firstName")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.firstName?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.firstName?.message}
                  </p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gray-700">Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Your last name"
                  {...register("lastName")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.lastName?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.lastName?.message}
                  </p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gray-700">Full Name</span>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  {...register("fullName")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.fullName?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.fullName?.message}
                  </p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gray-700">Birthdate</span>
                <input
                  name="birthdate"
                  type="date"
                  {...register("birthdate")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.birthdate?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.birthdate?.message}
                  </p>
                )}
              </label>

              <label className="block mb-5">
                <span className="text-gray-700">Gender</span>
                <select
                  name="gender"
                  {...register("gender")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.gender?.message}
                  </p>
                )}
              </label>
            </div>

            <div>
              <h2 className="text-2xl font-bold my-8">School Information</h2>
              <label className="block mb-5">
                <span className="text-gray-700">School Name</span>
                <input
                  name="schoolName"
                  type="text"
                  placeholder="School name"
                  {...register("schoolName")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.schoolName?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.schoolName?.message}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gray-700">School Address</span>
                <input
                  name="schoolAddress"
                  type="text"
                  placeholder="School Address"
                  {...register("schoolAddress")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.schoolAddress?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.schoolAddress?.message}
                  </p>
                )}
              </label>
              <h2 className="text-2xl font-bold my-8">Contact Information</h2>
              <label className="block mb-5">
                <span className="text-gray-700">Address Line 1</span>
                <input
                  name="addressLine1"
                  type="text"
                  placeholder="Email or phone"
                  {...register("addressLine1")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.addressLine1?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.addressLine1?.message}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gray-700">Address Line 2</span>
                <input
                  name="addressLine2"
                  type="text"
                  placeholder="Email or phone"
                  {...register("addressLine2")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.addressLine2?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.addressLine2?.message}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gray-700">Address Line 3 / City</span>
                <input
                  name="addressLine3"
                  type="text"
                  placeholder="Email or phone"
                  {...register("addressLine3")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.addressLine3?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.addressLine3?.message}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gray-700">Contact Number</span>
                <input
                  name="contactNumber"
                  type="text"
                  placeholder="Phone number"
                  {...register("contactNumber")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.contactNumber?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.contactNumber?.message}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <span className="text-gray-700">Email</span>
                <input
                  name="email"
                  type="text"
                  placeholder="Your email"
                  {...register("email")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.email?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </label>
              <label className="block mb-5">
                <h2 className="text-2xl font-bold my-8">Proof Document Type</h2>
                <select
                  name="documentType"
                  {...register("documentType")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                >
                  <option value="nic">NIC</option>
                  <option value="postal_id">Postal ID</option>
                  <option value="passport">Passport</option>
                  <option value="letter">Letter certified by school</option>
                  <option value="birth_certificate">Birth Certificate</option>
                </select>
                {errors.documentType?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.documentType?.message}
                  </p>
                )}
              </label>
              {/*<label className="block mb-5">
                <span className="text-gray-700">Upload Document</span>
                <input
                  name="document"
                  type="file"
                  accept="image/png, image/gif, image/jpeg, application/pdf"
                  {...register("document")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.document?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.document?.message}
                  </p>
                )}
                </label>*/}
              <label className="block mb-5">
                <h2 className="text-2xl font-bold mt-8 mb-1">Documents URL</h2>
                <p className="text-sm text-gray-500">
                  Upload to google drive and make to view any one and copy the
                  link
                </p>
                <input
                  name="document"
                  type="url"
                  placeholder="Eg:- https://drive.google.com/drive/u/0/home...."
                  {...register("document")}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
                {errors.document?.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.document?.message}
                  </p>
                )}
              </label>
              <button
                type="submit"
                className="w-full py-3 px-4 border-2 font-horus text-lg border-black rounded-md shadow-sm hover:text-white bg-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>

          <div
            class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
            style={{ display: display.success ? "block" : "none" }}
          >
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <h3 class="text-lg font-medium">Registration Successful</h3>
            </div>
            <div class="mt-2 mb-4 text-sm">
              Join our whatsapp group for more updates.. Link - https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB
            </div>
            <div class="flex">
              <button
                type="button"
                class="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <svg
                  class="me-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                <Link target="_black" href="https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB">
                  <div>Join WhatsApp Group</div>
                </Link>
              </button>
              <button
                type="button"
                class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800"
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
            class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
            style={{ display: display.error ? "block" : "none" }}
          >
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <h3 class="text-lg font-medium">Registration Failed</h3>
            </div>
            <div class="mt-2 mb-4 text-sm">
              Try again. If the problem persists, contact the administrator. Email : hapuarachchikaviru@gmail.com
            </div>
            <div class="flex">
              <button
                type="button"
                class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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

      </motion.main >
    </>
  )
};


// Export the page component
export default Page;
