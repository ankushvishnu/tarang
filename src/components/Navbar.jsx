import COLORS from '../constants/colors';
import { Music } from '../icons';

const NAV_ITEMS = ["About", "Products", "Services", "Contact"];

export default function Navbar() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(116, 0, 99, 0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(174, 156, 238, 0.25)",
      padding: "0 32px",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      animation: "fadeInDown 0.6s ease both",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 38, height: 38,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${COLORS.lavenderMid}, ${COLORS.lavenderMuted})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 12px rgba(174,156,238,0.4)",
        }}>
          <Music size={18} color="white" />
        </div>
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: 22,
          color: "#ffffff",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>
          Tarang Musicals
        </span>
      </div>

      {/* Links */}
      <div className="nav-links" style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.toLowerCase());
            }}
          >
            {item}
          </a>
        ))}
      </div>

    </nav>
  );
}
