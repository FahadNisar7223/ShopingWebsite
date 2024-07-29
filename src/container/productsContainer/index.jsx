import { Box } from "@mui/material";
import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import FooterMain from "../../components/footerMain";
import ProductDetail from "../../components/productDetail";

const fetchProductDetail = (productId) => {
  return axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Failed to fetch product");
    });
};

const ProductsContainer = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { productId } = useParams();

  const mutation = useMutation({
    mutationFn: (order) => {
      return axios.post("https://fakestoreapi.com/carts", order);
    },
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => fetchProductDetail(productId),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error loading data: {error.message}</Box>;
  if (!data) return <Box>No data available</Box>;
  const handleAddToCart = (newItem) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      createPayload(updatedItems);
      return updatedItems;
    });
    setIsItemAdded(true);
  };

  const createPayload = (productsData) => {
    const payload = {
      userId,
      date,
      products: productsData?.map((product) => ({
        productId: product.id,
        quantity: 1,
      })),
    };

    mutation.mutate(payload);
  };
  const userId = 5;
  const date = "2020-02-03";

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
        <ProductDetail
          data={data}
          items={items}
          setItems={setItems}
          handleAddToCart={handleAddToCart}
          isItemAdded={isItemAdded}
          productId={productId}
          mutation={mutation}
        />
      </Box>
      <Box>
        <FooterMain />
      </Box>
    </Box>
  );
};

export default ProductsContainer;
