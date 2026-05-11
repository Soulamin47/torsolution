"use client";

export default function BackgroundOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Orbe purple — top left */}
      <div
        style={{
          position: "absolute",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(175,169,236,0.08) 0%, transparent 70%)",
          top: "-20vw",
          left: "-20vw",
          animation: "pulse-orb-1 8s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />

      {/* Orbe teal — bottom right */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(29,158,117,0.06) 0%, transparent 70%)",
          bottom: "-15vw",
          right: "-15vw",
          animation: "pulse-orb-2 10s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      {/* Orbe blue — center */}
      <div
        style={{
          position: "absolute",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(133,183,235,0.04) 0%, transparent 70%)",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          animation: "pulse-orb-3 12s ease-in-out infinite",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
