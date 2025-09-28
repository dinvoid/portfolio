"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Service = {
  title: string;
  stack: string[];
  tools: string[];
};

const services: Service[] = [
  {
    title: "Automation Solutions (Python, Excel VBA, Shell scripting)",
    stack: ["Python scripting", "VBA", "Batch/Shell scripting"],
    tools: ["Excel Macros", "VS Code", "Automation scripting"]
  },
  {
    title: "Web Development (React, Node.js, Django, FastAPI)",
    stack: ["React", "Node.js", "Django", "FastAPI", "REST APIs"],
    tools: ["GitHub", "Postman", "MySQL","PostgreSQL","MongoDB"]
  },
  {
    title: "Java Development (Spring Boot, Core Java projects)",
    stack: ["Java", "Spring Boot", "Core Java"],
    tools: ["MySQL","PostgreSQL", "Postman", "Git"]
  },

  {
    title: "Discord BOts & Automation (n8n)",
    stack: ["Discord.js", "n8n", "Webhook APIs"],
    tools: ["Discord Automation", "n8n", "GitHub"]
  },
  {
    title: "Email Marketing (Klaviyo, Mailchimp)",
    stack: ["Campaign Strategy", "Automation Flows"],
    tools: ["Klaviyo", "Mailchimp", "Zapier"]
  }
];

export default function ServiceSlider() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16" id="service">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-black-600 mb-10 text-center">
      🧩 Services I Offer
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={40}
        slidesPerView={1}
        className="rounded-xl"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-gray-900 p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>

              <div className="mb-6">
                <h4 className="text-md font-medium text-gray-700 mb-2">Tech Stack</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.stack.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-700 mb-2">Tools Used</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {service.tools.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
