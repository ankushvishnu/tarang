import COLORS from '../constants/colors';
import { Music } from '../icons';

export default function Footer() {
  return (
    <footer style={{
      background: "rgba(116, 0, 99, 0.85)",
      padding: "40px 32px",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
        <Music size={16} color={COLORS.lavenderMid} />
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "rgba(255,255,255,0.9)",
          fontSize: 16,
          fontWeight: 600,
        }}>
          Tarang Musicals
        </span>
      </div>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 8px" }}>
        © {new Date().getFullYear()} Tarang Musicals · Magarpatta, Hadapsar, Pune, India
      </p>
      <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, margin: 0 }}>
      </p>
    </footer>
  );
}
