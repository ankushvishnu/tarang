import COLORS from '../../constants/colors';

// Reusable section heading used by every section.
// Usage: <SectionHeader eyebrow="Our Story" title="Who We Are" />

export default function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 64 }}>
      <p style={{
        fontSize: 12,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: COLORS.lavenderMid,
        fontWeight: 600,
        marginBottom: 12,
      }}>
        {eyebrow}
      </p>
      <h2
        className="section-title"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 56,
          fontWeight: 300,
          color: COLORS.dark,
          margin: 0,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      <div style={{
        width: 60,
        height: 3,
        background: `linear-gradient(90deg, ${COLORS.lavenderMid}, ${COLORS.lavenderMuted})`,
        borderRadius: 2,
        margin: "20px auto 0",
      }} />
    </div>
  );
}
