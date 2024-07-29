import React from "react";
import { Box, Typography } from "@mui/material"

import MuiButton from "../button"



const ProductDetail = ({ data, handleAddToCart,isItemAdded,productId, mutation}) => {
  
  const cart = JSON.parse(localStorage.getItem("cart")|| "[]")||[]

 
  
  const isCartAdded = cart?.find((item)=>item?.id === +productId);

 
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
      mb={7}
      mt={7}
    >
      <Box key={data?.id} display='flex' flexDirection='row' alignItems='flex-start' gap={13} >
        <img height='400px' width='400px' src={data?.image} alt={data.title}  />
        <Box display='flex' gap={5} flexDirection='column'>
        <Box mb={2}>
          <Typography sx={{fontWeight:'bold'}} variant="h5" component="div">
            {data?.title}
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="p" color="text.secondary">
            Category: {data?.category}
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column'  gap={1}  mb={2}>
          
          <Typography variant="p" sx={{fontWeight:'bold'}}> Description </Typography> 
          <Typography variant="body1" >
           {data?.description}
          </Typography>
        </Box>
        <Box>
          <Typography variant="p" color="text.secondary">
            ${data?.price}
          </Typography>
        </Box>
        <Box>
          <MuiButton
            buttonText="Add to Cart"
            backgroundColor="#2B3445"
            hoverEffect={{ backgroundColor: "#5D6677", color: "white" }}
            disabled={isItemAdded||isCartAdded}
            onClick={()=>{
              handleAddToCart(data)    
            }}
          />
           {mutation?.isError && <p>Error: {mutation.error.message}</p>}
           {/* {cartData && <p>Order submitted successfully: {JSON.stringify(cartData)}</p>} */}
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
