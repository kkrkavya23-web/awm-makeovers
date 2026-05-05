import { motion } from "motion/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const whatsappUrl =
    "https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'd%20like%20to%20book%20a%20bridal%20makeup%20consultation!";
  const instagramUrl = "https://www.instagram.com/shreya_makeup_hair/";

  return (
    <>
      {/* WhatsApp — left side */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.button"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow:
            "0 4px 20px rgba(37, 211, 102, 0.5), 0 0 0 3px rgba(37,211,102,0.18), 0 0 40px rgba(37,211,102,0.2)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </motion.a>

      {/* Instagram — right side */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="instagram.button"
        aria-label="Follow on Instagram"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full"
        style={{
          background: "linear-gradient(135deg, #C4956A, #8B5E3C, #D4A96A)",
          boxShadow:
            "0 4px 20px rgba(139, 94, 60, 0.45), 0 0 0 3px rgba(212,169,106,0.2), 0 0 40px rgba(212,169,106,0.2)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaInstagram className="w-7 h-7 text-white" />
      </motion.a>
    </>
  );
}
