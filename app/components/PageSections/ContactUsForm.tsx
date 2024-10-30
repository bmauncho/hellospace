"use client";
import React, { useState, FormEvent } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-md mx-auto p-5 lg:max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm contact-info mb-1 text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Full Name"
          />
        </div>
        <div>
          <label className="block text-sm contact-info mb-1 text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="block text-sm contact-info mb-1 text-gray-700">
            Contact Number
          </label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Contact Number"
          />
        </div>
        <div>
          <label className="block text-sm contact-info mb-1 text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-input w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your Message"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="form-button w-full bg-gradient-to-r from-blue-500 to-green-400 text-white p-3 rounded-lg hover:bg-gradient-to-l transition delay-150 duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
