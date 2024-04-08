import { mongoose } from "mongoose";

const connectDB = async () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const cluster = process.env.DB_CLUSTER;
  const database = process.env.DB_NAME;
  const authSource = process.env.DB_AUTH_SOURCE;
  const authMechanism = process.env.DB_AUTH_MECHANISM;

  const encodedUsername = encodeURIComponent(username);
  const encodedPassword = encodeURIComponent(password);

  const connectionString = `mongodb+srv://${encodedUsername}:${encodedPassword}@${cluster}/${database}?retryWrites=true&w=majority&authSource=${authSource}&authMechanism=${authMechanism}`;

  await mongoose.connect(connectionString, {
    w: "majority",
  });
};

const closeDB = async () => {
  await mongoose.disconnect();
};

export { connectDB, closeDB, mongoose };