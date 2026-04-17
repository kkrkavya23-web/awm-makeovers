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
    value: "+91 94518 19583",
    href: "tel:+919451819583",
    color: "#E91E63",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh",
    href: "https://maps.google.com/?q=Lucknow",
    color: "#C9A84C",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9AM – 8PM",
    href: undefined,
    color: "#F06292",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@awm_makeovers_by_aastha",
    href: "https://instagram.com/awm_makeovers_by_aastha",
    color: "#E91E63",
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
      `Hi Aastha! I'd like to enquire about a booking.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nWedding Date: ${formData.date}\nMessage: ${formData.message}`,
    );
    window.open(`https://wa.me/919451819583?text=${msg}`, "_blank");
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
        background: "linear-gradient(180deg, #16213e 0%, #0d0d1a 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(233,30,99,0.07) 0%, transparent 60%)",
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
              background: "rgba(233,30,99,0.1)",
              border: "1px solid rgba(233,30,99,0.3)",
              color: "#F06292",
            }}
          >
            📍 Find Us
          </Badge>
          <h2 className="heading-section text-4xl lg:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-gradient-pink">Dream Look</span>
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-lg">
            Based in Lucknow, serving brides across India. Reach out and let's
            create your perfect bridal transformation.
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
                      background: "rgba(26,26,46,0.7)",
                      border: "1px solid rgba(233,30,99,0.12)",
                      backdropFilter: "blur(16px)",
                    }}
                    whileHover={{ y: -3, borderColor: "rgba(233,30,99,0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-sm text-white font-medium hover:text-pink-light transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Google Maps embed */}
            <motion.div
              className="rounded-2xl overflow-hidden flex-1 min-h-64"
              style={{
                border: "1px solid rgba(233,30,99,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114984.25929395577!2d80.85135!3d26.84649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AWM Makeovers - Lucknow Location"
              />
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book%20a%20consultation!"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl text-white font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
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
              background: "rgba(26,26,46,0.7)",
              border: "1px solid rgba(233,30,99,0.15)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-white heading-section mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-white/50 mb-6">
              Fill in your details and we'll send it straight to Aastha's
              WhatsApp.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle
                  className="w-16 h-16"
                  style={{ color: "#E91E63" }}
                />
                <p className="text-white font-semibold text-lg">
                  Redirected to WhatsApp!
                </p>
                <p className="text-white/50 text-sm text-center">
                  Your details have been pre-filled. Just hit send!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-xs text-white/60 mb-1.5 block"
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.name_input"
                      required
                      placeholder="Priya Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-pink-DEFAULT"
                      style={{ borderColor: "rgba(233,30,99,0.2)" }}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-xs text-white/60 mb-1.5 block"
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
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      style={{ borderColor: "rgba(233,30,99,0.2)" }}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="date"
                    className="text-xs text-white/60 mb-1.5 block"
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
                    className="bg-white/5 border-white/10 text-white"
                    style={{
                      borderColor: "rgba(233,30,99,0.2)",
                      colorScheme: "dark",
                    }}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-xs text-white/60 mb-1.5 block"
                  >
                    Tell Us About Your Event
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message_input"
                    placeholder="Bridal look for wedding on 15th Nov, lehenga is deep red, venue is Taj Mahal Hotel Lucknow..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
                    style={{ borderColor: "rgba(233,30,99,0.2)" }}
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  size="lg"
                  className="w-full h-12 text-base font-semibold text-white mt-2"
                  style={{
                    background: "linear-gradient(135deg, #E91E63, #C2185B)",
                    boxShadow: "0 4px 20px rgba(233,30,99,0.35)",
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
