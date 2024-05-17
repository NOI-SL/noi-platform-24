import * as yup from "yup";

const today = new Date();

const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  fullName: yup.string().required("Required"),
  birthdate: yup
    .date()
    .max(today, "Please Enter your Birthdate correctly")
    .test("age", "Age must be less than 20 years", function (value) {
      const age = today.getFullYear() - value.getFullYear();
      return age <= 20;
    })
    .required("Required"),
  gender: yup
    .string()
    .required("Required")
    .oneOf(["male", "female", "other"], "Please Select Your Gender"),
  hackerrank: yup.string().required("Required"),
  schoolName: yup.string().required("Required"),
  schoolAddress: yup.string().required("Required"),
  addressLine1: yup.string().required("Required"),
  addressLine2: yup.string(),
  addressLine3: yup.string().required("Required"),
  contactNumber: yup
    .string()
    .matches(/^[0-9]{10}$|^(\+94)[0-9]{9}$/, "Invalid phone number")
    .required("Required"),
  email: yup.string().email("Please Enter A Valid Email").required("Required"),
  documentType: yup
    .string()
    .required("Required")
    .oneOf(["nic", "postal_id", "passport", "letter", "birth_certificate"]),
});

export default userSchema;
