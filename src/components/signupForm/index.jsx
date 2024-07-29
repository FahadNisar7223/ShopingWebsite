import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";

const SignupForm = () => {
  const initialValues = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography color="#2B3445" variant="h4" component="h1" gutterBottom>
        Signup
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box minWidth="400px" mb={2}>
              <Field
                as={TextField}
                fullWidth
                id="name"
                name="name"
                label="Name"
                helperText={
                  <ErrorMessage
                    name="name"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2B3445",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#2B3445",
                    opacity: 0.7,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                id="address"
                name="address"
                label="Address"
                helperText={
                  <ErrorMessage
                    name="address"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2B3445",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#2B3445",
                    opacity: 0.7,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                id="phone"
                name="phone"
                label="Phone Number"
                helperText={
                  <ErrorMessage
                    name="phone"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2B3445",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#2B3445",
                    opacity: 0.7,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                id="email"
                name="email"
                label="Email"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2B3445",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#2B3445",
                    opacity: 0.7,
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2B3445",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2B3445",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#2B3445",
                    opacity: 0.7,
                  },
                }}
              />
            </Box>
            <Button
              sx={{
                background: "#2B3445",
                height: "50px",
                "&:hover": {
                  background: "#5D6677",
                },
              }}
              variant="contained"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Signup
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignupForm;
