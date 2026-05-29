import React, { useState } from "react";
import { useWhatsapp } from "../../hooks/useWhatsapp.js";

const Contact = () => {
  const { sendMessage } = useWhatsapp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage(form);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-amber-700">Us</span>
          </h2>
          <p className="text-stone-400 mt-2">
            We’d love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p className="text-stone-400 mt-2">
                123 Coffee Street, Bengkong, Batam, Indonesia
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Opening Hours</h3>
              <p className="text-stone-400 mt-2">
                Mon - Fri: 08:00 - 22:00 <br />
                Sat - Sun: 09:00 - 23:00
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="text-stone-400 mt-2">
                Email: hello@logocoffee.com <br />
                Phone: +62 812-3456-7890
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 rounded-lg text-white outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 rounded-lg text-white outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 bg-zinc-800 rounded-lg text-white outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-600 transition py-3 rounded-lg font-medium"
            >
              Send via WhatsApp
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;