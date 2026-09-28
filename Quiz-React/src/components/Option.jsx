import React from "react";
import { Button } from "@mui/material";

function Option({ text, onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      style={{ marginTop: "10px" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default Option;
