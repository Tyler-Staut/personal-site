interface BrandLogoProps {
  className?: string;
  kind?: "symbol" | "wordmark";
  tone?: "dark" | "light" | "theme";
}

export default function BrandLogo({
  className = "",
  kind = "wordmark",
  tone = "theme",
}: BrandLogoProps) {
  if (kind === "symbol") {
    return (
      <span
        aria-label="Tyler Staut"
        className={`inline-flex items-center justify-center font-display text-2xl font-bold leading-none ${tone === "dark" ? "text-navy-text" : tone === "light" ? "text-white" : "text-white"} ${className}`.trim()}
        role="img"
      >
        TS
      </span>
    );
  }

  return (
    <span
      aria-label="Tyler Staut"
      className={`brand-logo brand-logo-tone-${tone} ${className}`.trim()}
      role="img"
    >
      <span
        className="font-display text-xl font-bold uppercase tracking-[0.08em] text-white transition-opacity duration-240"
        style={{ gridArea: "1 / 1" }}
      >
        Tyler Staut
      </span>
      <span
        className="font-display text-xl font-bold uppercase tracking-[0.08em] text-navy-text transition-opacity duration-240 brand-logo-image-light"
        style={{ gridArea: "1 / 1" }}
      >
        Tyler Staut
      </span>
    </span>
  );
}
