import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import MuiButton from "../button";
import { useNavigate } from "react-router-dom";

const CategoriesCard = ({ imageUrl, buttonText }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/categories/${buttonText}`);
  };

  return (
    <Box width="25%">
      <Card
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize:'cover',
          backgroundRepeat: "no-repeat",
          height: 370,
          width: "100%",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 1,
            "&:last-child": {
              paddingBottom: 1,
            },
          }}
        >
          <MuiButton
            buttonText={buttonText}
            backgroundColor="#2B3445"
            hoverEffect={{ backgroundColor: "#5D6677", color: "white" }}
            onClick={handleCategoryClick}
            width="100%"
            height="50px"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CategoriesCard;
