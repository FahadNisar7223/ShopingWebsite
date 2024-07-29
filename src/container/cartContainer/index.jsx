import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import Cart from "../../Pages/cart";
import FooterMain from "../../components/footerMain";

const fetchCartDetails = async (userId) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/carts/user/${userId}`
    );
    return response.data[0];
  } catch (error) {
    throw new Error("Failed to fetch cart details");
  }
};

const CartContainer = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["cartDetails", userId],
    queryFn: () => fetchCartDetails(userId),
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: !!userId,
    onSuccess: (data) => setCart(data),
  });

  const [cart, setCart] = useState(data || []);

  const mutation = useMutation({
    mutationFn: (cart) => {
      return axios.put(`https://fakestoreapi.com/carts/${cart?.id}`, cart);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (data) => {
      return axios.delete(`https://fakestoreapi.com/carts/${data?.id}`);
    },
  });

  useEffect(() => {
    if (data) {
      setCart(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching cart details: {error.message}</div>;

  const handleAdd = (productId) => {
    const updatedProducts = cart?.products?.map((product) =>
      product?.productId === productId
        ? { ...product, quantity: product?.quantity + 1 }
        : product
    );
    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);
    mutation.mutate(updatedCart);
  };

  const handleRemove = (productId) => {
    const updatedProducts = cart.products.map((product) =>
      product.productId === productId
        ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
        : product
    );
    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);

    mutation.mutate(updatedCart);
  };

  const handleDelete = (productId) => {
    const updatedProducts = cart.products.filter(
      (product) => product.productId !== productId
    );

    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);

    deleteMutation.mutate(updatedCart);
  };
  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      <Header />
      <Cart
        data={cart}
        onAdd={handleAdd}
        onRemove={handleRemove}
        handleDelete={handleDelete}
      />
      <FooterMain />
    </Box>
  );
};

export default CartContainer;
