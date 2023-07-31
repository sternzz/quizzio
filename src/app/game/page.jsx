"use client"

import Game from "@/components/Game";
import React, { useEffect, useState } from "react";


const Page = ({ searchParams }) => {
  const { category, questions: amount } = searchParams;
  const [questions, setQuestions] = useState();

  useEffect(()=> {
    const fetchQuestions = async (category, amount) => {
      try {
        const request = await fetch(`/api?cat=${category}&amount=${amount}`, {
          cache: "no-store",
        });
        const data = await request.json();
        setQuestions(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions(category, amount)
  }, [])

  return <>{questions ? <Game data={questions} /> : null}</>;
};

export default Page;
