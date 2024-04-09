"use client";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Particles from "@/components/particles/ParticleDesign";
import { useFormik } from "formik";
import userSchema from "@/validations/userSchema";
import axios from "axios";

const onSubmit = async (values: any, actions: any) => {
  try {
    const response = await axios.post("/api/register", values);
    console.log(response.data);
    actions.resetForm();
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const Page: React.FC = () => {
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
    onSubmit: onSubmit,
  });

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
          <div className="mt-10 p-5 bg-gradient-to-br from-black to-darkgreen">
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
              <label className="block mb-5 flex flex-col justify-center items-center">
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
                <h2 className="text-2xl font-bold my-8 text-gold">
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
                <div className="block mb-5 flex flex-col justify-center items-center">
                  <p className="text-sm text-gold">
                    Upload to Google Drive and make it viewable to anyone, then
                    copy the link.
                  </p>
                  <input
                    name="document"
                    type="url"
                    placeholder="Eg: https://drive.google.com/drive/u/0/home...."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.document}
                    style={{ zIndex: 21 }}
                    className={`mt-1 block w-3/4 rounded-md border ${
                      errors.document && touched.document
                        ? "border-red-500"
                        : "border-gray-300"
                    } shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3`}
                  />
                  {errors.document && touched.document && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.document}
                    </span>
                  )}
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full mb-10">
            <button
              type="submit"
              style={{ zIndex: 21 }}
              className={`w-1/4 py-3 px-4 border-2 font-horus text-lg border-gold rounded-md shadow-sm text-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black hover:bg-darkgreen"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        <Footer />
      </motion.main>
    </>
  );
};
export default Page;
