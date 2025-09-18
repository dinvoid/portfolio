"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";
import confetti from "canvas-confetti";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      user_name: (form.elements.namedItem("user_name") as HTMLInputElement).value,
      user_email: (form.elements.namedItem("user_email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await sendEmail(formData);

      // 🎉 Confetti on success
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

     // alert("Message sent successfully!");
      form.reset();
      setShowModal(false);
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-8">
          Whether it's a project or a question, I'm all ears.
        </p>

        {/* Hire Me Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Hire Me
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
              <h3 className="text-black font-semibold mb-4">
                Tell me about your project
              </h3>

              {/* ✅ Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-2 rounded bg-white text-black placeholder-gray-400"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-2 rounded bg-white text-black placeholder-gray-400"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Project Details..."
                  className="w-full border border-gray-300 p-2 rounded bg-white text-black placeholder-gray-400"
                  required
                />

                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </form>

              <button
                onClick={() => setShowModal(false)}
                className="mt-4 text-sm text-gray-500 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
