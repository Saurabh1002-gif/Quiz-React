import React, { useContext, useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { QuizContext } from "../context/QuizContext";
import QuestionCard from "../components/QuestionCard";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const [currentQ, setCurrentQ] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentQ >= state.questions.length) {
      navigate("/result");
    }
  }, [currentQ, state.questions.length, navigate]);

  const handleNext = () => {
    setCurrentQ((prev) => prev + 1);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Question {currentQ + 1}/{state.questions.length}
      </Typography>

      <Timer
        initialSeconds={20}
        onTimeUp={handleNext}
        resetKey={currentQ}
      />

      {state.questions.length > 0 && currentQ < state.questions.length && (
        <QuestionCard
          question={state.questions[currentQ]}
          dispatch={dispatch}
          onNext={handleNext}
        />
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/result")}
        style={{ marginTop: "20px" }}
      >
        End Quiz
      </Button>
    </Container>
  );
}

export default Quiz;
