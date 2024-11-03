import * as yup from "yup";

export const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .required("User name is required")
    .min(4, "User Name Is Too Short (Min : 4)")
    .max(20, "User Name Is Too Long (Min : 20)"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup
    .string()
    .required()
    .min(6, "Password must be at least 6 characters"),
});
