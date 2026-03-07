import COLORS, { ACTIVE_THEME } from '../constants/colors';
import { MapPin, Phone, Mail, Facebook, Instagram } from '../icons';
import SectionHeader from '../components/ui/SectionHeader';
import { CONTACT_INFO, SOCIAL_LINKS, MAPS_EMBED_URL } from '../data/contact';

const iconColor  = ACTIVE_THEME === "mystic" ? COLORS.gold  : COLORS.accent;
const iconBorder = ACTIVE_THEME === "mystic" ? COLORS.goldBorder : COLORS.accentBorder;
const iconBg     = ACTIVE_THEME === "mystic" ? COLORS.goldLight  : COLORS.accentLight;

const CONTACT_ICONS = {
  address: <MapPin size={20} color={iconColor} />,
  phone:   <Phone  size={20} color={iconColor} />,
  email:   <Mail   size={20} color={iconColor} />,
};
const SOCIAL_ICONS = {
  Facebook:  <Facebook  size={18} />,
  Instagram: <Instagram size={18} />,
};

export default function ContactSection() {
  return (
    <section id="contact" style={{
      padding: "100px 32px 80px",
      background: COLORS.pageBg,
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader eyebrow="Get In Touch" title="Contact Us" />
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40 }}>
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 26, fontWeight: 700,
              color: COLORS.text, marginBottom: 32,
            }}>We'd love to hear from you</h3>

            {CONTACT_INFO.map((item) => (
              <div key={item.key} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 28 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: iconBg, border: `1px solid ${iconBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {CONTACT_ICONS[item.key]}
                </div>
                <div>
                  <div style={{
                    fontSize: 11, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: COLORS.textLight,
                    fontWeight: 700, marginBottom: 3,
                  }}>{item.label}</div>
                  <div style={{ fontSize: 16, color: COLORS.textMid, fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 36 }}>
              <div style={{
                fontSize: 11, letterSpacing: "0.12em",
                textTransform: "uppercase", color: COLORS.textLight,
                fontWeight: 700, marginBottom: 16,
              }}>Follow Us</div>
              <div style={{ display: "flex", gap: 12 }}>
                {SOCIAL_LINKS.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                    title={`@tarangmusicals on ${social.name}`}
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: iconBg, border: `1px solid ${iconBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: iconColor, textDecoration: "none", transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = iconColor; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = iconBg; e.currentTarget.style.color = iconColor; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    {SOCIAL_ICONS[social.name]}
                  </a>
                ))}
              </div>
              <div style={{ fontSize: 13, color: COLORS.textLight, marginTop: 10 }}>@tarangmusicals</div>
            </div>
          </div>

          <div style={{
            borderRadius: 20, overflow: "hidden",
            border: `1px solid ${COLORS.cardBorder}`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)", minHeight: 380,
          }}>
            <iframe src={MAPS_EMBED_URL} width="100%" height="100%"
              style={{ border: 0, minHeight: 380, display: "block" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tarang Musicals Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
