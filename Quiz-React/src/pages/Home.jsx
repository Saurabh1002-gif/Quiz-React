import React, { useContext } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function Home() {
  const { dispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const startQuiz = () => {
    dispatch({ type: "RESET" });
    navigate("/quiz");
  };

  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <Typography variant="h3" gutterBottom >
        Welcome to the Quiz App 🎉
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={startQuiz}
      >
        Start Quiz
      </Button>
    </Container>
  );
}

export default Home;
