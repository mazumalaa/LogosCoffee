// =====> My-setup
export const useWhatsapp = () => {
  const sendMessage = ({ name, email, message }) => {
    const phoneNumber = "6283194086388";

    const text = `Hello Logos Coffee Name: \n${name}Email: ${email} \nMessage:\n${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return { sendMessage };
};