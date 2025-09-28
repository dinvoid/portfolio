"use client";

import { useState } from "react";

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Nityo Infotech",
      role: "Junior Developer",
      date: "March 2023 – Present · Deployed at Metrobank",
      details: [
        "Collaborated on Metrobank projects to enhance software performance",
        "Developed and maintained systems in coordination with database teams",
        "Provided support in bug fixing and implementation",
      ],
    },
    {
      company: "Metrobank",
      role: "Programmer Analyst",
      date: "March 2023 – Present · Onsite",
      details: [
        "System Parameterization & Data Updates for core banking systems",
        "Create & optimize DML scripts for insert/update operations",
        "Query optimization for faster performance",
        "Functional Testing & Quality Assurance for system updates",
        "Cross-team collaboration with frontend & backend developers",
        "Defect support — identify, document, and verify fixes",
        "Process automation using Batch files & Excel VBA",
        "L1 Onsite Support for CSRs, tellers, and officers in branches",
        "Version control & code reviews using GitHub/GitLab",
        "Gained experience in Java, Spring Boot, SQL, and Postman APIs",
      ],
    },
    
    {
      company: "Coming Soon",
      role: "Next Opportunity",
      date: "",
      details: [
        "Stay tuned for the next chapter in my journey.",
        "More challenges, more systems, more impact.",
     
      ],
    }
    

  ];

  return (


<section
  id="experience"
  className="scroll-mt-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 overflow-hidden "
>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">💼 Professional Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-blue-600">
                {exp.role} — {exp.company}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{exp.date}</p>

              {expandedIndex === index && (
                <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="mt-4 text-black text-sm underline hover:text-blue-800 transition"
              >
                {expandedIndex === index ? "Hide Details" : "View More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
