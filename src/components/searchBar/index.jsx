import { Search } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box
      pl={2}
      pr={2}
      height="45px"
      display={["none", "none", "flex", "flex"]}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ background: "#F3F5F9", color: "#7D879C" }}
      width="100%"
    >
      <Box display="flex" alignItems="center">
        <Search
          sx={{ borderRight: "1px solid #7D879C", paddingRight: "20px" }}
        />

        <TextField
          margin="none"
          size="small"
          placeholder="Searching for.."
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
            input: {
              color: "#7D879C",
            },
          }}
        ></TextField>
      </Box>
      <Typography
        sx={{
          color: "#4B566B",
          borderLeft: "1px solid #7D879C",
          paddingLeft: "20px",
        }}
      >
        All Categories
      </Typography>
    </Box>
  );
};

export default SearchBar;
