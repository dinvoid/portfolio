// app/projects/page.tsx
"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "🏥 Job Portal",
      description: "A job portal where employers search CVs instead of candidates applying for jobs.",
      url: "https://github.com/dinvoid/project1",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"], 
    },
    {
      title: "💻 Project 2",
      description: "Portfolio website built with Next.js and Tailwind.",
      url: "https://github.com/dinvoid/project2",
      stack: ["Next.js", "TailwindCSS", "Vercel"],
    },
    {
      title: "📊 Project 3",
      description: "Data analytics dashboard for business insights.",
      url: "https://github.com/dinvoid/project3",
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },

  
  ];

  return (
    <div className="bg-gray-900 text-green-400 font-mono">
      <h1 className="text-2xl font-bold mb-6 mt-6">📂 Projects</h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-green-500 pl-3">
            <Link
              href={project.url}
              target="_blank"
              className="text-lg text-yellow-400 hover:text-green-300 transition-colors"
            >
              {project.title}
            </Link>
            <p className="text-sm text-gray-300 mt-1">{project.description}</p>

            {/* Stack display */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack?.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
