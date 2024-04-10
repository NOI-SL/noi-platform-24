"use server";

import { MongoClient } from "mongodb";
import { FormikValues } from "formik";

// URI components
const username = encodeURIComponent("kaviru");
const password = encodeURIComponent("kaviru@BC1");
const cluster = "crud-app.jgjleuo.mongodb.net";
const dbName = "delegates"; // Database name
const authSource = "admin"; // Usually "admin", adjust if different
const authMechanism = "SCRAM-SHA-1"; // Or "SCRAM-SHA-256", based on your configuration

// Construct the MongoDB URI
let uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&authSource=${authSource}&authMechanism=${authMechanism}`;

const client = new MongoClient(uri);

async function getDbConnection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName); // Use the dbName variable
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

async function initializeDb() {
  const db = await getDbConnection();
  try {
    // Ensuring index for 'email' to avoid duplicate entries, adjust as needed for your requirements
    await db.collection("users").createIndex({ email: 1 }, { unique: true }); // Adjusted collection name to 'users'
    console.log("Database initialized");
  } catch (err: any) {
    console.error("Error initializing database:", err.message);
  }
}

async function checkDelegateExists(email: string): Promise<boolean> {
  const db = await getDbConnection();
  const delegate = await db.collection("users").findOne({ email }); // Adjusted collection name to 'workshop'
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

    const exists = await checkDelegateExists(email);
    if (exists) {
      console.log("Delegate already exists");
      return;
    }

    const newDelegate = {
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
      email,
      documentType,
      document,
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
