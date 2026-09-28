import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Option from "./Option";

function QuestionCard({ question, dispatch, onNext }) {
  const handleAnswer = (isCorrect) => {
    dispatch({ type: "ANSWER", payload: isCorrect });
    onNext();
  };

  return (
    <Card style={{ marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question.text}
        </Typography>
        {question.options.map((opt, index) => (
          <Option
            key={index}
            text={opt.text}
            onClick={() => handleAnswer(opt.isCorrect)}
          />
        ))}
        <Button
          variant="outlined"
          color="secondary"
          onClick={onNext}
          style={{ marginTop: "15px" }}
        >
          Skip
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuestionCard;
