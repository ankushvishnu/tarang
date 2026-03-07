import { useState } from 'react';
import COLORS, { ACTIVE_THEME } from '../constants/colors';
import { Music, Phone, Search } from '../icons';

const NAV_ITEMS = ["About", "Products", "Services", "Contact"];

function StarRating({ rating = 4.8, count = 120 }) {
  const full = Math.floor(rating);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <div style={{ display: "flex", gap: 1 }}>
        {[1,2,3,4,5].map(i => (
          <svg key={i} width="11" height="11" viewBox="0 0 24 24"
            fill={i <= full ? "#FBBC04" : "none"}
            stroke="#FBBC04" strokeWidth="2">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
        ))}
      </div>
      <span style={{ fontSize: 12, color: COLORS.textInverse, fontWeight: 700 }}>{rating}</span>
      <span style={{ fontSize: 11, color: COLORS.textMuted }}>({count} reviews)</span>
      <span style={{ fontSize: 10, color: COLORS.textMuted, marginLeft: 1 }}>· Google</span>
    </div>
  );
}

// Pick gold accent for mystic theme icons/borders, else standard accent
const iconColor  = ACTIVE_THEME === "mystic" ? COLORS.gold  : COLORS.accent;
const iconBorder = ACTIVE_THEME === "mystic" ? COLORS.goldBorder : COLORS.accentBorder;
const iconBg     = ACTIVE_THEME === "mystic" ? COLORS.goldLight  : COLORS.accentLight;

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal,  setSearchVal]  = useState("");

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 200, animation: "fadeInDown 0.6s ease both" }}>

      {/* ── Top bar ─────────────────────────────────────── */}
      <div style={{
        background: COLORS.headerTop,
        padding: "0 32px",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
        gap: 8,
      }}>

        {/* Left: phone + tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="tel:+918459989912" style={{
            display: "flex", alignItems: "center", gap: 7,
            textDecoration: "none",
            color: COLORS.textInverse,
            fontSize: 12,
            letterSpacing: "0.04em",
            transition: "color 0.2s",
            whiteSpace: "nowrap",
          }}
            onMouseEnter={e => e.currentTarget.style.color = iconColor}
            onMouseLeave={e => e.currentTarget.style.color = COLORS.textInverse}
          >
            <Phone size={12} color={iconColor} />
            +91 84599 89912
          </a>

          {/* Divider */}
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 14 }}>|</span>
        </div>

        {/* Right: Google reviews */}
        <StarRating rating={4.8} count={120} />
      </div>

      {/* ── Main navbar ─────────────────────────────────── */}
      <nav style={{
        background: COLORS.headerBg,
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${ACTIVE_THEME === "mystic" ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.08)"}`,
        padding: "0 32px",
        height: 62,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>

        {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36,
              borderRadius: "50%",
              background: ACTIVE_THEME === "mystic"
                ? `linear-gradient(135deg, ${COLORS.gold}, #c9a227)`
                : `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentHover})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: `0 4px 14px ${iconBg}`,
            }}>
              <Music size={17} color={COLORS.headerBg} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 20,
                color: COLORS.textInverse,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}>
                Tarang Musicals
              </span>
              <span style={{
                fontSize: 10,
                color: COLORS.textMuted,
                letterSpacing: "0.04em",
                fontFamily: "'Lora', Georgia, serif",
                fontStyle: "italic",
                lineHeight: 1,
              }}>
                Your one-stop destination for all types of musical instruments in Pune
              </span>
            </div>
          </div>

        {/* Nav links */}
        <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link"
              onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()); }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          {searchOpen ? (
            <div style={{
              display: "flex", alignItems: "center",
              background: COLORS.searchBg,
              border: `1px solid ${iconBorder}`,
              borderRadius: 24,
              padding: "4px 14px",
              gap: 8,
            }}>
              <Search size={14} color={iconColor} />
              <input
                autoFocus
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                onBlur={() => { if (!searchVal) setSearchOpen(false); }}
                placeholder="Search instruments..."
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: COLORS.textInverse,
                  fontSize: 13,
                  width: 180,
                }}
              />
              <button onClick={() => { setSearchOpen(false); setSearchVal(""); }}
                style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.textMuted, fontSize: 18, lineHeight: 1 }}>
                ×
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                background: COLORS.searchBg,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 24,
                padding: "7px 14px",
                display: "flex", alignItems: "center", gap: 7,
                cursor: "pointer",
                color: COLORS.textMuted,
                fontSize: 12,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = iconBorder; e.currentTarget.style.color = iconColor; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = COLORS.textMuted; }}
            >
              <Search size={13} />
              Search
            </button>
          )}
        </div>

      </nav>
    </header>
  );
}
