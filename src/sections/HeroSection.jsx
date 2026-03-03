import COLORS from '../constants/colors';
import { Sparkles } from '../icons';

export default function HeroSection() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "80px 32px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Decorative orb */}
      <div style={{
        position: "absolute",
        top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(174,156,238,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ animation: "fadeInUp 0.9s ease both", animationDelay: "0.1s", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(174,156,238,0.18)",
          border: "1px solid rgba(174,156,238,0.4)",
          borderRadius: 50,
          padding: "6px 18px",
          marginBottom: 28,
          fontSize: 12, fontWeight: 600,
          letterSpacing: "0.12em",
          color: COLORS.textMid,
          textTransform: "uppercase",
        }}>
          <Sparkles size={12} color={COLORS.lavenderMid} />
          Premium Musical Instruments · Pune
        </div>

        {/* Title */}
        <h1
          className="hero-title"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 96, fontWeight: 300,
            color: COLORS.dark,
            lineHeight: 1.0,
            margin: "0 0 20px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Tarang{" "}
          <span style={{
            background: `linear-gradient(135deg, ${COLORS.lavenderMid}, ${COLORS.lavenderMuted}, #7c5cbf)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Musicals
          </span>
        </h1>

        {/* Divider */}
        <div style={{
          width: 80, height: 3,
          background: `linear-gradient(90deg, ${COLORS.lavenderMid}, ${COLORS.lavenderMuted})`,
          borderRadius: 2,
          margin: "0 auto 28px",
        }} />

        <p style={{
          fontSize: 20,
          color: COLORS.textLight,
          maxWidth: 560,
          margin: "0 auto 44px",
          lineHeight: 1.7,
          fontFamily: "'Lora', Georgia, serif",
          fontStyle: "italic",
        }}>
          Your one-stop destination for all types of musical instruments in Pune
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Contact Us
          </button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Visit Store
          </button>
        </div>

      </div>
    </section>
  );
}
