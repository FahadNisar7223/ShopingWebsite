import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import FooterMain from "../../components/footerMain";
import CategoriesPageCard from "../../components/categoriesPageCard";

const CategoriesContainer = () => {
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
      <Box mt={4} mb={4}>
        <CategoriesPageCard />
      </Box>
      <Box>
        <FooterMain />
      </Box>
    </Box>
  );
};

export default CategoriesContainer;
