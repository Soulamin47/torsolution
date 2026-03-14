import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg,#07070A 0%, #0B1120 40%, #111827 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.15,
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: "-1px" }}>
            Torsolution
          </div>
          <div style={{ fontSize: 28, marginTop: 20, opacity: 0.85 }}>
            Freelance Developer — Web, Mobile & AI
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 18,
              letterSpacing: "3px",
              opacity: 0.5,
            }}
          >
            Brussels / Remote
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
