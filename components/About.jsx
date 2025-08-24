// AboutPage.jsx
import React from "react";

const output = [
  "Hey, I’m Din! 👋",
  "I’m a developer who loves turning ideas into real, working applications. I enjoy working with different",
  "technologies, whether it’s building a website, automating tasks, or designing systems, and I always try to",
  "keep my code clean and efficient.",
  "",
  "I’m curious by nature, always learning something new, and I love finding smarter ways to solve problems.",
  "When I’m not coding, you’ll usually find me experimenting with side projects, exploring new tech, or just",
  "tinkering to see what I can create next.",
];

export default function About() {
    return (
        <div className=" bg-gray-900 text-green-400 font-mono p-4">
          <div className="space-y-1 text-sm">
            {output.map((line, index) => (
              <p key={index}> {line}</p>
            ))}
          </div>
        </div>
      );
      
}
