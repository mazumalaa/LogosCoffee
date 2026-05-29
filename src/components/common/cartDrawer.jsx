// =====> My-setup
import React from "react";
import { useCart } from "../../context/CartContext";
import { useCheckout } from "../../hooks/useCheckout";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  const { checkoutWhatsApp } = useCheckout();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-zinc-950 border-l border-zinc-800 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <h2 className="text-xl font-bold text-white">
            Your <span className="text-amber-700">Cart</span>
          </h2>

          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-amber-600"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 h-[calc(100%-180px)] overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-stone-400 text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-zinc-900 p-3 rounded-xl border border-zinc-800"
              >
                {/* Info */}
                <div>
                  <h3 className="text-white font-medium text-sm">
                    {item.name}
                  </h3>
                  <p className="text-amber-700 text-sm">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>

                {/* Qty Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="text-white px-2"
                  >
                    -
                  </button>

                  <span className="text-white text-sm">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="text-white px-2"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t border-zinc-800 bg-zinc-950">
          <div className="flex justify-between mb-4">
            <span className="text-stone-400">Total</span>
            <span className="text-white font-bold">
              Rp {totalPrice.toLocaleString()}
            </span>
          </div>

          <button
            onClick={checkoutWhatsApp}
            disabled={cart.length === 0}
            className="w-full bg-green-600 hover:bg-green-500 disabled:bg-zinc-700 transition py-3 rounded-xl font-medium"
          >
            Checkout (WhatsApp)
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;