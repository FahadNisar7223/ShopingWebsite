import React from "react";
import axios from "axios";
import Header from "../../components/header";
import HomeMain from "../../components/homeMain";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import FooterMain from "../../components/footerMain";

const fetchCategories = () => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Failed to fetch categories");
    });
};

const HomeContainer = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error loading data: {error.message}</Box>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      m={0}
      width="100%"
      height="100vh"
    >
      <Box>
        <Header />
      </Box>
      <Box>
        <HomeMain categories={data} />
      </Box>
      <Box>
        <FooterMain />
      </Box>
    </Box>
  );
};

export default HomeContainer;
