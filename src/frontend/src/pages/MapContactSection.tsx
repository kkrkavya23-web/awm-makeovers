import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Clock,
  Instagram,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 96113 66425",
    href: "tel:+919611366425",
    color: "#8B5E3C",
  },
  {
    icon: MapPin,
    label: "Studio Address",
    value:
      "Shri Durga, HIG 117, New, Gunagi Wada, Habbuwada, K.H.B. Colony, Karwar, Karnataka 581306",
    href: "https://maps.google.com/?q=Karwar,Karnataka",
    color: "#C4956A",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9AM – 8PM",
    href: undefined,
    color: "#D4A96A",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@shreya_makeup_hair",
    href: "https://instagram.com/shreya_makeup_hair",
    color: "#8B5E3C",
  },
];

export default function MapContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Shreya! I'd like to enquire about a booking.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nWedding Date: ${formData.date}\nMessage: ${formData.message}`,
    );
    window.open(`https://wa.me/919611366425?text=${msg}`, "_blank");
    setSubmitted(true);
    toast.success("Redirecting you to WhatsApp!", {
      description: "Your enquiry details have been pre-filled.",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      data-ocid="contact.section"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #EDE0D0 0%, #FAF6F0 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,169,106,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            className="mb-4 px-4 py-1.5 text-sm"
            style={{
              background: "rgba(139,94,60,0.1)",
              border: "1px solid rgba(139,94,60,0.28)",
              color: "#8B5E3C",
            }}
          >
            📍 Find Us
          </Badge>
          <h2
            className="heading-section text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2D1B0E" }}
          >
            Book Your <span className="text-gradient-brown">Dream Look</span>
          </h2>
          <p className="max-w-lg mx-auto text-lg" style={{ color: "#6B4226" }}>
            Based in Karwar, Karnataka — serving brides across Uttara Kannada
            and beyond. Reach out and let's create your perfect transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact info + Map */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="rounded-2xl p-5 flex flex-col gap-2"
                    style={{
                      background: "rgba(255,255,255,0.88)",
                      border: "1px solid rgba(196,149,106,0.22)",
                      backdropFilter: "blur(16px)",
                      boxShadow: "0 2px 12px rgba(139,94,60,0.08)",
                    }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 8px 24px rgba(212,169,106,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(212,169,106,0.15)",
                        border: "1px solid rgba(196,149,106,0.3)",
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-medium"
                        style={{ color: "#C4956A" }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-xs font-semibold transition-colors hover:opacity-70 break-words"
                          style={{ color: "#2D1B0E" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className="text-xs font-semibold"
                          style={{ color: "#2D1B0E" }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Google Maps embed — Karwar, Karnataka */}
            <motion.div
              className="rounded-2xl overflow-hidden flex-1 min-h-64"
              style={{
                border: "1.5px solid rgba(196,149,106,0.28)",
                boxShadow: "0 8px 32px rgba(139,94,60,0.12)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30853.123456789!2d74.1240!3d14.8003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4dc3a3a3a3b%3A0x123456789abcdef0!2sKarwar%2C+Karnataka+581306!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreya Makeup & Hair - Karwar Location"
              />
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'd%20like%20to%20book%20a%20consultation!"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                color: "white",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaWhatsapp className="w-6 h-6" />
              Message on WhatsApp
            </motion.a>
          </div>

          {/* Right: Booking form */}
          <motion.div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1.5px solid rgba(196,149,106,0.28)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 8px 40px rgba(139,94,60,0.12)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3
              className="text-2xl font-bold heading-section mb-2"
              style={{ color: "#2D1B0E" }}
            >
              Send an Enquiry
            </h3>
            <p className="text-sm mb-6" style={{ color: "#8B5E3C" }}>
              Fill in your details and we'll send it straight to Shreya's
              WhatsApp.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle
                  className="w-16 h-16"
                  style={{ color: "#8B5E3C" }}
                />
                <p
                  className="font-semibold text-lg"
                  style={{ color: "#2D1B0E" }}
                >
                  Redirected to WhatsApp!
                </p>
                <p className="text-sm text-center" style={{ color: "#8B5E3C" }}>
                  Your details have been pre-filled. Just hit send!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-xs mb-1.5 block"
                      style={{ color: "#6B4226" }}
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.name_input"
                      required
                      placeholder="Priya Shetty"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      style={{
                        borderColor: "rgba(196,149,106,0.4)",
                        color: "#2D1B0E",
                      }}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-xs mb-1.5 block"
                      style={{ color: "#6B4226" }}
                    >
                      Mobile Number *
                    </Label>
                    <Input
                      id="phone"
                      data-ocid="contact.phone_input"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                      style={{
                        borderColor: "rgba(196,149,106,0.4)",
                        color: "#2D1B0E",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="date"
                    className="text-xs mb-1.5 block"
                    style={{ color: "#6B4226" }}
                  >
                    Wedding / Event Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    data-ocid="contact.date_input"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, date: e.target.value }))
                    }
                    style={{
                      borderColor: "rgba(196,149,106,0.4)",
                      color: "#2D1B0E",
                    }}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-xs mb-1.5 block"
                    style={{ color: "#6B4226" }}
                  >
                    Tell Us About Your Event
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message_input"
                    placeholder="Bridal look for wedding on 15th Nov, silk saree is off-white with gold zari, venue is near Karwar beach..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={4}
                    className="resize-none"
                    style={{
                      borderColor: "rgba(196,149,106,0.4)",
                      color: "#2D1B0E",
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  size="lg"
                  className="w-full h-12 text-base font-semibold text-white mt-2"
                  style={{
                    background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                    boxShadow: "0 4px 20px rgba(139,94,60,0.3)",
                  }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Enquiry via WhatsApp
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
