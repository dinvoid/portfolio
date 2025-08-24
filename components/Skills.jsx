// SkillsPage.jsx
import React from "react";

const data = {

  skills: {
    backend_development: ["Java (Spring Boot)", "Python (FastAPI/Django)", "Core Java"],
    automation: ["Python scripting", "VBA", "Batch/Shell scripting"],
    web_development: ["REST APIs", "React frontends", "Full-stack projects"],
    database_management: ["PostgreSQL", "MySQL", "DML scripting", "Schema design"],
    system_design: ["Scalable architecture", "Clean code principles"],
    testing_debugging: ["Functional testing", "Troubleshooting", "Issue tracking"]
  },
  
  tech_stack: {
    languages: ["Java", "Python", "JavaScript", "SQL", "PHP"],
    frameworks_libraries: ["Spring Boot", "Django", "FastAPI", "React", "Node.js", "Next.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Excel (VBA Macros)", "Postman", "VS Code", "IntelliJ IDEA"],
    other: ["Automation scripting", "Discord Automation"]
  },
  
  soft_skills: [
    {
      name: "Problem-Solving Mindset",
      description:
        "Able to analyze complex issues, debug effectively, and design clean, efficient solutions.",
    },
    {
      name: "Continuous Learning",
      description:
        "Always eager to explore new technologies, frameworks, and best practices to stay updated.",
    },
    {
      name: "Collaboration & Teamwork",
      description:
        "Comfortable working with cross-functional teams, aligning backend and frontend efforts to achieve goals.",
    },
    {
      name: "Adaptability",
      description:
        "Quick to adjust to new tools, projects, and workflows in fast-changing environments.",
    },
    {
      name: "Attention to Detail",
      description:
        "Focused on writing clean code, catching potential issues early, and ensuring quality in deliverables.",
    },
    {
      name: "Curiosity & Experimentation",
      description:
        "Enjoys tinkering with projects, experimenting with new ideas, and learning from challenges.",
    },
  ],
};

export default function Skills() {
  return (
    <div className="bg-gray-900 text-green-400 font-mono min-h-screen p-2">
      <h1 className="text-3xl font-bold mb-6">🛠 Skills & Tech Stack</h1>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Core Skills</h2>
        <div className="space-y-3">
          {Object.entries(data.skills).map(([category, skills], idx) => (
            <div key={idx}>
              <h3 className="capitalize text-yellow-400 text-lg">
                {category.replace("_", " ")}
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">⚙️ Tech Stack</h2>
        <div className="space-y-3">
          {Object.entries(data.tech_stack).map(([category, items], idx) => (
            <div key={idx}>
              <h3 className="capitalize text-yellow-400 text-lg">
                {category.replace("_", " ")}
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-green-300 text-xs px-2 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌱 Soft Skills</h2>
        <div className="space-y-4">
          {data.soft_skills.map((skill, idx) => (
            <div key={idx} className="border-l-2 border-green-500 pl-3">
              <h3 className="text-yellow-400 font-medium">{skill.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
