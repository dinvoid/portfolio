"use client";

import Link from "next/link";

export default function ContactLinks() {
  return (
    <div className="bg-gray-900 space-y-2 text-base text-gray-300 p-6">
      <p>
        📄{" "}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-yellow-300 hover:text-emerald-400"
        >
          Resume – Manifest of the Void
        </Link>
      </p>
      <p>
        💻{" "}
        <a
          href="https://github.com/dinvoid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-emerald-400"
        >
          GitHub – @din_void
        </a>
      </p>
      <p>
        ▶️{" "}
        <a
          href="https://linkedin.com/in/eldin-betalmos-2006b4294"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-emerald-400"
        >
          LinkedIn – @din_void
        </a>
      </p>
      <p>
        🐦{" "}
        <a
          href="https://twitter.com/ain_void"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-emerald-400"
        >
          Twitter – @din_void
        </a>
      </p>
      <p>
        ✉️{" "}
        <a
          href="mailto:dincanoybetalmos@gmail.com"
          className="text-yellow-300 hover:text-emerald-400"
        >
          Email – @din_void
        </a>
      </p>
    </div>
  );
}
