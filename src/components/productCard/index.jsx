import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import MuiButton from "../button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import review from "../../assets/review.png";

const fetchProducts = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Failed to fetch products");
    });
};

const ProductCard = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error loading data: {error.message}</Box>;

  return (
    <Box width="100%" display="flex" gap={2} flexDirection="row">
      {data.slice(0, 3).map((product) => (
        <Box width="100%" key={product.id}>
          <Card
            sx={{
              backgroundImage: `url(${product.image})`,
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
            >
              <MuiButton
                buttonText="Quick View"
                backgroundColor="#2B3445"
                hoverEffect={{ backgroundColor: "#5D6677", color: "white" }}
                onClick={() => handleProductClick(product.id)}
                width="100%"
                height="50px"
              />
            </CardContent>
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
              {product.category}
            </Typography>
            <Typography>{product.title}</Typography>
            <Typography>${product.price}</Typography>
            <img src={review} alt="" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProductCard;
