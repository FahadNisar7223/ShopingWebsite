import React from "react";
import { Box, Typography } from "@mui/material";
import {
  AirportShuttleOutlined,
  SavingsOutlined,
  ScheduleOutlined,
  CreditCardOutlined,
} from "@mui/icons-material";

const MuiQuickFeature = ({ icon: Icon, title, description }) => {
  return (
    <Box pr={4} gap={1} mt={3} display="flex" borderRight="1px solid #7D879C">
      <Icon sx={{ height: "50px", width: "50px" }} />
      <Box display="flex" flexDirection="column">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="p">{description}</Typography>
      </Box>
    </Box>
  );
};

const QuickFeature = () => {
  const quickFeaturesData = [
    {
      icon: AirportShuttleOutlined,
      title: "Fast Delivery",
      description: "Start from $10",
    },
    {
      icon: SavingsOutlined,
      title: "Money Gaurantee",
      description: "7 Days Back",
    },
    {
      icon: ScheduleOutlined,
      title: "365 Days",
      description: "For free return",
    },
    {
      icon: CreditCardOutlined,
      title: "payment",
      description: "Secure System",
    },
  ];

  return (
    <Box
      pl={6}
      pr={6}
      gap={1}
      display="flex"
      flexDirection={["column", "column", "row", "row"]}
      justifyContent="space-between"
      color="#2B3445"
    >
      {quickFeaturesData.map((feature, index) => (
        <MuiQuickFeature key={index} {...feature} />
      ))}
    </Box>
  );
};

export default QuickFeature;
