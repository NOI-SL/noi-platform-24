import * as yup from "yup";

const userSchema = yup.object().shape({
  firstName: yup.string("Please Enter First Name").required("Required"),
  lastName: yup.string("Please Enter Last Name").required("Required"),
  fullName: yup.string("Please Enter Full Name").required("Required"),
  birthdate: yup.string("Please Enter Your Birthdate").required("Required"),
  gender: yup
    .string("Please Select Your Gender")
    .required("Required")
    .oneOf(["male", "female", "other"]),
  schoolName: yup.string("Please Enter Your School Name").required("Required"),
  schoolAddress: yup
    .string("Please Enter Your School Address")
    .required("Required"),
  addressLine1: yup
    .string("Please Enter Your Address Line 01")
    .required("Required"),
  addressLine2: yup
    .string("Please Enter Your Address Line 02")
    .required("Required"),
  addressLine3: yup
    .string("Please Enter Your Address Line 03")
    .required("Required"),
  contactNumber: yup
    .string("Please Enter Your Contact Number")
    .required("Required"),
  email: yup
    .string("Please Enter your Email")
    .email("Please Enter A Valid Email")
    .required("Required"),
  documentType: yup
    .string("Please Select Document Type")
    .required("Required")
    .oneOf(["nic", "postal_id", "passport", "letter", "birth_certificate"]),
  document: yup
    .mixed()
    .test("fileType", "Only PDF files are accepted", (value) => {
      if (!value || !value.name) return true;
      const extension = value.name.split(".").pop().toLowerCase();
      return extension === "pdf";
    })
    .required("Please upload a PDF document"),
});
export default userSchema;
