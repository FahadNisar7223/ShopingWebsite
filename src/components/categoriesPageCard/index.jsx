import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import review from "../../assets/review.png";

const fetchCategory = (buttonText) => {
  return axios
    .get(`https://fakestoreapi.com/products/category/${buttonText}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Failed to fetch products");
    });
};

const CategoriesPageCard = () => {
  const { buttonText } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["categories", buttonText],
    queryFn: () => fetchCategory(buttonText),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error loading data: {error.message}</Box>;

  return (
    <Box width="100%" display="flex" gap={2} flexDirection="row">
      {data.map((category) => (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          key={category.id}
        >
          <Card
            sx={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: 370,
              width: "100%",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 1,
                "&:last-child": {
                  paddingBottom: 1,
                },
              }}
            ></CardContent>
          </Card>
          <Box
            mt={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            color="#2B3445"
            gap={1}
          >
            <Typography sx={{ color: "#AEB4BE" }}>
              {category.category}
            </Typography>
            <Typography>{category.title}</Typography>
            <Typography>${category.price}</Typography>
            <img src={review} alt="" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CategoriesPageCard;
