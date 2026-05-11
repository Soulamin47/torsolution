"use client";

type Cat = "frontend" | "mobile" | "backend" | "ai" | "web3";

const CAT_STYLES: Record<Cat, { bg: string; border: string; text: string }> = {
  frontend: { bg: "rgba(175,169,236,0.08)", border: "rgba(175,169,236,0.2)",  text: "#AFA9EC" },
  mobile:   { bg: "rgba(29,158,117,0.08)",  border: "rgba(29,158,117,0.2)",   text: "#5DCAA5" },
  backend:  { bg: "rgba(55,138,221,0.08)",  border: "rgba(55,138,221,0.2)",   text: "#85B7EB" },
  ai:       { bg: "rgba(239,159,39,0.08)",  border: "rgba(239,159,39,0.2)",   text: "#EF9F27" },
  web3:     { bg: "rgba(212,83,126,0.08)",  border: "rgba(212,83,126,0.2)",   text: "#D4537E" },
};

const ROW1: { label: string; cat: Cat }[] = [
  { label: "Next.js",    cat: "frontend" },
  { label: "React",      cat: "frontend" },
  { label: "TypeScript", cat: "frontend" },
  { label: "Tailwind",   cat: "frontend" },
  { label: "Framer",     cat: "frontend" },
  { label: "Flutter",    cat: "mobile"   },
  { label: "Dart",       cat: "mobile"   },
  { label: "Supabase",   cat: "backend"  },
  { label: "PostgreSQL", cat: "backend"  },
];

const ROW2: { label: string; cat: Cat }[] = [
  { label: "OpenAI",     cat: "ai"       },
  { label: "Python",     cat: "ai"       },
  { label: "LangChain",  cat: "ai"       },
  { label: "n8n",        cat: "ai"       },
  { label: "Solidity",   cat: "web3"     },
  { label: "Ethers.js",  cat: "web3"     },
  { label: "Node.js",    cat: "backend"  },
  { label: "Prisma",     cat: "backend"  },
  { label: "Hardhat",    cat: "web3"     },
];

function Badge({ label, cat }: { label: string; cat: Cat }) {
  const s = CAT_STYLES[cat];
  return (
    <span
      className="font-mono text-[11px] shrink-0 mx-[5px]"
      style={{
        background: s.bg,
        border: `0.5px solid ${s.border}`,
        color: s.text,
        borderRadius: "4px",
        padding: "6px 14px",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: { label: string; cat: Cat }[];
  direction: "left" | "right";
  duration: number;
}) {
  // duplicate for seamless loop
  const doubled = [...items, ...items];
  const animName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <Badge key={`${item.label}-${i}`} label={item.label} cat={item.cat} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="border-t border-b border-white/[0.06] py-5 space-y-[10px] overflow-hidden">
      <MarqueeRow items={ROW1} direction="left"  duration={25} />
      <MarqueeRow items={ROW2} direction="right" duration={30} />
    </div>
  );
}
