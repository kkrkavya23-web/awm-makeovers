import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Award, Calendar, MapPin, Phone, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh, Points } from "three";

function GoldenOrb({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={2.5}
          roughness={0.12}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

function WarmParticles() {
  const pointsRef = useRef<Points>(null);
  const count = 160;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.018) * 0.04;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#C4956A"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function GoldenRing() {
  const ringRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return (
    <mesh ref={ringRef} position={[3.8, 1.2, -2.5]}>
      <torusGeometry args={[1.3, 0.055, 16, 80]} />
      <meshStandardMaterial color="#D4A96A" metalness={0.95} roughness={0.04} />
    </mesh>
  );
}

function DiamondShape() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={[-4, -1.5, -3]}>
      <octahedronGeometry args={[0.55, 0]} />
      <meshStandardMaterial color="#8B5E3C" metalness={0.9} roughness={0.08} />
    </mesh>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.7} color="#FFF8F0" />
      <pointLight position={[5, 5, 5]} intensity={2} color="#D4A96A" />
      <pointLight position={[-5, -3, 4]} intensity={1} color="#C4956A" />
      <spotLight
        position={[0, 8, 2]}
        angle={0.35}
        intensity={1.5}
        color="#EDD9A3"
      />
      <WarmParticles />
      <GoldenOrb
        position={[-3.5, 1.5, -3]}
        color="#D4A96A"
        size={0.85}
        speed={0.7}
      />
      <GoldenOrb
        position={[4, -1.5, -4]}
        color="#C4956A"
        size={0.6}
        speed={1.0}
      />
      <GoldenOrb
        position={[-1.5, -2.5, -2]}
        color="#EDD9A3"
        size={0.42}
        speed={1.3}
      />
      <GoldenOrb
        position={[2.5, 3, -5]}
        color="#8B5E3C"
        size={0.5}
        speed={0.65}
      />
      <GoldenRing />
      <DiamondShape />
    </>
  );
}

const stats = [
  { value: "300+", label: "Brides Transformed" },
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "5-Star Reviews" },
  { value: "On-Site", label: "Service Available" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAF6F0 0%, #F5EFE6 55%, #EDE0D0 100%)",
      }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Warm golden radial glows */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 30% 50%, rgba(212,169,106,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 45% at 72% 58%, rgba(196,149,106,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 text-sm font-medium border"
                style={{
                  background: "rgba(139,94,60,0.1)",
                  borderColor: "rgba(139,94,60,0.3)",
                  color: "#8B5E3C",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Premium Bridal Makeup Artist · Karwar, Karnataka
              </Badge>
            </motion.div>

            <motion.h1
              className="heading-display text-5xl lg:text-6xl font-bold"
              style={{ color: "#2D1B0E" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-gradient-brown">Shreya</span>
              <br />
              <span style={{ color: "#2D1B0E" }}>Makeup</span>
              <br />
              <span className="text-gradient-gold">&amp; Hair</span>
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed max-w-md"
              style={{ color: "#6B4226" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Karwar's most celebrated bridal makeup &amp; hair styling artist —
              specialising in{" "}
              <strong style={{ color: "#8B5E3C" }}>
                South Indian bridal looks
              </strong>
              , saree draping, and luxurious hair transformations for your most
              precious moments.
            </motion.p>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                "South Indian Specialist",
                "Bridal Hair Expert",
                "On-Venue Service",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(212,169,106,0.15)",
                    color: "#8B5E3C",
                    border: "1px solid rgba(196,149,106,0.35)",
                    boxShadow: "0 0 12px rgba(212,169,106,0.2)",
                  }}
                >
                  <Award className="w-3 h-3" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="https://wa.me/919611366425?text=Hi%20Shreya%2C%20I%27d%20like%20to%20book%20bridal%20makeup!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  data-ocid="hero.book_button"
                  size="lg"
                  className="relative h-12 px-8 text-base font-semibold text-white overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                    boxShadow:
                      "0 4px 24px rgba(139,94,60,0.35), 0 0 40px rgba(212,169,106,0.2)",
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Bridal Look
                  <div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                    }}
                  />
                </Button>
              </a>
              <a href="#portfolio">
                <Button
                  data-ocid="hero.portfolio_button"
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base font-semibold"
                  style={{
                    borderColor: "rgba(139,94,60,0.45)",
                    color: "#8B5E3C",
                    background: "rgba(212,169,106,0.08)",
                  }}
                >
                  View Portfolio
                </Button>
              </a>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="tel:+919611366425"
                data-ocid="hero.phone_link"
                className="flex items-center gap-2 w-fit transition-colors"
                style={{ color: "#6B4226" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#8B5E3C" }} />
                <span className="text-sm font-medium">+91 96113 66425</span>
              </a>
              <div
                className="flex items-center gap-2"
                style={{ color: "#6B4226" }}
              >
                <MapPin className="w-4 h-4" style={{ color: "#C4956A" }} />
                <span className="text-xs">Karwar, Karnataka 581306</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Warm glow ring behind image */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,169,106,0.4) 0%, transparent 70%)",
                  filter: "blur(28px)",
                  transform: "scale(1.1)",
                }}
              />

              {/* Hero photo frame */}
              <div
                className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 24px 64px rgba(139,94,60,0.25), 0 0 0 3px rgba(212,169,106,0.4), 0 0 48px rgba(212,169,106,0.2)",
                }}
              >
                <img
                  src="/assets/photo1.png"
                  alt="Shreya - Premium Bridal Makeup & Hair Artist, Karwar"
                  className="w-full h-full object-cover"
                />
                {/* Warm overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(45,27,14,0.4) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-16 top-8 glass px-4 py-3 rounded-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ boxShadow: "0 8px 32px rgba(212,169,106,0.3)" }}
              >
                <div className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: "#D4A96A" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "#2D1B0E" }}
                    >
                      5.0 Rating
                    </p>
                    <p className="text-xs" style={{ color: "#8B5E3C" }}>
                      300+ Brides
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-12 bottom-16 glass px-4 py-3 rounded-2xl"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ boxShadow: "0 8px 32px rgba(212,169,106,0.3)" }}
              >
                <div className="text-center">
                  <p className="text-xs font-bold" style={{ color: "#8B5E3C" }}>
                    Bridal
                  </p>
                  <p className="text-xs" style={{ color: "#6B4226" }}>
                    Hair Expert
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl px-6 py-5 text-center"
              style={{ boxShadow: "0 4px 20px rgba(212,169,106,0.15)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(212,169,106,0.28)",
              }}
            >
              <p className="text-3xl font-bold heading-display text-gradient-brown">
                {stat.value}
              </p>
              <p
                className="text-xs mt-1 font-medium"
                style={{ color: "#8B5E3C" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(139,94,60,0.45)" }}
        >
          <div
            className="w-1 h-3 rounded-full animate-pulse"
            style={{ background: "#C4956A" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
