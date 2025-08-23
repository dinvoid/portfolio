"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="flex justify-between w-full max-w-3xl">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={() => router.push("/developer")}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go to Developer Mode
        </button>
        
      </header>

      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h2 className="text-2xl font-bold">Welcome to My Portfolio</h2>
        <p className="text-lg">
          Explore my projects, skills, and contact information below.
        </p>
      </main>

      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <p className="text-sm">© 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}