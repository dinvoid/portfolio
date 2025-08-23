"use client";

import Link from "next/link";

export default function ContactLinks() {
  return (
    <div className="space-y-1">
      <p>
        📄{" "}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-blue-400 hover:underline"
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
          className="text-blue-400 hover:underline"
        >
          GitHub – dinvoid
        </a>
      </p>
      <p>
        ▶️{" "}
        <a
          href="https://youtube.com/@din_void"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          YouTube – @din_void
        </a>
      </p>
      <p>
        🐦{" "}
        <a
          href="https://twitter.com/ain_void"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Twitter – @din_void
        </a>
      </p>
      <p>
        ✉️{" "}
        <a
          href="mailto:din@void.dev"
          className="text-blue-400 hover:underline"
        >
          Email – din@void.dev
        </a>
      </p>
    </div>
  );
}
