import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import { Box, AppBar, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <Box width="100%">
      <AppBar position="static">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ background: "#2B3445" }}
          width="100%"
          height="40px"
        >
          <Box display="flex" alignItems="center" height="40px" pl={3}>
            <Box
              mr={1}
              p={0.5}
              pl={1.5}
              pr={1.5}
              dis
              textAlign="center"
              sx={{ background: "#D23F57" }}
              borderRadius="16px"
              maxHeight="24px"
              fontSize="0.8125rem"
              fontWeight="bold"
            >
              <span>HOT</span>
            </Box>
            <Typography fontSize={12}>Free Express Shipping</Typography>
          </Box>
          <Box pr={3} display="flex" flexDirection="row" gap={1}>
            <Twitter sx={{ color: "white" }} />
            <Facebook sx={{ color: "white" }} />
            <Instagram sx={{ color: "white" }} />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default TopBar;
