import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/header";
import FooterMain from "../../components/footerMain";
import SignupForm from "../../components/signupForm";

const SignupContainer = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Header />
      </Box>
      <Box mb={4}>
        <SignupForm />
      </Box>
      <Box>
        <FooterMain />
      </Box>
    </Box>
  );
};

export default SignupContainer;
