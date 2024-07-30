import { Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material";
import bazarLogo from "../../assets/bazarLogo.png";
import SearchBar from "../searchBar";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const MuiAppbar = () => {
  const navigate = useNavigate();

  const handlePersonClick = () => {
    navigate("/signup");
  };
  const userId = 1;
  const handleShoppingBagClick = () => {
    navigate(`/cart/${userId}`);
  };
  const cartItemCount = JSON.parse(localStorage.getItem("cart"))?.length;
  return (
    <>
      <AppBar
        position="relative"
        sx={{ background: "white", boxShadow: "none", height: "80px" }}
      >
        <Box
          mb={2}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyItems="center"
          justifyContent="space-between"
          pl={3}
          pr={3}
          mt={2}
        >
          <Box alignSelf="center">
            <img height={"60px"} src={bazarLogo} alt="" />
          </Box>
          <Box width="50%">
            <SearchBar />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            gap={2}
            color="#7D879C"
          >
            <Box>
              <IconButton onClick={handlePersonClick}>
                <Person2Outlined sx={{ height: "30px", width: "30px" }} />
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center" position="relative">
              <IconButton onClick={handleShoppingBagClick}>
                <ShoppingBagOutlined />
              </IconButton>
              <Typography
                sx={{
                  background: "#D23F57",
                  color: "white",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                }}
              >
                {cartItemCount}
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default MuiAppbar;
