"use client";

export default function ExperiencesPage() {
  return (
    <div className="bg-gray-900 text-gray-200 font-mono p-6">
      <h1 className="text-3xl text-emerald-400 font-bold mb-8">
        💼 Professional Experience
      </h1>

      {/* Metrobank */}
      <div className="mb-8">
        <h2 className="text-xl text-yellow-300 font-semibold">
          Programmer Analyst — Metrobank
        </h2>
        <p className="text-sm text-gray-400 mb-2">March 2023 – Present · Onsite</p>
        <ul className="list-disc ml-6 space-y-2 text-base text-gray-300">
          <li>System Parameterization & Data Updates for core banking systems</li>
          <li>Create & optimize DML scripts for insert/update operations</li>
          <li>Query optimization for faster performance</li>
          <li>Functional Testing & Quality Assurance for system updates</li>
          <li>Cross-team collaboration with frontend & backend developers</li>
          <li>Defect support — identify, document, and verify fixes</li>
          <li>Process automation using Batch files & Excel VBA</li>
          <li>L1 Onsite Support for CSRs, tellers, and officers in branches</li>
          <li>Version control & code reviews using GitHub/GitLab</li>
        </ul>
      </div>

      {/* Nityo */}
      <div>
        <h2 className="text-xl text-yellow-300 font-semibold">
          Junior Developer — Nityo Infotech
        </h2>
        <p className="text-sm text-gray-400 mb-2">
          March 2023 – Present · Deployed at Metrobank
        </p>
        <ul className="list-disc ml-6 space-y-2 text-base text-gray-300">
          <li>Collaborated on Metrobank projects to enhance software performance</li>
          <li>Developed and maintained systems in coordination with database teams</li>
          <li>Provided support in bug fixing and implementation</li>
          <li>Gained experience in Java, Spring Boot, SQL, and Postman APIs</li>
        </ul>
      </div>
    </div>
  );
}
  