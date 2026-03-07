import COLORS, { ACTIVE_THEME } from '../constants/colors';
import { Star } from '../icons';
import SectionHeader from '../components/ui/SectionHeader';
import { ABOUT_DESCRIPTION, MISSION_BULLETS } from '../data/about';

const iconColor  = ACTIVE_THEME === "mystic" ? COLORS.gold  : COLORS.accent;
const iconBorder = ACTIVE_THEME === "mystic" ? COLORS.goldBorder : COLORS.accentBorder;
const iconBg     = ACTIVE_THEME === "mystic" ? COLORS.goldLight  : COLORS.accentLight;

export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: "100px 32px",
      maxWidth: 1100,
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    }}>
      <SectionHeader eyebrow="Our Story" title="Who We Are" />

      <div style={{ maxWidth: 720, margin: "0 auto 60px", textAlign: "center" }}>
        <p style={{
          fontSize: 18,
          color: COLORS.textMid,
          lineHeight: 1.85,
          fontFamily: "'Lora', Georgia, serif",
        }}>
          {ABOUT_DESCRIPTION}
        </p>
      </div>

      <div className="about-cards" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 28, maxWidth: 560, margin: "0 auto" }}>
        <div className="card-hover" style={{
          background: COLORS.cardBg,
          border: `1px solid ${COLORS.cardBorder}`,
          borderRadius: 20,
          padding: "40px 36px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
        }}>
          <div style={{
            width: 56, height: 56,
            borderRadius: 16,
            background: iconBg,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20,
            border: `1px solid ${iconBorder}`,
          }}>
            <Star size={28} color={iconColor} />
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24, fontWeight: 700,
            color: COLORS.text,
            marginBottom: 14,
          }}>Our Mission</h3>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {MISSION_BULLETS.map((point, i) => (
              <li key={i} style={{
                fontSize: 15, color: COLORS.textLight,
                lineHeight: 1.8, marginBottom: 8,
                fontFamily: "'Lora', Georgia, serif",
              }}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
