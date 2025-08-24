// app/projects/page.tsx
"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "🏥 Job Portal",
      description: "A job portal where employers search CVs instead of candidates applying for jobs.",
      url: "https://github.com/dinvoid/job-portal ",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate","Spring Security"], 
    },
    {
      title: "💻 Recipe Blog",
      description: "The purpose of the project is to create a recipe blog that allows users to create and share recipes with a community of users.",
      url: "https://github.com/dinvoid/recipe-blog",
      stack: ["React.js", "CSS", "Vercel","MongoDB","Passsport.js"],
    },
    {
      title: "📊 GroupChatApp",
      description: "This project is a real-time group chat application implemented in Java using JavaFX for the client-side graphical interface and Java Sockets for server–client communication. The system follows a client–server architecture, where the server manages connections and message distribution, and clients interact through a chat window.",
      url: "https://github.com/dinvoid/GroupChatApp",
      stack: ["Java", "JavaFX","Java Threads","Java Sockets"],
    },
    {
      title: "🏥 LazyBuddy",
      description: "Feels like a companion that helps you.",
      url: "https://github.com/dinvoid/lazy-buddy ",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate","Spring Security"], 
    },

  
  ];

  return (
    <div className="bg-gray-900 text-green-400 font-mono p-2">
      <h1 className="text-2xl font-bold mb-6 mt-6">📂 Projects</h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-green-500 pl-3">
            <Link
              href={project.url}
              target="_blank"
              className="text-lg text-yellow-400 hover:text-green-300 transition-colors rounded"
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
