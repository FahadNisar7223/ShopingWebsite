import React from "react";
import summer from "../../assets/summer.png";
import { Box, Typography, List, ListItem, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Clear } from "@mui/icons-material";

const price = 106; 

const Cart = ({ data, onAdd, onRemove, handleDelete }) => {
  if (!data || data?.products?.length === 0) {
    return <Typography variant="h6">Your cart is empty</Typography>;
  }

  return (
    <Box padding={2} width="100%">
      <List>
        {data?.products?.map((product) => {
          const totalPrice = price * product.quantity;

          return (
            <ListItem sx={{ height: "200px" }} key={product.productId} divider>
              <Box
                pr={3}
                pb={2} pt={2}
                display="flex"
                flexDirection="row"
                width="100%"
                justifyContent="space-between"
              >
                <Box  display="flex" alignItems="center" gap={10}>
                  <img width="100px" height="100px" src={summer} alt="Product" />

                  <Box  display="flex" flexDirection="column" gap={7}>
                    <Box display='flex' flexDirection='column' gap={1}>
                      <Typography variant="h5">Product heading</Typography>
                      <Typography sx={{ color: '#D23F57' }}>${price}</Typography>
                      <Typography sx={{ color: '#D23F57'}}>Total ${totalPrice.toFixed(2)}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={3}>
                      <IconButton
                        onClick={() => onAdd(product.productId)}
                        size="small"
                        sx={{
                          border: "1px solid #D23F57",
                          borderRadius: "0",
                          color: "#D23F57",
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                      <Box fontWeight="bold">{product.quantity}</Box>
                      <IconButton
                        onClick={() => onRemove(product.productId)}
                        disabled={product.quantity === 1}
                        size="small"
                        sx={{
                          border: "1px solid #D23F57",
                          borderRadius: "0",
                          color: "#D23F57",
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    onClick={() => handleDelete(product.productId)}
                    sx={{ color: '#7D879C' }}
                  >
                    <Clear />
                  </IconButton>
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Cart;
