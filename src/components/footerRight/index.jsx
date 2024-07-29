import { Box, Typography } from "@mui/material";
import React from "react";

const FooterRight = () => {
  return (
    <Box
      width="30%"
      display="flex"
      flexDirection="column"
      gap={6}
      pr={5}
      color="white"
    >
      <Typography variant="h6">Contact Us</Typography>
      <Typography variant="p">
        70 Washington Square South, New York, NY 10012, United States
      </Typography>
      <Typography variant="p">Email: uilib.help@gmail.com</Typography>
      <Typography variant="p">Phone: +1 1123 456 780</Typography>
    </Box>
  );
};

export default FooterRight;
