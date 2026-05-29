import { useCart } from "../context/CartContext";

export const useCheckout = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    const phoneNumber = "6283194086388";

    let message = `*LOGOS COFFEE - ORDER*\n\n`;

    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `Qty: ${item.qty}\n`;
      message += `Harga: Rp ${item.price.toLocaleString()}\n`;
      message += `Subtotal: Rp ${(item.price * item.qty).toLocaleString()}\n\n`;
    });

    message += `----------------------\n`;
    message += `*TOTAL: Rp ${totalPrice.toLocaleString()}*\n\n`;
    message += `Terima kasih`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, "_blank");

    // optional: clear cart setelah checkout
    clearCart();
  };

  return { checkoutWhatsApp };
};