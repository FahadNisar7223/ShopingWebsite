import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import React from "react";

const FooterLinks = ({ sections }) => {
  return (
    <Box display="flex" color="white">
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{ width: "auto", margin: 2 }}
          display="flex"
          flexDirection="column"
        >
          <Typography sx={{ marginLeft: "10px" }} variant="h6">
            {section.heading}
          </Typography>
          <List>
            {section.links.map((link, linkIndex) => (
              <ListItem key={linkIndex} component="a" href={link.url} button>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default FooterLinks;
