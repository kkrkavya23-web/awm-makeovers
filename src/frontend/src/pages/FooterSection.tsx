import { Heart, Instagram, MapPin, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const year = new Date().getFullYear();

export default function FooterSection() {
  return (
    <footer
      data-ocid="footer.section"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #3D2010 0%, #2D1B0E 100%)",
      }}
    >
      {/* Golden glow top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,169,106,0.7), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(212,169,106,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #C4956A, #D4A96A)",
                }}
              >
                <Sparkles className="w-5 h-5" style={{ color: "#2D1B0E" }} />
              </div>
              <div>
                <p
                  className="text-lg font-bold heading-section leading-tight"
                  style={{ color: "#FAF6F0" }}
                >
                  Shreya Makeup &amp; Hair
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(212,169,106,0.7)" }}
                >
                  Premium Bridal Artist, Karwar
                </p>
              </div>
            </motion.div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(250,246,240,0.55)" }}
            >
              Karwar's most celebrated bridal makeup &amp; hair styling artist —
              trusted by brides and families across Karnataka. Your moment
              deserves nothing less than extraordinary.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919611366425"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_link"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.3)",
                }}
              >
                <FaWhatsapp className="w-4 h-4" style={{ color: "#25D366" }} />
              </a>
              <a
                href="https://instagram.com/shreya_makeup_hair"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_link"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(212,169,106,0.15)",
                  border: "1px solid rgba(212,169,106,0.3)",
                }}
              >
                <Instagram className="w-4 h-4" style={{ color: "#D4A96A" }} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(212,169,106,0.8)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s/g, "_")}_link`}
                    className="text-sm flex items-center gap-2 group transition-colors"
                    style={{ color: "rgba(250,246,240,0.5)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "#D4A96A" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: "rgba(212,169,106,0.8)" }}
            >
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919611366425"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: "rgba(250,246,240,0.55)" }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(212,169,106,0.15)" }}
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: "#D4A96A" }} />
                </div>
                +91 96113 66425
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(250,246,240,0.55)" }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(212,169,106,0.15)" }}
                >
                  <MapPin
                    className="w-3.5 h-3.5"
                    style={{ color: "#C4956A" }}
                  />
                </div>
                <span>
                  Shri Durga, HIG 117, New, Gunagi Wada,
                  <br />
                  Habbuwada, K.H.B. Colony, Karwar,
                  <br />
                  <span style={{ color: "rgba(250,246,240,0.38)" }}>
                    Karnataka 581306
                  </span>
                </span>
              </div>
              <motion.a
                href="https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'd%20like%20to%20book!"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.book_button"
                className="flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #C4956A, #D4A96A)",
                  color: "#2D1B0E",
                  boxShadow: "0 4px 16px rgba(212,169,106,0.3)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Consultation
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(212,169,106,0.15)" }}
        >
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "rgba(250,246,240,0.3)" }}
          >
            © {year} Shreya Makeup &amp; Hair · Karwar, Karnataka
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "rgba(250,246,240,0.25)" }}
          >
            Built with{" "}
            <Heart className="w-3 h-3 mx-0.5" style={{ color: "#D4A96A" }} />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
