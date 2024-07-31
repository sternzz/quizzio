"use client";

import Game from "@/components/Game";
import Loading from "@/components/Loading";
import React, { useEffect, useState } from "react";

const Page = ({ searchParams }) => {
  const { category, questions: amount } = searchParams;
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchQuestions = async (category, amount) => {
      try {
        console.log("Data fetching started");
        const request = await fetch(`/api?cat=${category}&amount=${amount}`, {
          cache: "no-store",
        });
        const data = await request.json();
        setQuestions(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions(category, amount);
  }, []);

  return questions && questions?.length > 1 ? (
    <Game data={questions} />
  ) : (
    <Loading />
  );
};

export default Page;
