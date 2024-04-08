import { connectDB, closeDB } from "@/lib/db";
import { closeFTP, connectFTP, ftpClient } from "@/lib/ftp";
import User from "@/models/userModel";
import fs from "fs";
import { userSchema } from "@/validations/userSchema";
import formidable from "formidable";
import { generateRandomFileName } from "@/lib/utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method Not Allowed" }).end();
  }

  try {
    /*
    // This is for file upload using ftp
    const fields = await req.formData();
    const validatedData = userSchema.parse(fields);
    */
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

    /*
    // This is for file upload using ftp
    await connectFTP();

    const fileData = fs.readFileSync(document);
    const fileName = path.basename(document);
    const remoteFileName = generateRandomFileName(fileName);
    const remoteFilePath = `user_documents/${remoteFileName}`;

    await ftpClient.uploadFrom(fileData, remoteFilePath);
    */

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

    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    res
      .status(422)
      .json({ message: "Validation error", error: { message: error.errors } });
  } finally {
    // await closeFTP();
    await closeDB();
  }
}