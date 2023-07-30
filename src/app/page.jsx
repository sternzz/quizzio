"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [amount, setAmount] = useState(5);
  const [category, setCategory] = useState("general");

  const handleCategory = (e) => {
    setCategory(e.target.value);   
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/game?category=${category}&questions=${amount}`);
  };

  return (
    <main className="flex min-h-screen max-w-2xl mx-auto flex-col items-center justify-start p-4 text-white">
      <section className="w-full mt-24">
        <h1 className="text-xl font-regular">Quizzio</h1>
        <h1 className="text-2xl font-semibold my-2">The Quiz Game</h1>
      </section>

      <section id="options" className=" w-full mt-12">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="categories"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a Category
            </label>
            <select
              defaultValue={category}
              onChange={handleCategory}
              className="border outline-none text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 text-black border-gray-600 placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={""}>Choose a Category</option>
              <option value="animals">Animals</option>
              <option value="general">General</option>
              <option value="video_games">Video Games</option>
            </select >
          </div>

          <div className="">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number of questions - (5-10)
            </label>
            <select
              onChange={handleAmount}
              id="countries"
              defaultValue={amount}
              className=" border outline-none  text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 text-black border-gray-600 placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option >Number of questions</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          <section className="grid grid-cols-2 my-8 gap-4 font-regular text-sm text-white text-opacity-80 ">
            <button
              disabled
              className="bg-gray-700 p-2.5 rounded capitalize border-gray-600 border "
            >
              {category ? category : "No category selected"}
            </button>
            <button
              disabled
              className=" bg-gray-700 p-2.5 rounded border-gray-600 border"
            >
              {amount} Questions
            </button>
          </section>

          <button className="btn bg-white  text-md font-regular w-full p-2.5 rounded-lg text-black  ">
            Start Game
          </button>
        </form>
      </section>
    </main>
  );
}
