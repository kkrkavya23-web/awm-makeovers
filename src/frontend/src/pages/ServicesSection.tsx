import { Badge } from "@/components/ui/badge";
import type { Service } from "@/types";
import { Canvas, useFrame } from "@react-three/fiber";
import { Check, Crown, Heart, Sparkles, Star } from "lucide-react";
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
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.4, 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.15}
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
      "A cinematic, flawless bridal transformation that lasts through every hug, every teardrop of joy, and every dance. From dewy skin to sculpted contour — your lehenga deserves this perfection.",
    price: "₹29,000",
    features: [
      "Pre-bridal skin prep",
      "HD airbrush foundation",
      "Maang tikka & dupatta drape",
      "8–10 hour staying power",
      "Touch-up kit included",
      "Lehenga colour matching",
    ],
    icon: "👑",
    isPopular: true,
    badge: "Most Loved",
  },
  {
    id: 2,
    title: "Celebrity / Event",
    subtitle: "Red Carpet Perfection",
    description:
      "The same look that graces magazine covers and premieres. Editorial-grade makeup for film shoots, award shows, TV appearances, and high-society events.",
    price: "₹25,000",
    features: [
      "Camera-ready finish",
      "Colour-correcting base",
      "Airbrushing available",
      "Flash-proof formulas",
      "Lighting-tested looks",
      "On-set touch-ups",
    ],
    icon: "⭐",
    badge: "Celebrity Favourite",
  },
  {
    id: 3,
    title: "Engagement Makeup",
    subtitle: "Roka & Sagai Glow",
    description:
      "Your first bridal appearance deserves a stunning first impression. Soft glam meets timeless elegance — perfect for ring ceremonies, rokha, and roka celebrations.",
    price: "₹18,000",
    features: [
      "Dewy luminous skin",
      "Subtle eye drama",
      "Saree & anarkali-ready",
      "4–6 hour longevity",
      "Nose pin drape styling",
      "Consultation included",
    ],
    icon: "💍",
  },
  {
    id: 4,
    title: "Mehndi / Haldi",
    subtitle: "Vibrant & Festive",
    description:
      "Bright, playful, and Instagram-perfect looks for your colourful pre-wedding ceremonies. Let your joy shine through every photograph.",
    price: "₹12,000",
    features: [
      "Bold festive colours",
      "Waterproof formulas",
      "Kajal & kohl detailing",
      "Flower accessory styling",
      "Haldi-proof base",
      "3–4 hour wear",
    ],
    icon: "🌸",
  },
  {
    id: 5,
    title: "Reception / Sangeet",
    subtitle: "Glamour After Dark",
    description:
      "Dramatic, luminous, and magnetic — your reception makeup is your grand reveal. Sculpted, glossy, and built for dance floors and flash photography.",
    price: "₹20,000",
    features: [
      "Smoky/dramatic eyes",
      "Contouring & highlight",
      "Long-wear lip colour",
      "Glitter & rhinestones",
      "Setting spray finish",
      "6–8 hour endurance",
    ],
    icon: "✨",
  },
  {
    id: 6,
    title: "Bridal Party",
    subtitle: "For the Entire Crew",
    description:
      "Coordinated looks for bridesmaids, mothers of the bride, and family members — consistent elegance across your entire bridal party.",
    price: "₹8,000/person",
    features: [
      "Matching palette themes",
      "Family coordination",
      "Express 45-min looks",
      "Coordinated with bride",
      "Group discounts",
      "Travel to venue",
    ],
    icon: "👯",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      data-ocid={`services.item.${service.id}`}
      className="relative group rounded-2xl p-6 flex flex-col gap-4 cursor-default"
      style={{
        background: "rgba(26,26,46,0.7)",
        border: service.isPopular
          ? "1px solid rgba(233,30,99,0.4)"
          : "1px solid rgba(233,30,99,0.12)",
        boxShadow: service.isPopular
          ? "0 8px 40px rgba(233,30,99,0.18)"
          : "0 4px 20px rgba(0,0,0,0.3)",
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
          "0 16px 48px rgba(233,30,99,0.28), 0 0 0 1px rgba(233,30,99,0.25)",
      }}
    >
      {service.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge
            className="px-4 py-1 text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #E91E63, #C2185B)" }}
          >
            <Crown className="w-3 h-3 mr-1" />
            {service.badge}
          </Badge>
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <span className="text-3xl mb-2 block">{service.icon}</span>
          <h3 className="text-lg font-bold text-white heading-section">
            {service.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: "#F06292" }}>
            {service.subtitle}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gradient-pink">
            {service.price}
          </p>
          {service.badge && !service.isPopular && (
            <Badge
              variant="outline"
              className="text-xs mt-1"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" }}
            >
              {service.badge}
            </Badge>
          )}
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed">
        {service.description}
      </p>

      <ul className="grid grid-cols-2 gap-1.5">
        {service.features.map((feat) => (
          <li
            key={feat}
            className="flex items-start gap-1.5 text-xs text-white/65"
          >
            <Check
              className="w-3 h-3 mt-0.5 shrink-0"
              style={{ color: "#E91E63" }}
            />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <motion.a
        href="https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27m%20interested%20in%20booking!"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`services.book_button.${service.id}`}
        className="mt-auto flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-semibold transition-all duration-300"
        style={{
          background: service.isPopular
            ? "linear-gradient(135deg, #E91E63, #C2185B)"
            : "rgba(233,30,99,0.1)",
          color: service.isPopular ? "white" : "#F06292",
          border: service.isPopular ? "none" : "1px solid rgba(233,30,99,0.25)",
          boxShadow: service.isPopular
            ? "0 4px 16px rgba(233,30,99,0.35)"
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
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} color="#E91E63" intensity={1} />
          <FloatingOrb position={[-5, 2, -3]} color="#E91E63" />
          <FloatingOrb position={[5, -2, -3]} color="#C9A84C" />
          <FloatingOrb position={[0, 4, -5]} color="#F06292" />
        </Canvas>
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(233,30,99,0.07) 0%, transparent 60%)",
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
              background: "rgba(233,30,99,0.1)",
              border: "1px solid rgba(233,30,99,0.3)",
              color: "#F06292",
            }}
          >
            <Star className="w-3.5 h-3.5 mr-1.5" />
            Luxury Services
          </Badge>
          <h2 className="heading-section text-4xl lg:text-5xl font-bold text-white mb-4">
            Crafted for Your{" "}
            <span className="text-gradient-pink">Biggest Moments</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            From intimate roka ceremonies to grand reception nights — each
            service is a masterpiece tailored exclusively for you.
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
          <p className="text-white/50 text-sm mb-4 flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" style={{ color: "#E91E63" }} />
            Custom packages available — reach out for a personalised quote
          </p>
          <a href="tel:+919451819583">
            <button
              type="button"
              data-ocid="services.contact_button"
              className="text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105"
              style={{
                background: "rgba(233,30,99,0.12)",
                color: "#F06292",
                border: "1px solid rgba(233,30,99,0.25)",
              }}
            >
              📞 Call: +91 94518 19583
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
