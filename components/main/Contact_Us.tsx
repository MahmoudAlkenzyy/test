"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import contactAnimation from "../../app/animation/contact_us.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "01029386477";
    const message = `الاسم: ${formData.name}%0Aالبريد الإلكتروني: ${formData.email}%0Aالرسالة: ${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappLink, "_blank");

    toast.success("WhatsApp will now open your message! 📩", {
      position: "top-center",
      autoClose: 3000,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="container mx-auto px-4 py-12 text-white" id="contact">
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: "60px" }} />

      <div className="relative z-[500]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl font-bold">
          Contact Us
        </span>
        <p className="text-gray-400 max-w-2xl mb-8">
          As a passionate frontend developer, I&apos;m always eager to connect with fellow professionals, potential clients, and anyone interested in my work...
        </p> 
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#1a172f5e] backdrop-blur-md p-8 shadow-lg rounded-md relative z-[500] border-[#8d60d4c5] border">
        <div className="w-full md:w-1/2">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-400 mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none border-[#8d60d4c5]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-400 mb-1">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none border-[#8d60d4c5]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-400 mb-1">Your Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none border-[#8d60d4c5]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full button-primary text-white font-bold py-3 px-6 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="md:block w-full md:w-1/2 text-center">
          <Lottie className="contactAnimation" style={{ height: 355 }} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
}
