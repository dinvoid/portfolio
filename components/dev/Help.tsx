"use client";

import React from "react";

const output = [
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

export default function Help() {
  return (

      <div className="flex-1 overflow-y-auto space-y-1 pl-1 sm:pl-3 text-sm sm:text-base">
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {line}
          </div>
        ))}
      </div>

  );
}
