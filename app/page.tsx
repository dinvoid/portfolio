"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const sections = {
  about: (
    <div>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">👋 About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        I’m Din, a passionate developer who enjoys building apps, automating workflows,
        and learning new technologies. Always curious, always creating. 🚀
      </p>
    </div>
  ),
  projects: (
    <div>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">📂 Projects</h2>
      <ul className="space-y-2 text-gray-300">
        <li>🏥 Job Portal – Java, Spring Boot, PostgreSQL</li>
        <li>💻 Recipe Blog – React.js, MongoDB</li>
        <li>📊 Group Chat App – JavaFX, Sockets</li>
        <li>🤖 LazyBuddy – Productivity companion</li>
      </ul>
    </div>
  ),
  skills: (
    <div>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">⚡ Skills</h2>
      <p className="text-gray-300">
        Java, Spring Boot, React, Node.js, SQL, MongoDB, Postman, Git, Automation
      </p>
    </div>
  ),
  services: (
    <div>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">🛎 Services</h2>
      <ul className="space-y-2 text-gray-300">
        <li>⚙ Automation (Python, VBA, Shell scripting)</li>
        <li>🌐 Web Development (React, Node.js, FastAPI)</li>
        <li>💻 Java Backend Systems (Spring Boot)</li>
        <li>🤖 AI & ML Integrations</li>
      </ul>
    </div>
  ),
  contact: (
    <div>
      <h2 className="text-2xl font-bold text-pink-500 mb-4">📞 Contact</h2>
      <p className="text-gray-300">📧 dincanoybetalmos@gmail.com</p>
      <p className="text-gray-300">🐙 github.com/dinvoid</p>
      <p className="text-gray-300">💼 linkedin.com/in/eldin-betalmos-2006b4294</p>
    </div>
  ),
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof typeof sections>("about");
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-pink-500 mb-8">DINVOID</h1>
        <nav className="space-y-3">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof sections)}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                activeTab === key
                  ? "bg-pink-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button
            onClick={() => router.push("/developer")}
            className="w-full mt-6 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold"
          >
            🚀 Developer Mode
          </button>
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-10">
        {sections[activeTab]}
      </main>
    </div>
  );
}
