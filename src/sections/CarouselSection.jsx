import { useEffect } from 'react';
import COLORS, { ACTIVE_THEME } from '../constants/colors';
import { Instagram2 } from '../icons';

const accentColor  = ACTIVE_THEME === "mystic" ? COLORS.gold      : COLORS.accent;
const accentBorder = ACTIVE_THEME === "mystic" ? COLORS.goldBorder : COLORS.accentBorder;

const REEL_PERMALINKS = [
  "https://www.instagram.com/reel/DUnJ20GDCNc/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DUki33ijObB/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DUusCs8jH21/?utm_source=ig_embed&utm_campaign=loading",
  "https://www.instagram.com/reel/DUiCEzHjGZB/?utm_source=ig_embed&utm_campaign=loading",
];

export default function CarouselSection() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="media" style={{
      padding: "80px 32px",
      background: COLORS.sectionAlt,
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: accentColor, fontWeight: 700, marginBottom: 10 }}>
          
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 42, fontWeight: 300,
          color: COLORS.text, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12,
        }}>
          Featured Content
        </h2>
        <div style={{ width: 50, height: 3, background: `linear-gradient(90deg, ${accentColor}, ${ACTIVE_THEME === "mystic" ? "#c9a227" : COLORS.accentHover})`, borderRadius: 2, margin: "0 auto 20px" }} />
        <p style={{ fontSize: 15, color: COLORS.textLight, fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}>
          Latest reels from @tarang_musicals
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        maxWidth: 960,
        margin: "0 auto",
        justifyContent: "center",
      }}
        className="carousel-grid"
      >
        {REEL_PERMALINKS.map((permalink, i) => (
          <div key={i} style={{
            borderRadius: 16,
            overflow: "hidden",
            border: `1px solid ${accentBorder}`,
            boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
            background: "#fff",
            display: "flex",
            alignItems: "stretch",
          }}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={permalink}
              data-instgrm-version="14"
              style={{ margin: 0, width: "100%", minWidth: "unset", boxShadow: "none", border: 0, borderRadius: 0 }}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 36 }}>
        <a
          href="https://www.instagram.com/tarang_musicals"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, color: accentColor, textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 2 }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          <Instagram2 size={14} color={accentColor} />
          Follow @tarang_musicals for updates
        </a>
      </div>
    </section>
  );
}