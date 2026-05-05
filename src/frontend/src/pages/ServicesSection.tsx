import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types";
import { Canvas, useFrame } from "@react-three/fiber";
import { Check, Crown, Heart, Scissors, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingOrb({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.45;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.4, 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.1}
        wireframe
      />
    </mesh>
  );
}

const services: Service[] = [
  {
    id: 1,
    title: "Bridal Makeup",
    subtitle: "The Royal Package",
    description:
      "A flawless bridal transformation tailored for South Indian weddings — silk sarees, temple jewellery, and that timeless bridal glow. Your most precious look, perfected.",
    price: "\u20b918,000",
    features: [
      "Pre-bridal skin prep",
      "HD airbrush foundation",
      "8-10 hour staying power",
      "Silk saree coordination",
      "Touch-up kit included",
      "Temple jewellery look",
    ],
    icon: "\uD83D\uDC51",
    isPopular: true,
    badge: "Most Loved",
  },
  {
    id: 2,
    title: "Bridal Hair Styling",
    subtitle: "Hair Transformation",
    description:
      "From classic South Indian braided buns with jasmine to modern curls and updos — every hairstyle is crafted to complement your bridal look and jewellery.",
    price: "\u20b910,000",
    features: [
      "Jasmine & floral styling",
      "Traditional juda/bun",
      "Modern curls & waves",
      "Maang parting setup",
      "Long-lasting hold",
      "Accessories placement",
    ],
    icon: "\uD83C\uDF38",
    badge: "Hair Specialist",
  },
  {
    id: 3,
    title: "Engagement Makeup",
    subtitle: "Roka & Sagai Glow",
    description:
      "Soft glam meets luminous elegance for your ring ceremony. Perfect first bridal appearance with dewy skin and subtle drama for photos and family moments.",
    price: "\u20b912,000",
    features: [
      "Dewy luminous skin",
      "Subtle eye drama",
      "Saree-ready look",
      "4-6 hour longevity",
      "Hair pin-up styling",
      "Consultation included",
    ],
    icon: "\uD83D\uDC8D",
  },
  {
    id: 4,
    title: "Mehndi / Haldi Look",
    subtitle: "Vibrant & Festive",
    description:
      "Bright, joyful, and Instagram-perfect looks for your colourful pre-wedding ceremonies in Karwar. Waterproof formulas for Haldi and Mehndi rituals.",
    price: "\u20b97,000",
    features: [
      "Bold festive colours",
      "Waterproof formulas",
      "Kajal & kohl detailing",
      "Flower accessory styling",
      "Haldi-proof base",
      "3-4 hour wear",
    ],
    icon: "\uD83C\uDF3C",
  },
  {
    id: 5,
    title: "Reception / Sangeet",
    subtitle: "Evening Glamour",
    description:
      "Dramatic, luminous, and magnetic for your reception night. Sculptured, glossy, and built for dance floors and flash photography at your Karwar venue.",
    price: "\u20b915,000",
    features: [
      "Smoky/dramatic eyes",
      "Contouring & highlight",
      "Long-wear lip colour",
      "Hair styling included",
      "Setting spray finish",
      "6-8 hour endurance",
    ],
    icon: "\u2728",
  },
  {
    id: 6,
    title: "Party & Event Makeup",
    subtitle: "For Every Occasion",
    description:
      "Birthdays, anniversaries, poojas, and social events — coordinated beautiful looks for every celebration with professional products and expert techniques.",
    price: "\u20b95,000",
    features: [
      "Natural & glam options",
      "Family coordination",
      "Express 45-min looks",
      "Travel to venue",
      "Premium products only",
      "Group discounts",
    ],
    icon: "\uD83E\uDD73",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      data-ocid={`services.item.${service.id}`}
      className="relative group rounded-2xl p-6 flex flex-col gap-4 cursor-default"
      style={{
        background: "rgba(255,255,255,0.88)",
        border: service.isPopular
          ? "1.5px solid rgba(212,169,106,0.55)"
          : "1px solid rgba(196,149,106,0.22)",
        boxShadow: service.isPopular
          ? "0 8px 40px rgba(212,169,106,0.22), 0 0 0 4px rgba(212,169,106,0.08)"
          : "0 4px 20px rgba(139,94,60,0.1)",
        backdropFilter: "blur(20px)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 16px 48px rgba(212,169,106,0.32), 0 0 0 2px rgba(212,169,106,0.3)",
      }}
    >
      {service.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge
            className="px-4 py-1 text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #8B5E3C, #C4956A)" }}
          >
            <Crown className="w-3 h-3 mr-1" />
            {service.badge}
          </Badge>
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <span className="text-3xl mb-2 block">{service.icon}</span>
          <h3
            className="text-lg font-bold heading-section"
            style={{ color: "#2D1B0E" }}
          >
            {service.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: "#C4956A" }}>
            {service.subtitle}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gradient-brown">
            {service.price}
          </p>
          {service.badge && !service.isPopular && (
            <Badge
              variant="outline"
              className="text-xs mt-1"
              style={{
                borderColor: "rgba(196,149,106,0.45)",
                color: "#8B5E3C",
              }}
            >
              {service.badge}
            </Badge>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "#6B4226" }}>
        {service.description}
      </p>

      <ul className="grid grid-cols-2 gap-1.5">
        {service.features.map((feat) => (
          <li
            key={feat}
            className="flex items-start gap-1.5 text-xs"
            style={{ color: "#8B5E3C" }}
          >
            <Check
              className="w-3 h-3 mt-0.5 shrink-0"
              style={{ color: "#C4956A" }}
            />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <motion.a
        href="https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'm%20interested%20in%20booking!"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`services.book_button.${service.id}`}
        className="mt-auto flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-semibold transition-all duration-300"
        style={{
          background: service.isPopular
            ? "linear-gradient(135deg, #8B5E3C, #C4956A)"
            : "rgba(139,94,60,0.08)",
          color: service.isPopular ? "white" : "#8B5E3C",
          border: service.isPopular ? "none" : "1px solid rgba(139,94,60,0.25)",
          boxShadow: service.isPopular
            ? "0 4px 16px rgba(139,94,60,0.28)"
            : "none",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Sparkles className="w-3.5 h-3.5" />
        Book This Package
      </motion.a>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      data-ocid="services.section"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5EFE6 0%, #FAF6F0 100%)",
      }}
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} color="#D4A96A" intensity={1.2} />
          <FloatingOrb position={[-5, 2, -3]} color="#C4956A" />
          <FloatingOrb position={[5, -2, -3]} color="#D4A96A" />
          <FloatingOrb position={[0, 4, -5]} color="#8B5E3C" />
        </Canvas>
      </div>

      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(212,169,106,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            <Star className="w-3.5 h-3.5 mr-1.5" />
            Luxury Services
          </Badge>
          <h2
            className="heading-section text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2D1B0E" }}
          >
            Crafted for Your{" "}
            <span className="text-gradient-brown">Biggest Moments</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: "#6B4226" }}
          >
            From intimate roka ceremonies to grand reception nights in Karwar —
            each service is a masterpiece tailored exclusively for you.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-sm mb-4 flex items-center justify-center gap-2"
            style={{ color: "#8B5E3C" }}
          >
            <Heart className="w-4 h-4" style={{ color: "#C4956A" }} />
            Custom packages available — reach out for a personalised quote
          </p>
          <a href="tel:+919611366425">
            <button
              type="button"
              data-ocid="services.contact_button"
              className="text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105"
              style={{
                background: "rgba(139,94,60,0.1)",
                color: "#8B5E3C",
                border: "1px solid rgba(139,94,60,0.28)",
                boxShadow: "0 4px 16px rgba(212,169,106,0.2)",
              }}
            >
              <Scissors className="w-3.5 h-3.5 inline mr-2" />
              Call: +91 96113 66425
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
