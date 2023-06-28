"use client";

import Game from "@/components/Game";
import React from "react";

const fetchQuestions = async (category, amount) => {
  try {
    const request = await fetch(`/api?cat=${category}&amount=${amount}`, {
      cache: "no-store",
    });
    return await request.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ searchParams }) => {
  const { category, questions: amount } = searchParams;
  const questions = await fetchQuestions(category, amount);
  return <>{questions ? <Game data={questions} /> : "Loading..."}</>;
};

export default page;
