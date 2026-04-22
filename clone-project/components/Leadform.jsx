"use client";

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lead Submitted:", formData);

    alert("Form Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      company: "",
    });
  };

  return (
    <section className="px-8 py-20 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Let’s <span className="text-blue-600">Connect</span>
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Fill in your details and our team will reach out to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}