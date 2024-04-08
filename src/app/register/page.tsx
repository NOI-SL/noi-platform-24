// Import React and necessary components
"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { LoginButton } from "@/components/ui/login";
import { useSession, signIn, signOut } from "next-auth/react";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = !!session;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    birthdate: "",
    gender: "",
    schoolName: "",
    schoolAddress: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3City: "",
    contactNumber: "",
    email: "",
    documentType: "",
    document: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
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
        <div className="flex flex-col">
          <div className="mt-10">
            <h2 className="text-4xl font-bold text-center mb-5 font-horus text-gold">
              Registration | Student
            </h2>
            <p className="text-center font-horus">NOI 2024 Portal Access</p>
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
          onSubmit={handleSubmit}
          className="p-8 w-full max-w-6xl shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold my-8 text-gold">
                Basic Information
              </h2>
              <label className="block mb-5">
                <span className="text-gold">First Name</span>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your first name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>

              <label className="block mb-5">
                <span className="text-gold">Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Your last name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>

              <label className="block mb-5">
                <span className="text-gold">Full Name</span>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>

              <label className="block mb-5">
                <span className="text-gold">Birthdate</span>
                <input
                  name="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>

              <label className="block mb-5">
                <span className="text-gold">Gender</span>
                <select
                  name="gender"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Choose One</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <h2 className="text-2xl font-bold my-8 text-gold">
                School Information
              </h2>
              <label className="block mb-5">
                <span className="text-gold">School Name</span>
                <input
                  name="schoolName"
                  type="text"
                  placeholder="School name"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <label className="block mb-5">
                <span className="text-gold">School Address</span>
                <input
                  name="schoolAddress"
                  type="text"
                  placeholder="School address"
                  value={formData.schoolAddress}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
            </div>

            <div>
              <h2 className="text-2xl font-bold my-8 text-gold">
                Contact Information
              </h2>
              <label className="block mb-5">
                <span className="text-gold">Address Line 1</span>
                <input
                  name="addressLine1"
                  type="text"
                  placeholder="Address Line 1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <label className="block mb-5">
                <span className="text-gold">Address Line 2</span>
                <input
                  name="addressLine2"
                  type="text"
                  placeholder="Address Line 2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <label className="block mb-5">
                <span className="text-gold">Address Line 3 / City</span>
                <input
                  name="addressLine3City"
                  type="text"
                  placeholder="Address Line 3 / City"
                  value={formData.addressLine3City}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <label className="block mb-5">
                <span className="text-gold">Contact Number</span>
                <input
                  name="contactNumber"
                  type="text"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <label className="block mb-5">
                <span className="text-gold">Email</span>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>

              <h2 className="text-2xl font-bold my-8 text-gold">
                Proof Document Type
              </h2>
              <span className="text-gold">Choose proof document type</span>
              <select
                name="documentType"
                className="mt-1 block w-full rounded-md border border-gold shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                value={formData.documentType}
                onChange={handleInputChange}
              >
                <option value="" disabled>Choose One</option>
                <option value="nic">NIC</option>
                <option value="postal_id">Postal ID</option>
                <option value="passport">Passport</option>
                <option value="letter">Letter certified by school</option>
                <option value="birth_certificate">Birth Certificate</option>
              </select>

              <h2 className="text-2xl font-bold mt-8 mb-1 text-gold">
                Documents URL
              </h2>
              <div>
                <p className="text-sm text-gold">
                  Upload to Google Drive and make it viewable to anyone, then
                  copy the link.
                </p>
                <input
                  name="document"
                  type="url"
                  value={formData.document}
                  onChange={handleInputChange}
                  placeholder="Eg: https://drive.google.com/drive/u/0/home...."
                  className="mt-1 mb-5 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 border-2 font-horus text-lg border-gold rounded-md shadow-sm text-gold hover:text-gold bg-black hover:bg-drkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
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
