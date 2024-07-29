import { Box } from "@mui/material";
import React from "react";
import TopBar from "../topBar";
import MuiAppbar from "../muiAppbar";

const Header = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <TopBar />
      </Box>
      <Box>
        <MuiAppbar />
      </Box>
    </Box>
  );
};

export default Header;
