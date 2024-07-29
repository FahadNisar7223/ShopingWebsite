import { Box } from "@mui/material";
import React from "react";
import FooterLeft from "../footerLeft";
import FooterLinks from "../footerLinks";
import FooterRight from "../footerRight";

const FooterMain = () => {
  const footerData = [
    {
      heading: "About Us",
      links: [
        { text: "Careers", url: "/careers" },
        { text: "Our Stores", url: "/ourStores" },
        { text: "Terms & Conditions", url: "/terms" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    },
    {
      heading: "Support",
      links: [
        { text: "Help Center", url: "/help" },
        { text: "FAQs", url: "/faqs" },
        { text: "Returns & Refunds", url: "/returns" },
      ],
    },
  ];

  return (
    <Box
      display="flex"
      pt={5}
      pr={5}
      pl={5}
      justifyContent="space-between"
      flexDirection="row"
      height="400px"
      sx={{ background: "#222935" }}
    >
      <FooterLeft />
      <FooterLinks sections={footerData} />
      <FooterRight />
    </Box>
  );
};

export default FooterMain;
