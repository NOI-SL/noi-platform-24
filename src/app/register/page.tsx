"use client";
import { motion } from "framer-motion";
import React, { useState, createRef, useRef, useCallback } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Particles from "@/components/particles/ParticleDesign";
import { useFormik } from "formik";
import userSchema from "@/validations/userSchema";
import { createUser } from "@/app/api/register/register";
import { FormikValues } from "formik";
import { useField } from "formik";
import Link from "next/link";
import Dropzone, { DropzoneRef } from "react-dropzone";
import Image from "next/image";
import DropzoneComponent from "@/components/Dropzone";

const Page: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [display, setDisplay] = useState({
    form: true,
    success: false,
    error: false,
  });

  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      fullName: "",
      birthdate: "",
      gender: "",
      schoolName: "",
      schoolAddress: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      contactNumber: "",
      email: "",
      documentType: "",
      document: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values: FormikValues, actions: any) => {
      try {
        await createUser(values);
        actions.resetForm();
        setDisplay({
          form: false,
          success: true,
          error: false,
        });
      } catch (err) {
        console.log("Registration Failed");
        setDisplay({
          form: false,
          success: false,
          error: true,
        });
      }
    },
  });

  const handleFileDrop = useCallback((acceptedFiles: any) => {
    console.log("Accepted files:", acceptedFiles);
    if (acceptedFiles.length === 0) {
      setErrorMessage("No file selected.");
    } else {
      setErrorMessage("");
    }
  }, []);

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
        <Particles />
        <div className="flex flex-col">
          <div className="mt-10">
            <h2 className="text-4xl font-bold text-center mb-5 font-horus text-gold">
              Registration | Student
            </h2>
            <p className="text-center font-horus text-gold">
              NOI 2024 Portal Access
            </p>
          </div>
          <div className="mt-10 p-5">
            <p className="text-center text-gold">
              Sign up for National Olympiad in Informatics program.
            </p>
            <p className="text-center text-bold text-gold">
              Registrations are now open.
            </p>
          </div>
        </div>
        <form
          className="p-8 w-full max-w-6xl shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold my-8 text-gold">
                Basic Information
              </h2>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">First Name</span>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Your first name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  style={{ zIndex: 21 }}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.firstName && touched.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.firstName && touched.firstName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </span>
                )}
              </label>

              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Your last name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  style={{ zIndex: 21 }}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.lastName && touched.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.lastName && touched.lastName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </span>
                )}
              </label>

              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Full Name</span>
                <input
                  name="fullName"
                  type="text"
                  style={{ zIndex: 21 }}
                  placeholder="Your full name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.fullName && touched.fullName
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.fullName && touched.fullName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.fullName}
                  </span>
                )}
              </label>

              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Birthdate</span>
                <input
                  name="birthdate"
                  type="date"
                  style={{ zIndex: 21 }}
                  placeholder="Your birthdate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthdate}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.birthdate && touched.birthdate
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.birthdate && touched.birthdate && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.birthdate}
                  </span>
                )}
              </label>

              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Gender</span>
                <select
                  name="gender"
                  style={{ zIndex: 21 }}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.gender && touched.gender
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.gender}
                >
                  <option value="">Select your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && touched.gender && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.gender}
                  </span>
                )}
              </label>

              <h2 className="text-2xl font-bold my-8 text-gold">
                School Information
              </h2>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">School Name</span>
                <input
                  name="schoolName"
                  type="text"
                  placeholder="School name"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.schoolName}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.schoolName && touched.schoolName
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.schoolName && touched.schoolName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.schoolName}
                  </span>
                )}
              </label>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">School Address</span>
                <input
                  name="schoolAddress"
                  type="text"
                  placeholder="School address"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.schoolAddress}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.schoolAddress && touched.schoolAddress
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.schoolAddress && touched.schoolAddress && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.schoolAddress}
                  </span>
                )}
              </label>
            </div>

            <div>
              <h2 className="text-2xl font-bold my-8 text-gold">
                Contact Information
              </h2>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Address Line 1</span>
                <input
                  name="addressLine1"
                  type="text"
                  placeholder="Address Line 1"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.addressLine1}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.addressLine1 && touched.addressLine1
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.addressLine1 && touched.addressLine1 && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.addressLine1}
                  </span>
                )}
              </label>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Address Line 2</span>
                <input
                  name="addressLine2"
                  type="text"
                  placeholder="Address Line 2"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.addressLine2}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.addressLine2 && touched.addressLine2
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.addressLine2 && touched.addressLine2 && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.addressLine2}
                  </span>
                )}
              </label>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Address Line 3 / City</span>
                <input
                  name="addressLine3"
                  type="text"
                  placeholder="Address Line 3 / City"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.addressLine3}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.addressLine3 && touched.addressLine3
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.addressLine3 && touched.addressLine3 && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.addressLine3}
                  </span>
                )}
              </label>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold">Contact Number</span>
                <input
                  name="contactNumber"
                  type="text"
                  placeholder="Contact Number"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactNumber}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.contactNumber && touched.contactNumber
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.contactNumber && touched.contactNumber && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.contactNumber}
                  </span>
                )}
              </label>
              <label className="block mb-1 flex flex-col justify-center items-center">
                <span className="text-gold">Email</span>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  style={{ zIndex: 21 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold my-5 text-gold">
                  Proof Document Type
                </h2>
                <span className="text-gold">Document Type</span>
                <select
                  name="documentType"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ zIndex: 21 }}
                  value={values.documentType}
                  className={`mt-1 block w-3/4 rounded-md border ${
                    errors.documentType && touched.documentType
                      ? "border-red-500"
                      : "border-gray-300"
                  } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                >
                  <option value="">Select Document Type</option>
                  <option value="nic">NIC</option>
                  <option value="postal_id">Postal ID</option>
                  <option value="passport">Passport</option>
                  <option value="letter">Letter certified by school</option>
                  <option value="birth_certificate">Birth Certificate</option>
                </select>
                {errors.documentType && touched.documentType && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.documentType}
                  </span>
                )}
              </label>
              <label className="block mb-5 flex flex-col justify-center items-center">
                <span className="text-gold mb-2">Document</span>
                <DropzoneComponent onFileDrop={handleFileDrop}  error={errorMessage}  />
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full mb-10">
            <button
              type="submit"
              style={{ zIndex: 21 }}
              className={`w-3/4 sm:w-3/4 md:w-1/4 lg:w-1/4 py-3 px-4 border-2 font-horus text-lg border-gold rounded-md shadow-sm text-gold ${
                isSubmitting
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black hover:bg-darkgreen"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          <div
            className="p-10 mb-4 text-gold rounded-lg dark:text-gold z-21"
            role="alert"
            style={{ display: display.success ? "block" : "none" }}
          >
            <div className="flex items-center justify-center">
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">Registration Successful</h3>
            </div>
            <div className="mt-2 mb-4 text-sm z-21" style={{ zIndex: 21 }}>
              Join our whatsapp group for more updates.
              {/* <Link
                style={{ zIndex: 21 }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB"
              >
                <b>Click Here</b>
              </Link> */}
            </div>
            <div className="flex justify-center align-center">
              <button
                type="button"
                className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <Link
                  className="z-21"
                  target="_blank"
                  style={{ zIndex: 21 }}
                  rel="noopener noreferrer"
                  href="https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB"
                >
                  <div>Join WhatsApp Group</div>
                </Link>
              </button>
            </div>
          </div>

          <div
            className="p-4 mb-4 text-red-800  rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
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
              Email :{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="hapuarachchikaviru@gmail.com"
                style={{ zIndex: 21 }}
              >
                hapuarachchikaviru@gmail.com
              </Link>
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
                <Link href="/register" style={{ zIndex: 21 }}>
                  <div>Try Again</div>
                </Link>
              </button>
              <button
                type="button"
                className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
              >
                <Link href="https://wa.me/94713491029" style={{ zIndex: 21 }}>
                  <div>Contact Admin</div>
                </Link>
              </button>
            </div>
          </div>
        </form>
        <Footer />
      </motion.main>
    </>
  );
};
export default Page;
