import * as yup from "yup";
const phoneRegExp = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;
const emailValidation = yup.string().email().required("Email is required");
const designationValidation = yup.string().required("Designation is required");
const addressValidation = yup.string().required("Billing Address is required");
const phoneValidation = yup
  .string()
  .required("phone is required")
  .max(11)
  .min(11)
  .matches(phoneRegExp, "Phone number is not valid");
const companyValidation = yup.string().required("Company Name is  required");
const billingPerson = yup.string().required("Billing Person Name is  required");
const fullName = yup.string().required("Full Name is  required");
const employee = yup.string().required("Minimum number is 0");
const industry = yup.string().required("Industry is required");
const departmentValidation = yup.string().required("Department is required");
// single chdeckbox
const checkbox = yup
  .boolean()
  .oneOf([true], "You must accept the terms and conditions");

// multiple checkbox
const checkboxes = yup
  .array()
  .nullable()
  .of(yup.string().required("Please select at least one checkbox"))
  .min(1, "Please select at least one checkbox");

export const userValidation = yup.object().shape({
  billing_person: billingPerson,
  company: companyValidation,
  phone: phoneValidation,
  email: emailValidation,
  address: addressValidation,
  checkbox: checkbox,
});

export const freeTrail = yup.object().shape({
  personname: fullName,
  companyname: companyValidation,
  phonenumber: phoneValidation,
  email: emailValidation,
  address: addressValidation,
  designation: designationValidation,
  employeenumber: employee,
  companytype: industry,
  trailproduct: checkboxes,
});
export const customize = yup.object().shape({
  person_name: fullName,
  company_name: companyValidation,
  phone: phoneValidation,
  person_email: emailValidation,
  billing_address: addressValidation,
  person_desg: designationValidation,
  no_emp: employee,
  industry_typ: industry,
  req_packages: checkboxes,
});
export const eventPay = yup.object().shape({
  name: fullName,
  // phone: phoneValidation,
  email: emailValidation,
  company_name: companyValidation,
  dept_name: departmentValidation,
  desg_name: designationValidation,
});
