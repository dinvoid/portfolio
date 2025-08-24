// app/services/page.jsx (Next.js App Router)
import React from "react";

const services = [
  "Automation solutions (Python, Excel VBA, Shell scripting)",
  "Web development (React, Node.js, Django, FastAPI)",
  "Java development (Spring Boot, Core Java projects)",
  "Instagram, Twitter(X), Facebook content creation & management",
  "AI & Machine Learning solutions",
  "Discord bots & automation",
  "Enterprise systems & backend solutions",
  "Database management & optimization",
  "Process automation & task scripting",
  "Data entry & management",
  "Portrait art & traditional drawings",

];

export default function Service() {
  return (
   // <div className="bg-gray-900 text-green-400 font-mono p-8"></div>
    <div className="bg-gray-900 text-green-400 font-mono p-2">

      <h1 className="text-2xl font-bold mb-2 mt-2">🛎 Services I Offer</h1>

      <div className="grid md:grid-cols-2 gap-2">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border-l-2 border-green-500 pl-4 py-2 hover:bg-green-900 transition-colors rounded"
          >
            <p className="text-sm text-gray-300 mt-1">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
