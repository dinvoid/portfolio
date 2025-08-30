"use client";

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
    <div className="bg-gray-900 text-gray-200 font-mono p-6">
      <h1 className="text-3xl text-emerald-400 font-bold mb-6">
        🛎 Services I Offer
      </h1>

      <div className="space-y-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border-l-4 border-emerald-500 pl-4 py-2 hover:bg-gray-800 rounded-md transition-colors"
          >
            <p className="text-base text-gray-300">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
