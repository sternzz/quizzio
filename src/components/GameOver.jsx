import Link from "next/link";
import React from "react";

const GameOver = ({ correctCount , questionLength }) => {
  return (
    <>
      <div className="absolute left-0 top-0 w-full h-full bg grid place-content-center">
        <p className="my-4">Quizzio</p>
        <h1 className="text-xl lg:text-2xl font-medium">
          You got {correctCount} of {questionLength} questions correct
        </h1>
        <Link
          href={"/"}
          className="btn mx-auto rounded my-8 p-2 px-8 bg-yellow-600  text-white w-max "
        >
          Play Again
        </Link>
      </div>
    </>
  );
};

export default GameOver;
