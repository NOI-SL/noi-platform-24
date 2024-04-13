"use server";


import { MongoClient } from "mongodb";
import { FormikValues } from "formik";

const username = encodeURIComponent("kaviru");
const password = encodeURIComponent("kaviru@BC1");
const cluster = "crud-app.jgjleuo.mongodb.net";
const dbName = "delegates";
const authSource = "admin";
const authMechanism = "SCRAM-SHA-1";

let uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri);

async function getDbConnection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

async function initializeDb() {
  const db = await getDbConnection();
  try {
    await db.collection("users").createIndex({ email: 1 }, { unique: true });
    console.log("Database initialized");
  } catch (err: any) {
    console.error("Error initializing database:", err.message);
  }
}
initializeDb();

async function checkDelegateExists(email: string): Promise<boolean> {
  const db = await getDbConnection();
  const delegate = await db.collection("users").findOne({ email });
  return !!delegate;
}

export async function createUser(formData: any) {
  console.log(formData);
  try {
    if (!formData.email) throw new Error("No Email provided");
    if (!formData.document) throw new Error("No Document Provided");

    const exists = await checkDelegateExists(formData.email);
    if (exists) {
      console.log("Delegate already exists");
      return;
    }

    const genderEnum = {
      MALE: "male",
      FEMALE: "female",
      OTHER: "other",
    };

    const newDelegate = {
      email: formData.email,
      name: {
        first: formData.firstName,
        last: formData.lastName,
        full: formData.fullName,
      },
      birthdate: formData.birthdate,
      gender: genderEnum,
      school: {
        name: formData.schoolName,
        address: formData.schoolAddress,
      },
      address: {
        line1: formData.addressLine1,
        line2: formData.addressLine2,
        line3: formData.addressLine3,
      },
      contactNumber: formData.contactNumber,
      document: {
        type: formData.documentType,
        path: formData.document,
      },
      updated_at: new Date(),
      created_at: new Date(),
    };

    console.log("Creating new delegate:", newDelegate);
    const db = await getDbConnection();
    const result = await db.collection("users").insertOne(newDelegate);

    console.log(`A delegate has been inserted with id: ${result.insertedId}`);

    return {
      message: "Registration successful",
    };
  } catch (err: any) {
    console.error("Error in createUser function:", err.message);
    throw err;
  }
}
initializeDb();
