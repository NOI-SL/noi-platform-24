import mongoose from "mongoose";

const gender = {
  values: ["male", "female", "other"],
  message: "gender validator failed for path `{PATH}` with value `{VALUE}`",
};

const documentType = {
  values: ["nic", "postal_id", "passport", "letter", "birth_certificate"],
  message:
    "documentType validator failed for path `{PATH}` with value `{VALUE}`",
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true /* , unique: true  */ },
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
    full: { type: String, required: true },
  },
  birthdate: { type: Date, required: true },
  gender: { type: String, enum: gender, required: true },
  hackerrank: { type: String, required: true },
  school: {
    name: { type: String, required: true },
    address: { type: String, required: true },
  },
  address: {
    line1: { type: String, required: true },
    line2: { type: String, required: true },
    line3: { type: String, required: true },
  },
  contactNumber: { type: String, required: true },
  document: {
    type: { type: String, enum: documentType, required: true },
    path: { type: String, required: true },
  },
  updated_at: { type: Date, required: true },
  created_at: { type: Date, required: true },
});

// Middleware to update 'updated_at' field before saving the document
userSchema.pre("save", function (next) {
  const currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

// Middleware to update 'updated_at' field before updating the document
userSchema.pre("findOneAndUpdate", function (next) {
  this._update.updated_at = new Date();
  next();
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;