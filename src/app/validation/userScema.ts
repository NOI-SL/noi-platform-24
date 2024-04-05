import * as z from "zod";
import { subYears } from "date-fns";

const maxFileSizeInMB = 2;

const maxFileSize = 1024 * 1024 * maxFileSizeInMB;

const acceptedImageMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
];

const acceptedImageTypes = ["jpeg", "jpg", "png", "pdf"];

const genders = ["male", "female", "other"];

const documentType = [
    "nic",
    "postal_id",
    "passport",
    "letter",
    "birth_certificate",
];

const userSchema = z.object({
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    fullName: z.string().min(1, "Full name is required"),
    /*birthdate: z.date({
      required_error: "Please select a date",
      invalid_type_error: "That's not a valid date!",
      max: new Date(),
      min: subYears(new Date(), 18),
    }),*/
    birthdate: z.string().min(1, "Birthday is required"),
    gender: z.enum(genders),
    schoolName: z.string().min(1, "School name is required"),
    schoolAddress: z.string().min(1, "School address is required"),
    addressLine1: z.string().min(1, "Address line 1 is required"),
    addressLine2: z.string().min(1, "Address line 2 is required"),
    addressLine3: z.string().min(1, "Address line 3 / city is required"),
    contactNumber: z
        .string()
        .min(1, "Contact number is required")
        .regex(new RegExp("^(07)([0-9]{8})$"), "Invalid Sri Lankan phone number"),
    documentType: z.enum(documentType),
    /*document: z
      .string()
      .refine((files) => {
        return files?.[0]?.size <= maxFileSize;
      }, `Max image size is ${maxFileSizeInMB}MB.`)
      .refine(
        (files) => acceptedImageMimeTypes.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png .pdf and formats are supported."
      ),*/
    document: z.string().url(),
});

export {
    userSchema,
    maxFileSizeInMB,
    maxFileSize,
    acceptedImageMimeTypes,
    acceptedImageTypes,
    genders,
    documentType,
};