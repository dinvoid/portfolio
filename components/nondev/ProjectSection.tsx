"use client";

const projects = [
    {
      title: "🏥 Job Portal",
      description: "A backend-only RESTful job portal system built with Spring Boot and PostgreSQL, designed for employer-driven candidate discovery and profile management.",
      url: "https://github.com/dinvoid/spring_security_postrgeSQL",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "Spring Security"],
    },
    {
      title: "💻 Recipe Blog",
      description: "Recipe blog that allows users to create and share recipes with a community.",
      url: "https://github.com/dinvoid/recipe-blog",
      stack: ["React.js", "CSS", "Vercel", "MongoDB", "Passport.js","Node.js","Express.js"],
    },
    {
      title: "📊 GroupChatApp",
      description: "Real-time group chat app with JavaFX client & Java Sockets server.",
      url: "https://github.com/dinvoid/GroupChatApp",
      stack: ["Java", "JavaFX", "Threads", "Sockets"],
    },
    {
      title: "🤖 Automated Appointment Reminder System",
      description: "Clinic appointment reminder system that sends automated reminders to patients.",
      url: "https://github.com/dinvoid/clinic-reminder-backend",
      stack: ["Python", "Fastapi", "PostgreSQL", "APScheduler"],
    },
  ];
export default function ProjectSection() {
  return (
    <section id="projects" className="bg-gradient-to-br from-blue-100 via-white to-blue-100  py-20 px-6">
      <div className="max-w-6xl mx-auto">
       <h2 className="font-extra font-bold text-4xl font-bold text-blue-600 mb-12 text-center">🧰 Projects</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-700 transition"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
