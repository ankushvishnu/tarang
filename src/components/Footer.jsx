import COLORS, { ACTIVE_THEME } from '../constants/colors';
import { Music } from '../icons';

const accentColor = ACTIVE_THEME === "mystic" ? COLORS.gold : COLORS.accent;

export default function Footer() {
  return (
    <footer style={{ background: COLORS.footerBg, padding: "40px 32px", textAlign: "center", position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
        <Music size={16} color={accentColor} />
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: COLORS.textInverse, fontSize: 16, fontWeight: 600, letterSpacing: "0.1em" }}>
          Tarang Musicals
        </span>
      </div>
      <p style={{ color: COLORS.textMuted, fontSize: 13, margin: 0 }}>
        © {new Date().getFullYear()} Tarang Musicals · Magarpatta, Hadapsar, Pune, India
      </p>
    </footer>
  );
}
