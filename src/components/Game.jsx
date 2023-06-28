"use client";

import Question from "@/components/Question";
import React, { useEffect, useState } from "react";
import GameOver from "./GameOver";

const Game = ({ data }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[0]);
      setCurrentQuestionIndex(0);
    }
  }, [questions]);

  useEffect(() => {
    setQuestions(data);
    return () => {
      setCurrentQuestionIndex(null);
      setQuestions([]);
    };
  }, []);

  const setNextQuestion = () => {
    if (currentQuestionIndex + 1 >= questions?.length) {
      setGameOver(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
    }
  };

  const verifyAnswer = (option) => {
    if (option === currentQuestion.answer) {
      setNextQuestion();
      setCorrectCount((prev) => prev + 1);
    } else {
      setNextQuestion();
      console.log("Incorrect");
    }
  };

  return (
    <main className="flex min-h-screen max-w-2xl mx-auto flex-col items-center justify-start p-4 text-white ">
      {gameOver ? (
        <GameOver questionLength={questions?.length} correctCount={correctCount} />
      ) : (
        <Question
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          verifyAnswer={verifyAnswer}
        />
      )}
    </main>
  );
};

export default Game;
