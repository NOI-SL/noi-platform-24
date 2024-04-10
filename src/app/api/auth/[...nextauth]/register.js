import { connectDB, closeDB } from "@/lib/db";
import User from "@/models/userModel";
import { userSchema } from "@/validations/userSchema";
import { generateRandomFileName } from "@/lib/utils";
import axios from "axios"; // Import Axios

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method Not Allowed" }).end();
  }

  try {
    const validatedData = req.body;

    const {
      email,
      firstName,
      lastName,
      fullName,
      birthdate,
      gender,
      schoolName,
      schoolAddress,
      addressLine1,
      addressLine2,
      addressLine3,
      contactNumber,
      documentType,
      document,
    } = validatedData;

    const remoteFilePath = document;

    await connectDB();

    const user = new User({
      email,
      name: {
        first: firstName,
        last: lastName,
        full: fullName,
      },
      birthdate,
      gender,
      school: {
        name: schoolName,
        address: schoolAddress,
      },
      address: {
        line1: addressLine1,
        line2: addressLine2,
        line3: addressLine3,
      },
      contactNumber,
      document: {
        type: documentType,
        path: remoteFilePath,
      },
      updated_at: new Date(),
      created_at: new Date(),
    });

    await user.save();

    // Use Axios to submit the form data to another endpoint
    const response = await axios.post("/api/auth/register", validatedData);

    res
      .status(201)
      .json({
        message: "User created successfully",
        data: user,
        registrationResponse: response.data,
      });
  } catch (error) {
    res
      .status(422)
      .json({ message: "Validation error", error: { message: error.errors } });
  } finally {
    await closeDB();
  }
}
