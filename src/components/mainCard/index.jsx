import { Box, Typography } from "@mui/material";
import React from "react";
import MuiButton from "../button";
import bag from "../../assets/bag.png";

const MainCard = () => {
  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "row", "row"]}
      alignItems="center"
      width="100%"
      minHeight="400px"
      sx={{ background: "#F6F9FC", color: "#2B3445" }}
    >
      <Box
        width={["100%", "100%", "50%", "50%"]}
        gap={2}
        display="flex"
        flexDirection="column"
        alignItems={["flex-start", "flex-start", "center", "center"]}
        pl={3}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Fashionable Collection
        </Typography>
        <Typography varient="p">
          Get Free Shipping at all orders over 99.00$
        </Typography>
        <MuiButton
          buttonText="Shop Now"
          backgroundColor="#2B3445"
          hoverEffect={{ backgroundColor: "#5D6677", color: "white" }}
        />
      </Box>
      <Box
        display="flex"
        alignItems={["flex-start", "flex-start", "center", "center"]}
        width={["100%", "100%", "50%", "50%"]}
      >
        <img height="400px" width={["320px"]} src={bag} alt="" />
      </Box>
    </Box>
  );
};

export default MainCard;
