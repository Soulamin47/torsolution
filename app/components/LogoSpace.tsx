"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PARTICLES = Array.from({ length: 34 }, (_, index) => ({
  left: `${8 + ((index * 37) % 86)}%`,
  top: `${6 + ((index * 53) % 86)}%`,
  size: 2 + (index % 4),
  color: ["#cfc1ff", "#7c5cff", "#70e1c1", "#ffffff"][index % 4],
  delay: `${-(index % 9) * 0.43}s`,
  depth: 0.35 + (index % 5) * 0.12,
}));

export default function LogoSpace() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-13, 13]), { stiffness: 90, damping: 18 });
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [10, -10]), { stiffness: 90, damping: 18 });
  const x = useSpring(useTransform(pointerX, [-1, 1], [-18, 18]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(pointerY, [-1, 1], [-14, 14]), { stiffness: 80, damping: 20 });

  return (
    <div
      className="logo-space relative h-[430px] w-full overflow-visible md:h-[560px]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
        pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
      }}
      onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/30 blur-[64px]" />
      <div className="absolute left-[18%] top-[15%] h-28 w-28 rounded-full bg-[#7c5cff]/30 blur-[42px]" />
      <div className="absolute bottom-[12%] right-[13%] h-32 w-32 rounded-full bg-[#70e1c1]/28 blur-[46px]" />

      <div className="absolute inset-[6%] [perspective:1100px]">
        <div className="logo-orbit logo-orbit-a absolute inset-[8%] rounded-[50%] border border-white/12" />
        <div className="logo-orbit logo-orbit-b absolute inset-[18%] rounded-[50%] border border-[#7c5cff]/28" />
        <div className="logo-orbit logo-orbit-c absolute inset-[29%] rounded-[50%] border border-[#00a878]/30" />
      </div>

      {PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          className="logo-particle absolute rounded-full"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, background: particle.color, opacity: particle.depth, animationDelay: particle.delay }}
        />
      ))}

      <motion.div
        className="logo-float absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, x, y }}
      >
        <div className="absolute h-[290px] w-[290px] rounded-[34%] border border-white/10 bg-white/[0.03] shadow-[0_45px_120px_rgba(124,92,255,.22)] backdrop-blur-[2px] [transform:translateZ(-70px)_rotate(8deg)]" />
        <div className="absolute h-[250px] w-[250px] rounded-[34%] border border-[#7c5cff]/22 bg-[#7c5cff]/[0.05] [transform:translateZ(-32px)_rotate(-5deg)]" />
        <motion.div
          className="relative [transform:translateZ(55px)]"
          animate={{ y: [-7, 7, -7], rotate: [-1.2, 1.2, -1.2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/logo-mark.svg" alt="" width={260} height={260} priority className="h-[220px] w-[220px] drop-shadow-[0_0_34px_rgba(124,92,255,.45)] md:h-[280px] md:w-[280px]" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-[8%] left-1/2 h-px w-[58%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
    </div>
  );
}
