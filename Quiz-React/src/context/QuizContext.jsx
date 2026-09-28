import React, { createContext, useReducer } from "react";

export const QuizContext = createContext();

const initialState = {
  score: 0,
  questions: [
    {
      text: "What is 2+2?",
      options: [
        { text: "3", isCorrect: false },
        { text: "4", isCorrect: true },
        { text: "5", isCorrect: false },
      ],
    },

     {
      text: "What is the capital of India?",
      options: [
        { text: "Delhi", isCorrect: true },
        { text: "Mumbai", isCorrect: false },
        { text: "Chennai", isCorrect: false },
        { text: "Kolkata", isCorrect: false },
      ],
    },

    {
      text: "Who is known as the Father of the Nation in India?",
      options: [
        { text: "Jawaharlal Nehru", isCorrect: false },
        { text: "Mahatma Gandhi", isCorrect: true },
        { text: "Sardar Patel", isCorrect: false },
        { text: "B. R. Ambedkar", isCorrect: false },
      ],
    },

    {
      text: "Which planet is known as the Red Planet?",
      options: [
        { text: "Earth", isCorrect: false },
        { text: "Venus", isCorrect: false },
        { text: "Mars", isCorrect: true },
        { text: "Jupiter", isCorrect: false },
      ],
    },

    {
      text: "What is the largest ocean in the world?",
      options: [
        { text: "Atlantic Ocean", isCorrect: false },
        { text: "Indian Ocean", isCorrect: false },
        { text: "Pacific Ocean", isCorrect: true },
        { text: "Arctic Ocean", isCorrect: false },
      ],
    },

    {
      text: "Who was the first Prime Minister of India?",
      options: [
        { text: "Mahatma Gandhi", isCorrect: false },
        { text: "Jawaharlal Nehru", isCorrect: true },
        { text: "Sardar Patel", isCorrect: false },
        { text: "Rajendra Prasad", isCorrect: false },
      ],
    },

    {
      text: "Which is the largest planet in our Solar System?",
      options: [
        { text: "Earth", isCorrect: false },
        { text: "Saturn", isCorrect: false },
        { text: "Jupiter", isCorrect: true },
        { text: "Neptune", isCorrect: false },
      ],
    },

    {
      text: "Which gas do humans need to breathe to survive?",
      options: [
        { text: "Carbon Dioxide", isCorrect: false },
        { text: "Nitrogen", isCorrect: false },
        { text: "Oxygen", isCorrect: true },
        { text: "Hydrogen", isCorrect: false },
      ],
    },

    {
  text: "Which is the smallest continent in the world?",
  options: [
    { text: "Europe", isCorrect: false },
    { text: "Australia", isCorrect: true },
    { text: "Antarctica", isCorrect: false },
    { text: "South America", isCorrect: false },
  ],
},

{
  text: "Which is the national animal of India?",
  options: [
    { text: "Lion", isCorrect: false },
    { text: "Elephant", isCorrect: false },
    { text: "Bengal Tiger", isCorrect: true },
    { text: "Leopard", isCorrect: false },
  ],
},

{
  text: "Which organ pumps blood throughout the human body?",
  options: [
    { text: "Brain", isCorrect: false },
    { text: "Lungs", isCorrect: false },
    { text: "Heart", isCorrect: true },
    { text: "Kidney", isCorrect: false },
  ],
},

{
  text: "Which country is famous for the Great Wall?",
  options: [
    { text: "India", isCorrect: false },
    { text: "Japan", isCorrect: false },
    { text: "China", isCorrect: true },
    { text: "South Korea", isCorrect: false },
  ],
},

    {
      text: "How many continents are there in the world?",
      options: [
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "7", isCorrect: true },
        { text: "8", isCorrect: false },
      ],
    },

    {
      text: "Which is the longest river in India?",
      options: [
        { text: "Yamuna", isCorrect: false },
        { text: "Ganga", isCorrect: true },
        { text: "Godavari", isCorrect: false },
        { text: "Narmada", isCorrect: false },
      ],
    },

    {
      text: "Who wrote the Indian national anthem?",
      options: [
        { text: "Rabindranath Tagore", isCorrect: true },
        { text: "Bankim Chandra Chattopadhyay", isCorrect: false },
        { text: "Sarojini Naidu", isCorrect: false },
        { text: "Subhash Chandra Bose", isCorrect: false },
      ],
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "ANSWER":
      return { ...state, score: state.score + (action.payload ? 1 : 0) };
    case "RESET":
      return { ...initialState, score: 0 };
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
