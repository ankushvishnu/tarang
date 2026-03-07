import COLORS, { ACTIVE_THEME } from '../constants/colors';
import BRANDS from '../data/brands';

const accentColor = ACTIVE_THEME === "mystic" ? COLORS.gold : COLORS.accent;
const DOUBLED_BRANDS = [...BRANDS, ...BRANDS];

export default function BrandsSection() {
  return (
    <section style={{ padding: "60px 0", background: COLORS.marqueesBg, overflow: "hidden", position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: accentColor, fontWeight: 700, margin: 0 }}>
          Brands We Carry
        </p>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "marquee 56s linear infinite", width: "max-content" }}>
          {DOUBLED_BRANDS.map((brand, i) => (
            <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 28, padding: "0 36px", whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase", color: COLORS.marqueesText }}>
                {brand}
              </span>
              <span style={{ color: accentColor, fontSize: 10, opacity: 0.7 }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
