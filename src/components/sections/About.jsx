import React from "react";

const ABOUT_CONTENT = {
  title: "About Logos Coffee",
  subtitle: "A place where reason and taste meet.",
  description:
    "Logos Coffee is not just a place to enjoy coffee. It is a space for contemplation, where every sip invites us to think, reflect, and understand meaning. Inspired by Stoic philosophy and the concept of Logos, we believe that clarity of mind leads to inner calm.",
  highlight:
    "Amid the chaos of the world, we create a calm, minimal, and meaningful space — so everyone can return to themselves.",
  image:
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-zinc-900 text-stone-100 py-20 px-4 sm:px-6"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src={ABOUT_CONTENT.image}
            alt="Minimal and calm interior of Logos Coffee"
            className="w-full h-[400px] object-cover rounded-2xl"
            loading="lazy"
          />

          {/* overlay subtle */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </div>

        {/* Content */}
        <div>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {ABOUT_CONTENT.title}
          </h2>

          <p className="text-amber-700 mb-4 italic">
            {ABOUT_CONTENT.subtitle}
          </p>

          <p className="text-stone-300 leading-relaxed mb-6">
            {ABOUT_CONTENT.description}
          </p>

          <p className="text-stone-400 leading-relaxed mb-8">
            {ABOUT_CONTENT.highlight}
          </p>

          {/* Value Points */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-zinc-700 p-4 rounded-xl">
              <h3 className="text-amber-700 font-semibold mb-1">
                Philosophy
              </h3>
              <p className="text-sm text-stone-400">
                Inspired by Stoicism & Logos
              </p>
            </div>

            <div className="border border-zinc-700 p-4 rounded-xl">
              <h3 className="text-amber-700 font-semibold mb-1">
                Quality
              </h3>
              <p className="text-sm text-stone-400">
                Carefully selected premium beans
              </p>
            </div>

            <div className="border border-zinc-700 p-4 rounded-xl">
              <h3 className="text-amber-700 font-semibold mb-1">
                Atmosphere
              </h3>
              <p className="text-sm text-stone-400">
                Calm & minimal environment
              </p>
            </div>

            <div className="border border-zinc-700 p-4 rounded-xl">
              <h3 className="text-amber-700 font-semibold mb-1">
                Meaning
              </h3>
              <p className="text-sm text-stone-400">
                More than just coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;