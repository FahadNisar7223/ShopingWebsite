import * as React from "react";
import Button from "@mui/material/Button";

function MuiButton(props) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: props.backgroundColor,
          width: props.width,
          height: props.height,
          color: props.color,
          "&:hover": props.hoverEffect,
        }}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.buttonText}
      </Button>
    </>
  );
}
export default MuiButton;
