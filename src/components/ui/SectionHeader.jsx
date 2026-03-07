import COLORS, { ACTIVE_THEME } from '../../constants/colors';

const accentColor = ACTIVE_THEME === "mystic" ? COLORS.gold : COLORS.accent;
const accentHover = ACTIVE_THEME === "mystic" ? "#c9a227" : COLORS.accentHover;

export default function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 64 }}>
      <p style={{
        fontSize: 11, letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: accentColor,
        fontWeight: 700, marginBottom: 12,
      }}>
        {eyebrow}
      </p>
      <h2 className="section-title" style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 52, fontWeight: 300,
        color: COLORS.text, margin: 0,
        letterSpacing: "0.1em", textTransform: "uppercase",
      }}>
        {title}
      </h2>
      <div style={{
        width: 55, height: 3,
        background: `linear-gradient(90deg, ${accentColor}, ${accentHover})`,
        borderRadius: 2, margin: "18px auto 0",
      }} />
    </div>
  );
}
