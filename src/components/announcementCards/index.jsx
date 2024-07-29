import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AnnoucementCards = ({
  imageUrlAnnouncement,
  heading,
  paragraph1,
  paragraph2,
}) => {
  return (
    <>
      <Card
        sx={{
          backgroundImage: `url(${imageUrlAnnouncement})`,
          backgroundSize: "cover",
          height: 370,
          width: "100%",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            padding: 2,
            color: "white",
            maxWidth: 300,
            gap: 0.5,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h4" component="h2">
            {heading}
          </Typography>
          <Typography variant="body1" paragraph>
            {paragraph1}
          </Typography>
          <Typography variant="body1" paragraph>
            {paragraph2}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AnnoucementCards;
