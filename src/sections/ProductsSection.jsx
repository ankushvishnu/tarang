import COLORS, { ACTIVE_THEME } from '../constants/colors';
import SectionHeader from '../components/ui/SectionHeader';
import PRODUCTS from '../data/products';

const iconColor  = ACTIVE_THEME === "mystic" ? COLORS.gold  : COLORS.accent;
const iconBg     = ACTIVE_THEME === "mystic" ? COLORS.goldLight : COLORS.accentLight;

const TRUST_BADGES = [
  { icon: "✦", title: "Hand-picked Catalogue & Quality", desc: "Every instrument is personally selected for tone, build quality, and value. No compromises." },
  { icon: "◈", title: "Expert Guidance",                 desc: "Our team of active musicians helps you choose the right instrument for your level and goals." },
  { icon: "♩", title: "Expert Tuning Before Dispatch",   desc: "Each instrument is professionally set up and tuned before it reaches your hands — ready to play." },
];

export default function ProductsSection() {
  return (
    <section id="products" style={{
      padding: "100px 32px",
      background: COLORS.pageBg,
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader eyebrow="Your one-stop destination for all types of musical instruments in Pune" title="Our Collection" />

        {/* Trust badges */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20, margin: "0 auto 64px", maxWidth: 1000,
        }} className="trust-grid">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.title} className="card-hover" style={{
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: 16, padding: "24px 22px",
              display: "flex", flexDirection: "column", gap: 10,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}>
              <span style={{ fontSize: 22, color: iconColor, fontFamily: "serif" }}>{badge.icon}</span>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 17, fontWeight: 700,
                color: COLORS.text, letterSpacing: "0.02em", lineHeight: 1.3,
              }}>{badge.title}</h4>
              <p style={{
                fontSize: 13, color: COLORS.textLight,
                lineHeight: 1.7, fontFamily: "'Lora', Georgia, serif", margin: 0,
              }}>{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PRODUCTS.map((product) => (
            <a key={product.name}
              href="https://vyaparapp.in/store/tarangmusicals"
              target="_blank" rel="noopener noreferrer"
              className="card-hover product-card"
              style={{
                background: COLORS.cardBg,
                border: product.highlighted ? `1px solid ${COLORS.cardBorderHover}` : `1px solid ${COLORS.cardBorder}`,
                borderRadius: 20, overflow: "hidden",
                boxShadow: product.highlighted ? "0 8px 32px rgba(0,0,0,0.10)" : "0 4px 16px rgba(0,0,0,0.05)",
                cursor: "pointer", textDecoration: "none", display: "block",
              }}
            >
              <div style={{ width: "100%", height: 200, overflow: "hidden", position: "relative", background: COLORS.sectionAlt }}>
                <img src={product.img} alt={product.name} className="product-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%)" }} />
              </div>
              <div style={{ padding: "22px 22px 26px" }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 22, fontWeight: 600,
                  color: COLORS.text, marginBottom: 7, letterSpacing: "0.04em",
                }}>{product.name}</h3>
                <p style={{ fontSize: 14, color: COLORS.textLight, lineHeight: 1.7, margin: 0 }}>{product.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
