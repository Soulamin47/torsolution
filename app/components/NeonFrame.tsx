"use client";

// Framer-style neon border: a conic-gradient light beam orbits the card edge,
// with a soft outer glow. Content sits on a solid bg inset by 1.5px so only
// a thin luminous ring shows.

export default function NeonFrame({
  children,
  className = "",
  radius = 10,
  colors = ["#AFA9EC", "#5EEAD4"] as [string, string],
  fill = false,
  speed = 7,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  colors?: [string, string];
  fill?: boolean;
  speed?: number;
}) {
  const [c1, c2] = colors;

  return (
    <div className={`relative ${className}`} style={{ borderRadius: radius }}>
      {/* Soft outer glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[2px]"
        style={{
          borderRadius: radius + 2,
          boxShadow: `0 0 46px -8px ${c1}59, 0 0 26px -12px ${c2}4D`,
        }}
      />

      {/* Orbiting light beam, clipped to the border ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px overflow-hidden"
        style={{ borderRadius: radius }}
      >
        <div
          className="absolute left-1/2 top-1/2 aspect-square w-[220%]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${c1} 45deg, ${c2} 85deg, transparent 140deg, transparent 200deg, ${c1}66 265deg, transparent 320deg)`,
            animation: `neon-rotate ${speed}s linear infinite`,
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Faint static ring so the border is never fully dark */}
        <div
          className="absolute inset-0"
          style={{ borderRadius: radius, border: "1px solid rgba(255,255,255,0.08)" }}
        />
      </div>

      {/* Content — solid bg required so the beam reads as a 1.5px ring */}
      <div
        className={fill ? "absolute inset-[1.5px]" : "relative m-[1.5px]"}
        style={{ borderRadius: radius - 2 }}
      >
        {children}
      </div>
    </div>
  );
}
