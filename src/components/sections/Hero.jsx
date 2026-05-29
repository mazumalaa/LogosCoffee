import React from "react";

const HERO_CONTENT = {
  title: "Logos Coffee — Where Reason Meets Taste",
  description:
    "Find meaning in every sip. A coffee shop inspired by philosophy, Stoicism, and a calm futuristic atmosphere.",
  ctaPrimary: "Explore Menu",
  ctaSecondary: "Shop Products",
  backgroundImage:
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1600&q=80",
};

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="hero"
      role="banner"
      aria-label="Logos Coffee hero section"
      className="relative min-h-[100svh] flex items-center justify-center text-center text-stone-100"
      style={{
        backgroundImage: `url(${HERO_CONTENT.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-zinc-900" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* SEO H1 */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {HERO_CONTENT.title}
        </h1>

        {/* Description */}
        <p className="text-stone-300 text-lg md:text-xl mb-8">
          {HERO_CONTENT.description}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("menu")}
            aria-label="Explore coffee menu"
            className="bg-amber-700 hover:bg-amber-600 px-6 py-3 rounded-xl transition flex items-center justify-center gap-2"
          >
            <i className="bi bi-cup-hot" aria-hidden="true"></i>
            {HERO_CONTENT.ctaPrimary}
          </button>

          <button
            onClick={() => scrollToSection("product")}
            aria-label="Shop coffee products online"
            className="border border-amber-50 text-amber-50 hover:bg-amber-600 hover:border-amber-600 hover:text-stone-100 px-6 py-3 rounded-xl transition flex items-center justify-center gap-2"
          >
            <i className="bi bi-bag" aria-hidden="true"></i>
            {HERO_CONTENT.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-[-120px] w-[500px] h-[500px] bg-amber-700/20 blur-[140px] rounded-full" />
    </header>
  );
};

export default Hero;