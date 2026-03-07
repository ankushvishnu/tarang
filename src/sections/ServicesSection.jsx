import COLORS, { ACTIVE_THEME } from '../constants/colors';
import { Clock, Wrench, BookOpen, Package } from '../icons';
import SectionHeader from '../components/ui/SectionHeader';
import SERVICES from '../data/services';

const iconColor  = ACTIVE_THEME === "mystic" ? COLORS.gold  : COLORS.accent;
const iconBorder = ACTIVE_THEME === "mystic" ? COLORS.goldBorder : COLORS.accentBorder;
const iconBg     = ACTIVE_THEME === "mystic" ? COLORS.goldLight  : COLORS.accentLight;

const SERVICE_ICONS = {
  clock:    <Clock    size={26} />,
  wrench:   <Wrench   size={26} />,
  bookopen: <BookOpen size={26} />,
  package:  <Package  size={26} />,
};

export default function ServicesSection() {
  return (
    <section id="services" style={{
      padding: "100px 32px",
      background: COLORS.sectionAlt,
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader eyebrow="What We Offer" title="Our Services" />
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {SERVICES.map((service) => (
            <div key={service.name} className="card-hover" style={{
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "0 8px 28px rgba(0,0,0,0.05)",
              display: "flex", gap: 24, alignItems: "flex-start",
            }}>
              <div style={{
                width: 56, height: 56,
                borderRadius: 16,
                background: iconBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                border: `1px solid ${iconBorder}`,
                color: iconColor,
              }}>
                {SERVICE_ICONS[service.iconKey]}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 21, fontWeight: 700,
                  color: COLORS.text, marginBottom: 10,
                }}>{service.name}</h3>
                <p style={{
                  fontSize: 15, color: COLORS.textLight,
                  lineHeight: 1.75, margin: 0,
                  fontFamily: "'Lora', Georgia, serif",
                }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
