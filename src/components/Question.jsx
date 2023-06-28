"use client";
import React, { useEffect, useState } from "react";

const Question = ({
  question,
  questionIndex,
  totalQuestions,
  verifyAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    return () => {
      setSelectedOption(null);
    };
  }, [question]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTimeout(() => {
      verifyAnswer(option);
      setSelectedOption(null);
    }, 1000);
  };

  const checkOption = (option) => {
    if (selectedOption === option) {
      return option === question?.answer ? "correct" : "incorrect";
    }
    return "";
  };

  const highlightCorrect = (option) => {
    if (selectedOption) {
      return question?.answer !== option ? "" : "correct";
    }
    return;
  };

  return (
    <>
      <section className="w-full m-6 ">
        <h1 className="text-xl font-regular ">
          Question {questionIndex + 1} / {totalQuestions}
        </h1>
        <h1 className="text-xl my-2 bg-gray-700/50 p-4 py-8 rounded-md ">
          {question?.question}
        </h1>
      </section>

      <section id="options" className="grid grid-cols-1 gap-4 w-full mt-6">
        {question?.options?.map((option, index) => {
          return (
            <button
              disabled={selectedOption}
              key={`${option + index}`}
              onClick={() => handleOptionClick(option)}
              className={` ${checkOption(option)} ${highlightCorrect(
                option
              )} btn text-black bg-white text-md font-medium w-full p-4 rounded-lg  shadow-lg border-2 border-black  flex  items-center gap-4  `}
            >
              <div className="h-10 w-10 grid place-content-center text-xs font-bold text-white   bg-gray-700 rounded-full">
                {index + 1}
              </div>
              {option}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Question;
