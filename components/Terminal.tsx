"use client";

import React from "react";
import { useState } from "react";
import ContactLinks from "./ContactLinks"; 
import ProjectsPage from "@/app/projects/projects";

export default function Terminal() {

  const [lines, setLines] = useState<React.ReactNode[]>([
    "Welcome to Dev mode. Type 'help' to begin your journey.",
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (command: string) => {
    let output: React.ReactNode[] = [];

    switch (command.toLowerCase()) {
      case "help":
        output = [
          "Supported commands:",
          "- whoami     → Learn about Din",
          "- projects   → Explore works",
          "- storyboard → View the evolution of the stickman",
          "- motivate   → Get a faceless quote",
          "- rituals    → Unlock branding secrets",
          "- contact    → Reach beyond",
          "- clear      → Clear the console",
        ];
        break;
      case "whoami":
        output = [
        "Hi, I’m Din",
        "I’m a passionate developer with a strong focus on building efficient, user-friendly applications.",
        "I enjoy working across different technologies whether it’s web development, automation, or system design.",
        "I’m always looking for ways to improve processes through clean code and smart solutions.",
        "I value continuous learning, problem-solving, and creating tools that make an impact, whether for businesses or individuals. ",
        "Beyond coding, I enjoy exploring new ideas, experimenting with projects, and growing my skills one challenge at a time."
                  ,
        ];
        break;
      case "projects":
        output = ["Visit /projects to explore my works."];
        output = [<ProjectsPage key="projects" />];
        break;
      case "storyboard":
        output = [
          "The stickman evolved into a brand identity representing creativity + minimalism.",
        ];
        break;
      case "motivate":
        output = ["Faceless quote: 'The void is where creation begins.'"];
        break;
      case "rituals":
        output = ["Rituals unlocked: simplicity, creativity, persistence."];
        break;
      case "contact":
        // render the separate component (clickable links)
        output = [<ContactLinks key="contact-links" />];
        break;
      case "clear":
        setLines([]);
        return;
      default:
        output = [`Command not found: ${command}`];
    }

    setLines((prev) => [
      ...prev,
      <span className="text-pink-500 mr-2" style={{ color: "" }} key={`command-${prev.length}`}>
        din@void:$ {command}
      </span>,
      ...output.map((line, index) => (
        <div className="pl-3" key={`output-${prev.length + index}`}>
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
    <div className="bg-[#0d0d0d] text-green-400 font-mono p-6 h-screen flex flex-col border-2 border-pink-500 rounded-lg">
      {/* ASCII Logo + Intro */}
      <div className="text-center mb-6">
        <pre className="text-cyan-400 text-sm leading-snug">{String.raw`
   O
  /|\
  / \
`}</pre>
        <h1 className="text-pink-500 text-6xl font-bold tracking-widest">
          DINVOID
        </h1>
      </div>

      {/* Console Output */}
      <div className="flex-1 overflow-y-auto space-y-1 pl-3">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap pl-3">
           
            {line}
            
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="mt-2 flex items-center">
        <span className="text-pink-500 mr-2">din@void:$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
         // className="bg-transparent text-green-400 outline-none flex-1"
          className="bg-gray-900 text-green-400 outline-none flex-1 px-2 py-1 rounded focus:ring-2 focus:ring-green-500"
  
          autoFocus
           //placeholder="type help"
        />
        
      </form>
    </div>
  );
}
