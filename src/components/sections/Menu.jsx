// =====> My-setup
import React, { useState } from "react";
import { menuList } from "../../data/menuList.js"; // sesuaikan path kamu

const categories = ["all", "coffee", "non-coffee", "food", "dessert"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMenu =
    activeCategory === "all"
      ? menuList
      : menuList.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-amber-700">Menu</span>
          </h2>
          <p className="text-stone-400 mt-2">
            Crafted coffee & food inspired by philosophy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border capitalize transition ${activeCategory === cat
                ? "bg-amber-700 border-amber-700 text-white"
                : "border-zinc-700 text-stone-300 hover:border-amber-600 hover:text-amber-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-amber-700 font-bold">
                    Rp {item.price.toLocaleString()}
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-2 text-sm text-stone-400">
                  ⭐ {item.rating}
                </div>

                {/* Category */}
                <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-zinc-800 text-stone-300 capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;