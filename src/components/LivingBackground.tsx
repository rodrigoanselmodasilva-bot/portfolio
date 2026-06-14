import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Living background system - 5 layers
 * Layer 1: subtle grid
 * Layer 2: blueprint lines
 * Layer 3: floating connection nodes
 * Layer 4: drifting particles
 * Layer 5: ambient light wash
 */
export function LivingBackground() {
  const isMobile = useIsMobile();
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  if (isMobile) {
    return <div className="pointer-events-none fixed inset-0 -z-10 bg-[#071B3A]" />;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 5 - ambient light wash following cursor */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(197,138,74,0.08), transparent 50%)`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Layer 1 - subtle grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#F2EFE7"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="grid-fine" width="16" height="16" patternUnits="userSpaceOnUse">
            <path
              d="M 16 0 L 0 0 0 16"
              fill="none"
              stroke="#F2EFE7"
              strokeWidth="0.25"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-fine)" />
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Layer 2 - blueprint diagonals (parallax) */}
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          x: (mouse.x - 0.5) * -20,
          y: (mouse.y - 0.5) * -10,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <g stroke="#C58A4A" strokeWidth="0.6" fill="none">
          <line x1="0" y1="700" x2="1440" y2="200" strokeDasharray="2 6" opacity="0.5" />
          <line x1="200" y1="0" x2="900" y2="900" strokeDasharray="2 6" opacity="0.4" />
          <line x1="1440" y1="500" x2="100" y2="100" strokeDasharray="1 8" opacity="0.3" />
          <circle cx="320" cy="240" r="3" fill="#C58A4A" opacity="0.8" />
          <circle cx="320" cy="240" r="14" opacity="0.4" />
          <circle cx="980" cy="620" r="2" fill="#F2EFE7" opacity="0.7" />
          <circle cx="980" cy="620" r="10" stroke="#F2EFE7" opacity="0.3" />
          <circle cx="640" cy="380" r="2" fill="#C58A4A" opacity="0.6" />
          <line x1="320" y1="240" x2="640" y2="380" opacity="0.4" />
          <line x1="640" y1="380" x2="980" y2="620" opacity="0.3" />
        </g>
      </motion.svg>

      {/* Layer 3 - floating connection nodes (slow drift) */}
      <div className="absolute inset-0">
        {NODES.map((n, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-bronze"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            animate={{
              y: [0, -6, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 6 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Layer 4 - drifting particles */}
      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute block h-px w-px rounded-full bg-ivory"
            style={
              {
                left: `${p.x}%`,
                top: `${p.y}%`,
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                animation: `float-particle ${p.dur}s linear ${p.delay}s infinite`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,19,39,0.7)_100%)]" />
    </div>
  );
}

const NODES = [
  { x: 12, y: 18 },
  { x: 22, y: 72 },
  { x: 48, y: 32 },
  { x: 66, y: 86 },
  { x: 82, y: 24 },
  { x: 91, y: 58 },
  { x: 38, y: 8 },
  { x: 8, y: 48 },
];

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  x: (i * 47) % 100,
  y: (i * 71) % 100,
  dx: ((i * 13) % 80) - 40,
  dy: -80 - ((i * 29) % 140),
  dur: 14 + ((i * 7) % 18),
  delay: (i * 1.3) % 12,
}));
