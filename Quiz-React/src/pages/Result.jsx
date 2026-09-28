import React, { useContext } from "react";
import { Container, Typography, Button } from "@mui/material";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

function Result() {
  const { state } = useContext(QuizContext);
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <Typography variant="h3" gutterBottom>
        Quiz Finished 🎉
      </Typography>

      <Typography variant="h5" gutterBottom>
        Your Score: {state.score} / {state.questions.length}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        style={{ marginTop: "20px" }}
      >
        Try Again
      </Button>
    </Container>
  );
}

export default Result;
