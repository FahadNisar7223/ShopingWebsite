import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import summer from "../../assets/summer.png";
import MuiButton from "../button";

const SeasonCard = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          position: "relative",
          color: "white",
          height: 400,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <img
          src={summer}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
            zIndex: 2,
          }}
        />
        <CardContent
          sx={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Extra 30% Off Online
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="h3" gutterBottom>
            Summer Season sale
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body" gutterBottom>
            Free Shipping on Order's over 99$
          </Typography>
          <Box mt={5}>
            <MuiButton
              buttonText="Shop Now"
              backgroundColor="#2B3445"
              hoverEffect={{ backgroundColor: "#5D6677", color: "white" }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SeasonCard;
