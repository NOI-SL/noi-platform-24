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

async function checkDelegateExists(email: string): Promise<boolean> {
  const db = await getDbConnection();
  const delegate = await db.collection("users").findOne({ email });
  return !!delegate;
}

export async function createUser(formData: FormikValues) {
  try {
    const {
      email,
      firstName,
      lastName,
      fullName,
      birthdate,
      schoolName,
      schoolAddress,
      addressLine1,
      addressLine2,
      addressLine3,
      contactNumber,
      documentType,
      document,
    } = formData;

    if (!email) throw new Error("No Email provided");
    if (!document) throw new Error("No Document Provided");

    const docFile = getURLAndStore(document,email);

    const exists = await checkDelegateExists(email);
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
      email,
      name: {
        first: firstName,
        last: lastName,
        full: fullName,
      },
      birthdate,
      gender:genderEnum,
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
        path: docFile,
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
