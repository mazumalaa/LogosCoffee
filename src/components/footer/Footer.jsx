// =====> My-setup
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-stone-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-stone-100">
              Logos<span className="text-amber-700">.</span>
            </h2>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              A place where reason meets taste. Inspired by Stoicism and the concept of Logos,
              we create coffee experiences with meaning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-stone-100 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-amber-600 cursor-pointer">Home</li>
              <li className="hover:text-amber-600 cursor-pointer">About</li>
              <li className="hover:text-amber-600 cursor-pointer">Menu</li>
              <li className="hover:text-amber-600 cursor-pointer">Shop</li>
              <li className="hover:text-amber-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-stone-100 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Batam, Indonesia</li>
              <li>hello@logoscoffee.com</li>
              <li>+62 812-3456-7890</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-stone-100 font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-amber-600 transition">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="hover:text-amber-600 transition">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="hover:text-amber-600 transition">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="hover:text-amber-600 transition">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>

            <p className="mt-4 text-sm text-stone-500">
              Stay connected for updates & new releases
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-stone-500 gap-3">

          <p>
            © {new Date().getFullYear()} Logos Coffee. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-amber-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-amber-600 cursor-pointer">
              Terms of Service
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;