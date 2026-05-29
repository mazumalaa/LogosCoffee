import React, { useState } from "react";
import CartDrawer from "./components/common/cartDrawer";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import Menu from "./components/sections/Menu";
import Product from "./components/sections/Shop";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <Hero />
      <About />
      <Menu />
      <Product />
      <Contact />
      <FAQ />
      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}