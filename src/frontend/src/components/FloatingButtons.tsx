import { motion } from "motion/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const whatsappUrl =
    "https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book%20a%20bridal%20makeup%20consultation!";
  const instagramUrl = "https://www.instagram.com/awm_makeovers_by_aastha/";

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
            "0 4px 20px rgba(37, 211, 102, 0.45), 0 0 0 3px rgba(37,211,102,0.15)",
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
          background: "linear-gradient(135deg, #E91E63, #9C27B0, #FF5722)",
          boxShadow:
            "0 4px 20px rgba(233, 30, 99, 0.5), 0 0 0 3px rgba(233,30,99,0.15)",
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
