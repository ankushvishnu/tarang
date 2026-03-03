import COLORS from '../constants/colors';
import { Clock, Wrench, BookOpen, Package } from '../icons';
import SectionHeader from '../components/ui/SectionHeader';
import SERVICES from '../data/services';

// Maps the iconKey strings in services.js to actual icon components
const SERVICE_ICONS = {
  clock:    <Clock    size={26} />,
  wrench:   <Wrench   size={26} />,
  bookopen: <BookOpen size={26} />,
  package:  <Package  size={26} />,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 32px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <SectionHeader eyebrow="What We Offer" title="Our Services" />

      <div
        className="services-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
      >
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="card-hover"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(174,156,238,0.3)",
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "0 8px 28px rgba(174,156,238,0.1)",
              display: "flex",
              gap: 24,
              alignItems: "flex-start",
            }}
          >
            <div style={{
              width: 56, height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(174,156,238,0.2), rgba(209,200,243,0.3))",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              border: "1px solid rgba(174,156,238,0.25)",
              color: COLORS.lavenderMid,
            }}>
              {SERVICE_ICONS[service.iconKey]}
            </div>

            <div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 21, fontWeight: 700,
                color: COLORS.dark,
                marginBottom: 10,
              }}>
                {service.name}
              </h3>
              <p style={{
                fontSize: 15,
                color: COLORS.textLight,
                lineHeight: 1.75,
                margin: 0,
                fontFamily: "'Lora', Georgia, serif",
              }}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
