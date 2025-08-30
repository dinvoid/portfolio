"use client";

import React from "react";

const output = [
  "Hey, I’m Din! 👋",
  "I’m a developer who loves turning ideas into real, working applications. I enjoy working with different technologies, whether it’s building a website, automating tasks, or designing systems, and I always try to keep my code clean and efficient.",
  "",
  "I’m curious by nature, always learning something new, and I love finding smarter ways to solve problems. When I’m not coding, you’ll usually find me experimenting with side projects, exploring new tech, or just tinkering to see what I can create next.",
];

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-gray-200 font-mono p-6">
      <h1 className="text-3xl text-emerald-400 font-bold tracking-wide mb-6">
        👤 About Me
      </h1>
      <div className="space-y-4 text-base leading-relaxed text-gray-300">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
