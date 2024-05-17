"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Particles from "@/components/particles/ParticleDesign";
import { useFormik } from "formik";
import userSchema from "@/validations/userSchema";
import { createUser } from "@/app/api/register/register"; 
import { FormikValues } from "formik";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import Link from "next/link";
import firebaseConfig from "@/lib/firebaseInitialize";
import Image from "next/image";
import NOIMask from "@/assets/img/NOIMaskp.png";

const Page: React.FC = () => {
  const [display, setDisplay] = useState({
    form: true,
    success: false,
    error: false,
  });
  const [documentURL, setDocumentURL] = useState("");
  const [fileError, setFileError] = useState("");
  const [anyFile, setAnyFile] = useState(null);
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      fullName: "",
      birthdate: "",
      gender: "",
      hackerrank: "",
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
    onSubmit: async (values: any, actions: any) => {
      try {
        await createUser({ ...values, document: documentURL });
        actions.resetForm();
        setDocumentURL("");
        setAnyFile(null);
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
  const storagebucket = "noi2024-f1e9b.appspot.com";
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: storagebucket,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  firebase.initializeApp(firebaseConfig);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setAnyFile(selectedFile);
      const extension = selectedFile.name.split(".").pop().toLowerCase();
      if (extension !== "pdf") {
        console.log("Only PDF files are allowed");
        setFileError("Please select a PDF file");
        return;
      }
      setFileError("");
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);

      fileRef
        .put(selectedFile)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            // setFieldValue("document", downloadURL);
            // console.log(values.document);
            setDocumentURL(downloadURL);
            console.log("File available at", documentURL);
          });
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setAnyFile(null);
        });
    } else {
      console.log("No file selected");
    }
  };
  return (
    <>
      <motion.main className="min-h-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen">
        <Navbar />
        <div>
          <Particles />
        </div>
        <motion.main
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black to-darkgreen"
        >
          <div className="flex flex-col">
            <div className="mt-10">
              <div className="w-full flex flex-col justify-center items-center">
                <Image
                  className="hover:scale-105 transition-transform duration-300 mb-8"
                  src={NOIMask}
                  alt="maskImage"
                  width={650}
                  height={500}
                  style={{ zIndex: 21 }}
                />
              </div>
              <h2 className="text-4xl font-bold text-center mb-5 font-horus text-gold">
                Registration | Student
              </h2>
              <p className="text-center font-horus text-gold">
                NOI 2024 Portal Access
              </p>
            </div>
            <div
              className="mt-10 p-5"
              style={
                { display: display.success ? "none" : "block" } || {
                  display: display.error ? "none" : "block",
                }
              }
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
            style={
              { display: display.success ? "none" : "block" } || {
                display: display.error ? "none" : "block",
              }
            }
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

                <label className="block mb-5 flex flex-col justify-center items-center">
                  <span className="text-gold">HackerRank Username</span>
                  <input
                    name="hackerrank"
                    type="text"
                    placeholder="Your HackerRank username"
                    style={{ zIndex: 21 }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hackerrank}
                    className={`mt-1 block w-3/4 rounded-md border ${
                      errors.hackerrank && touched.hackerrank
                        ? "border-red-500"
                        : "border-gray-300"
                    } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                  />
                  {errors.hackerrank && touched.hackerrank && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.hackerrank}
                    </span>
                  )}
                </label>

                <label>
                  <label className="block mb-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold my-8 text-gold mt-16 sm:mt-4 md:mt-7">
                      Proof Document Type
                    </h2>
                    <span className="text-gold ">Document Type</span>
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
                      <option value="birth_certificate">
                        Birth Certificate
                      </option>
                    </select>
                    {errors.documentType && touched.documentType && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.documentType}
                      </span>
                    )}
                  </label>
                  <label className="block mb-5 flex flex-col justify-center items-center">
                    <span className="text-gold mb-2">
                      Document (.pdf format preferred)
                    </span>
                    <input
                      style={{ zIndex: 21 }}
                      name="document"
                      type="file"
                      onChange={handleFileChange}
                      onBlur={handleBlur}
                      // value={documentURL}
                      className={`mt-1 block w-3/4 rounded-md border w-3/4 p-2 bg-white text-black border z-21 rounded ${
                        documentURL == "" && touched.document
                          ? "border-red-500"
                          : "border-gray-300"
                      } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                    />
                    {anyFile === null && touched.document ? (
                      <span className="text-red-500 text-sm mt-1">
                        Required
                      </span>
                    ) : (
                      fileError && (
                        <span className="text-red-500 text-sm mt-1">
                          {fileError}
                        </span>
                      )
                    )}
                  </label>
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
                  <span className="text-gold">
                    Contact Number (ex: +94761234567)
                  </span>
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
                  <span className="text-gold">Email (should be unique)</span>
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
                <h2 className="text-2xl font-bold mt-24 sm:mt-24 md:mt-12 text-gold">
                  School Information
                </h2>
                <label className="block mb-5 flex flex-col justify-center items-center">
                  <span className="text-gold mt-8">School Name</span>
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
            </div>
            <div className="flex flex-col justify-center items-center w-full mb-20 mt-10">
              <button
                type="submit"
                style={{ zIndex: 21 }}
                className={`w-1/2 sm:w-1/2 md:w-1/6 lg:w-1/6 py-3 px-4 border-2 font-horus text-lg border-gold rounded-md shadow-sm text-gold ${
                  isSubmitting
                    ? "bg-black hover:bg-black cursor-not-allowed"
                    : " hover:bg-black"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
          <div
            className="p-10 mb-4 text-gold rounded-lg dark:text-gold z-21 "
            role="alert"
            style={{ display: display.success ? "block" : "none" }}
          >
            <div className="flex items-center justify-center min-h-full ">
              <span className="sr-only">Info</span>
              <h3 className="text-lg font-medium">Registration Successful</h3>
            </div>
            <div className="mt-2 mb-4 text-sm z-21" style={{ zIndex: 21 }}>
              Join our whatsapp group for more updates.
              <Link
                style={{ zIndex: 21 }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://chat.whatsapp.com/JL2qyoImHrm4rqOYybeZTB"
              >
                <b>Click Here</b>
              </Link>
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
            className="p-10 mb-4 text-gold rounded-lg dark:text-gold z-21 "
            role="alert"
            style={{ display: display.error ? "block" : "none" }}
          >
            <div className="flex items-center justify-center min-h-full">
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
            <div className="flex justify-center align-center">
              <button
                type="button"
                className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <Link href="/register" style={{ zIndex: 21 }}>
                  <div>Try Again</div>
                </Link>
              </button>
              <button
                type="button"
                className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 z-50"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
              >
                <Link href="https://wa.me/94713491029" style={{ zIndex: 21 }}>
                  <div className="text-white hover:text-red ">
                    Contact Admin
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </motion.main>
        <Footer />
      </motion.main>
    </>
  );
};
export default Page;
