import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <main className="flex min-h-screen items-center flex-col justify-center p-4 text-white ">
      <Image src={"/quizzio.png"} height={150} width={150} alt="quizzio" className=" w-auto h-auto animate-pulse my-4 " />
      <h1 className="text-xl">Just a moment</h1>
      <h1 className="text-2xl">Setting up the game...</h1>
    </main>
  );
};

export default Loading;
