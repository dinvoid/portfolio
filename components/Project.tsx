"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "🏥 Job Portal",
      description: "A job portal where employers search CVs instead of candidates applying for jobs.",
      url: "https://github.com/dinvoid/job-portal",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Spring Security"],
    },
    {
      title: "💻 Recipe Blog",
      description: "Recipe blog that allows users to create and share recipes with a community.",
      url: "https://github.com/dinvoid/recipe-blog",
      stack: ["React.js", "CSS", "Vercel", "MongoDB", "Passport.js"],
    },
    {
      title: "📊 GroupChatApp",
      description: "Real-time group chat app with JavaFX client & Java Sockets server.",
      url: "https://github.com/dinvoid/GroupChatApp",
      stack: ["Java", "JavaFX", "Threads", "Sockets"],
    },
    {
      title: "🤖 LazyBuddy",
      description: "Feels like a companion that helps you.",
      url: "https://github.com/dinvoid/lazy-buddy",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Spring Security"],
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 font-mono p-6">
      <h1 className="text-3xl text-emerald-400 font-bold tracking-wide mb-6">
        📂 Projects
      </h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-l-4 border-emerald-500 pl-4 py-3 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Link
              href={project.url}
              target="_blank"
              className="text-xl text-yellow-300 hover:text-emerald-400 font-semibold"
            >
              {project.title}
            </Link>
            <p className="text-base text-gray-300 mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.stack?.map((tech, i) => (
                <span
                  key={i}
                  className="bg-emerald-900 text-emerald-300 text-xs px-2 py-1 rounded-md"
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
