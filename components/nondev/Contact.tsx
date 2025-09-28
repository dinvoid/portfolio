"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/sendEmail";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      user_name: (form.elements.namedItem("user_name") as HTMLInputElement).value,
      user_email: (form.elements.namedItem("user_email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await sendEmail(formData);
      confetti({ particleCount: 120, spread: 60, origin: { y: 0.6 } });
      setSuccess(true);
      form.reset();

      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Error sending email:", err);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-100 py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-extra font-bold text-4xl font-bold text-blue-600 mb-12 text-center">
        🤝 Let&apos;s Connect
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I’d love to hear from you!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://github.com/dinvoid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/eldin-betalmos-ab048a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:eldinbetw@gmail.com.com"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* Hire Me Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition font-medium"
        >
          Let&apos;s talk
        </button>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-red/40 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Let&apos;s Work Together
                </h3>

                {success ? (
                  <p className="text-green-600 text-lg font-medium text-center py-6">
                    ✅ Message Sent Successfully!
                  </p>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
                      required
                    />

                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
                      required
                    />

                    <textarea
                      name="message"
                      placeholder="Project Details..."
                      minLength={10}
                      className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
                      rows={4}
                      required
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition font-medium disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}

                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 text-sm text-gray-500 underline hover:text-indigo-600 transition block mx-auto"
                >
                  Cancel
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
