// =====> My-setup
import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What makes Logos Coffee different?",
    answer:
      "Logos Coffee is not just about coffee, but about meaning. We combine philosophy, Stoicism, and a calm atmosphere to create a space for reflection.",
  },
  {
    question: "Do you offer online ordering?",
    answer:
      "Yes, you can order our products directly through the Shop section. We are continuously improving our online experience.",
  },
  {
    question: "What kind of coffee beans do you use?",
    answer:
      "We use carefully selected Arabica and Robusta beans sourced from trusted local and international farms.",
  },
  {
    question: "Is there a place to sit and work?",
    answer:
      "Yes, our space is designed for focus, reading, and working in a calm minimalist environment.",
  },
  {
    question: "Do you offer non-coffee options?",
    answer:
      "Yes, we also provide non-coffee drinks, desserts, and light food for all preferences.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900 text-stone-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked{" "}
            <span className="text-amber-700">Questions</span>
          </h2>
          <p className="text-stone-400 mt-2">
            Everything you need to know about Logos Coffee
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-zinc-800 transition"
              >
                <span className="font-medium">{item.question}</span>

                <span className="text-amber-700 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 text-stone-400 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;