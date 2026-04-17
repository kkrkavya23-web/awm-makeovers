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
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%)",
      }}
    >
      {/* Pink glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(233,30,99,0.5), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(233,30,99,0.1) 0%, transparent 70%)",
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
                  background: "linear-gradient(135deg, #E91E63, #C2185B)",
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white heading-section leading-tight">
                  AWM Makeovers
                </p>
                <p className="text-xs text-white/40">By Aastha</p>
              </div>
            </motion.div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Lucknow's most celebrated bridal makeup artist — trusted by
              celebrities, brides, and families across India. Your moment
              deserves nothing less than extraordinary.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919451819583"
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
                href="https://instagram.com/awm_makeovers_by_aastha"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_link"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(233,30,99,0.12)",
                  border: "1px solid rgba(233,30,99,0.25)",
                }}
              >
                <Instagram className="w-4 h-4" style={{ color: "#E91E63" }} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s/g, "_")}_link`}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "#E91E63" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919451819583"
                className="flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(233,30,99,0.12)" }}
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: "#E91E63" }} />
                </div>
                +91 94518 19583
              </a>
              <div className="flex items-start gap-3 text-sm text-white/55">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <MapPin
                    className="w-3.5 h-3.5"
                    style={{ color: "#C9A84C" }}
                  />
                </div>
                <span>
                  Lucknow, Uttar Pradesh
                  <br />
                  <span className="text-white/35 text-xs">
                    Available across India
                  </span>
                </span>
              </div>
              <motion.a
                href="https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book!"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.book_button"
                className="flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #E91E63, #C2185B)",
                  boxShadow: "0 4px 16px rgba(233,30,99,0.3)",
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
          style={{ borderColor: "rgba(233,30,99,0.1)" }}
        >
          <p className="text-xs text-white/30 flex items-center gap-1">
            © {year} AWM: Makeovers By Aastha · Lucknow
          </p>
          <p className="text-xs text-white/25 flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 mx-0.5" style={{ color: "#E91E63" }} />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
