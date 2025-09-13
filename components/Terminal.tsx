"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ContactLinks from "./ContactLinks";
import ProjectsPage from "@/components/Project";
import Skills from "./Skills";
import ServicesPage from "./Service";
import AboutPage from "./AboutPage";
import QuotesPage from "./QuotesPage";
import ExperiencesPage from "./Experiences";
import FloatingExitButton from "./FloatingButton";

export default function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState<React.ReactNode[]>([
    "Welcome to PORTFOLIO. Type 'help' to begin your journey.",
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (command: string) => {
    let output: React.ReactNode[] = [];

    switch (command.toLowerCase()) {
      case "help":
        output = [
          "Supported commands:",
          "* whoami     → Learn about Din",
          "* projects   → Explore works",
          "* skills     → Skills / Tech Stack",
          "* services   → Services I offer",
          "* qoutes     → Get a random harsh quote",
          "* expi       → Work history and achievements",
          "* contact    → Reach beyond / Hire me",
          "* clear      → Clear the console",
          "* exit       → Leave Developer Mode",
        ];
        break;
      case "whoami":
        output = [<AboutPage key="about" />];
        break;
      case "projects":
        output = [<ProjectsPage key="projects" />];
        break;
      case "services":
        output = [<ServicesPage key="services" />];
        break;
      case "skills":
        output = [<Skills key="skills" />];
        break;
      case "qoutes":
        output = [<QuotesPage key="qoutes" />];
        break;
      case "expi":
        output = [<ExperiencesPage key="expi" />];
        break;
      case "contact":
        output = [<ContactLinks key="contact" />];
        break;
      case "clear":
        setLines([]);
        return;
      case "exit":
        router.push("/"); // go back to home
        return;
      default:
        output = [`Command not found: ${command}`];
    }

    setLines((prev) => [
      ...prev,
      <span className="text-pink-500" key={`command-${prev.length}`}>
        din@void:$ {command}
      </span>,
      ...output.map((line, index) => (
        <div key={`output-${prev.length + index}`} className="pl-2">
          {line}
        </div>
      )),
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="relative bg-[#0d0d0d] text-green-400 font-mono min-h-screen flex flex-col border-2 border-pink-500 rounded-lg p-3 sm:p-6">
     <FloatingExitButton />

      {/* Logo */}
      <div className="text-center mb-4 sm:mb-6">
        <pre className="text-cyan-400 text-xs sm:text-sm leading-snug">{String.raw`
   O
  /|\
  / \
`}</pre>
        <h1 className="text-pink-500 text-3xl sm:text-6xl font-bold tracking-widest">
          DINVOID
        </h1>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto space-y-1 pl-1 sm:pl-3 text-sm sm:text-base">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {line}
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-1">
        <span className="text-pink-500 text-sm sm:text-base">din@void:$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-900 text-green-400 outline-none flex-1 px-2 py-1 rounded focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
          autoFocus
        />
      </form>

    </div>
  );
}
