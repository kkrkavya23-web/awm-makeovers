import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Award, Calendar, Phone, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh, Points } from "three";

function AnimatedSphere({
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
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.45}
          speed={3}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef<Points>(null);
  const count = 180;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#E91E63"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function RingObject() {
  const ringRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <mesh ref={ringRef} position={[3.5, 1, -2]}>
      <torusGeometry args={[1.2, 0.06, 16, 80]} />
      <meshStandardMaterial color="#C9A84C" metalness={0.95} roughness={0.05} />
    </mesh>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#E91E63" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#C9A84C" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        intensity={1.2}
        color="#F06292"
      />
      <Stars
        radius={60}
        depth={50}
        count={600}
        factor={3}
        saturation={0.8}
        fade
        speed={0.8}
      />
      <ParticleField />
      <AnimatedSphere
        position={[-3.5, 1.5, -3]}
        color="#E91E63"
        size={0.9}
        speed={0.8}
      />
      <AnimatedSphere
        position={[4, -1.5, -4]}
        color="#C9A84C"
        size={0.65}
        speed={1.1}
      />
      <AnimatedSphere
        position={[-1.5, -2.5, -2]}
        color="#F06292"
        size={0.45}
        speed={1.4}
      />
      <AnimatedSphere
        position={[2.5, 3, -5]}
        color="#9C27B0"
        size={0.55}
        speed={0.7}
      />
      <RingObject />
    </>
  );
}

const stats = [
  { value: "500+", label: "Brides Transformed" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Celebrity Clients" },
  { value: "100%", label: "5-Star Reviews" },
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
          "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 60%, #16213e 100%)",
      }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Pink radial glow */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(233,30,99,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 70% 60%, rgba(201,168,76,0.06) 0%, transparent 60%)",
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
                  background: "rgba(233,30,99,0.1)",
                  borderColor: "rgba(233,30,99,0.3)",
                  color: "#F06292",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Celebrity Makeup Artist · Lucknow
              </Badge>
            </motion.div>

            <motion.h1
              className="heading-display text-5xl lg:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-gradient-pink">AWM</span>
              <br />
              <span className="text-white">Makeovers</span>
              <br />
              <span className="text-gradient-gold">By Aastha</span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/70 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Lucknow's most celebrated bridal makeup artist — trusted by{" "}
              <strong className="text-white/90">A-list celebrities</strong>,
              brides, and royalty. Every lehenga, every maang tikka, every
              moment — perfected with artistry.
            </motion.p>

            {/* Awards strip */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                "Bollywood Approved",
                "Wedding Wire Top Artist",
                "Vogue Featured",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.25)",
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
                href="https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book%20bridal%20makeup!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  data-ocid="hero.book_button"
                  size="lg"
                  className="relative h-12 px-8 text-base font-semibold text-white overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #E91E63, #C2185B)",
                    boxShadow: "0 4px 24px rgba(233,30,99,0.45)",
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Bridal Look
                  <div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #F06292, #E91E63)",
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
                    borderColor: "rgba(233,30,99,0.4)",
                    color: "#F06292",
                    background: "rgba(233,30,99,0.06)",
                  }}
                >
                  View Portfolio
                </Button>
              </a>
            </motion.div>

            {/* Contact */}
            <motion.a
              href="tel:+919451819583"
              data-ocid="hero.phone_link"
              className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Phone className="w-4 h-4" style={{ color: "#E91E63" }} />
              <span className="text-sm">+91 94518 19583</span>
            </motion.a>
          </div>

          {/* Right: Hero Image + 3D decorative elements */}
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
              {/* Glow ring behind image */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(233,30,99,0.3) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Hero photo */}
              <div
                className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 24px 64px rgba(233,30,99,0.3), 0 0 0 1px rgba(233,30,99,0.2)",
                }}
              >
                <img
                  src="/assets/photo1.png"
                  alt="Aastha - Premium Bridal Makeup Artist"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,13,26,0.5) 0%, transparent 50%)",
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
              >
                <div className="flex items-center gap-2">
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: "#C9A84C" }}
                  />
                  <div>
                    <p className="text-xs font-semibold text-white">
                      5.0 Rating
                    </p>
                    <p className="text-xs text-white/50">500+ Brides</p>
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
              >
                <div className="text-center">
                  <p className="text-xs font-bold" style={{ color: "#E91E63" }}>
                    Celebrity
                  </p>
                  <p className="text-xs text-white/70">Makeup Artist</p>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.04 }}
            >
              <p className="text-3xl font-bold heading-display text-gradient-pink">
                {stat.value}
              </p>
              <p className="text-xs text-white/50 mt-1 font-medium">
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
          style={{ borderColor: "rgba(233,30,99,0.4)" }}
        >
          <div
            className="w-1 h-3 rounded-full animate-pulse"
            style={{ background: "#E91E63" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
